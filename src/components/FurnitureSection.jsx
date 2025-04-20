// src/components/FurnitureSection.jsx
import React, { useState } from "react";

const IMAGES = [
  "furniture1.jpg",
  "furniture2.jpg",
  "furniture3.jpg",
  "furniture4.jpg",
  "furniture5.jpg",
  "furniture6.jpg",
  "furniture7.jpg",
  "furniture8.jpg",
];

export default function FurnitureSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="furnitures" className="py-12 overflow-hidden">
      <div
        className="flex w-[200%] animate-scroll"
        style={{ animationPlayState: paused ? "paused" : "running" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Render two sets of images for seamless looping */}
        {[...IMAGES, ...IMAGES].map((file, idx) => (
          <div key={idx} className="w-1/4 flex-shrink-0 p-2">
            <img
              src={`/assets/${file}`}
              alt={`Furniture ${idx % IMAGES.length + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
