"use client";
import { HOME_HERO_SECTION } from "@/utils/data/homeHeroSection";
import Link from "next/link";
import InfiniteScrollBar from "./InfiniteScrollBar";
import Image from "next/image";
import ClutchHeroSection from "./Aws";

const HomeHeroSection = () => {
  return (
    <>
      <section className="relative px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 min-h-[80vh] py-8 sm:py-12 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8">

        <div className="w-full md:w-1/2 lg:w-3/5 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
          <div
            className="space-y-3 sm:space-y-4 md:space-y-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-tight md:leading-[1.1] text-center md:text-start">
              {HOME_HERO_SECTION.heading}
            </h1>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-8 md:gap-12 lg:gap-20"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4 w-full">
              <h3 className="text-base sm:text-lg md:text-xl text-gray-700 w-full md:w-10/12 lg:w-8/12 text-center md:text-start">
                {HOME_HERO_SECTION.subHeading}
              </h3>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
                <Link href={HOME_HERO_SECTION.button.link}>
                  <button className="w-[9rem] rounded-full px-4 sm:px-6 py-2.5 text-sm md:text-base bg-black text-white cursor-pointer hover:bg-white hover:text-black border border-transparent hover:border-black transition-all duration-300 h-[40px] flex items-center justify-center">
                    {HOME_HERO_SECTION.button.text}
                  </button>
                </Link>

              </div>
            </div>
          </div>
          <p
            className="text-base sm:text-lg md:text-xl text-[#050B0B] text-center md:text-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {HOME_HERO_SECTION.text}
          </p>
          <div
            className="mt-4 md:mt-6 lg:mt-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <InfiniteScrollBar />
          </div>
        </div>
        <div
          className="w-full sm:w-10/12 md:w-1/2 lg:w-2/5 mb-6 md:mb-0"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <video
            className="w-full h-auto rounded-lg "
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
      <div className="relative w-full mb-16 md:mb-26 h-[30vh] sm:h-auto sm:mt-10">
      <div className="absolute left-1/2 -translate-x-1/2  md:-top-24 bg-white px-8 py-4 ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <Link
              className="transition-transform duration-300 hover:scale-105"
              href="https://partners.amazonaws.com/partners/001aq000008YFg0AAG/"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              <Image
                src={HOME_HERO_SECTION.badge}
                alt="aws"
                className="h-[80px] sm:h-[100px] w-auto object-contain"
                height={100}
                width={100}
              />
            </Link>
            <div className="mt-2 sm:mt-0">
              <ClutchHeroSection />
            </div>
            <Link
              className="transition-transform duration-300 hover:scale-105"
              href="https://www.designrush.com/agency/software-development/michigan"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              <Image
                src="/Images/homepage/Verified_agency.svg"
                alt="verified agency"
                className="h-[50px] sm:h-[60px] w-auto object-contain"
                height={100}
                width={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </>


  );
};

export default HomeHeroSection;
