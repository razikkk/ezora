import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const services = [
  {
    image: "/image---service-image.png",
    title: "Mountain Biking Trips",
    description:
      "Check out our awesome mountain biking tours and hit some thrilling trails!",
  },
  {
    image: "/image---service-image-1.png",
    title: "Accommodations",
    description:
      "Whether you're into chill cabins or fancy resorts, we've got the perfect spot for you!",
  },
  {
    image: "/image---service-image-2.png",
    title: "Camping Adventures",
    description:
      "Set up your tent and kick back under the stars with our awesome all-in-one gear!",
  },
];

export const ServiceSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center bg-black py-24">
    <div className="w-full max-w-[1240px] px-4">
      {/* Section Title */}
      <div
        data-aos="zoom-out"
        data-aos-duration="800"
        className="flex flex-col items-center gap-3 mb-14"
      >
        <h2 className="font-bold text-[#22535D] text-5xl text-center tracking-[-1.44px] leading-[57.6px] [font-family:'Urbanist',Helvetica]">
          Our Popular Activities
        </h2>
  
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col items-center gap-[1.4px]"
        >
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d9d9d9] text-base text-center tracking-[-0.48px] leading-[22.4px]">
            Ezora has everything for your perfect getaway—hiking, camping,
            mountain biking,
          </p>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d9d9d9] text-base text-center tracking-[-0.48px] leading-[22.4px]">
            and wildlife safaris. Adventure, relaxation, or culture,
            we&apos;ve got you covered!
          </p>
        </div>
      </div>
  
      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {services.map((service, index) => (
          <Card
            key={index}
            data-aos="zoom-out"
            data-aos-delay={index * 200} // makes them appear one after another
            className="bg-transparent border-0 rounded-3xl"
          >
            <CardContent className="p-0">
              <div
                className="w-full h-[288px] rounded-xl bg-cover bg-center mb-3 transition-all duration-500 ease-in-out opacity-80 hover:opacity-100"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="flex flex-col gap-[12.5px]">
                <h3 className="font-semibold text-[#22535D] text-2xl tracking-[-0.48px] leading-[28.8px] [font-family:'Urbanist',Helvetica]">
                  {service.title}
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dadada] text-base tracking-[-0.48px] leading-[22.4px]">
                  {service.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
  
      {/* Button */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="flex justify-center"
      >
        <Button
          variant="outline"
          className="h-14 px-8 rounded-full border-[#22535D] bg-transparent text-white hover:bg-[#519b91]/10 hover:text-white"
        >
          <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-base tracking-[-0.48px] leading-4">
            Browse All Activities
          </span>
          <ArrowRightIcon className="ml-2 w-6 h-6" />
        </Button>
      </div>
    </div>
  </section>
  
  );
};
