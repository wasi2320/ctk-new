"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const ClutchScript = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) {
  //   return null;
  // }

  return (
    <Script
      src="https://widget.clutch.co/static/js/widget.js"
      strategy="afterInteractive"
      suppressHydrationWarning
    />
  );
};

export default ClutchScript;
