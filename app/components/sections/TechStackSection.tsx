"use client";

import { TECH_STACK_SECTION } from "@/utils/data/techStackSection";
import Link from "next/link";
import Image from "next/image";

const TechStackSection = () => {
  return (
    <section className=" md:px-28 px-4 py-12 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
      <div className="md:w-1/2">
        <h2 className="md:text-6xl text-3xl text-center md:text-start">
          {TECH_STACK_SECTION.heading}
        </h2>
        <p className="md:text-xl md:mt-10 mt-5 mb-8 text-center md:text-start">
          {TECH_STACK_SECTION.subHeading}
        </p>
        <Link
          href={TECH_STACK_SECTION.button.link}
          className="flex justify-center md:justify-start"
        >
          <button className="rounded-full px-7 py-2 bg-black text-white cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300">
            {TECH_STACK_SECTION.button.text}
          </button>
        </Link>
      </div>
    <div className="md:w-[42%] overflow-hidden pb-10 relative">
        {/* Left blur gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 "></div>
        {/* Right blur gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 "></div>
        <div className="flex flex-nowrap animate-scroll">
          {/* First set - original content */}
          <div className="flex flex-nowrap">
            <div className="space-y-8 flex-shrink-0 mx-8 mt-12">
              {TECH_STACK_SECTION.techImagesCol1.map((img, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg right-bottom-shadow bg-[linear-gradient(to_right,#ffffff,#D9D9D933)]"
                >
                  <Image
                    style={{
                      objectFit: "contain",
                    }}
                    src={img}
                    alt=""
                    height={80}
                    width={80}
                    className="md:w-[80px] md:h-[80px] w-[38px] h-[38px]"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-8 flex-shrink-0 mx-8">
              {TECH_STACK_SECTION.techImagesCol2.map((img, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg left-right-bottom-shadow bg-[#EFEEEE]/40"
                >
                  <Image
                    style={{
                      objectFit: "contain",
                    }}
                    src={img}
                    alt=""
                    height={80}
                    width={80}
                    className="md:w-[80px] md:h-[80px] w-[38px] h-[38px]"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-8 flex-shrink-0 mx-8 mt-12">
              {TECH_STACK_SECTION.techImagesCol3.map((img, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg left-right-bottom-shadow bg-[#EFEEEE]/40"
                >
                  <Image
                    style={{
                      objectFit: "contain",
                    }}
                    src={img}
                    alt=""
                    height={80}
                    width={80}
                    className="md:w-[80px] md:h-[80px] w-[38px] h-[38px]"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-8 flex-shrink-0 mx-8">
              {TECH_STACK_SECTION.techImagesCol4.map((img, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg left-bottom-shadow bg-[linear-gradient(to_right,#D9D9D933,#FFFFFF)]"
                >
                  <Image
                    style={{
                      objectFit: "contain",
                    }}
                    src={img}
                    alt=""
                    height={80}
                    width={80}
                    className="md:w-[80px] md:h-[80px] w-[38px] h-[38px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second set - exact duplicate for seamless loop */}
          <div className="flex flex-nowrap">
            <div className="space-y-8 flex-shrink-0 mx-8 mt-12">
              {TECH_STACK_SECTION.techImagesCol1.map((img, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="p-4 rounded-lg right-bottom-shadow bg-[linear-gradient(to_right,#ffffff,#D9D9D933)]"
                >
                  <Image
                    style={{
                      objectFit: "contain",
                    }}
                    src={img}
                    alt=""
                    height={80}
                    width={80}
                    className="md:w-[80px] md:h-[80px] w-[38px] h-[38px]"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-8 flex-shrink-0 mx-8">
              {TECH_STACK_SECTION.techImagesCol2.map((img, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="p-4 rounded-lg left-right-bottom-shadow bg-[#EFEEEE]/40"
                >
                  <Image
                    style={{
                      objectFit: "contain",
                    }}
                    src={img}
                    alt=""
                    height={80}
                    width={80}
                    className="md:w-[80px] md:h-[80px] w-[38px] h-[38px]"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-8 flex-shrink-0 mx-8 mt-12">
              {TECH_STACK_SECTION.techImagesCol3.map((img, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="p-4 rounded-lg left-right-bottom-shadow bg-[#EFEEEE]/40"
                >
                  <Image
                    style={{
                      objectFit: "contain",
                    }}
                    src={img}
                    alt=""
                    height={80}
                    width={80}
                    className="md:w-[80px] md:h-[80px] w-[38px] h-[38px]"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-8 flex-shrink-0 mx-8">
              {TECH_STACK_SECTION.techImagesCol4.map((img, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="p-4 rounded-lg left-bottom-shadow bg-[linear-gradient(to_right,#D9D9D933,#FFFFFF)]"
                >
                  <Image
                    style={{
                      objectFit: "contain",
                    }}
                    src={img}
                    alt=""
                    height={80}
                    width={80}
                    className="md:w-[80px] md:h-[80px] w-[38px] h-[38px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
          display: flex;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .blur-gradient {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
