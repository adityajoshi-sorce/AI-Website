import { sendRegistrationEmail } from "../utils/mailService.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new Register({ name, email, password });
    await newUser.save();

    // Send confirmation email
    await sendRegistrationEmail(email, name);

    res.status(201).json({ message: "User registered and email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
