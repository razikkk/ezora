import React from "react";

import { Button } from "../../../../components/ui/button";

const quickLinks = [
  { label: "Home", href: "/home", active: false },
  { label: "About Us", href: "/about", active: true },
  { label: "Destination", href: "/destination", active: false },
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
    <footer className="w-full bg-black">
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-[120px] py-12 sm:py-16 lg:py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
  
        {/* Left section */}
        <div className="lg:col-span-4 flex flex-col gap-10 sm:gap-14 text-center md:text-left"
             data-aos="zoom-out"
             data-aos-delay="0"
             data-aos-duration="800">
          <div className="flex flex-col gap-[10px] items-center md:items-start">
            <img
              src="/Logos-04.png"
              alt="Logo"
              className="w-[140px] sm:w-[170px] h-auto object-contain md:-ml-[40px]"
            />
  
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e7e7e7] text-sm sm:text-base leading-[22.4px]"
               data-aos="zoom-out"
               data-aos-delay="100"
               data-aos-duration="800">
              Explore amazing destinations with ease. We plan everything for you, from flights to stays, so you can relax and enjoy unforgettable adventures.
            </p>
          </div>
  
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4"
               data-aos="zoom-out"
               data-aos-delay="200"
               data-aos-duration="800">
            <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#e7e7e7] text-base sm:text-lg leading-[25.2px]">
              Follow Us on
            </span>
            <img
              className="w-[100px] sm:w-[116px] h-5"
              alt="Social media icons"
              src="/social-media-icon-stack.svg"
            />
          </div>
        </div>
  
        {/* Right Section */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 text-center md:text-left">
          
          {/* Quick Links */}
          <nav className="flex flex-col gap-5 sm:gap-6"
               data-aos="zoom-out"
               data-aos-delay="300"
               data-aos-duration="800">
            <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-xl sm:text-2xl">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-[14px] sm:gap-[17.4px]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className="h-auto p-0 [font-family:'DM_Sans',Helvetica] font-normal text-[#e7e7e7] text-sm sm:text-base leading-[22.4px]"
                    asChild
                  >
                    <a href={link.href}>{link.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
  
          {/* Support */}
          <nav className="flex flex-col gap-5 sm:gap-6"
               data-aos="zoom-out"
               data-aos-delay="400"
               data-aos-duration="800">
            <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-xl sm:text-2xl">
              Support
            </h3>
            <ul className="flex flex-col gap-[14px] sm:gap-[17.4px]">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className="h-auto p-0 [font-family:'DM_Sans',Helvetica] font-normal text-[#e7e7e7] text-sm sm:text-base leading-[22.4px]"
                    asChild
                  >
                    <a href={link.href}>{link.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
  
          {/* Contact */}
          <div className="flex flex-col gap-5 sm:gap-6 items-center sm:items-start"
               data-aos="zoom-out"
               data-aos-delay="500"
               data-aos-duration="800">
            <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#519b91] text-xl sm:text-2xl">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
                     data-aos="zoom-out"
                     data-aos-delay={600 + index * 100} // staggered for each contact item
                     data-aos-duration="800">
                  <img
                    className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
                    alt="Icon"
                    src={contact.icon}
                  />
                  <p className="[font-family:'DM_Sans',Helvetica] text-white text-sm sm:text-base leading-[22.4px] whitespace-pre-line text-center sm:text-left">
                    {contact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </div>
    </div>
  
    {/* Bottom Bar */}
    <div className="w-full bg-[#519b91] py-6 sm:py-8"
         data-aos="zoom-out"
         data-aos-delay="700"
         data-aos-duration="800">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-[120px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-center sm:text-left">
        <div className="[font-family:'DM_Sans',Helvetica] text-white text-sm sm:text-base leading-[22.4px]">
          © Copyrights 2025 <span className="font-semibold">Ezora</span>. All rights reserved.
        </div>
  
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <Button
            variant="link"
            className="h-auto p-0 [font-family:'DM_Sans',Helvetica] text-white text-sm sm:text-base leading-[22.4px]"
            asChild
          >
            <a href="#">Terms & Agreements</a>
          </Button>
          <Button
            variant="link"
            className="h-auto p-0 [font-family:'DM_Sans',Helvetica] text-white text-sm sm:text-base leading-[22.4px]"
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
