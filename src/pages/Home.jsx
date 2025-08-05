import React from "react";
import heroImage from "../assets/hero.png";
import FeaturedSlider from "../components/FeaturedSlider";
import PricingSection from "../components/PlansSection";
import TestimonialSection from "../components/TestimonialSection";
import BlogSection from "../components/BlogSection";
import CommitmentSection from "../components/CommitmentSection";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="home-section">
        <div className="home-container">
          <div className="home-text">
            <p className="subheading">Welcome to the Future</p>
            <h1 className="main-heading">
              Empowering Innovation Through Artificial Intelligence
            </h1>
            <p className="description">
              Unlock the potential of AI to revolutionize the way you live,
              work, <br />
              and grow. From automation to insights, we bring intelligent <br />
              solutions tailored for tomorrow.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="home-image">
            <img src={heroImage} alt="IT Solutions" />
          </div>
        </div>
      </div>

      {/* About Us Section - completely separate and below the hero */}
      <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg"
            alt="About Us"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            What is Artificial Intelligence?
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Artificial Intelligence (AI) is the simulation of human intelligence
            in machines that are programmed to think and learn like humans. It
            enables automation, enhances decision-making, and unlocks new levels
            of efficiency.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              Smart Automation: Automate routine tasks with intelligent
              workflows.
            </li>
            <li>
              Data-Driven Insights: Transform raw data into real-time decisions
            </li>
            <li>
              Human-like Intelligence: Enable machines to learn, reason, and
              evolve.
            </li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm md:text-base transition-all duration-300">
            Discover More →
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold">
            Why Choose Our AI Solutions?
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
            Built for Performance. Designed for Impact.
          </h2>
          <br />
          <p>
            Our AI technology is designed to adapt, scale, <br />
            and deliver real value—whether you're a startup or an enterprise.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-blue-600 text-4xl">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Speed & Accuracy</h3>
            <p className="text-gray-600 mb-4">
              Process millions of data points in seconds.
            </p>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline inline-flex items-center"
            >
              Learn More <span className="ml-1">↗</span>
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-blue-600 text-4xl"> 🔒</div>
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-600 mb-4">
              AI solutions with robust data protection.
            </p>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline inline-flex items-center"
            >
              Learn More <span className="ml-1">↗</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-blue-600 text-4xl">🌐</div>
            <h3 className="text-xl font-semibold mb-2">
              Scalable Architecture
            </h3>
            <p className="text-gray-600 mb-4">
              Grow without compromising performance.
            </p>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline inline-flex items-center"
            >
              Learn More <span className="ml-1">↗</span>
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-blue-600 text-4xl">📈</div>
            <h3 className="text-xl font-semibold mb-2"> Real-time Analytics</h3>
            <p className="text-gray-600 mb-4">
              Get insights when it matters most.
            </p>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline inline-flex items-center"
            >
              Learn More <span className="ml-1">↗</span>
            </a>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
            <div className="mb-4 text-blue-600 text-4xl">🤝</div>
            <h3 className="text-xl font-semibold mb-2">
              Human + Machine Collaboration
            </h3>
            <p className="text-gray-600 mb-4">
              Enhance human capabilities with smart AI tools.
            </p>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline inline-flex items-center"
            >
              Learn More <span className="ml-1">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Slider Section*/}
      <FeaturedSlider />
      {/* Pricing Section */}
      <PricingSection />
      {/* Testimonial Section */}
      <TestimonialSection />
      {/*Blog Section*/}
      <BlogSection />
      {/*Commitment Section */}
      <CommitmentSection />
    </>
  );
};

export default Home;
