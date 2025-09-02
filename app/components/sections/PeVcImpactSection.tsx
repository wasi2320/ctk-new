"use client";
import { peVcSectionData } from "@/utils/data/peVcSection";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PeVcImpactSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardInteraction = (index: number) => {
    if (isMobile) {
      setHoveredCard(hoveredCard === index ? null : index);
    }
  };

  return (
    <section className="py-8 md:py-12 my-8 md:mt-16 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center md:w-8/12 w-full mx-auto gap-8 md:gap-40">
        {/* Left side - Text content */}
        <div className="md:w-[50%] w-full">
          <h2 className="md:text-5xl text-2xl font-bold text-black mb-6">
            The Impact of Equity and VC Firms on Companies
          </h2>
          <p className="md:text-lg text-base text-gray-700 leading-relaxed">
            As a private equity and VC firm, we empower companies by providing
            the capital and strategic guidance needed to accelerate growth and
            innovation. We work closely with management to optimize operations,
            strengthen leadership, and unlock new market opportunities. Our
            extensive network and hands-on support help companies scale
            efficiently while enhancing governance and long-term value.
          </p>
        </div>

        {/* Right side - Stacked cards */}
        <div className="md:w-[55%] w-full relative">
          <div className="flex flex-col md:gap-6 gap-4">
            {peVcSectionData.impactData.map((feature, index) => (
              <motion.div
                key={index}
                className={`shadow-2xl bg-white md:py-4 py-4 md:px-8 px-5 md:rounded-3xl rounded-xl relative transition-all duration-1000 cursor-pointer ${
                  hoveredCard !== null && hoveredCard !== index
                    ? "opacity-50 blur-sm"
                    : ""
                }`}
                initial={{ y: 0, height: "auto" }}
                animate={{
                  y: hoveredCard === index ? -10 : 0,
                  height: hoveredCard === index ? "auto" : "auto",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onHoverStart={() => !isMobile && setHoveredCard(index)}
                onHoverEnd={() => !isMobile && setHoveredCard(null)}
                onClick={() => handleCardInteraction(index)}
              >
                <div className="space-y-2 md:space-y-3">
                  <h3 className="md:text-4xl text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: 10, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="md:text-lg text-base text-gray-700 overflow-hidden"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeVcImpactSection;
