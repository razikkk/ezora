import React from "react";
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


const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Destination", path: "/destination" },
    { label: "Contact", path: "/contact" },
  ];

  
export  const ElementDefault = (): JSX.Element => {
  return (
    <div className="bg-black w-full flex flex-col overflow-hidden">
      <img
    src="/Logos-04.png" // 👉 replace with your image path
    alt="Top Left"
    className="absolute top-0 left-4 w-[200px] h-auto z-50"
  />
       <nav className="sticky top-4 z-50 flex justify-center px-4 py-6">
  <div className="bg-[#22535D] rounded-[50px] h-[64px] flex items-center justify-center gap-12 px-10 max-w-[500px] w-full shadow-lg">
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
</nav>



      <main className="flex-1 w-full">
        <HeroSection />
        <DestinationSection />
        <AboutUsSection />
        <ServiceSection />
        <WhyChooseUsSection />
        <TestimonialSection />
        <GallerySection />
        <FaqSection />
        <CallToActionSection />
        <FooterDesktopSection />
      </main>
    </div>
  );
};
