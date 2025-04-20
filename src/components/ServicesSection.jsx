import React from "react";
import { Hammer, Paintbrush, Sofa, Ruler, Layers, Lightbulb } from "lucide-react";

const services = [
  {
    icon: <Hammer size={32} />,
    title: "Custom Woodwork",
    description: "Bespoke wooden furniture crafted to perfection.",
  },
  {
    icon: <Paintbrush size={32} />,
    title: "Interior Painting",
    description: "Transform your walls with premium colors and finishes.",
  },
  {
    icon: <Sofa size={32} />,
    title: "Furniture Design",
    description: "Tailor-made designs that match your style and comfort.",
  },
  {
    icon: <Ruler size={32} />,
    title: "Space Planning",
    description: "Maximize utility and aesthetics with smart layouts.",
  },
  {
    icon: <Layers size={32} />,
    title: "Material Selection",
    description: "Choose the best materials for durability and beauty.",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Lighting Setup",
    description: "Illuminate your home with functional and stylish lighting.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 md:px-12" style={{ backgroundColor: '#48A6A7' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-left shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 transform hover:-translate-y-1"
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
