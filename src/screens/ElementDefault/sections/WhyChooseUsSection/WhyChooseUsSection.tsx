import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const features = [
  {
    icon: "/icon-wrap-3.svg",
    title: "Expert Travel Guides",
    description:
      "Hey, you've gotta check out these awesome tips and local hacks for a trip you won't forget!",
  },
  {
    icon: "/icon-wrap-2.svg",
    title: "Customizable Itineraries",
    description:
      "Turn your trip into your own adventure – switch things up however you feel like!",
  },
  {
    icon: "/icon-wrap-5.svg",
    title: "Handpicked Destinations",
    description:
      "Hey, you gotta see some of the wildest and most unique spots on the planet!",
  },
  {
    icon: "/icon-wrap-4.svg",
    title: "24/7 Customer Support",
    description:
      "You can totally rely on our awesome team to help you out whenever you need!",
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center bg-black py-20">
      <div className="w-full max-w-[1240px] px-5 flex flex-col gap-14">
        <header className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-white text-5xl tracking-[-1.44px] leading-[57.6px] [font-family:'Urbanist',Helvetica]">
              Why Choose Ezora?
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dedede] text-base tracking-[-0.48px] leading-[22.4px]">
              At Ezora, we&apos;re proud to partner with some of the most
              innovative
              <br />
              and trusted companies in the world.
            </p>
          </div>
          <Button className="h-14 px-8 bg-[#519b91] hover:bg-[#458075] rounded-full [font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.48px]">
            Contact Us
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Button>
        </header>

        <div className="w-full flex items-center justify-center">
          <img
            className="w-full h-auto max-h-[514px] object-contain"
            alt="Paused"
            src="/paused.svg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[70px] gap-y-[56px]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-8">
              <img
                className="w-[68px] h-[68px] flex-shrink-0"
                alt="Icon wrap"
                src={feature.icon}
              />
              <div className="flex flex-col gap-2">
                <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[-0.48px] leading-[28.8px]">
                  {feature.title}
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#cdcdcd] text-base tracking-[-0.48px] leading-[22.4px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
