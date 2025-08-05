import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (email, subject, text) => {
  console.log("📧 Preparing to send email...");

  try {
    // Check if environment variables are loaded
    console.log("🔐 EMAIL_USER:", process.env.EMAIL_USER);
    console.log(
      "🔐 EMAIL_PASS:",
      process.env.EMAIL_PASS ? "Loaded ✅" : "Not Loaded ❌"
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Your App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      text,
    });

    console.log(`✅ Email sent to ${email}`);
    console.log("📨 Message ID:", info.messageId);
  } catch (error) {
    console.error(`❌ Error sending email:`, error);
  }
};
