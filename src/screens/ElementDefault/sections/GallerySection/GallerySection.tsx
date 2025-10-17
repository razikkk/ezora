import React from "react";

export const GallerySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-7">
          <h2 className="font-bold text-white text-5xl text-center tracking-[-1.44px] leading-[57.6px] whitespace-nowrap [font-family:'Urbanist',Helvetica]">
            Discover the Moments
          </h2>

          <div className="flex flex-col items-center gap-[1.4px]">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e1e1e1] text-base text-center tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
              Explore our gallery for stunning travel photos and the
            </p>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e1e1e1] text-base text-center tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
              best vibes from Ezora!
            </p>
          </div>
        </div>

        <div className="overflow-hidden w-full">
  <img
    className="w-full h-[500px] object-cover object-center"
    alt="Gallery wrapper"
    src="/gallery-wrapper----primary.svg"
  />
</div>
      </div>
    </section>
  );
};
