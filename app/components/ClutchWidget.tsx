"use client";
import { useEffect, useState } from "react";
import ClutchScriptLoader from "./ClutchScriptLoader";

const ClutchWidget = () => {
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
          data-width="100%"
          data-widget-type="12"
          data-height="375"
          data-nofollow="true"
          data-expandifr="true"
          data-scale="100"
          data-primary-color="#082105"
          data-secondary-color="#082105"
          data-reviews="375170,373193,371564,365725,364927,362840"
          data-clutchcompany-id="2466293"
        />
      </div>
    </>
  );
};

export default ClutchWidget;
