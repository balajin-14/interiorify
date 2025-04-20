import React from "react";

export default function FurnitureDescription({ furniture }) {
  return (
    <section
      className="py-16 px-4 md:px-16"
      style={{ backgroundColor: "#9ACBD0" }} // Updated background color
      id="furniture-description"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{furniture.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{furniture.description}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {furniture.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={furniture.image}
            alt={furniture.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
