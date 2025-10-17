import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const navigationItems = [
  { label: "home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const DestinationHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[638px]">
      <div className="absolute inset-0 w-full h-[calc(100%-100px)] bg-[url(/destinationHeroBanner.png)] bg-cover bg-center" />

      

      <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[62px] w-[calc(100%-240px)] h-[333px] bg-black rounded-3xl border-0">
        <CardContent className="relative w-full h-full p-0">
          <div className="absolute top-1/2 -translate-y-1/2 left-[122px] flex flex-col gap-[16.7px] w-[calc(100%-638px)]">
            <h1 className="w-[551.52px] [font-family:'Urbanist',Helvetica] font-extrabold text-white text-[56px] tracking-[-1.12px] leading-[67.2px]">
              Explore Unforgettable <br />
              Tour and Destinations
            </h1>

            <p className="w-[518.51px] [font-family:'DM_Sans',Helvetica] font-normal text-[#e7e7e7] text-base tracking-[-0.48px] leading-[22.4px]">
              Find your next adventure with Ezora. From relaxing retreats to
              exciting <br />
              explorations, we&apos;ve got the perfect destination for you!
            </p>
          </div>

          <img
            className="absolute top-1/2 -translate-y-1/2 right-[122px] w-[19.92%] h-[237px]"
            alt="Image wrap"
            src="/bag.svg"
          />
        </CardContent>
      </Card>
    </section>
  );
};
