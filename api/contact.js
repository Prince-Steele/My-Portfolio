const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_API_URL = 'https://api.resend.com/emails';

function jsonResponse(body, status = 200) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' }
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizePayload(payload) {
  return {
    name: payload.name?.trim() ?? '',
    email: payload.email?.trim() ?? '',
    subject: payload.subject?.trim() ?? '',
    message: payload.message?.trim() ?? ''
  };
}

function GET() {
  return jsonResponse({ message: 'Use POST to submit the contact form.' }, 405);
}

async function POST(request) {
  const apiKey = process.env['RESEND_API_KEY'];
  const fromEmail = process.env['CONTACT_FROM_EMAIL'];
  const toEmail = process.env['CONTACT_TO_EMAIL'] ?? 'princesteele23@gmail.com';

  if (!apiKey || !fromEmail) {
    return jsonResponse({ message: 'The email service is not configured yet.' }, 500);
  }

  let rawPayload;
  try {
    rawPayload = await request.json();
  } catch {
    return jsonResponse({ message: 'Invalid request body.' }, 400);
  }

  const { name, email, subject, message } = normalizePayload(rawPayload);

  if (!name || !email || !message) {
    return jsonResponse({ message: 'Name, email, and message are required.' }, 400);
  }

  if (!EMAIL_REGEX.test(email)) {
    return jsonResponse({ message: 'Please enter a valid email address.' }, 400);
  }

  if (name.length > 120 || subject.length > 160 || message.length > 5000) {
    return jsonResponse({ message: 'One or more fields are too long.' }, 400);
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject || 'Portfolio inquiry');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  let resendResponse;
  try {
    resendResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'prince-portfolio-contact/1.0'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Portfolio Contact: ${subject || `Message from ${name}`}`,
        reply_to: email,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
            <h2 style="margin-bottom: 16px;">New portfolio message</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <p><strong>Message:</strong><br />${safeMessage}</p>
          </div>
        `,
        text: ['New portfolio message', `Name: ${name}`, `Email: ${email}`, `Subject: ${subject || 'Portfolio inquiry'}`, '', message].join('\n')
      })
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unexpected email service error.';
    return jsonResponse({ message: `Unable to reach Resend: ${errorMessage}` }, 502);
  }

  if (!resendResponse.ok) {
    const resendError = await resendResponse.json().catch(() => null);
    const resendMessage = typeof resendError?.message === 'string'
      ? resendError.message
      : 'Unable to send your message right now.';
    return jsonResponse({ message: resendMessage, error: resendError }, 502);
  }

  return jsonResponse({ message: 'Message sent successfully.' });
}

module.exports = { GET, POST };