"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const BUSINESS_CAROUSEL_SECTION = {
  heading: "Real business results",
  reviewsCard: [
    {
      userImage: "/Images/User_1.png",
      userName: "James Paul",
      userReview: "Connect your team with cloud expertise that drives innovation. Connect your team with cloud expertise that drives innovation.",
      userDesignation: "Investment enhancement",
      userCompany: "",
      rating: 4.0
    },
    {
      userImage: "/Images/User_1.png",
      userName: "James Paul",
      userReview: "Connect your team with cloud expertise that drives innovation. Connect your team with cloud expertise that drives innovation.",
      userDesignation: "Product Designer",
      userCompany: "AWS Company Limited",
      rating: 4.0
    },
    {
      userImage: "/Images/User_1.png",
      userName: "James Paul",
      userReview: "Connect your team with cloud expertise that drives innovation. Connect your team with cloud expertise that drives innovation.",
      userDesignation: "Product Designer",
      userCompany: "AWS Company Limited",
      rating: 4.0
    }
  ]
};

const BusinessCarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    slidesToScroll: 1
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slides, setSlides] = useState<number[]>([]);

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
    emblaApi.on('select', onSelect);
    setSlides(emblaApi.scrollSnapList());
  }, [emblaApi, onSelect]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
        fill={index < rating ? '#fbbf24' : 'none'}
      />
    ));
  };

  return (
    <section className="relative bg-gradient-to-r from-[#1a2b3a] to-[#2c3e50] text-white py-16 px-4 md:px-20 h-screen flex flex-col justify-center">
      <h2 className="text-4xl md:text-6xl text-center mb-12">
        {BUSINESS_CAROUSEL_SECTION.heading}
      </h2>
      
      <div className="embla overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container flex">
          {BUSINESS_CAROUSEL_SECTION.reviewsCard.map((card, index) => (
            <div 
              key={index} 
              className={`embla__slide flex-grow-0 flex-shrink-0 min-w-0 transition-all duration-300 ease-in-out mx-4
                ${index === selectedIndex 
                  ? 'w-[80%] h-[500px] scale-100 z-10' 
                  : index === (selectedIndex + 1) % slides.length 
                    ? 'w-[30%] h-[400px] scale-90 z-0 self-end'
                    : 'w-[30%] h-[350px] scale-80 z-0 self-start'}
                bg-white/10 rounded-3xl flex`}
            >
              <div className={`${index === selectedIndex ? 'w-1/2' : 'w-full'} relative`}>
                <img 
                  src={card.userImage} 
                  alt={card.userName}
                  className="w-full h-full object-cover rounded-l-3xl"
                />
                <div className="absolute bottom-5 left-5 text-white">
                  <h4 className="text-2xl font-semibold">{card.userName}</h4>
                  <p className="text-white/80">{card.userDesignation}</p>
                  {card.userCompany && <p className="font-medium">{card.userCompany}</p>}
                </div>
              </div>
              
              {index === selectedIndex && (
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(card.rating)}
                    </div>
                    <span className="text-gray-300">({card.rating})</span>
                  </div>
                  
                  <p className="text-lg text-white/90">
                    {card.userReview}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
        <button 
          onClick={scrollPrev} 
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full z-20"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button 
          onClick={scrollNext} 
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full z-20"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default BusinessCarouselSection;