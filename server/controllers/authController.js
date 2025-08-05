// controllers/authController.js
import User from "../models/User.js";
import { sendRegistrationEmail } from "../utils/mailService.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    await newUser.save();

    // ✅ Send email
    await sendRegistrationEmail(email, name);

    res.status(201).json({ message: "User registered and email sent!" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Server error" });
  }
};
