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

const navigationItems = [
  { label: "home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export  const ElementDefault = (): JSX.Element => {
  return (
    <div className="bg-black w-full flex flex-col overflow-hidden">
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
