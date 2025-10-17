import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const reelCards = [
  {
    image: "/item---reels-04---reel-card-1---default.svg",
    type: "svg",
  },
  {
    image: "/item---reels-05---reel-card-1---default-1.svg",
    type: "svg",
  },
  {
    image: "/item---reels-06---reel-card-1---default.svg",
    type: "svg",
  },
  {
    image: "url(..//zqcrowyxqsr8vzx8sehmivwxo8-png.png)",
    type: "background",
    location: "Cox's Bazar, Bangladesh",
    title: "Relax at the World's Longest\nUnbroken Sandy Sea Beach",
  },
  {
    image: "url(..//djtjmrjtws5c9smqi6y5fz8fsm-png.png)",
    type: "background",
    location: "Caribbean Paradise",
    title: "Cruise Through Crystal-clear\nWaters and Hidden Coves",
  },
  {
    image: "url(..//zpegpwyjnw7sdscdjtnqw8t60-png.png)",
    type: "background",
    location: "Tropical Bliss in Bali",
    title: "Vibrant Culture and Lush\nLandscapes",
  },
  {
    image: "url(..//o8slszcs1i5zaayyommxq66e3o-png.png)",
    type: "background",
    location: "Mystic Himalayas",
    title: "Spiritual Journeys in the\nNepal & Bhutan",
  },
  {
    image: "url(..//zpbzekyhlolypxubt3f2nm7z9ei-png.png)",
    type: "background",
    location: "Parisian Romance",
    title: "The Ultimate Getaway in the\nCity of Lights",
  },
  {
    image: "/item---reels-05---reel-card-1---default.svg",
    type: "svg",
  },
  {
    image: "/item---reels-06---reel-card-1---default-1.svg",
    type: "svg",
  },
  {
    image: "/item---reels-07---reel-card-1---default.svg",
    type: "svg",
  },
];

export const VideoReelsSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 relative">
      <div className="container mx-auto px-4">
        <header className="flex flex-col items-center gap-3 mb-[148px]">
          <h2 className="font-bold text-white text-5xl text-center tracking-[-1.44px] leading-[57.6px] [font-family:'Urbanist',Helvetica]">
            Travel Stories You Can Feel
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e2e2e2] text-base text-center tracking-[-0.48px] leading-[22.4px]">
            Inspiring destinations, unforgettable memories.
          </p>
        </header>

        <div className="flex flex-col items-center gap-12">
          <div className="w-full overflow-hidden">
            <div
              className="flex gap-[21px] animate-marquee"
              style={{ width: "max-content" }}
            >
              {reelCards.map((card, index) => (
                <div key={index} className="w-[371px] h-[527px] flex-shrink-0">
                  {card.type === "svg" ? (
                    <img
                      className="w-full h-full"
                      alt="Item reels reel"
                      src={card.image}
                    />
                  ) : (
                    <Card className="w-full h-full border-0 rounded-xl overflow-hidden bg-transparent">
                      <CardContent
                        className="p-0 w-full h-full flex items-end"
                        style={{
                          background: `${card.image} 50% 50% / cover`,
                        }}
                      >
                        <div className="w-full h-[136px] flex flex-col gap-[7.5px] rounded-xl backdrop-blur-[1.25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.25px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]">
                          <div className="mx-6 mt-6 flex items-center gap-2 h-[22.4px]">
                            <img
                              className="w-4 h-4"
                              alt="Icon map icon"
                              src="/icon---map-icon.svg"
                            />
                            <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[-0.48px] leading-[22.4px]">
                              {card.location}
                            </span>
                          </div>
                          <div className="mx-6 [font-family:'Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[-0.48px] leading-[28.8px]">
                            {card.title?.split("\n").map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                {i <
                                  (card.title?.split("\n").length || 0) - 1 && (
                                  <br />
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </div>

          <img
            className="h-[72px]"
            alt="Fieldset slideshow"
            src="/fieldset---slideshow-pagination-controls.svg"
          />
        </div>
      </div>
    </section>
  );
};
