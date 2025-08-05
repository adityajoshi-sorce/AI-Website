import React from "react";

const CommitmentSection = () => {
  return (
    <section className="bg-[#0A35B3] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Discover the Best AI Solutions
            <br /> Tailored for You
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Stay ahead in the digital era with powerful, ethical, and scalable
            AI tools designed
            <br /> to solve real-world problems. Start your journey with us
            today.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-[#0A35B3] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition flex items-center justify-center gap-2">
            Request a Consultation →
          </button>
          <button className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#0A35B3] transition flex items-center justify-center gap-2">
            Explore Solution →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
