"use client";
import { HOME_HERO_SECTION } from "@/utils/data/homeHeroSection";
import Link from "next/link";
import InfiniteScrollBar from "./InfiniteScrollBar";
import ClutchWidget from "../ClutchWidget";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const HomeHeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    // 90vhusama
    <section className="md:px-28 px-4 flex flex-col-reverse md:flex-row items-center justify-between min-h-[90vh] py-10 md:py-0">
      <div className="md:w-1/2 w-full space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6" data-aos="fade-right" data-aos-delay="100">
          <h1 className="md:text-[60px] text-[32px] font-bold leading-tight md:leading-[1.1] text-center md:text-start">
            {HOME_HERO_SECTION.heading}
          </h1>
        </div>
        <div
          className="flex items-center justify-center md:justify-start gap-4 md:gap-20"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-center md:items-start gap-5">
            <h3
              style={{ width: "100%" }}
              className="md:text-xl text-base text-gray-700 md:w-6/12 text-center md:text-start"
            >
              {HOME_HERO_SECTION.subHeading}
            </h3>
            <div className="flex items-center gap-4">
              <Link href={HOME_HERO_SECTION.button.link}>
                <button className="rounded-full px-6 py-2.5 text-sm md:text-base bg-black text-white cursor-pointer hover:bg-white hover:text-black border border-transparent hover:border-black transition-all duration-300 h-[40px] flex items-center">
                  {HOME_HERO_SECTION.button.text}
                </button>
              </Link>
              <Link
                className="transition-transform duration-300 hover:scale-105 ml-5"
                href={"https://partners.amazonaws.com/partners/001aq000008YFg0AAG/"}
                target="_blank"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={HOME_HERO_SECTION.badge}
                  alt="aws"
                  className="h-[100px] w-auto object-contain"
                  height={100}
                  width={100}
                />
              </Link>
            </div>
          </div>
        </div>
        <p
          className="md:text-xl text-base text-[#050B0B] text-center md:text-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {HOME_HERO_SECTION.text}
        </p>
        <div
          className="mt-6 md:mt-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <InfiniteScrollBar />
        </div>
      </div>
      <div
        className="md:w-[45%] w-full mb-8 md:mb-0"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <video
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://codetokloudbucketccests.s3.us-east-1.amazonaws.com/websiteSquare.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HomeHeroSection;
