"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Clutch?: {
      init: () => void;
    };
  }
}

const ClutchWidgetContent = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  // useEffect(() => {
  //   console.log("loadingg in the page in progress");
  //   // const initializeWidget = () => {
  //   //   if (window.ClutchWidget || window.Clutch) {
  //   //     // Force reinitialization by removing and re-adding the widget
  //   //     const widgetElement = document.querySelector(".clutch-widget");
  //   //     if (widgetElement) {
  //   //       widgetElement.innerHTML = "";
  //   //     }
  //   //     window.Clutch.init();
  //   //   }
  //   // };

  //   // // Initialize when script is loaded
  //   // if (isScriptLoaded) {
  //   //   initializeWidget();
  //   // }

  //   // Set up a mutation observer to watch for DOM changes
  //   const observer = new MutationObserver((mutations) => {
  //     mutations.forEach((mutation) => {
  //       if (mutation.type === "childList" && window?.Clutch) {
  //         initializeWidget();
  //       }
  //     });
  //   });

  //   // Start observing the widget container
  //   const widgetContainer = document.querySelector(".clutch-widget");
  //   if (widgetContainer) {
  //     observer.observe(widgetContainer, { childList: true, subtree: true });
  //   }
  //   setShowWidget(true);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [isScriptLoaded]);

  console.log("isScriptLoaded>>>", isScriptLoaded);
  return (
    <>
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
        rel="preload"
        onLoad={() => {
          console.log("Clutch widget script loaded successfully");
          setIsScriptLoaded(true);
        }}
        onError={(e) => {
          console.error("Error loading Clutch widget script:", e);
        }}
      />
      <div className="w-full align-center justify-center flex overflow-hidden">
        {isScriptLoaded ? (
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
        ) : (
          <div className="text-white">Loading...</div>
        )}
      </div>
    </>
  );
};

const ClutchWidget = dynamic(() => Promise.resolve(ClutchWidgetContent), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default ClutchWidget;
