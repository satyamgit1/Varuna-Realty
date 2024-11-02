// src/components/OurOffice.js
import React from 'react';

const OurOffice = () => {
  // Array of image URLs for the gallery
  const images = [
    '/main.jpg',      // Replace with actual paths
    '/IMG_5674.png',
    '/IMG_5673.png',
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-100 via-white to-gray-100 py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Our Office
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Take a look inside our beautifully crafted office spaces, designed to reflect our commitment to quality and professionalism in real estate.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={image}
              alt={`Office view ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-500 transform group-hover:scale-105" // Increased height from h-64 to h-80
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a
          href="https://g.co/kgs/obri6e9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl"
        >
          Visit Us
        </a>
      </div>
    </section>
  );
};

export default OurOffice;
