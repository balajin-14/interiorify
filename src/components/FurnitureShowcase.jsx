// src/components/FurnitureShowcase.jsx
import React, { useState } from "react";
import FurnitureSection from "./FurnitureSection";
import FurnitureDescription from "./FurnitureDescription";

const furnitureData = [
  {
    id: 1,
    title: "Elegant Oak Dining Table",
    image: "public/assets/furniture1.jpg",
    description: "Crafted from premium oak wood, this dining table brings timeless charm...",
    specs: [
      "Material: Solid oak wood",
      "Finish: Smooth lacquered",
      "Seats: Up to 6 people",
      "Maintenance: Easy to clean and scratch-resistant",
    ],
  },
  {
    id: 2,
    title: "Modern Velvet Sofa",
    image: "public/assets/furniture2.jpg",
    description: "Luxurious and comfortable, this velvet sofa is perfect for relaxing evenings.",
    specs: [
      "Material: Soft velvet fabric",
      "Frame: Hardwood",
      "Seats: 3 people",
      "Includes: Cushions with removable covers",
    ],
  },
  {
    id: 3,
    title: "Modern Velvet Sofa",
    image: "public/assets/furniture3.jpg",
    description: "Luxurious and comfortable, this velvet sofa is perfect for relaxing evenings.",
    specs: [
      "Material: Soft velvet fabric",
      "Frame: Hardwood",
      "Seats: 3 people",
      "Includes: Cushions with removable covers",
    ],
  },
  {
    id: 4,
    title: "Modern Velvet Sofa",
    image: "public/assets/furniture4.jpg",
    description: "Luxurious and comfortable, this velvet sofa is perfect for relaxing evenings.",
    specs: [
      "Material: Soft velvet fabric",
      "Frame: Hardwood",
      "Seats: 3 people",
      "Includes: Cushions with removable covers",
    ],
  },
  {
    id: 5,
    title: "Modern Velvet Sofa",
    image: "public/assets/furniture5.jpg",
    description: "Luxurious and comfortable, this velvet sofa is perfect for relaxing evenings.",
    specs: [
      "Material: Soft velvet fabric",
      "Frame: Hardwood",
      "Seats: 3 people",
      "Includes: Cushions with removable covers",
    ],
  },
  {
    id: 6,
    title: "Modern Velvet Sofa",
    image: "public/assets/furniture6.jpg",
    description: "Luxurious and comfortable, this velvet sofa is perfect for relaxing evenings.",
    specs: [
      "Material: Soft velvet fabric",
      "Frame: Hardwood",
      "Seats: 3 people",
      "Includes: Cushions with removable covers",
    ],
  },
  {
    id: 7,
    title: "Modern Velvet Sofa",
    image: "public/assets/furniture7.jpg",
    description: "Luxurious and comfortable, this velvet sofa is perfect for relaxing evenings.",
    specs: [
      "Material: Soft velvet fabric",
      "Frame: Hardwood",
      "Seats: 3 people",
      "Includes: Cushions with removable covers",
    ],
  },
  {
    id: 8,
    title: "Modern Velvet Sofa",
    image: "public/assets/furniture8.jpg",
    description: "Luxurious and comfortable, this velvet sofa is perfect for relaxing evenings.",
    specs: [
      "Material: Soft velvet fabric",
      "Frame: Hardwood",
      "Seats: 3 people",
      "Includes: Cushions with removable covers",
    ],
  },
  // Add furniture3–8 similarly
];

export default function FurnitureShowcase() {
  const [selected, setSelected] = useState(furnitureData[0]);

  return (
    <>
      <FurnitureSection furnitureList={furnitureData} onSelect={setSelected} />
      <FurnitureDescription furniture={selected} />
    </>
  );
}
