"use client";

import { TECH_CAROUSEL_SECTION } from "@/utils/data/techCarouselSection";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const TechCarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [, setPrevBtnEnabled] = useState(true);
  const [, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    });
  }, [emblaApi]);

  return (
    <section className="w-[100vw] md:px-28 px-4 py-12">
      <h2 className="text-5xl text-center hidden md:block">
        {TECH_CAROUSEL_SECTION.heading}
      </h2>
      <h2 className="text-4xl text-center md:hidden">
        {TECH_CAROUSEL_SECTION.mobileHeading}
      </h2>

      <div className="relative mt-10">
        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all cursor-pointer border border-black"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all cursor-pointer border border-black"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 md:gap-0">
            {TECH_CAROUSEL_SECTION.cards.map((card, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_28%]"
              >
                <div className="flex flex-col gap-5 last:mr-3 last:md:mr-9">
                  <h4 className="md:text-2xl text-xl">{card.title}</h4>
                  <div className="relative md:h-[500px] h-[400px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="absolute bottom-8 left-7 md:w-8/12 text-white">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCarouselSection;
