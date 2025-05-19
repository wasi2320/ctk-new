"use client";
import Script from "next/script";

const ClutchWidget = () => {
  return (
    <>
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
      />
      <div className="w-full align-center justify-center flex overflow-hidden">
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
