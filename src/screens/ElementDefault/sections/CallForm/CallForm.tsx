import {
    ArrowRightIcon,
    FileEditIcon,
    MailIcon,
    PhoneIcon,
    UserIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../../../components/ui/button";
  import { Card, CardContent } from "../../../../components/ui/card";
  import { Input } from "../../../../components/ui/input";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../../components/ui/select";
  import { Textarea } from "../../../../components/ui/textarea";
  
  const navigationItems = [
    { label: "home", width: "w-[65px]" },
    { label: "Packages", width: "w-[100px]" },
    { label: "LOGO", width: "w-[140px]", isLogo: true },
    { label: "About", width: "w-[100px]" },
    { label: "Contact", width: "w-[100px]" },
  ];
  
  export const ContactFormSection = (): JSX.Element => {
    return (
      <section className="relative w-full">
      {/* Background image + overlay */}
      <div className="relative w-full h-[418px] -top-28 flex bg-[url(/background-image---background-image.png)] bg-cover bg-center">
        <div className="w-full h-[418px] bg-[#04040466]" />
      </div>
    
      {/* Main Content */}
      <div className="relative w-full px-6 sm:px-10 md:px-[100px] -mt-[314px]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 items-center md:items-start">
          
          {/* Left Section */}
          <div
            className="w-full md:w-[448.69px] flex flex-col gap-16 md:gap-[120.5px] text-center md:text-left"
          >
            <h1
              data-aos="fade-right"
              data-aos-delay="0"
              className="mt-[23px] font-extrabold text-[36px] sm:text-[44px] md:text-[56px] tracking-[-1px] md:tracking-[-1.12px] leading-tight md:leading-[67.2px] [font-family:'Urbanist',Helvetica] text-white"
            >
              Book Destination? <br className="hidden sm:block" />
              Get in Touch
            </h1>
    
            <div className="flex flex-col gap-12 sm:gap-[83px] items-center md:items-start">
              <img
                data-aos="fade-right"
                data-aos-delay="200"
                className="w-[160px] sm:w-[180px] md:w-[203px] h-auto"
                alt="Client image stack"
                src="/client-image-stack.svg"
              />
    
              <div
                data-aos="fade-right"
                data-aos-delay="400"
                className="flex flex-col gap-3 sm:gap-[12.5px]"
              >
                <h2 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#22535D] text-[28px] sm:text-[32px] md:text-[40px] tracking-[-1px] leading-tight md:leading-[48px] whitespace-nowrap">
                  Respond in 2–3 hours
                </h2>
    
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d7dadd] text-sm sm:text-base tracking-[-0.4px] sm:tracking-[-0.48px] leading-[20px] sm:leading-[22.4px]">
                  Got questions or need travel advice? Our friendly <br className="hidden sm:block" />
                  team is here to help you plan your dream trip and <br className="hidden sm:block" />
                  make it unforgettable!
                </p>
              </div>
            </div>
          </div>
    
          {/* Form Section */}
          <Card
            data-aos="zoom-out"
            data-aos-delay="600"
            className="w-full md:w-[60%] lg:w-[65%] bg-[#22535D] rounded-[32px] border-0 shadow-none"
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {/* Name */}
                  <div className="relative">
                    <Input
                      placeholder="Enter your name"
                      className="h-12 sm:h-14 rounded-full border-[#cfd1d0] pl-4 pr-10 [font-family:'DM_Sans',Helvetica] text-sm sm:text-base placeholder:text-[#a0a3a1]"
                    />
                    <UserIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a3a1]" />
                  </div>
    
                  {/* Phone */}
                  <div className="relative">
                    <Input
                      placeholder="Enter your Phone"
                      className="h-12 sm:h-14 rounded-full border-[#cfd1d0] pl-4 pr-10 [font-family:'DM_Sans',Helvetica] text-sm sm:text-base placeholder:text-[#a0a3a1]"
                    />
                    <PhoneIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a3a1]" />
                  </div>
    
                  {/* Email */}
                  <div className="relative">
                    <Input
                      placeholder="Enter your email"
                      className="h-12 sm:h-14 rounded-full border-[#cfd1d0] pl-4 pr-10 [font-family:'DM_Sans',Helvetica] text-sm sm:text-base placeholder:text-[#a0a3a1]"
                    />
                    <MailIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a3a1]" />
                  </div>
    
                  {/* Select */}
                  <Select>
                    <SelectTrigger className="h-12 sm:h-14 rounded-full border-[#cfd1d0] [font-family:'DM_Sans',Helvetica] text-sm sm:text-base text-[#a0a3a1]">
                      <SelectValue placeholder="Select Trip Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="leisure">Leisure</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
    
                {/* Message */}
                <div className="relative">
                  <Textarea
                    placeholder="Leave a message"
                    className="min-h-[160px] sm:min-h-[206px] rounded-3xl border-[#cfd1d0] pt-4 sm:pt-[17px] pl-4 sm:pl-6 pr-10 [font-family:'DM_Sans',Helvetica] text-sm sm:text-base placeholder:text-[#a0a3a1] resize-none"
                  />
                  <FileEditIcon className="absolute right-6 top-[18px] w-5 h-5 text-[#a0a3a1]" />
                </div>
    
                {/* Submit Button */}
                <Button className="h-12 sm:h-14 bg-white hover:bg-white/90 rounded-full [font-family:'DM_Sans',Helvetica] font-semibold text-sm sm:text-base text-[#22535D] tracking-[-0.48px]">
                  Submit Message
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    

    );
  };
  