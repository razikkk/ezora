import React from "react";

import { Button } from "../../../../components/ui/button";

const quickLinks = [
  { label: "Home", href: "#", active: false },
  { label: "About Us", href: "#", active: true },
  { label: "Destination", href: "#", active: false },
  { label: "Blog & Articles", href: "#", active: false },
];

const supportLinks = [
  { label: "Contact Us", href: "#" },
  { label: "Support Center", href: "#" },
  { label: "Services", href: "#" },
  { label: "404", href: "#" },
];

const contactInfo = [
  {
    icon: "/icon-wrap-1.svg",
    text: "ezora@gmail.com",
  },
  {
    icon: "/icon-wrap.svg",
    text: "4886 Stroman Drive, South\nStranton, California",
  },
];

export const FooterDesktopSection = (): JSX.Element => {
  const footerLinks = [
    { text: "Terms & Agreements" },
    { text: "Privacy Policy" },
  ];

  return (
    <footer className="w-full bg-black  ">
    <div className="max-w-[1200px] mx-auto px-[120px] py-[120px]">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4 flex flex-col gap-14">
          <div className="flex flex-col gap-[43.2px]">
            <div className="[font-family:'Font_Awesome_6_Brands-Regular',Helvetica] font-normal text-white text-[44px] tracking-[-0.48px] leading-[86.4px]">
              LOGO
            </div>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e7e7e7] text-base tracking-[-0.48px] leading-[22.4px]">
              Explore amazing destinations with ease. We plan
              <br />
              everything for you, from flights to stays, so you can
              <br />
              relax and enjoy unforgettable adventures.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#e7e7e7] text-lg tracking-[-0.54px] leading-[25.2px]">
              Follow Us on
            </span>
            <img
              className="w-[116px] h-5"
              alt="Social media icon"
              src="/social-media-icon-stack.svg"
            />
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-3 gap-8">
          <nav className="flex flex-col gap-6">
            <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-2xl tracking-[-0.48px] leading-[28.8px]">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-[17.4px]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className={`h-auto p-0 [font-family:'DM_Sans',Helvetica] font-normal text-base tracking-[-0.48px] leading-[22.4px] ${
                      link.active ? "text-[#519b91]" : "text-[#e7e7e7]"
                    }`}
                    asChild
                  >
                    <a href={link.href}>{link.label}</a>
                  </Button>
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
                  <Button
                    variant="link"
                    className="h-auto p-0 [font-family:'DM_Sans',Helvetica] font-normal text-[#e7e7e7] text-base tracking-[-0.48px] leading-[22.4px]"
                    asChild
                  >
                    <a href={link.href}>{link.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-2xl tracking-[-0.48px] leading-[28.8px]">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <img
                    className="h-12 w-12 flex-shrink-0"
                    alt="Icon wrap"
                    src={contact.icon}
                  />
                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] whitespace-pre-line">
                    {contact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full bg-[#519b91] py-8">
      <div className="max-w-[1200px] mx-auto px-[120px] flex items-center justify-between">
        <div className="flex items-center [font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px]">
          <span>© Copyrights 2025</span>
          <span className="ml-1">Ezora</span>
          <span>. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-8">
          <Button
            variant="link"
            className="h-auto p-0 [font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px]"
            asChild
          >
            <a href="#">Terms & Agreements</a>
          </Button>
          <Button
            variant="link"
            className="h-auto p-0 [font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px]"
            asChild
          >
            <a href="#">Privacy Policy</a>
          </Button>
        </div>
      </div>
    </div>
  </footer>
  );
};
