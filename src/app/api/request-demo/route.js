import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body || {};

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Compose email
    const subject = `New Demo Request from ${name}`;
    const html = `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || '(none provided)'}</p>
      <p><strong>Message:</strong><br/>${
        message?.replace(/\n/g, '<br/>') || '(no message)'
      }</p>
    `;

    // Send via Resend
    const data = await resend.emails.send({
      from: 'Cloud Explorer <onboarding@resend.dev>', // this is allowed for free tier
      to: process.env.PRODUCT_MANAGER_EMAIL,
      reply_to: email,
      subject,
      html,
    });

    if (data.error) {
      console.error('❌ Resend API error:', data.error);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
      });
    }

    console.log('✅ Email sent:', data.id);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('❌ API Error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}
