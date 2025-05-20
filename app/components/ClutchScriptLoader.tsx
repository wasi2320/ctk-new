"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const ClutchScriptLoader = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    // Check if script is already loaded
    if (
      document.querySelector(
        'script[src="https://widget.clutch.co/static/js/widget.js"]'
      )
    ) {
      setIsScriptLoaded(true);
    }
  }, []);

  return (
    <Script
      src="https://widget.clutch.co/static/js/widget.js"
      strategy="lazyOnload"
      onLoad={() => setIsScriptLoaded(true)}
      onError={() => setScriptError(true)}
    />
  );
};

export default ClutchScriptLoader;
