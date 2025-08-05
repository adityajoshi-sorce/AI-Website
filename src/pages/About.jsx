import React from "react";
import TestimonialSection from "../components/TestimonialSection";
import TeamSection from "../components/TeamSection";
import CommitmentSection from "../components/CommitmentSection";

const sections = [
  {
    id: 1,
    title: "Pioneers in Artificial Intelligence Innovation",
    subtitle: "Who We Are",
    text: "At Hiddeneye, we're on a mission to make Artificial Intelligence accessible, ethical, and impactful. Our team of visionary engineers, researchers, and strategists has built AI solutions that help businesses thrive in an ever-evolving digital landscape. From startups to Fortune 500s, we’ve empowered organizations to transform data into intelligent action.",
    img: "https://www.shutterstock.com/image-illustration/ai-medicine-healthcare-medical-diagnosis-600nw-2559938897.jpg",
    reverse: false,
  },
  {
    id: 2,
    title: "Our Vision for a Smarter Tomorrow",
    subtitle: "What Drives Us",
    text: "We believe AI isn’t just a technology — it’s a tool to unlock human potential. Our vision is to create AI that collaborates with people, not replaces them. Whether it’s enhancing decision-making, automating workflows, or predicting trends, our focus is on building responsible AI that brings long-term value to society and the planet.",
    img: "https://www.shutterstock.com/image-photo/futuristic-ai-chatbot-concept-year-600nw-2550616419.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "From Startup Dream to Global Impact",
    subtitle: "Our Journey",
    text: "Founded in 2025, we began as a small team passionate about the possibilities of machine learning. Today, we serve clients across the globe, continuously evolving with cutting-edge innovations in Natural Language Processing, Computer Vision, and Deep Learning. Our journey is driven by a commitment to learning, adapting, and pushing the boundaries of what's possible with AI.",
    img: "https://cdn.prod.website-files.com/66e3ffddf1c6e55cc8c157f6/670e5e92ce2d9772473f1cff_655b5f1b09f2238e3ed1f873_10-best-ai-startup-ideas.png",
    reverse: false,
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white text-black">
      {/* Page Header */}
      <div className="bg-[#e7eaf3] py-26 text-center">
        <h1 className="text-4xl font-bold text-black">About Us</h1>
      </div>

      {/* Sections */}
      {sections.map(({ id, title, subtitle, text, img, reverse }) => (
        <div
          key={id}
          className={`flex flex-col-reverse md:flex-row ${
            reverse ? "md:flex-row-reverse" : ""
          } items-center px-4 md:px-20 py-10 gap-10`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img}
              alt={title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <p className="text-sm text-gray-500 uppercase mb-2">{subtitle}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{text}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>
      ))}

      {/* Testimonial Section */}
      <TestimonialSection />
      {/* Team Section */}
      <TeamSection />
      {/*Commitment Section */}
      <CommitmentSection />
    </div>
  );
};

export default AboutUs;
