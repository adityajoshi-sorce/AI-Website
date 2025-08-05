// src/components/FeaturedSlider.jsx
import React from "react";
import Slider from "react-slick";

const data = [
  {
    title: "AI-Powered Healthcare Diagnosis",
    image:
      "https://www.getstellar.ai/uploads/transforms/featureImage/_1792x896_crop_center-center_94_none/doctor.webp",
  },
  {
    title: "AI in E-Commerce Personalization",
    image:
      "https://thedatascientist.com/wp-content/uploads/2023/11/AI-Ecommerce-1024x576.webp",
  },
  {
    title: "Smart Cities: Traffic Prediction with AI",
    image:
      "https://datenwissen.com/media/images/blog-images/New-Project-2022-08-01T122206.059_1_1.jpg",
  },
  {
    title: "Conversational AI in Customer Service",
    image:
      "https://cdn.prod.website-files.com/656e7fbcd9c0664347996e75/65a9768546b83ecc8fd28ecf_conversational%20AI%20for%20customer%20experience_app0.png",
  },
];

const FeaturedSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50 px-4 md:px-16">
      <div className="text-center mb-8">
        <p className="text-blue-600 font-semibold text-sm uppercase">
          Our Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          AI in Action: Real Success Stories
        </h2>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt="project"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">
                  {item.title}
                </h3>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline"
                >
                  Learn More <span className="ml-1">↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedSlider;
