"use client";
import { useEffect, useState } from "react";
import ClutchScriptLoader from "../ClutchScriptLoader";

const ClutchHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure the widget has time to initialize
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ClutchScriptLoader />
      <div
        className={`w-full align-center justify-center flex overflow-hidden transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="clutch-widget"
          data-url="https://widget.clutch.co/"
          data-widget-type="14"
          data-height="50"
          data-nofollow="true"
          data-expandifr="true"
          data-scale="100"
          data-clutchcompany-id="2466293"
        />
      </div>
    </>
  );
};

export default ClutchHeroSection;
