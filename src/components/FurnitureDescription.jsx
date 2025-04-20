// src/components/FurnitureDescription.jsx
import React from "react";

export default function FurnitureDescription() {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-100" id="furniture-description">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Elegant Oak Dining Table</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Crafted from premium oak wood, this dining table brings timeless charm and
            robust durability to your home. Its polished finish and minimalist design
            blend seamlessly into both classic and modern interiors.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Material: Solid oak wood</li>
            <li>Finish: Smooth lacquered</li>
            <li>Seats: Up to 6 people</li>
            <li>Maintenance: Easy to clean and scratch-resistant</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/furniture1.jpg"
            alt="Oak Dining Table"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
