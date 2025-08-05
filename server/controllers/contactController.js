import Contact from "../models/contactModel.js";

export const saveContactForm = async (req, res) => {
  try {
    console.log("Received form data:", req.body); // ✅ Log input

    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(400).json({ error: "Failed to submit form" });
  }
};
