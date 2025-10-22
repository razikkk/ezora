import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const locations = [
  {
    title: "Global Travel HQ",
    address: "123 Wanderlust Avenue\nExplorer City, Wanderland\n45678",
  },
  {
    title: "Dreamscape Travels",
    address: "33 Explorer's Circle Horizon\nCity, Globe State 43218",
  },
  {
    title: "Journey Makers",
    address: "45 Compass Road Nomad\nCity, Horizon 12367",
  },
];

const contactInfo = [
  {
    icon: "/call-icon-wrap-2.svg",
    text: "+123 456 789 11",
  },
  {
    icon: "/call-icon-wrap-3.svg",
    text: "Mon-Sun : 24 hours",
  },
  {
    icon: "/call-icon-wrap-4.svg",
    text: "ezora@gmail.com",
  },
];

export const ContactInfoSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center bg-black py-20">
      <div className="w-full max-w-[1240px] px-5">
        <h2 className="[font-family:'Urbanist',Helvetica] font-bold text-[#22535D] text-5xl text-center tracking-[-1.44px] leading-[57.6px] mb-[58px]">
          Find Us Here
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="bg-[#22535D] rounded-3xl border border-[#cfd1d0]"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1 flex flex-col gap-[16.5px] mb-6">
                    <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-xl tracking-[0] leading-6">
                      {location.title}
                    </h3>
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] whitespace-pre-line">
                      {location.address}
                    </p>
                  </div>
                  <button className="flex items-center gap-[7.5px] w-fit">
                    <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.48px] leading-6">
                      View Map
                    </span>
                    <img
                      className="w-6 h-6"
                      alt="Icon wrap icon arrow"
                      src="/call-icon-wrap---icon---fvblnoysu2gfs4mlgl24mw2yqi-svg.svg"
                    />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:w-[255px] flex flex-col gap-3">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 h-12">
                <img className="h-12 w-12" alt="Icon wrap" src={info.icon} />
                <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dbdbdb] text-base tracking-[-0.48px] leading-[22.4px]">
                  {info.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
