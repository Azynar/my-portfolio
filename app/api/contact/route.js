import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot check: if filled by a spam bot, quietly return success
    if (honeypot) {
      return Response.json({ success: true, message: 'Message recorded' }, { status: 200 });
    }

    const cleanName = sanitizeText(name);
    const cleanEmail = sanitizeText(email);
    const cleanMessage = sanitizeText(message);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(cleanEmail)) {
      return Response.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not set. Simulating email send for dev environment.');
      return Response.json({ success: true, simulated: true }, { status: 200 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Azynar Portfolio <onboarding@resend.dev>',
      to: 'azynar35@gmail.com',
      replyTo: cleanEmail,
      subject: `[Portfolio Inquiry] from ${cleanName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 8px;">
          <h2 style="color: #1b5fe0; margin-top: 0;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #1b5fe0; margin: 15px 0;">
            ${cleanMessage.replace(/\n/g, '<br />')}
          </div>
          <p style="color: #777; font-size: 12px; margin-top: 25px;">
            Reply to this email directly to communicate with ${cleanName}.
          </p>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true, data }, { status: 200 });
  } catch (err) {
    return Response.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}