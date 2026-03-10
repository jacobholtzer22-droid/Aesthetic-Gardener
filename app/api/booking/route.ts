import { NextRequest, NextResponse } from 'next/server';

type BookingPayload = {
  businessSlug: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  time: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingPayload = await request.json();
    const { businessSlug, name, email, phone, service, message, date, time } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !date || !time) {
      return NextResponse.json(
        { error: 'Name, email, phone, date, and time are required' },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey && contactEmail) {
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: 'Aesthetic Gardener Website <onboarding@resend.dev>',
            to: contactEmail,
            subject: `Booking Request: ${name} - ${date} at ${time}`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 24px;">
  <div style="background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%); color: white; padding: 24px; border-radius: 12px 12px 0 0;">
    <h1 style="margin: 0; font-size: 24px;">New Booking Request</h1>
    <p style="margin: 8px 0 0 0; opacity: 0.9;">Aesthetic Gardener</p>
  </div>
  <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; font-weight: 600; width: 140px;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600;">Service</td><td style="padding: 8px 0;">${escapeHtml(service || 'Not specified')}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600;">Date</td><td style="padding: 8px 0;">${escapeHtml(date)}</td></tr>
      <tr><td style="padding: 8px 0; font-weight: 600;">Time</td><td style="padding: 8px 0;">${escapeHtml(time)}</td></tr>
    </table>
    ${message ? `
    <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
      <div style="font-weight: 600; margin-bottom: 8px;">Service Description</div>
      <div style="white-space: pre-wrap;">${escapeHtml(message)}</div>
    </div>
    ` : ''}
  </div>
</body>
</html>
            `.trim(),
          }),
        });

        if (!emailRes.ok) {
          const errData = await emailRes.text();
          console.error('[Booking API] Resend error:', emailRes.status, errData);
          return NextResponse.json(
            { error: 'Unable to send booking request. Please try calling directly.' },
            { status: 500 }
          );
        }
      } catch (err) {
        console.error('[Booking API] Resend exception:', err);
        return NextResponse.json(
          { error: 'Something went wrong. Please try again.' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Booking API] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
