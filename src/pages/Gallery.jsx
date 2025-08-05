import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample AI image URLs
const allImages = Array.from(
  { length: 30 },
  (_, i) => `/gallery_images/image${i + 1}.jpg`
);

const IMAGES_PER_PAGE = 15;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);
  const indexOfLastImage = currentPage * IMAGES_PER_PAGE;
  const indexOfFirstImage = indexOfLastImage - IMAGES_PER_PAGE;
  const currentImages = allImages.slice(indexOfFirstImage, indexOfLastImage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentPage > 1) handleClick(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) handleClick(currentPage + 1);
  };

  return (
    <div>
      {/* === Hero/Header Section (same as About.jsx) === */}
      <div className="relative h-[40vh] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-[#e7eaf3]"></div>
        <motion.div
          className="text-center text-black z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg md:text-xl">
            Explore our AI-powered image showcase
          </p>
        </motion.div>
      </div>

      {/* === Image Gallery Grid === */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentImages.map((url, index) => (
            <motion.div
              key={index}
              className="rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* === Pagination Controls === */}
        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handleClick(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded ${
              currentPage === totalPages && "opacity-50 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
