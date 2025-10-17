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
          <div className="flex items-start justify-between gap-8">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="[font-family:'Urbanist',Helvetica] font-bold text-white text-5xl tracking-[-1.44px] leading-[57.6px]">
                Explore Popular Destinations
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e0e0e0] text-base tracking-[-0.48px] leading-[22.4px]">
                Find your next adventure with Ezora. From relaxing retreats to
                exciting explorations, <br />
                we&apos;ve got the perfect destination for you!
              </p>
            </div>

            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-[#519b91] bg-transparent hover:bg-[#519b91]/10 text-white"
            >
              <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-base tracking-[-0.48px]">
                Browse All Destination
              </span>
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>

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
                      <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-2xl tracking-[-0.48px] leading-[28.8px]">
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
