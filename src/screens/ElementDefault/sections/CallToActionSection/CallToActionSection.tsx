import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-20 bg-transparent">
  <div className="w-full max-w-[1200px] bg-white rounded-3xl p-[72px] flex items-center justify-between gap-12 mx-auto">
    <div className="flex-1 max-w-[577px] flex flex-col gap-11">
      <div className="flex flex-col gap-[13px]">
        <h2 className="font-semibold text-[#111318] text-[32px] tracking-[-0.96px] leading-[38.4px] [font-family:'Urbanist',Helvetica]">
          Stay Updated on the Latest Adventures,
          <br />
          Tips, and Exclusive Offers.
        </h2>

        <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#4e5255] text-base tracking-[-0.48px] leading-[22.4px]">
          Never miss out on travel tips, exclusive offers, and inspiring
          destinations. Subscribe
          <br />
          to our newsletter and let the adventure come straight to your inbox!
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1 h-14 rounded-[999px] border-[#cfd1d0] px-6 [font-family:'DM_Sans',Helvetica] font-normal text-[#4e5255] text-base tracking-[-0.48px]"
        />
        <Button className="h-14 px-[26px] bg-[#519b91] hover:bg-[#458075] rounded-[999px] [font-family:'DM_Sans',Helvetica] font-semibold text-black text-base tracking-[-0.48px]">
          Subscribe
        </Button>
      </div>
    </div>

    <div className="relative w-[391px] h-[429px] flex-shrink-0">
      <img
        className="absolute w-[90%] top-0 left-0 h-[407px]"
        alt="Image wrap"
        src="/image-wrap.svg"
      />

      <Card className="absolute w-[56%] left-[44%] bottom-0 h-[108px] bg-black rounded-xl shadow-[4.04px_4.04px_49.99px_#97979726] border-0">
        <div className="absolute w-full h-full top-0 left-0 bg-[url(/shape---shape.png)] bg-cover bg-[50%_50%] rounded-xl" />
        <CardContent className="relative p-6 flex flex-col gap-2">
          <div className="[font-family:'Urbanist',Helvetica] text-[#111318] text-2xl tracking-[0] leading-[normal]">
            <span className="font-semibold">120</span>
            <span className="font-bold">+</span>
          </div>

          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#001d22] text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
            Countries to Explore
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

  );
};
