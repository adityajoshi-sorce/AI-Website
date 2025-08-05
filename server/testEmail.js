import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const sendTestEmail = async () => {
  try {
    // Create test email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail ID from .env
        pass: process.env.EMAIL_PASS, // your Gmail App Password from .env
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "test@example.com", // 🔁 Replace with your real test email
      subject: "Test Email from Node.js",
      text: "This is a test email sent using Node.js and Nodemailer!",
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
  }
};

sendTestEmail();
