import React from "react";

export const GallerySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black py-16 sm:py-20">
    <div className="flex flex-col items-center gap-10 sm:gap-14 px-4 sm:px-8">
      
      {/* Heading and description */}
      <div className="flex flex-col items-center gap-5 sm:gap-7">
        <h2 className="font-bold text-[#22535D] text-3xl sm:text-4xl md:text-5xl text-center tracking-[-1px] sm:tracking-[-1.44px] leading-tight sm:leading-[57.6px] [font-family:'Urbanist',Helvetica]"
        data-aos="zoom-out">
          Discover the Moments
        </h2>
  
        <div className="flex flex-col items-center gap-[2px] sm:gap-[1.4px]">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e1e1e1] text-sm sm:text-base text-center tracking-[-0.4px] sm:tracking-[-0.48px] leading-[20px] sm:leading-[22.4px]"
          data-aos="zoom-out"
          data-aos-duration='1000'>
            Explore our gallery for stunning travel photos and the
          </p>
  
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e1e1e1] text-sm sm:text-base text-center tracking-[-0.4px] sm:tracking-[-0.48px] leading-[20px] sm:leading-[22.4px]"
          data-aos="zoom-out"
          data-aos-duration='1000'>
            best vibes from Ezora!
          </p>
        </div>
      </div>
  
      {/* Image section */}
      <div className="overflow-hidden w-full rounded-lg">
        <img
          className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover object-center transition-transform duration-500 "
          alt="Gallery wrapper"
          src="/gallery-wrapper----primary.svg"
        />
      </div>
    </div>
  </section>
  
  );
};
