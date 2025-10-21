import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card, CardContent } from "../../../../components/ui/card";

const tourDetailsData = [
  { label: "Guest", value: "14 People" },
  { label: "Tour Type", value: "Adventure" },
  { label: "Booking Last Date", value: "Oct 23, 2025" },
  { label: "Tour Duration", value: "6 days 5 Nights" },
  { label: "Price", value: "$699.00", suffix: "/pp" },
];

const itineraryData = [
  {
    id: "day1",
    title: "Day 1: Arrival and Welcome",
    content: null,
  },
  {
    id: "day2",
    title: "Day 2: Landmarks & Culture",
    content: [
      "Morning visit to Landmark 1 CN Tower",
      "Explore Cultural Spot Distillery District",
      "Lunch at a popular local eatery",
      "Evening free for leisure",
    ],
  },
  {
    id: "day3",
    title: "Day 3: Adventure & Exploration",
    content: null,
  },
  {
    id: "day4",
    title: "Day 4: Departure",
    content: null,
  },
];

const includedItems = [
  "4 nights' accommodation at a stylish city hotel",
  "Daily breakfast and select meals as per the itinerary.",
  "Guided tours and activities.",
  "Entrance fees to all attractions listed in the itinerary.",
  "Professional tour guide throughout the journey.",
];

const galleryImages = [
  { src: "/image---gallery-image.png", alt: "Gallery image 1" },
  { src: "/image---gallery-image-1.png", alt: "Gallery image 2" },
  { src: "/image---gallery-image-2.png", alt: "Gallery image 3" },
  { src: "/image---gallery-image-3.png", alt: "Gallery image 4" },
  { src: "/image---gallery-image-4.png", alt: "Gallery image 5" },
  { src: "/image---gallery-image-5.png", alt: "Gallery image 6" },
];

export const DestinationDetailsSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-14">
      <div className="w-full max-w-[812px] flex flex-col gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-[20.5px]">
            <h2 className="[font-family:'Urbanist',Helvetica] font-semibold text-black text-[40px] tracking-[-1.20px] leading-[48px]">
              Tour Details
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d6d9da] text-base tracking-[-0.48px] leading-[22.4px]">
              Step into the heart of Tropical Paradise and experience a journey
              that blends breathtaking natural landscapes, vibrant urban life,
              and rich cultural heritage. This tour is thoughtfully designed to
              give you the best of Tropical Paradise, from iconic landmarks to
              off-the-beaten-path experiences. Whether you're an adventurer, a
              culture enthusiast, or just seeking relaxation, this tour has
              something for everyone.
            </p>
          </div>

          <Card className="bg-white rounded-xl border-0">
            <CardContent className="p-6 flex flex-col gap-6">
              {tourDetailsData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="[font-family:'Urbanist',Helvetica] font-normal text-black text-xl tracking-[0] leading-6">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-0">
                    <span className="[font-family:'Urbanist',Helvetica] font-semibold text-black text-xl tracking-[0] leading-6">
                      {item.value}
                    </span>
                    {item.suffix && (
                      <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d6d9da] text-base tracking-[-0.48px] leading-[22.4px]">
                        {item.suffix}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-[20.5px]">
            <h2 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-[32px] tracking-[-0.96px] leading-[38.4px]">
              Itinerary Highlights
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d6d9da] text-lg tracking-[-0.54px] leading-[25.2px]">
              Discover the charm of Tropical Paradise with our expertly curated
              tour. From breathtaking landmarks to hidden local gems, this tour
              promises an unforgettable experience.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="day2"
            className="flex flex-col gap-6"
          >
            {itineraryData.map((day) => (
              <AccordionItem
                key={day.id}
                value={day.id}
                className="border border-solid border-[#b3b3b3] data-[state=open]:border-[#519b91] rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-5 hover:no-underline [&[data-state=open]>div]:bg-[#519b91]">
                  <span className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[-0.48px] leading-[28.8px] text-left">
                    {day.title}
                  </span>
                </AccordionTrigger>
                {day.content && (
                  <AccordionContent className="px-5 pb-5">
                    <ul className="flex flex-col gap-0 [font-family:'DM_Sans',Helvetica] font-normal text-[#d6d9da] text-base tracking-[-0.48px] leading-[22.4px]">
                      {day.content.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-[24.8px]"
                        >
                          <span className="mt-[0.5px]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-[32px] tracking-[-0.96px] leading-[38.4px]">
            What's Included
          </h2>
          <ul className="flex flex-col gap-0 [font-family:'DM_Sans',Helvetica] font-normal text-[#d6d9da] text-lg tracking-[-0.54px] leading-[25.2px]">
            {includedItems.map((item, index) => (
              <li key={index} className="flex items-start gap-[24.1px]">
                <span className="mt-[0.5px]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[70px]">
          <h2 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-[32px] tracking-[-0.96px] leading-[38.4px]">
            Gallery
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="rounded-3xl bg-cover bg-center bg-no-repeat aspect-[404/211]"
                style={{ backgroundImage: `url(${image.src})` }}
                role="img"
                aria-label={image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
