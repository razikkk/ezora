import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const CallToActionSection = (): JSX.Element => {
  return (
  <section className="w-full flex justify-center py-20 bg-transparent px-4 md:px-8">
  <div className="w-full max-w-[1200px] bg-white rounded-3xl p-6 md:p-12 lg:p-[72px] flex flex-col lg:flex-row items-center justify-between gap-12 mx-auto">
    {/* Left Text Section */}
    <div className="flex-1 max-w-[577px] flex flex-col gap-8 text-center lg:text-left">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-[#111318] text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[36px] lg:leading-[38.4px] tracking-[-0.96px] [font-family:'Urbanist',Helvetica]">
          Stay Updated on the Latest Adventures,
          <br className="hidden lg:block" />
          Tips, and Exclusive Offers.
        </h2>

        <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4e5255] text-sm md:text-base leading-[22px] md:leading-[22.4px] tracking-[-0.48px]">
          Never miss out on travel tips, exclusive offers, and inspiring
          destinations. Subscribe to our newsletter and let the adventure come
          straight to your inbox!
        </p>
      </div>

      {/* Email Input & Button */}
      <div className="flex items-center w-full max-w-[600px] mx-auto">
  <Input
    type="email"
    placeholder="Enter your email"
    className="flex-1 h-14 rounded-[50px] border border-[#cfd1d0] px-6 [font-family:'DM_Sans',Helvetica] font-normal text-[#4e5255] text-base tracking-[-0.48px] focus:outline-none focus:ring-2 focus:ring-[#22535D]"
  />
  <Button className="h-14 px-4 bg-[#22535D] hover:bg-[#2C6672] rounded-[50px] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.48px]">
    Subscribe
  </Button>
</div>

    </div>

    {/* Right Image Section */}
    <div className="relative w-[280px] md:w-[350px] lg:w-[391px] h-[350px] md:h-[400px] lg:h-[429px] flex-shrink-0">
      <img
        className="absolute w-[90%] top-0 left-0 h-[90%] object-contain"
        alt="Image wrap"
        src="/image-wrap.svg"
      />

      <Card className="absolute w-[60%] left-[35%] bottom-0 h-[100px] md:h-[108px] bg-white rounded-xl shadow-[4.04px_4.04px_49.99px_#97979726] border-0">
        <div className="absolute w-full h-full top-0 left-0 bg-[url(/shape---shape.png)] bg-cover bg-center rounded-xl" />
        <CardContent className="relative p-4 md:p-6 flex flex-col gap-1 md:gap-2 items-center md:items-start">
          <div className="[font-family:'Urbanist',Helvetica] text-[#111318] text-xl md:text-2xl tracking-[0] leading-[normal]">
            <span className="font-semibold">120</span>
            <span className="font-bold">+</span>
          </div>

          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#001d22] text-sm md:text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
            Countries to Explore
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


  );
};
