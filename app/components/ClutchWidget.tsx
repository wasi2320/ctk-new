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

export default ClutchWidget;
