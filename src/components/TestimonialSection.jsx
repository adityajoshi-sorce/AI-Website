import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Kelly Williamson",
    role: "Client",
    text: "The AI model helped us reduce processing time by 60%! Highly recommended.",
    smallImage: "https://randomuser.me/api/portraits/women/44.jpg",
    bigImage:
      "https://bernardmarr.com/wp-content/uploads/2023/04/The-Evolution-Of-AI_-Transforming-The-World-One-Algorithm-At-A-Time-1.jpg",
  },
  {
    name: "John Matthews",
    role: "Founder, FinTechPro",
    text: "Incredible support and powerful features. We scaled fast thanks to this platform.",
    smallImage: "https://randomuser.me/api/portraits/men/32.jpg",
    bigImage: "https://etimg.etb2bimg.com/photo/114312598.cms",
  },
  {
    name: "Priya Sharma",
    role: "Operations Head, Meditech",
    text: "A reliable and efficient AI solution that met all our needs.",
    smallImage: "https://randomuser.me/api/portraits/women/65.jpg",
    bigImage:
      "https://miro.medium.com/v2/resize:fit:1400/1*2c4xyr__84RZ-LTkICzyjg.png",
  },
  {
    name: "Raj Patel",
    role: "IT Manager, EduNet",
    text: "From deployment to results, the experience was seamless.",
    smallImage: "https://randomuser.me/api/portraits/men/51.jpg",
    bigImage:
      "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/01/23230852/AI-for-Operational-Efficiency.png",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold text-sm uppercase">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
          Discover What Our Clients <br className="hidden md:block" /> Say About
          Us
        </h2>
      </div>

      <div
        className="bg-white rounded-3xl shadow-md p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8 transition-all duration-500"
        style={{ minHeight: "420px" }} // ✅ Keeps section height fixed
      >
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-bold mb-4">
              What Our Clients Are Saying
            </h3>
            <p className="text-gray-600 mb-6">{testimonial.text}</p>
          </div>

          {/* Author info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.smallImage}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
                aria-label="Previous"
              >
                <FaArrowLeft className="text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
                aria-label="Next"
              >
                <FaArrowRight className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <img
            src={testimonial.bigImage}
            alt={testimonial.name}
            className="rounded-xl w-full object-cover max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
