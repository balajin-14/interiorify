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
    <section
      id="furniture"
      className="py-12"
      style={{ backgroundColor: "#F2EFE7" }}
    >
      {/* Centered Title */}
      <div className="px-4 sm:px-6 md:px-16 mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Explore Our Furnitures
        </h2>
      </div>

      {/* Continuous Sliding Container */}
      <div className="relative overflow-hidden px-4 sm:px-6 md:px-16 group">
        <div className="flex gap-4 sm:gap-6 md:gap-8 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedList.map((item, idx) => (
            <img
              key={`${item.id}-${idx}`}
              src={item.image}
              alt={item.title}
              onClick={() => handleClick(item)}
              className="
                flex-shrink-0
                w-40 h-24       /* Mobile */
                sm:w-48 sm:h-32 /* Tablet */
                md:w-64 md:h-40 /* Desktop */
                object-cover rounded-lg
                cursor-pointer hover:scale-105
                transition-transform duration-300
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
