"use client";

import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import { INDUSTRIES_SECTION } from "@/utils/data/industriesSection";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

type CardType = {
  title: string;
  description: string;
  img: string;
};

type IndustryCardProps = {
  card: CardType;
  index: number;
};

const IndustriesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  // Auto-play effect
  const autoplay = useCallback((emblaApi: EmblaCarouselType | undefined) => {
    const autoplayInterval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplayInterval);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      const stopAutoplay = autoplay(emblaApi);
      return stopAutoplay;
    }
  }, [emblaApi, autoplay]);

  return (
    <section className="py-16 px-4 md:px-28">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="md:text-5xl text-2xl w-8/12 font-medium md:w-4/12 text-center md:text-start">
          {INDUSTRIES_SECTION.heading}
        </h2>
        <p className="md:text-xl md:w-4/12 text-center md:text-start">
          {INDUSTRIES_SECTION.description}
        </p>
      </div>

      <div className="flex items-center mt-7 gap-10">
        <div className="md:w-[30%] h-[550px] hidden md:block">
          <Image
            src={INDUSTRIES_SECTION.image}
            alt=""
            height={500}
            width={500}
            className="w-full h-full"
          />
        </div>

        <div className="md:w-[70%] w-full">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-5">
            {INDUSTRIES_SECTION.cards.map((card, index) => (
              <IndustryCard key={index} card={card} index={index} />
            ))}
          </div>

          {/* Mobile Auto Carousel */}
          <div className="md:hidden overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {INDUSTRIES_SECTION.cards.map((card, index) => (
                <div key={index} className="flex-[0_0_80%] mr-4 flex-shrink-0">
                  <IndustryCard card={card} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for individual industry card
const IndustryCard: React.FC<IndustryCardProps> = ({ card, index }) => {
  return (
    <div
      className={`
        bg-white 
        px-4 py-6 
        rounded-3xl 
        border 
        border-[#152F27] 
        flex 
        flex-col 
        justify-center 
        items-center 
        ${index === 1 ? "!bg-[#081410] text-white" : ""}
      `}
    >
      <Image
        src={card.img}
        alt=""
        height={50}
        width={50}
        className="w-[50px] h-[50px]"
      />
      <h3
        className={`
          md:text-xl 
          my-6 
          font-medium 
          nunito-medium
          ${index === 1 ? "text-white" : "text-[#172A46]"}
        `}
      >
        {card.title}
      </h3>

      <p
        className={`
          md:text-base 
          text-center 
          ${index === 1 ? "text-white" : "text-[#172A46]"}
        `}
      >
        {card.description}
      </p>
    </div>
  );
};

export default IndustriesSection;
