import { ArrowRightIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const destinations = [
  {
    price: "$699.00",
    name: "Tongariro National Park",
    location: "New Zealand",
    image: "/card-image---destination-image.png",
  },
  {
    price: "$425.00",
    name: "Sydney Opera House",
    location: "Sydney, Australia",
    image: "/card-image---destination-image-1.png",
  },
  {
    price: "$699.00",
    name: "Great Barrier Reef",
    location: "Queensland, Australia",
    image: "/card-image---destination-image-2.png",
  },
];

export const DestinationSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center bg-black py-20">
    <div className="w-full max-w-[1240px] px-5">
      <div className="flex flex-col gap-16">
        {/* Header section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
          {/* Left Text Section */}
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="[font-family:'Urbanist',Helvetica] font-bold text-[#22535D] text-5xl sm:text-5xl tracking-[-1.44px] leading-tight sm:leading-[57.6px]">
              Explore Popular Destinations
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e0e0e0] text-sm sm:text-base tracking-[-0.48px] leading-relaxed sm:leading-[22.4px]">
              Find your next adventure with Ezora. From relaxing retreats to
              exciting explorations, <br className="hidden sm:block" />
              we&apos;ve got the perfect destination for you!
            </p>
          </div>
  
          {/* Right Button Section */}
          <div className="w-full md:w-auto flex justify-start md:justify-end mt-4 md:mt-0">
  <Button
    variant="outline"
    className="w-[200px] sm:w-[220px] md:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-full border-[#22535D] bg-transparent text-white"
  >
    <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-sm sm:text-base tracking-[-0.48px]">
      Browse All Destination
    </span>
    <ArrowRightIcon className="ml-2 w-4 h-4" />
  </Button>
</div>


        </div>
  
        {/* Cards section (unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="bg-transparent border-0 overflow-hidden"
            >
              <CardContent className="p-0 flex flex-col gap-4">
                <div
                  className="w-full h-72 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
  
                <div className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-1">
                    <span className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[-0.48px] leading-[28.8px]">
                      {destination.price}
                    </span>
                    <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px]">
                      /pp
                    </span>
                  </div>
  
                  <div className="flex flex-col gap-2">
                    <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#22535D] text-2xl tracking-[-0.48px] leading-[28.8px]">
                      {destination.name}
                    </h3>
  
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-5 h-5 text-white" />
                      <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px]">
                        {destination.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  );
};
