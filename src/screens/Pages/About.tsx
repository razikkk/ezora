import React from "react";
import { Button } from "../../components/ui/button";

import { AboutHeroSection } from "../ElementDefault/sections/AboutHeroSection.tsx/AboutHero";
import { AboutStorySection } from "../ElementDefault/sections/AboutOurStory/AboutOurStory";
import { TrustedSection } from "../ElementDefault/sections/TrustedSection/TrustedSection";
import { WhyChooseUsSection } from "../ElementDefault/sections/WhyChooseUsSection";
import { TestimonialSection } from "../ElementDefault/sections/TestimonialSection";
import { GallerySection } from "../ElementDefault/sections/GallerySection";
import { VideoReelsSection } from "../ElementDefault/sections/VideoReelsSection/VideoReelsSection";
import { CallToActionSection } from "../ElementDefault/sections/CallToActionSection";
import { FooterDesktopSection } from "../ElementDefault/sections/FooterDesktopSection";
import { Link } from "react-router-dom";


const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    // { label: "Destination", path: "/destination" },
    { label: "Contact", path: "/contact" },
  ];

export const About = (): JSX.Element => {
  return (
    <div className="bg-black w-full flex flex-col ">
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



      <div className="w-full bg-black">
        <AboutHeroSection />
        <AboutStorySection />
        {/* <TrustedSection /> */}
        <WhyChooseUsSection />
        <TestimonialSection />
        <GallerySection />
        <VideoReelsSection />
        <CallToActionSection />
        <FooterDesktopSection />
      </div>
    </div>
  );
};
