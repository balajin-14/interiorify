import React, { useEffect, useState, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const HeroSection = () => {
  const navLinks = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Furnitures", href: "#furniture" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  const images = useMemo(
    () => [
      "./assets/hero1.jpg",
      "./assets/hero2.jpg",
      "./assets/hero3.jpg",
      "./assets/hero4.jpg",
      "./assets/hero5.jpg",
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // slide logic
  useEffect(() => {
    const iv = setInterval(() => setCurrent(i => (i+1)%images.length), 3000);
    return () => clearInterval(iv);
  }, []);

  // scrollspy logic
  useEffect(() => {
    const onScroll = () => {
      ["home","about","furniture","services","contact"].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop, h = el.offsetHeight;
        if (window.scrollY >= top-60 && window.scrollY < top+h-60) {
          setActiveLink(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft:  () => setCurrent(i => (i+1)%images.length),
    onSwipedRight: () => setCurrent(i => (i-1+images.length)%images.length),
    trackMouse: true,
  });

  return (
    <div {...swipeHandlers} className="relative min-h-screen overflow-hidden text-white scroll-smooth pt-16" id="home">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex items-center justify-between bg-white/20 backdrop-blur-md border-b border-white/10">
        <div className="text-2xl sm:text-3xl font-bold text-black">Interiorify</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded font-semibold transition ${
                activeLink === link.href.slice(1)
                  ? "bg-black text-white"
                  : "text-black hover:text-white hover:bg-black/30"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black z-50"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center md:hidden py-4 space-y-4 z-40">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`w-full text-center px-4 py-2 rounded font-bold transition ${
                  activeLink === link.href.slice(1)
                    ? "bg-black text-white"
                    : "text-black hover:text-white hover:bg-black/30"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[current]})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-[80vh] text-center px-4 sm:px-6 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
          Transform Your Space With Style
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl drop-shadow-md">
          Discover stunning interior designs tailored to elevate your living experience.
        </p>
        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-white" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
