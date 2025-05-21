"use client";
import { useState, useEffect } from "react";
import HomeHeroSection from "./components/sections/HomeHeroSection";
import MissionSection from "./components/sections/MissionSection";
import InfrastructureSection from "./components/sections/InfrastructureSection";
import IndustriesSection from "./components/sections/IndustriesSection";
import TechStackSection from "./components/sections/TechStackSection";
import TechCarouselSection from "./components/sections/TechCarouselSection";
import EnsureSection from "./components/sections/EnsureSection";
import BusinessCarouselSection from "./components/sections/BusinessCarouselSection";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  // Initialize AOS immediately
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    // Mark content as ready immediately
    setIsContentReady(true);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {/* {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />} */}
      <div
      // className={`transition-all duration-700 ease-in-out ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      //   }`}
      // style={{
      //   visibility: isContentReady ? 'visible' : 'hidden',
      //   transform: isLoading ? 'translateY(20px)' : 'translateY(0)'
      // }}
      >
        <HomeHeroSection />
        <div style={{ width: "100%", position: "relative" }}>
          <MissionSection />
        </div>
        <InfrastructureSection />
        <IndustriesSection />
        <TechStackSection />
        <BusinessCarouselSection />
        <TechCarouselSection />
        <EnsureSection />
      </div>
    </div>
  );
}
