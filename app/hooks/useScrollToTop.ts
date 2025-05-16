"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const useScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // Using "instant" instead of "smooth" for immediate effect
    });
  }, [pathname]); // This will run whenever the pathname changes
}; 