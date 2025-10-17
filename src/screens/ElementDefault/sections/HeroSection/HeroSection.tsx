import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[713px]">
      <div className="absolute w-full h-[calc(100%_-_62px)] -top-20 left-0 bg-[url(/background-wrap---background-image---hero-background.png)] bg-cover bg-[50%_50%]" />

      <div className="relative w-full h-full flex items-center justify-center px-[100px]">
        <div className="flex flex-col gap-8 max-w-[572px]">
          <div className="flex flex-col gap-[24.5px]">
            <div className="relative">
              <div className="absolute w-[53.00%] left-[240px]  top-[70px] h-[68px] bg-white rounded-lg" />

              <h1 className="relative font-extrabold text-[56px] tracking-[-1.12px] leading-[67.2px] text-center [font-family:'Urbanist',Helvetica]">
                <span className="text-white tracking-[-0.63px]">
                  Let Us Turn Your Travel <br />
                  Dreams&nbsp;&nbsp;
                </span>

                <span className="text-[#519b91] tracking-[-0.63px]">
                  Into Reality
                </span>
              </h1>
            </div>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] text-center">
              Explore amazing destinations with ease. We plan everything for
              you, from flights <br />
              to stays, so you can relax and enjoy unforgettable adventures.
            </p>
          </div>

          <div className="flex gap-6 items-center justify-center">
            <Button className="w-[170.16px] h-14 bg-[#519b91] hover:bg-[#458075] rounded-full [font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.48px]">
              Explore Now
              <img
                className="w-6 h-4 ml-2"
                alt="Icon wrap icon"
                src="/icon-wrap---icon---fvblnoysu2gfs4mlgl24mw2yqi-svg.svg"
              />
            </Button>

            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
              <div className="flex items-center gap-[24px]">
                <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.48px] leading-4 whitespace-nowrap">
                  Watch Our Story
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
