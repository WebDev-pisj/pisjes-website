import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_RECEIVER_EMAIL = "web.developer@pisjes.edu.sa";
const CONTACT_RECEIVER_LABEL = "Web Developer";

const getTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const adminEmailTemplate = ({
  fullName,
  email,
  phone,
  message,
}) => {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #1c2740; background: #f3f6ff; padding: 24px;">
      <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8ff;">
        <div style="background: linear-gradient(135deg, #4658d8 0%, #5968ea 100%); padding: 24px;">
          <h2 style="margin: 0; color: #ffffff; font-size: 24px;">New Contact Form Submission</h2>
          <p style="margin: 8px 0 0; color: #e6ebff; font-size: 14px;">PISJES Website Contact Desk</p>
        </div>
        <div style="padding: 24px;">
          <p style="margin: 0 0 16px; color: #51607d;">A new message has been submitted from the website contact form.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 700; width: 170px;">Department</td>
              <td style="padding: 10px 0;">${CONTACT_RECEIVER_LABEL}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 700;">Full Name</td>
              <td style="padding: 10px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 700;">Email</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #4658d8; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 700;">Phone</td>
              <td style="padding: 10px 0;">${phone}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; border: 1px solid #e4e9fb; border-radius: 10px; padding: 16px; background: #fafcff;">
            <p style="margin: 0 0 8px; font-weight: 700;">Message</p>
            <p style="margin: 0; color: #3b4965; white-space: pre-line;">${message}</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

export async function POST(request) {
  try {
    const { fullName, email, phone, message } = await request.json();

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.SMTP_FROM
    ) {
      return NextResponse.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    const transporter = getTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New website inquiry for ${CONTACT_RECEIVER_LABEL}`,
      html: adminEmailTemplate({
        fullName,
        email,
        phone,
        message,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again later." },
      { status: 500 }
    );
  }
}
