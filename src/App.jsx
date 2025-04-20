// src/App.jsx
import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FurnitureShowcase from "./components/FurnitureShowcase";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <AboutSection />
      <FurnitureShowcase />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;
