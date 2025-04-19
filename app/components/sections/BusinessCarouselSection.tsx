"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { BUSINESS_CAROUSEL_SECTION } from "@/utils/data/businessCarouselSection";

const BusinessCarouselSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: isMobile ? "start" : "center",
    slidesToScroll: 1,
    startIndex: isMobile ? 0 : 1,
    skipSnaps: false,
    dragFree: true,
    duration: isMobile ? 20 : undefined, // Enables auto-scroll on mobile
  });

  const [selectedIndex, setSelectedIndex] = useState(isMobile ? 0 : 1);
  const [, setSlides] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    setSlides(emblaApi.scrollSnapList());
    
    // Auto-scroll for mobile
    if (isMobile) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // Adjust timing as needed
      return () => clearInterval(interval);
    }
  }, [emblaApi, onSelect, isMobile]);

  const renderStars = (starImages: string[]) => {
    return starImages.map((star, index) => (
      <Image
        key={index}
        src={star}
        alt="star"
        width={20}
        height={20}
        className="w-5 h-5"
      />
    ));
  };

  return (
    <section className="relative bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:px-20 md:h-screen flex flex-col justify-center">
      <h2 className="text-4xl md:text-6xl text-center mb-12 text-white">
        {BUSINESS_CAROUSEL_SECTION.heading}
      </h2>

      <div className="embla overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container flex items-end">
          {BUSINESS_CAROUSEL_SECTION.reviewsCard.map((card, index) => {
            // Mobile view - full width cards
            if (isMobile) {
              return (
                <div
                  key={index}
                  className="embla__slide flex-grow-0 flex-shrink-0 min-w-0 w-full mx-0"
                >
                  <div className="w-full h-[400px] bg-[linear-gradient(to_right,#D9D9D9,#A4AEAB)] rounded-3xl flex">
                    <div className="w-1/2 relative">
                      <Image
                        src={card.userImage}
                        alt={card.userName}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      <div className="absolute bottom-5 left-5 text-white">
                        <h4 className="md:text-3xl text-xl">{card.userName}</h4>
                        <p className="text-white/80">{card.userDesignation}</p>
                        {card.userCompany && (
                          <p className="font-medium">{card.userCompany}</p>
                        )}
                      </div>
                    </div>
                    <div className="w-1/2 p-6 flex flex-col">
                      <div className="flex items-center justify-end mb-4">
                        <div className="flex mr-2">
                          {renderStars(card.starImage)}
                        </div>
                        <span className="text-gray-">({card.rating})</span>
                      </div>
                      <div className="flex justify-center items-center h-full">
                        <p className="md:text-3xl text-xl leading-6">{card.userReview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Desktop view - original functionality
            const isPrevCard =
              index ===
              (selectedIndex -
                1 +
                BUSINESS_CAROUSEL_SECTION.reviewsCard.length) %
                BUSINESS_CAROUSEL_SECTION.reviewsCard.length;
            const isNextCard =
              index ===
              (selectedIndex + 1) %
                BUSINESS_CAROUSEL_SECTION.reviewsCard.length;

            return (
              <div
                key={index}
                className={`embla__slide flex-grow-0 flex-shrink-0 min-w-0 transition-all duration-300 ease-in-out mx-4 relative
                  ${
                    index === selectedIndex
                      ? "w-[60%] h-[500px] scale-100 z-10"
                      : "w-[20%] h-[250px] scale-90 z-0"
                  }
                  bg-[linear-gradient(to_right,#D9D9D9,#A4AEAB)] rounded-3xl flex
                  ${isPrevCard ? "self-end mb-12" : ""}
                  ${isNextCard ? "self-center mb-16" : ""}`}
              >
                {/* Navigation arrows for the centered card */}
                {index === selectedIndex && (
                  <>
                    <button
                      onClick={scrollPrev}
                      className="absolute top-12 -left-20 border border-white p-2 rounded-full z-20"
                    >
                      <ChevronLeft className="text-white" size={32} />
                    </button>
                    <button
                      onClick={scrollNext}
                      className="absolute bottom-12 -right-20 border border-white p-2 rounded-full z-20"
                    >
                      <ChevronRight className="text-white" size={32} />
                    </button>
                  </>
                )}

                <div
                  className={`${
                    index === selectedIndex ? "w-1/2" : "w-full"
                  } relative`}
                >
                  <Image
                    src={card.userImage}
                    alt={card.userName}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute bottom-5 left-5 text-white">
                    <h4 className="text-3xl">{card.userName}</h4>
                    <p className="text-white/80">{card.userDesignation}</p>
                    {card.userCompany && (
                      <p className="font-medium">{card.userCompany}</p>
                    )}
                  </div>
                </div>

                {index === selectedIndex && (
                  <div className="w-1/2 p-6 flex flex-col">
                    <div className="flex items-center justify-end mb-4">
                      <div className="flex mr-2">
                        {renderStars(card.starImage)}
                      </div>
                      <span className="text-gray-">({card.rating})</span>
                    </div>
                    <div className="flex justify-center items-center h-full">
                      <p className="text-3xl">{card.userReview}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessCarouselSection;