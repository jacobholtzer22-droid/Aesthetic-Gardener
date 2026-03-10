import { NextRequest, NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function formatPhoneE164(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 ? `+1${digits}` : `+${digits}`;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;
    const telnyxKey = process.env.TELNYX_API_KEY;
    const telnyxFrom = process.env.TELNYX_PHONE_NUMBER;
    const ownerPhone = process.env.OWNER_PHONE_NUMBER;

    const errors: string[] = [];

    // 1. Send email via Resend
    if (resendKey && contactEmail) {
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: 'Aesthetic Gardener <notifications@alignandacquire.com>',
            to: contactEmail,
            subject: `New Lead from Website: ${name}`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 24px;">
  <div style="background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%); color: white; padding: 24px; border-radius: 12px 12px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">New Website Lead</h1>
    <p style="margin: 8px 0 0 0; opacity: 0.9;">Aesthetic Gardener</p>
  </div>
  <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; font-weight: 600; width: 140px;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600;">Service</td><td style="padding: 8px 0;">${escapeHtml(service || 'Not specified')}</td></tr>
    </table>
    <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
      <div style="font-weight: 600; margin-bottom: 8px;">Message</div>
      <div style="white-space: pre-wrap;">${escapeHtml(message || 'No message provided')}</div>
    </div>
  </div>
</body>
</html>
            `.trim(),
          }),
        });

        if (!emailRes.ok) {
          const errData = await emailRes.text();
          console.error('[Contact API] Resend error:', emailRes.status, errData);
          errors.push('Email delivery failed');
        }
      } catch (err) {
        console.error('[Contact API] Resend exception:', err);
        errors.push('Email delivery failed');
      }
    } else {
      console.warn('[Contact API] Resend skipped: missing RESEND_API_KEY or CONTACT_EMAIL');
    }

    // 2. Send SMS via Telnyx
    if (telnyxKey && telnyxFrom && ownerPhone) {
      try {
        const smsText = `New website lead! ${name} - ${phone} - interested in ${service || 'general inquiry'}. Check email for details.`;
        const telnyxRes = await fetch('https://api.telnyx.com/v2/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${telnyxKey}`,
          },
          body: JSON.stringify({
            from: formatPhoneE164(telnyxFrom),
            to: formatPhoneE164(ownerPhone),
            text: smsText,
          }),
        });

        if (!telnyxRes.ok) {
          const errData = await telnyxRes.text();
          console.error('[Contact API] Telnyx error:', telnyxRes.status, errData);
          errors.push('SMS delivery failed');
        }
      } catch (err) {
        console.error('[Contact API] Telnyx exception:', err);
        errors.push('SMS delivery failed');
      }
    } else {
      console.warn('[Contact API] Telnyx skipped: missing TELNYX_API_KEY, TELNYX_PHONE_NUMBER, or OWNER_PHONE_NUMBER');
    }

    // If both failed (and both were attempted), return 500
    const attemptedBoth = resendKey && contactEmail && telnyxKey && telnyxFrom && ownerPhone;
    if (attemptedBoth && errors.length >= 2) {
      return NextResponse.json(
        { error: 'Unable to send notification. Please try calling directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
