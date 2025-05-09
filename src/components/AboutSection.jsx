import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="text-gray-800 py-20 px-4 md:px-16"
      style={{ backgroundColor: "#F2EFE7" }} // Updated background color
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Description (Left) */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Interiorify, we’re passionate about transforming ordinary spaces
            into stunning, functional interiors that reflect your personality
            and lifestyle. From initial concept to final reveal, our team works
            closely with you to ensure every detail is perfect.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Whether you’re looking for a full home makeover or a single-room
            refresh, our bespoke design solutions and professional project
            management guarantee an easy, enjoyable experience.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hello%20Interiorify%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            More
          </a>
        </div>

        {/* Image (Right) */}
        <div className="md:w-1/2">
          <img
            src="assets/about.jpg"
            alt="About Us"
            className="w-full rounded-2xl shadow-lg object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
