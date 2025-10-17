import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const statsData = [
  {
    value: "5",
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: "5",
    suffix: "+",
    label: "Destination Countries",
  },
  {
    value: "5",
    suffix: "K+",
    label: "Satisficed Clients",
  },
  {
    value: "5",
    suffix: "+",
    label: "Satisficed Clients",
  },
];

export const AboutStorySection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center bg-black py-24">
      <div className="w-full max-w-[1240px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h2 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-[40px] tracking-[-1.20px] leading-[48px]">
                Our Story
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d7d7d7] text-base tracking-[-0.48px] leading-[22.4px]">
                Since 2000, we've been passionate about making travel simple,
                enjoyable, and memorable. What started as a small idea has grown
                into a trusted travel agency, helping thousands explore the
                world's most beautiful destinations. Our love for travel and
                commitment to exceptional service drives everything we do.
              </p>
            </div>

            <div className="w-full">
              <img
                className="w-full h-auto rounded-lg"
                alt="Image content mask"
                src="/image-content-mask-group.svg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h2 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-[40px] tracking-[-1.20px] leading-[48px]">
                Our Mission
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dadbdc] text-base tracking-[-0.48px] leading-[22.4px]">
                Our mission is to make travel easy, enjoyable, and
                unforgettable. We create personalized experiences, provide
                excellent service, and promote sustainable tourism. Our goal is
                to turn your travel dreams into amazing adventures.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {statsData.map((stat, index) => (
                <Card key={index} className="bg-[#f6f9ff] border-0 rounded-xl">
                  <CardContent className="p-8 flex flex-col gap-1">
                    <div className="[font-family:'Urbanist',Helvetica] text-black text-5xl leading-[normal]">
                      <span className="font-semibold">{stat.value}</span>
                      <span className="font-bold">{stat.suffix}</span>
                    </div>
                    <div className="[font-family:'Urbanist',Helvetica] font-normal text-[#252525] text-xl leading-6">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-[40px] tracking-[-1.20px] leading-[48px]">
                Our Vision
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dadbdc] text-base tracking-[-0.48px] leading-[22.4px]">
                Our vision is to inspire a love for travel, connecting people to
                the beauty and diversity of the world. We aim to redefine the
                way you explore by delivering experiences that are immersive,
                sustainable, and life-changing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
