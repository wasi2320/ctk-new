"use client";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useEffect, useState } from "react";

// Declare the ClutchWidget type
declare global {
  interface Window {
    ClutchWidget?: unknown;
  }
}

const ClutchHero = () => {
  // const [isClient, setIsClient] = useState(true);

  // useEffect(() => {
  //   setIsClient(true);
  // }, [!!window?.location?.href]);

  // if (!isClient) {
  //   return null; // Return null on server-side
  // }

  return (
    <>
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="beforeInteractive"
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
        onLoad={() => {
          console.log("Clutch widget script loaded successfully");
        }}
        onError={(e) => {
          console.log("Error loading Clutch widget script:", e);
        }}
      />
      <div
        className={`w-full align-center justify-center flex overflow-hidden transition-opacity duration-500 ${"opacity-100"}`}
      >
        <div
          suppressContentEditableWarning={true}
          suppressHydrationWarning={true}
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

const ClutchHeroSection = dynamic(() => Promise.resolve(ClutchHero), {
  ssr: false,
});
export default ClutchHeroSection;
