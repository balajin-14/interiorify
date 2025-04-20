import React from "react";

export default function FurnitureDescription({ furniture }) {
  return (
    <section
      id="furniture-description"
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 bg-[#9ACBD0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            {furniture.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            {furniture.description}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {furniture.specs.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition w-full sm:w-auto text-center"
          >
            Learn More
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={furniture.image}
            alt={furniture.title}
            className="w-full h-auto object-cover rounded-lg shadow-md max-h-[250px] sm:max-h-[350px] md:max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
