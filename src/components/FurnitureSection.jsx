import React from "react";

export default function FurnitureSection({ furnitureList, onSelect }) {
  const handleClick = (item) => {
    onSelect(item);
    const descSection = document.getElementById("furniture-description");
    if (descSection) {
      descSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Duplicate images for infinite loop effect
  const duplicatedList = [...furnitureList, ...furnitureList];

  return (
    <section className="py-12" id="furniture" style={{ backgroundColor: "#F2EFE7" }}>
      {/* Centered Title */}
      <div className="px-4 md:px-16 mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Explore Our Furnitures</h2>
      </div>

      {/* Continuous Sliding Container */}
      <div className="relative overflow-hidden px-4 md:px-16 group">
        <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedList.map((item, idx) => (
            <img
              key={`${item.id}-${idx}`}
              src={item.image}
              alt={item.title}
              className="w-64 h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
