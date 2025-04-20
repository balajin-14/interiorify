import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactSection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#006A71] py-16 px-4 sm:px-6 lg:px-16 text-white"
    >
      {/* Grid: Contact Info + Form */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Info + Map */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <div className="space-y-1 text-base sm:text-lg">
            <h3 className="text-xl font-semibold">Interiorify</h3>
            <p>123 Modern St, Design City, DL 54321</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: hello@interiorify.com</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18…"
              className="w-full h-[250px] md:h-[300px] border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: EmailJS Form */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl text-black">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p className="text-center text-sm mt-2 text-green-400">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3b5998] p-3 rounded-full text-white text-xl hover:scale-110 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-3 rounded-full text-white text-xl hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1DA1F2] p-3 rounded-full text-white text-xl hover:scale-110 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0077b5] p-3 rounded-full text-white text-xl hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Interiorify. All rights reserved.
      </div>
    </section>
  );
}
