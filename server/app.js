import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // for parsing JSON

app.use("/api/register", registerRoutes); // connect route
app.use("/api/contact", contactRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.CONTACT_FORM_URI)

  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
