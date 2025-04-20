import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-[#006A71] py-20 px-4 md:px-16 text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info + Map */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <div>
            <h3 className="text-xl font-semibold">Interiorify</h3>
            <p>123 Modern St, Design City, DL 54321</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: hello@interiorify.com</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019183792692!2d-122.41941568468167!3d37.77492977975932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b7dfbfb%3A0x7a6f712a38eea291!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1618080461227!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-2xl text-black">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-12 flex justify-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#3b5998] p-3 rounded-full text-xl hover:scale-110 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-3 rounded-full text-xl hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#1DA1F2] p-3 rounded-full text-xl hover:scale-110 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#0077b5] p-3 rounded-full text-xl hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
      </div>
      {/* Copyright */}
      <div className="mt-10 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Interiorify. All rights reserved.
      </div>
    </section>
  );
}
