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
        <div className="relative w-full h-[418px] -top-28 flex bg-[url(/background-image---background-image.png)] bg-cover bg-[50%_50%]">
          <div className="w-full h-[418px] bg-[#04040466]" />
        </div>
  
        <div className="relative w-full px-[100px] -mt-[314px]">
          <div className="flex gap-5">
            <div className="w-[448.69px] flex flex-col gap-[120.5px]">
              <h1 className="mt-[23px] font-extrabold text-[56px] tracking-[-1.12px] leading-[67.2px] [font-family:'Urbanist',Helvetica] text-white">
                Book Destination? <br />
                Get in Touch
              </h1>
  
              <div className="flex flex-col gap-[83px]">
                <img
                  className="w-[203px] h-[59px]"
                  alt="Client image stack"
                  src="/client-image-stack.svg"
                />
  
                <div className="flex flex-col gap-[12.5px]">
                  <h2 className="[font-family:'Urbanist',Helvetica] font-semibold text-[#22535D] text-[40px] tracking-[-1.20px] leading-[48px] whitespace-nowrap">
                    Respond in 2-3 hours
                  </h2>
  
                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#d7dadd] text-base tracking-[-0.48px] leading-[22.4px]">
                    Got questions or need travel advice? Our friendly <br />
                    team is here to help you plan your dream trip and <br />
                    make it unforgettable!
                  </p>
                </div>
              </div>
            </div>
  
            <Card className="flex-1 bg-[#22535D] rounded-[32px] border-0 shadow-none">
              <CardContent className="p-8">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="relative">
                        <Input
                          placeholder="Enter your name"
                          className="h-14 rounded-[999px] border-[#cfd1d0] pl-4 pr-10 [font-family:'DM_Sans',Helvetica] text-base tracking-[-0.48px] placeholder:text-[#a0a3a1]"
                        />
                        <UserIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a3a1]" />
                      </div>
  
                      <div className="relative">
                        <Input
                          placeholder="Enter your Phone"
                          className="h-14 rounded-[999px] border-[#cfd1d0] pl-4 pr-10 [font-family:'DM_Sans',Helvetica] text-base tracking-[-0.48px] placeholder:text-[#a0a3a1]"
                        />
                        <PhoneIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a3a1]" />
                      </div>
                    </div>
  
                    <div className="grid grid-cols-2 gap-8">
                      <div className="relative">
                        <Input
                          placeholder="Enter your email"
                          className="h-14 rounded-[999px] border-[#cfd1d0] pl-4 pr-10 [font-family:'DM_Sans',Helvetica] text-base tracking-[-0.48px] placeholder:text-[#a0a3a1]"
                        />
                        <MailIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a3a1]" />
                      </div>
  
                      <Select>
                        <SelectTrigger className="h-14 rounded-[999px] border-[#cfd1d0] [font-family:'DM_Sans',Helvetica] text-base tracking-[-0.48px] text-[#a0a3a1]">
                          <SelectValue placeholder="Select Trip Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adventure">Adventure</SelectItem>
                          <SelectItem value="leisure">Leisure</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
  
                    <div className="relative">
                      <Textarea
                        placeholder="Leave a message"
                        className="min-h-[206px] rounded-3xl border-[#cfd1d0] pt-[17px] pl-6 pr-10 [font-family:'DM_Sans',Helvetica] text-base tracking-[-0.48px] placeholder:text-[#a0a3a1] resize-none"
                      />
                      <FileEditIcon className="absolute right-6 top-[18px] w-5 h-5 text-[#a0a3a1]" />
                    </div>
                  </div>
  
                  <Button className="h-14 bg-white hover:bg-white/90 rounded-[999px] [font-family:'DM_Sans',Helvetica] font-semibold text-base text-[#22535D] tracking-[-0.48px]">
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
  