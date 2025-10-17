import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

const faqItems = [
  {
    id: "item-1",
    question: "How do I book a trip with Ezora?",
    answer: "",
  },
  {
    id: "item-2",
    question: "How do I book a trip with Ezora?",
    answer: "",
  },
  {
    id: "item-3",
    question: "How do I book a trip with Ezora?",
    answer: "",
  },
  {
    id: "item-4",
    question: "How do I book a trip with Ezora?",
    answer: "",
  },
  {
    id: "item-5",
    question: "How do I book a trip with Ezora?",
    answer: "",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-8 lg:gap-[116px] px-5 py-12">
      <div className="w-full lg:w-[392px] flex flex-col gap-11">
        <div className="flex flex-col gap-[12.6px]">
          <h2 className="font-bold text-white text-5xl tracking-[-1.44px] leading-[57.6px] [font-family:'Urbanist',Helvetica]">
            Frequently Asked <br />
            Questions
          </h2>

          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#dadcde] text-base tracking-[-0.48px] leading-[22.4px]">
            Have questions? We&apos;ve got answers! Learn <br />
            everything you need to plan your trip with Ezora <br />
            and enjoy a hassle-free journey.
          </p>
        </div>

        <Button className="w-[161.41px] h-14 bg-[#519b91] hover:bg-[#458075] rounded-full [font-family:'DM_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.48px] gap-2">
          Contact Us
          <img
            className="w-6 h-6"
            alt="Icon wrap icon"
            src="/icon-wrap---icon---fvblnoysu2gfs4mlgl24mw2yqi-svg.svg"
          />
        </Button>
      </div>

      <div className="w-full lg:flex-1 flex flex-col gap-8">
        <Accordion type="single" collapsible className="w-full space-y-8">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={`border border-solid border-[#3c3c3c] rounded-[50px] px-5 py-5 ${
                index % 2 === 1 ? "ml-2 -mr-2" : ""
              }`}
            >
              <AccordionTrigger className="hover:no-underline [&[data-state=open]>div>.chevron]:rotate-90">
                <div className="flex items-center justify-between w-full">
                  <span className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[-0.48px] leading-[28.8px] text-left">
                    {item.question}
                  </span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-3xl border border-solid border-[#519b91] ml-4 flex-shrink-0">
                    <ChevronRightIcon className="chevron w-5 h-5 text-[#519b91] transition-transform duration-200" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
