import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { AboutUsSection } from "../ElementDefault/sections/AboutUsSection";
import { CallToActionSection } from "../ElementDefault/sections/CallToActionSection";
import { DestinationSection } from "../ElementDefault/sections/DestinationSection";
import { FaqSection } from "../ElementDefault/sections/FaqSection";
import { FooterDesktopSection } from "../ElementDefault/sections/FooterDesktopSection";
import { FooterSection } from "../ElementDefault/sections/FooterSection";
import { GallerySection } from "../ElementDefault/sections/GallerySection";
import { HeroSection } from "../ElementDefault/sections/HeroSection";
import { ServiceSection } from "../ElementDefault/sections/ServiceSection";
import { TestimonialSection } from "../ElementDefault/sections/TestimonialSection";
import { WhyChooseUsSection } from "../ElementDefault/sections/WhyChooseUsSection";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";



const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    // { label: "Destination", path: "/destination" },
    { label: "Contact", path: "/contact" },
  ];

  
  
  export  const ElementDefault = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-black w-full flex flex-col ">
  <img
  src="/Logos-02.png" // 👉 replace with your image path
  alt="Top Left"
  data-aos="fade-right"
  className="absolute top-0 left-0 sm:top-4 sm:left-0 w-[250px] h-auto z-50 object-contain"
/>


      <nav className="sticky top-4 z-50 flex justify-center px-4 py-6"
      >
        {/* Desktop Nav */}
        <div className="hidden md:flex bg-[#22535D] rounded-[50px] h-[64px] items-center justify-center gap-12 px-10 max-w-[500px] w-full shadow-lg">
          {navigationItems.map((item, i) => (
            <Link key={i} to={item.path}>
              <Button
                variant="ghost"
                className="h-auto px-0 [font-family:'Poppins',Helvetica] font-medium text-base text-white tracking-[-0.48px] hover:bg-transparent"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between w-full px-4"
         >
          <div className="flex-1"></div>

          {/* Hamburger / Cross Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center focus:outline-none z-[60]"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="w-8 h-[3px] bg-white rounded-full origin-center transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-[3px] bg-white rounded-full transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="w-8 h-[3px] bg-white rounded-full origin-center transition-all duration-300"
            />
          </button>
        </div>

        {/* Mobile Menu (Slide-in Animation) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-screen bg-[#22535D] z-50 flex flex-col items-center justify-center gap-8"
            >
              {navigationItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={item.path} onClick={() => setMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="text-white text-xl font-semibold tracking-wide hover:text-[#c7e8e2]"
                    >
                      {item.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>



      <main className="flex-1 w-full">
        <HeroSection />
        {/* <DestinationSection /> */}
        <AboutUsSection />
        <ServiceSection />
        <WhyChooseUsSection />
        {/* <TestimonialSection /> */}
        <GallerySection />
        <FaqSection />
        <CallToActionSection />
        <FooterDesktopSection />
      </main>
    </div>
  );
};
