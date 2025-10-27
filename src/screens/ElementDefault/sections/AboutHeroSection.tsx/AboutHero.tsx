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
    <section className="w-full py-16 px-4 sm:px-6 md:py-20 md:px-8">
    <div className="max-w-[1240px] mx-auto">
      <div className="flex flex-col items-center gap-12 md:gap-14">
  
        {/* === TEXT SECTION === */}
        <div className="flex flex-col items-center gap-6 max-w-[873px] text-center px-2">
  
          <header className="flex flex-col items-center gap-1">
  
            <div className="flex flex-wrap justify-center items-center gap-2">
              <h1
                className="[font-family:'Urbanist',Helvetica] font-extrabold text-[#22535D] text-3xl sm:text-4xl md:text-[56px] tracking-[-1.12px] leading-tight md:leading-[67.2px]"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
              >
                We Are World Best
              </h1>
  
              <h1
                className="[font-family:'Urbanist',Helvetica] font-extrabold text-white text-3xl sm:text-4xl md:text-[56px] tracking-[-1.12px] leading-tight md:leading-[67.2px]"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="800"
              >
                Travel Agency
              </h1>
            </div>
  
            <h1
              className="[font-family:'Urbanist',Helvetica] font-extrabold text-[#22535D] text-3xl sm:text-4xl md:text-[56px] tracking-[-1.12px] leading-tight md:leading-[67.2px]"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              Company Since 2000
            </h1>
  
          </header>
  
          <div className="flex flex-col items-center gap-1">
            <p
              className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dadada] text-sm sm:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              Find your next adventure with Ezora. From relaxing retreats to exciting
            </p>
            <p
              className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dadada] text-sm sm:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="550"
              data-aos-duration="700"
            >
              explorations, we&apos;ve got the perfect destination for you!
            </p>
          </div>
  
          <Button
            className="h-12 sm:h-14 w-[160px] sm:w-[170px] bg-[#22535D] hover:bg-[#2C6672] rounded-full [font-family:'DM_Sans',Helvetica] font-semibold text-white text-sm sm:text-base tracking-[-0.48px] gap-2"
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="700"
          >
            Explore Now
            <img
              className="w-5 sm:w-6 h-4"
              alt="Arrow icon"
              src="/icon-wrap---icon---fvblnoysu2gfs4mlgl24mw2yqi-svg.svg"
            />
          </Button>
        </div>
  
        {/* === IMAGE GRID === */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {destinationImages.map((destination, index) => (
            <div
              key={index}
              className={`${
                destination.isCenter
                  ? "col-span-2 sm:col-span-2 md:col-span-2"
                  : "col-span-1"
              } rounded-[20px] md:rounded-[30px] overflow-hidden`}
              data-aos="zoom-in"
              data-aos-delay={800 + index * 100} // staggered animation
              data-aos-duration="700"
            >
              {destination.isCenter ? (
                <Card className="relative h-[220px] sm:h-[260px] md:h-[327px] rounded-3xl overflow-hidden border-0 bg-transparent group">
                  <CardContent className="p-0 h-full">
                    <div
                      className="h-full w-full bg-cover bg-center transition-all duration-500 ease-in-out opacity-60 group-hover:opacity-100 group-hover:scale-105"
                      style={{ backgroundImage: `url(${destination.src})` }}
                    >
                      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-black/70 opacity-50 transition-opacity duration-500 group-hover:opacity-70" />
                      <div className="absolute w-full left-0 bottom-0 h-[80px] sm:h-[89px] gap-1 sm:gap-2 bg-[#00000003] rounded-b-[24px] backdrop-blur-[17px] flex flex-col px-[16px] sm:px-[21px] py-[10px] sm:py-[15px]">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <MapPinIcon className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                          <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-xs sm:text-sm tracking-[-0.48px]">
                            {destination.location}
                          </span>
                        </div>
                        <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-lg sm:text-2xl tracking-[-0.48px] leading-tight">
                          {destination.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div
                  className="h-[220px] sm:h-[260px] md:h-[327px] w-full rounded-2xl bg-cover bg-center transition-all duration-500 ease-in-out opacity-60 hover:opacity-100 hover:scale-105"
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
