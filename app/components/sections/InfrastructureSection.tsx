"use client";
import { INFRASTRUCTURE_SECTION } from "@/utils/data/infrastructureSection";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const InfrastructureSection = () => {
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
    <section className="w-[100vw] py-8 md:py-12 mt-8 md:mt-16 px-4 md:px-0">
      <h2 className="md:text-5xl text-2xl text-center md:w-7/12 w-full mx-auto font-bold">
        {INFRASTRUCTURE_SECTION.heading}
      </h2>
      <p className="text-center md:text-lg text-base md:w-5/12 w-full mx-auto my-4 md:my-5 text-gray-700">
        {INFRASTRUCTURE_SECTION.description}
      </p>
      <div className="flex flex-col md:flex-row items-center md:w-8/12 w-full mx-auto gap-8 md:gap-0">
        <div className="md:w-[60%] w-[95%] relative md:-right-10">
          <div className="flex flex-col md:gap-6 gap-4">
            {INFRASTRUCTURE_SECTION.cards.map((card, index) => (
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
                  <h3 className="md:text-4xl text-xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="md:text-2xl text-base text-gray-700">
                    {card.description}
                  </p>
                </div>
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 10, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="grid md:grid-cols-2 grid-cols-1 md:gap-y-3 gap-y-2 font-semibold mt-4 overflow-hidden"
                    >
                      {card.pages.map((page, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link href={page.url} className="feature-item">
                            <p className="md:text-base text-sm text-center hover:text-[#000209] transition-colors">
                              {page.name}
                            </p>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="md:w-[40%] w-[95%] h-[300px] md:h-[600px] mr-4 md:mr-0">
          <Image
            src={INFRASTRUCTURE_SECTION.image}
            alt="Infrastructure"
            height={500}
            width={500}
            className="w-full h-full object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
