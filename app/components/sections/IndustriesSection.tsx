"use client";

import React from "react";
import Image from "next/image";
import { INDUSTRIES_SECTION } from "@/utils/data/industriesSection";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const settings = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
  };

  return (
    <section className=" py-16 px-4 md:px-28">
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
            alt="Industries"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-[70%] w-full">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-5">
            {INDUSTRIES_SECTION.cards.map((card, index) => (
              <Link key={index} href={card?.link}>
                <IndustryCard card={card} index={index} />
              </Link>
            ))}
          </div>

          {/* Mobile Auto Carousel using Swiper */}
          <div className="md:hidden w-full">
            <Swiper {...settings} className="w-full">
              {INDUSTRIES_SECTION.cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center px-4"
                >
                  <Link
                    href={card.link}
                    className="w-full max-w-[320px] mx-auto"
                  >
                    <IndustryCard card={card} index={index} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
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
        px-6 
        py-8
        rounded-3xl 
        border 
        border-[#152F27] 
        flex 
        flex-col 
        justify-center 
        items-center 
        hover:bg-[#081410] 
        hover:text-white 
        transition-all 
        duration-300 
        group
        aspect-square
        w-full
        md:aspect-auto
        md:min-h-0
      `}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Image
          src={card.img}
          alt={card.title}
          height={60}
          width={60}
          className="w-[60px] h-[60px] brightness-0 group-hover:invert transition-all duration-300"
        />
        <h3
          className={`
            md:text-xl 
            text-xl
            font-medium 
            nunito-medium
            text-center
          `}
        >
          {card.title}
        </h3>

        <p
          className={`
            md:text-base 
            text-base
            text-center 
            max-w-[90%]
          `}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default IndustriesSection;
