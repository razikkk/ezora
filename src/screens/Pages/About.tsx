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

const navigationItems = [
  { label: "home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const About = (): JSX.Element => {
  return (
    <div className="bg-black w-full flex flex-col about">
        <nav className="sticky top-[22px] z-50 flex justify-center px-4">
        <div className="bg-white rounded-[50px] h-[64px] flex items-center justify-center gap-14 px-12 max-w-[700px] w-full">
          <Button
            variant="ghost"
            className="h-auto px-0 [font-family:'Poppins',Helvetica] font-medium text-xl text-black tracking-[-0.48px] hover:bg-transparent"
          >
            {navigationItems[0].label}
          </Button>

          <Button
            variant="ghost"
            className="h-auto px-0 [font-family:'Poppins',Helvetica] font-medium text-xl text-black tracking-[-0.48px] hover:bg-transparent"
          >
            {navigationItems[1].label}
          </Button>

          <div className="[font-family:'Font_Awesome_6_Brands-Regular',Helvetica] font-normal text-[26px] text-black tracking-[-0.48px] whitespace-nowrap">
            LOGO
          </div>

          <Button
            variant="ghost"
            className="h-auto px-0 [font-family:'Poppins',Helvetica] font-medium text-xl text-black tracking-[-0.48px] hover:bg-transparent"
          >
            {navigationItems[2].label}
          </Button>

          <Button
            variant="ghost"
            className="h-auto px-0 [font-family:'Poppins',Helvetica] font-medium text-xl text-black tracking-[-0.48px] hover:bg-transparent"
          >
            {navigationItems[3].label}
          </Button>
        </div>
      </nav>

      <div className="w-full bg-black">
        <AboutHeroSection />
        <AboutStorySection />
        <TrustedSection />
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
