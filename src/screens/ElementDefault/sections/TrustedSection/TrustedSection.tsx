import React from "react";

export const TrustedSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center py-24">
      <div className="w-full max-w-[1240px] px-5 flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 max-w-[690px]">
          <h2 className="[font-family:'Urbanist',Helvetica] font-bold text-white text-5xl text-center tracking-[-1.44px] leading-[57.6px]">
            Trusted by Top Brands Worldwide
          </h2>

          <div className="flex flex-col items-center gap-[1.4px]">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d7d7d7] text-base text-center tracking-[-0.48px] leading-[22.4px]">
              At Ezora, we&apos;re proud to partner with some of the most
              innovative
            </p>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d7d7d7] text-base text-center tracking-[-0.48px] leading-[22.4px]">
              and trusted companies in the world.
            </p>
          </div>
        </div>

        <img
          className="w-full max-w-[1200px] h-auto"
          alt="Logos container"
          src="/logos-container.svg"
        />
      </div>
    </section>
  );
};
