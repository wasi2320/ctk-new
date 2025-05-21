"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    Clutch?: {
      init: () => void;
    };
    _clutchLoaded?: boolean;
  }
}

const ClutchHero = () => {
  const [key, setKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pathname = usePathname();

  // Reset widget when pathname changes
  useEffect(() => {
    // Regenerate the component key to force a complete re-render
    setKey((prev) => prev + 1);
  }, [pathname]);

  // Handle iframe load event
  const handleIframeLoad = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      // Inject the Clutch script into the iframe
      const script = document.createElement("script");
      script.src = "https://widget.clutch.co/static/js/widget.js";
      script.async = true;

      // Make sure we have access to the iframe document
      try {
        const iframeDoc =
          iframeRef.current.contentDocument ||
          iframeRef.current.contentWindow.document;

        // Append script to iframe body
        iframeDoc.body.appendChild(script);

        // Initialize Clutch in the iframe context when script is loaded
        script.onload = () => {
          if (iframeDoc.defaultView && iframeDoc.defaultView.Clutch) {
            iframeDoc.defaultView.Clutch.init();
          }
        };
      } catch (err) {
        console.log("Error accessing iframe document:", err);
      }
    }
  };

  return (
    <div className="w-full align-center justify-center flex overflow-hidden transition-opacity duration-500 opacity-100">
      <iframe
        ref={iframeRef}
        src="/clutch-badge-widget.html"
        className="w-full border-none"
        height="70"
        width={"100%"}
        style={{
          alignSelf: "center",
        }}
        onLoad={handleIframeLoad}
        title="Clutch Widget"
      />
    </div>
  );
};

const ClutchHeroSection = dynamic(() => Promise.resolve(ClutchHero), {
  ssr: false,
});
export default ClutchHeroSection;
