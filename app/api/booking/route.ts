import { NextRequest, NextResponse } from 'next/server';

const CRM_URL = process.env.MAIN_APP_URL || 'https://www.alignandacquire.com';
const CRM_BUSINESS_SLUG = process.env.MAIN_APP_BUSINESS_SLUG || 'aesthetic-gardener';

type BookingPayload = {
  businessSlug: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  time: string;
  smsConsent?: boolean;
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
    const { name, email, phone, service, message, date, time, smsConsent } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !date || !time) {
      return NextResponse.json(
        { error: 'Name, email, phone, date, and time are required' },
        { status: 400 }
      );
    }

    // Persist to the CRM first — creates Contact + WebsiteLead and
    // notifies the owner by SMS + email through the dashboard.
    const bookingSummary = [
      'BOOKING REQUEST',
      `Requested date: ${date} at ${time}`,
      `Service: ${service || 'Not specified'}`,
      message ? `Details: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    let crmSaved = false;
    try {
      const crmRes = await fetch(`${CRM_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessSlug: CRM_BUSINESS_SLUG,
          name,
          phone,
          email,
          smsConsent: smsConsent === true,
          message: bookingSummary,
        }),
      });
      crmSaved = crmRes.ok;
      if (!crmRes.ok) {
        console.error('[Booking API] CRM forward failed:', crmRes.status, await crmRes.text());
      }
    } catch (err) {
      console.error('[Booking API] CRM forward exception:', err);
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;
    let emailSent = false;

    if (!resendKey || !contactEmail) {
      console.error('[Booking API] Email NOT sent: RESEND_API_KEY or CONTACT_EMAIL is not set');
    } else {
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

        emailSent = emailRes.ok;
        if (!emailRes.ok) {
          const errData = await emailRes.text();
          console.error('[Booking API] Resend error:', emailRes.status, errData);
        }
      } catch (err) {
        console.error('[Booking API] Resend exception:', err);
      }
    }

    // Fail loudly only if the booking reached nobody.
    if (!crmSaved && !emailSent) {
      return NextResponse.json(
        { error: 'Unable to send your booking request. Please call us directly.' },
        { status: 500 }
      );
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
