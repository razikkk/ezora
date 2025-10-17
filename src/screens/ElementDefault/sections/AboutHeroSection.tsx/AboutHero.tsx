import { MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const destinationImages = [
  {
    src: "/destination-image.png",
    alt: "Destination 1",
    isCenter: false,
  },
  {
    src: "/destination-image-1.png",
    alt: "Destination 2",
    isCenter: false,
  },
  {
    src: "/destination-image-2.png",
    alt: "Sydney Opera House",
    isCenter: true,
    location: "Sydney, Australia",
    title: "Sydney Opera House",
  },
  {
    src: "/destination-image-3.png",
    alt: "Destination 4",
    isCenter: false,
  },
  {
    src: "/destination-image-4.png",
    alt: "Destination 5",
    isCenter: false,
  },
];

export const AboutHeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 px-5">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-6 max-w-[873px]">
            <header className="flex flex-col items-center gap-[0.2px]">
              <h1 className="[font-family:'Urbanist',Helvetica] font-extrabold text-white text-[56px] text-center tracking-[-1.12px] leading-[67.2px] whitespace-nowrap">
                We Are World Best Travel
              </h1>
              <h1 className="[font-family:'Urbanist',Helvetica] font-extrabold text-white text-[56px] text-center tracking-[-1.12px] leading-[67.2px] whitespace-nowrap">
                Agency Company Since 2000
              </h1>
            </header>

            <div className="flex flex-col items-center gap-[1.4px]">
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dadada] text-base text-center tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
                Find your next adventure with Ezora. From relaxing retreats to
                exciting
              </p>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dadada] text-base text-center tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
                explorations, we&apos;ve got the perfect destination for you!
              </p>
            </div>

            <Button className="h-14 w-[170px] bg-[#519b91] hover:bg-[#458075] rounded-full [font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.48px] gap-2">
              Explore Now
              <img
                className="w-6 h-4"
                alt="Arrow icon"
                src="/icon-wrap---icon---fvblnoysu2gfs4mlgl24mw2yqi-svg.svg"
              />
            </Button>
          </div>

          <div className="w-full grid grid-cols-5 gap-5">
            {destinationImages.map((destination, index) => (
              <div
                key={index}
                className={`${
                  destination.isCenter ? "col-span-2" : "col-span-1"
                } rounded-[30px] overflow-hidden`}
              >
                {destination.isCenter ? (
                  <Card className="relative h-[327px] rounded-3xl overflow-hidden border-0 bg-transparent">
                    <CardContent className="p-0 h-full">
                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${destination.src})` }}
                      >
                        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_61%,rgba(0,0,0,1)_100%)] opacity-40" />
                        <div className="absolute w-full left-0 bottom-0 h-[89px] gap-2 bg-[#00000003] rounded-[0px_0px_24px_24px] backdrop-blur-[17.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.35px)_brightness(100%)] flex flex-col px-[21px] py-[15px]">
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="w-4 h-4 text-white" />
                            <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px] whitespace-nowrap">
                              {destination.location}
                            </span>
                          </div>
                          <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[-0.48px] leading-[28.8px] whitespace-nowrap">
                            {destination.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div
                    className="h-[327px] w-full rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.src})` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
