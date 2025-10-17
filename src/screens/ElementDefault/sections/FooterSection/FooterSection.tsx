import React from "react";

const quickLinks = [
  { label: "Home", active: true },
  { label: "About Us", active: false },
  { label: "Destination", active: false },
  { label: "Blog & Articles", active: false },
];

const supportLinks = [
  { label: "Contact Us" },
  { label: "Support Center" },
  { label: "Services" },
  { label: "404" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-6">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px]">
              Explore amazing destinations with ease. We plan everything for
              you, from flights to stays, so you can relax and enjoy
              unforgettable adventures.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-lg tracking-[-0.54px] leading-[25.2px] whitespace-nowrap">
              Follow Us on
            </span>
            <img
              className="w-[116px] h-5"
              alt="Social media icon"
              src="/social-media-icon-stack.svg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <nav className="flex flex-col gap-6">
            <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-2xl tracking-[-0.48px] leading-[28.8px]">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-[17.4px]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`[font-family:'DM_Sans',Helvetica] font-normal text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap ${
                      link.active ? "text-[#519b91]" : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col gap-6">
            <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-2xl tracking-[-0.48px] leading-[28.8px]">
              Support
            </h3>
            <ul className="flex flex-col gap-[17.4px]">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-2xl tracking-[-0.48px] leading-[28.8px]">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img
                  className="h-12 w-12"
                  alt="Icon wrap"
                  src="/icon-wrap-1.svg"
                />
                <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
                  ezora@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-4">
                <img
                  className="h-12 w-12"
                  alt="Icon wrap"
                  src="/icon-wrap.svg"
                />
                <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px]">
                  4886 Stroman Drive, South Stanton, California
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
