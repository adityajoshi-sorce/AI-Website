import React, { useState } from "react";
import axios from "axios";
import CommitmentSection from "../components/CommitmentSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-white text-black">
      {/* Hero/Header */}
      <div className="bg-[#e7eaf3] py-26 text-center">
        <h1 className="text-4xl font-bold text-black">Contact Us</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 p-6 md:p-20">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-gray-600">
            We have grown up with the internet revolution, and we know how to
            deliver on it.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="font-semibold">Contact Us</p>
              <p>(124) 555-6565</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="font-semibold">Send Us a Mail</p>
              <p>admin@techxen.org</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="font-semibold">Office Location</p>
              <p>
                73 Bridge St Brooklyn Arakansas
                <br />
                85032 United States, NY 10018
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                Submit →
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold text-green-600">
                Form Submitted Successfully
              </h3>
              <p className="mt-2">
                Thank you, {formData.firstname}! We will get back to you soon.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Commitment Section */}
      <CommitmentSection />
    </div>
  );
};

export default Contact;
