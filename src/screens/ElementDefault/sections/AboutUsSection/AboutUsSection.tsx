import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const statistics = [
  {
    value: "12",
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: "120",
    suffix: "+",
    label: "Destination Countries",
  },
  {
    value: "15",
    suffix: "K+",
    label: "Satisficed Clients",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center bg-black py-20">
  <div className="w-full max-w-[1240px] px-4">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* === LEFT TEXT SECTION === */}
      <div
        className="lg:col-span-4 flex flex-col gap-11"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="flex flex-col gap-3">
          <h2
            className="[font-family:'Urbanist',Helvetica] font-bold text-[#22535D] text-5xl tracking-[-1.44px] leading-[57.6px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join the Adventure <br />
            with Ezora!
          </h2>

          <p
            className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e7e7e7] text-base tracking-[-0.48px] leading-[22.4px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            At Ezora, we create lasting memories. As your travel <br />
            companion, we specialize in personalized experiences <br />
            tailored to your unique preferences.
          </p>
        </div>

        <Button
          className="w-fit bg-[#22535D] hover:bg-[#2C6672] rounded-full h-14 px-8 gap-2"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.48px]">
            Learn More
          </span>
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      {/* === CENTER IMAGES SECTION === */}
      <div
        className="lg:col-span-5 relative h-[382px]"
        data-aos="zoom-in-up"
        data-aos-delay="700"
        data-aos-duration="900"
      >
        <div className="absolute left-0 top-0 w-[37%] h-full">
          <div
            className="w-full h-[201px] bg-[url(/image-wrapper---about-image.png)] bg-cover bg-center rounded-xl transition-transform duration-500 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="800"
          />

          <Card
            className="absolute bottom-0 left-0 w-full h-[161px] bg-[#e7d3ff] border-0 rounded-xl overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <CardContent className="relative w-full h-full p-0">
              <img
                className="absolute w-[calc(100%_-_7px)] h-[calc(100%_-_3px)] top-0 left-[7px]"
                alt="Background shape"
                src="/background-shape---shape.svg"
              />

<div className="absolute top-[18px] left-[18px] w-[calc(100%_-_18px)] h-[125px]">
  <img
    className="absolute w-[70px] h-[70px] top-0 left-0"
    alt="Icon"
    src="/icon---icon.svg"
  />

  {/* 👉 Move slightly left on mobile using negative left */}
  <div className="absolute bottom-0 -left-4 sm:left-2 transition-all duration-300">
    <div className="[font-family:'Urbanist',Helvetica] font-semibold text-[#001d22] text-[25.7px] tracking-[-0.51px] leading-[30.8px] whitespace-nowrap">
      15+ Awards
    </div>
  </div>
</div>


            </CardContent>
          </Card>
        </div>

        <div
          className="absolute right-0 top-0 w-[60%] h-full rounded-xl bg-[url(/main-image---about-image.png)] bg-cover bg-center transition-transform duration-500 hover:scale-105"
          data-aos="fade-left"
          data-aos-delay="900"
        />
      </div>

      {/* === RIGHT STATISTICS SECTION === */}
      <div
        className="lg:col-span-3 flex flex-col gap-14"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="1000"
      >
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-1"
            data-aos="zoom-in"
            data-aos-delay={1100 + index * 150} // staggered stats
            data-aos-duration="600"
          >
            <div className="[font-family:'Urbanist',Helvetica] text-[#22535D] text-5xl leading-normal whitespace-nowrap">
              <span className="font-semibold">{stat.value}</span>
              <span className="font-bold">{stat.suffix}</span>
            </div>

            <div className="[font-family:'Urbanist',Helvetica] font-normal text-[#cbcccc] text-xl leading-6 whitespace-nowrap">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};
