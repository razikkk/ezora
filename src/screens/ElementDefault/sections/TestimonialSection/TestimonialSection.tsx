import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    id: 1,
    title: "Seamless and Stress-Free!",
    rating: "",
    quote:
      "The guided hiking tour was breathtaking, and the accommodations were top-notch. Ezora made my dream vacation a reality!",
    userName: "Andrew Scott",
    userRole: "Solo Traveler",
    userImage: "/user-image---user-image.png",
    cardImage: "/card-image---testimonial-image.png",
    isSmall: true,
  },
  {
    id: 2,
    title: "Best Travel Experience Ever!",
    rating: "4.8/5",
    quote:
      "I've been on many trips, but Ezora stands out for their attention to detail and friendly guides. The mountain biking tour was thrilling!",
    userName: "Matthew Logan",
    userRole: "Adventure Seeker",
    userImage: "/user-image---user-image-1.png",
    cardImage: "/card-image---travel-image.png",
    isSmall: false,
  },
];

export const TestimonialSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center bg-black py-24">
      <div className="w-full max-w-[1240px] px-4">
        <header className="text-center mb-16">
          <h2 className="[font-family:'Urbanist',Helvetica] font-bold text-white text-5xl tracking-[-1.44px] leading-[57.6px] mb-4">
            What Our Travelers Are Saying
          </h2>
          <div className="flex flex-col gap-[1.4px] items-center">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-neutral-300 text-base text-center tracking-[-0.48px] leading-[22.4px]">
              See what our travelers have to say about their unforgettable
              experiences
            </p>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-neutral-300 text-base text-center tracking-[-0.48px] leading-[22.4px]">
              with Ezora. Let their stories inspire your next adventure!
            </p>
          </div>
        </header>

        <div className="relative">
          <div className="flex gap-10 justify-center items-center mb-16">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className={`bg-black rounded-2xl border-0 overflow-hidden ${
                  testimonial.isSmall
                    ? "w-[648.8px] h-[285.98px] opacity-45"
                    : "w-[811px] h-[357.47px]"
                }`}
              >
                <CardContent className="p-0 h-full relative">
                  <div
                    className={`absolute top-0 left-0 h-full rounded-2xl bg-cover bg-center ${
                      testimonial.isSmall ? "w-[261.8px]" : "w-[327px]"
                    }`}
                    style={{ backgroundImage: `url(${testimonial.cardImage})` }}
                  />
                  <div
                    className={`absolute flex flex-col ${
                      testimonial.isSmall
                        ? "top-[calc(50%-134px)] left-[287px] w-[336px] h-[268px] gap-[46.4px]"
                        : "top-[calc(50%-167px)] left-[359px] w-[420px] h-[334px] gap-[58px]"
                    }`}
                  >
                    <div
                      className={`flex flex-col ${testimonial.isSmall ? "gap-[19.6px] mt-[25.6px]" : "gap-[24.5px] mt-8"}`}
                    >
                      <div
                        className={`flex flex-col ${testimonial.isSmall ? "gap-[6.6px]" : "gap-[8.3px]"}`}
                      >
                        <h3
                          className={`text-white font-semibold [font-family:'Urbanist',Helvetica] ${
                            testimonial.isSmall
                              ? "text-[19.2px] tracking-[-0.38px] leading-[23.0px]"
                              : "text-2xl tracking-[-0.48px] leading-[28.8px]"
                          }`}
                        >
                          {testimonial.title}
                        </h3>
                        {testimonial.rating && (
                          <div className="flex">
                            <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#e2e2e2] text-base tracking-[-0.48px] leading-[22.4px] ml-[69px]">
                              {testimonial.rating}
                            </span>
                          </div>
                        )}
                      </div>
                      <p
                        className={`[font-family:'DM_Sans',Helvetica] font-normal ${
                          testimonial.isSmall
                            ? "text-[#dadada] text-[12.8px] tracking-[-0.38px] leading-[17.9px]"
                            : "text-[#e2e2e2] text-base tracking-[-0.48px] leading-[22.4px]"
                        }`}
                      >
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Avatar
                        className={
                          testimonial.isSmall
                            ? "w-[50px] h-[49.6px]"
                            : "w-[62px] h-[62px]"
                        }
                      >
                        <AvatarImage
                          src={testimonial.userImage}
                          alt={testimonial.userName}
                          className="rounded-[7.75px]"
                        />
                      </Avatar>
                      <div className="flex flex-col gap-[1.5px]">
                        <p
                          className={`[font-family:'DM_Sans',Helvetica] font-semibold ${
                            testimonial.isSmall
                              ? "text-[#dadada] text-[12.8px] tracking-[-0.38px] leading-[19.2px]"
                              : "text-[#e2e2e2] text-base tracking-[-0.48px] leading-6"
                          }`}
                        >
                          {testimonial.userName}
                        </p>
                        <p
                          className={`[font-family:'DM_Sans',Helvetica] font-normal ${
                            testimonial.isSmall
                              ? "text-[#dadada] text-[11.2px] tracking-[-0.34px] leading-[16.8px]"
                              : "text-[#e2e2e2] text-sm tracking-[-0.42px] leading-[21px]"
                          }`}
                        >
                          {testimonial.userRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              className="h-[72px]"
              alt="Slideshow pagination controls"
              src="/fieldset---slideshow-pagination-controls.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
