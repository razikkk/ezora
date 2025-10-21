import { MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { DestinationDetailsSection } from "../ElementDefault/sections/Destination Details/DestinationDetails";
import { CallToActionSection } from "../ElementDefault/sections/CallToActionSection";
import { FooterDesktopSection } from "../ElementDefault/sections/FooterDesktopSection";
import { Link } from "react-router-dom";


const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Destination", path: "/destination" },
    { label: "Contact", path: "/contact" },
  ];

export const DestinationDetails = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black">
  {/* Navbar */}
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

  {/* Main Content */}
  <div className="relative w-full px-[100px] pt-[100px] pb-[126px]">
    <div className="flex flex-col items-center gap-14">
      <header className="flex flex-col gap-2 items-center">
        <div className="flex items-center justify-center gap-1">
          <MapPinIcon className="w-5 h-5 text-white" />
          <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
            Bali, Indonesia
          </span>
        </div>

        <h1 className="[font-family:'Urbanist',Helvetica] font-extrabold text-white text-[56px] text-center tracking-[-1.12px] leading-[67.2px] whitespace-nowrap">
          Tropical Paradise
        </h1>
      </header>

      <img
        className="w-full max-w-[1200px] h-[600px] object-cover"
        alt="Primary section"
        src="/primary---section.svg"
      />
    </div>
  </div>

  <DestinationDetailsSection />
  <CallToActionSection />
  <FooterDesktopSection />
</section>

  );
};
