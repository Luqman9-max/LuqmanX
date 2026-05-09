import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, honeypot } = await request.json();

    if (honeypot) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: sans-serif; background-color: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #262626;">
        <h1 style="color: #f97316; font-size: 24px; font-weight: bold; margin-bottom: 24px; border-bottom: 1px solid #262626; padding-bottom: 16px;">
          New Message from LuqmanX
        </h1>
        <div style="margin-bottom: 20px;">
          <p style="color: #a3a3a3; font-size: 12px; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em;">From</p>
          <p style="font-size: 16px; font-weight: 500;">${name} (${email})</p>
        </div>
        <div style="margin-bottom: 20px;">
          <p style="color: #a3a3a3; font-size: 12px; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em;">Subject</p>
          <p style="font-size: 16px; font-weight: 500;">${subject}</p>
        </div>
        <div style="background-color: #171717; padding: 24px; border-radius: 8px; border: 1px solid #262626; line-height: 1.6;">
          <p style="color: #a3a3a3; font-size: 12px; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message Content</p>
          <div style="font-size: 15px; color: #e5e5e5; white-space: pre-wrap;">${message}</div>
        </div>
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #262626; text-align: center; font-size: 11px; color: #525252;">
          <p>© ${new Date().getFullYear()} LuqmanX Personal Portfolio</p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'LuqmanX Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'raphaelsylvester39@gmail.com'],
      subject: `[LuqmanX] ${subject}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
