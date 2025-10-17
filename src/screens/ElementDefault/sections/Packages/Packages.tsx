import { MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const categories = [
  { label: "All Categories", active: true },
  { label: "Hiking", active: false },
  { label: "Adventure", active: false },
  { label: "Accommodations", active: false },
  { label: "Mountain Biking", active: false },
  { label: "Wildlife Safaris", active: false },
  { label: "Sports", active: false },
];

const destinations = [
  {
    image: "/card-image---destination-image.png",
    price: "699",
    title: "Tropical Paradise",
    location: "Bali, Indonesia",
  },
  {
    image: "/card-image---destination-image-1.png",
    price: "699",
    title: "Tongariro National Park",
    location: "New Zealand",
  },
  {
    image: "/card-image---destination-image-2.png",
    price: "425",
    title: "Sydney Opera House",
    location: "Sydney, Australia",
  },
  {
    image: "/package3.png",
    price: "699",
    title: "Great Barrier Reef",
    location: "Queensland, Australia",
  },
  {
    image: "/package4.png",
    price: "699",
    title: "Yosemite National Park",
    location: "California, USA",
  },
  {
    image: "/package5.png",
    price: "699",
    title: "Mount Kilimanjaro",
    location: "Tanzania",
  },
  {
    image: "/package6.png",
    price: "580",
    title: "Golden Gate Bridge",
    location: "San Francisco, USA",
  },
  {
    image: "/package7.png",
    price: "500",
    title: "Bali's Uluwatu Temple",
    location: "Bali, Indonesia",
  },
  {
    image: "/package8.png",
    price: "699",
    title: "Barcelona's Park Güell",
    location: "Barcelona, Spain",
  },
];

export const Packages = (): JSX.Element => {
  return (
    <section className="w-full py-[100px] px-[120px]">
      <div className="w-full flex flex-col gap-[56px]">
        <nav className="flex gap-4 flex-wrap">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`h-auto rounded-full px-4 py-2 ${
                category.active
                  ? "bg-[#519b91] hover:bg-[#519b91]/90 text-white border-0"
                  : "bg-transparent border-[#cfd1d0] text-white hover:bg-white/10"
              }`}
            >
              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-base tracking-[-0.48px] leading-[22.4px]">
                {category.label}
              </span>
            </Button>
          ))}
        </nav>

        <div className="grid grid-cols-3 gap-x-[7px] gap-y-[20px]">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="bg-transparent border-0 flex flex-col gap-4"
            >
              <CardContent className="p-0 flex flex-col gap-4">
                <div
                  className="w-full h-[290px] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />

                <div className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-[3.5px]">
                    <span className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[-0.48px] leading-[28.8px]">
                      {destination.price}
                    </span>
                    <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px]">
                      /pp
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-2xl tracking-[-0.48px] leading-[28.8px]">
                      {destination.title}
                    </h3>

                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4 text-white" />
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

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="h-auto rounded-[1000px] border-[#519b91] bg-transparent text-white hover:bg-white/10 px-6 py-4"
          >
            <span className="[font-family:'Urbanist',Helvetica] font-semibold text-xl tracking-[0] leading-6">
              Load More
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
