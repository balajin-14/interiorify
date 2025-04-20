import React, { useEffect, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const HeroSection = () => {
  const navLinks = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Furnitures", href: "#Furnitures" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  const images = useMemo(
    () => [
      "/assets/hero1.jpg",
      "/assets/hero2.jpg",
      "/assets/hero3.jpg",
      "/assets/hero4.jpg",
      "/assets/hero5.jpg",
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[current]})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Navbar */}
      <header className="relative z-10 px-6 py-4 flex items-center justify-between bg-white/20 backdrop-blur-md border-b border-white/10">
        <div className="text-3xl font-bold tracking-wide text-black">
          Interiorify
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black font-bold px-4 py-2 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-black z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center md:hidden py-4 space-y-4 z-30">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black font-bold text-lg transition hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-[80vh] text-center px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Transform Your Space With Style
        </h1>
        <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
          Discover stunning interior designs tailored to elevate your living
          experience.
        </p>
        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          Get Started
        </a>
      </section>

      {/* Slider Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          aria-label="Next Slide"
          onClick={nextSlide}
          className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-white" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
