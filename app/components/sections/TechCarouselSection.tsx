"use client";

import { TECH_CAROUSEL_SECTION } from "@/utils/data/techCarouselSection";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const TechCarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [, setPrevBtnEnabled] = useState(true);
  const [, setNextBtnEnabled] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

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
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1
        data-aos="fade-down"
        data-aos-delay="100"
        className="text-5xl font-bold text-center text-slate-800 mb-16"
      >
        {TECH_CAROUSEL_SECTION.heading}
      </h1>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col lg:flex-row justify-between items-start mb-12"
      >
        <div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">Our Portfolio</h2>
          <p className="text-xl text-slate-600">Real-World cases in Fintech</p>
        </div>

        <div className="mt-6 lg:mt-0">
          <Link
            href="#"
            className="inline-block px-6 py-3 text-xl text-slate-800 border-2 border-slate-800 rounded-full hover:bg-slate-100 transition-colors"
          >
            Real-World cases in Fintech
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cost Optimization Card */}
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="bg-gray-50 rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-3xl text-center font-bold text-slate-800 mb-2">Cost Optimization</h3>
          <p className="text-xl text-center text-slate-600 mb-6">Real-World cases in Fintech</p>
          <div className="flex justify-center">
            <Image
              src="/Images/homepage/Tech_Image_1.svg"
              alt="Cost Optimization Illustration"
              width={350}
              height={250}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Security Compliance Card */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="bg-gray-50 rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-3xl text-center font-bold text-slate-800 mb-2">Security Compliance</h3>
          <p className="text-xl text-center text-slate-600 mb-6">Real-World cases in Fintech</p>
          <div className="flex justify-center">
            <Image
              src="/Images/homepage/Tech_Image_2.svg"
              alt="Security Compliance Illustration"
              width={350}
              height={250}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCarouselSection;
