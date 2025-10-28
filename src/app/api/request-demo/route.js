import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body || {};

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
        }
      );
    }

    // Detect Gmail and auto-adjust settings if needed
    const isGmail =
      process.env.SMTP_HOST?.includes('gmail.com') ||
      process.env.SMTP_USER?.endsWith('@gmail.com');

    // Use Gmail-friendly defaults if applicable
    const transporter = nodemailer.createTransport({
      host: isGmail ? 'smtp.gmail.com' : process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || (isGmail ? 465 : 587)),
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === 'true'
        : isGmail, // Gmail requires SSL (port 465)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: isGmail
        ? {
            rejectUnauthorized: false,
          }
        : undefined,
    });

    const mailOptions = {
      from: `"Cloud Explorer" <${process.env.SMTP_USER}>`,
      to: process.env.PRODUCT_MANAGER_EMAIL || process.env.SMTP_USER,
      subject: `New Demo Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Message:
${message}
      `,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('❌ request-demo error:', err);

    // Provide Gmail-specific guidance if auth or connection fails
    if (err.message?.includes('Invalid login') || err.code === 'EAUTH') {
      console.error(`
⚠️ Gmail authentication failed.
If you're using a Gmail account, make sure to:
  1. Enable 2-Step Verification in your Google account.
  2. Create an "App Password" for this project:
     https://myaccount.google.com/apppasswords
  3. Use that 16-character app password as SMTP_PASS.
`);
    }

    if (err.code === 'ECONNECTION' || err.code === 'ETIMEDOUT') {
      console.error(`
⚠️ Connection to SMTP server failed.
If using Gmail, make sure less-secure app access is OFF,
and that you're using the correct port:
  - 465 (secure, recommended)
  - 587 (non-secure STARTTLS)
`);
    }

    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}
