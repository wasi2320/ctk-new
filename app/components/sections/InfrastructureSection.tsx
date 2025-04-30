"use client";
import { INFRASTRUCTURE_SECTION } from "@/utils/data/infrastructureSection";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const InfrastructureSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-12 mt-16">
      <h2 className="md:text-5xl text-2xl text-center md:w-7/12 mx-auto">
        {INFRASTRUCTURE_SECTION.heading}
      </h2>
      <p className="text-center md:text-lg md:w-5/12 mx-auto my-5">
        {INFRASTRUCTURE_SECTION.description}
      </p>
      <div className="flex items-center md:w-8/12 mx-auto">
        <div className="md:w-[60%] relative md:-right-10 -right-5">
          <div className="flex flex-col md:gap-6 gap-3">
            {INFRASTRUCTURE_SECTION.cards.map((card, index) => (
              <motion.div
                key={index}
                className={`shadow-2xl bg-white md:py-4 py-2 md:px-8 px-4 md:rounded-3xl rounded-2xl relative ${
                  hoveredCard !== null && hoveredCard !== index ? "opacity-50 blur-sm" : ""
                }`}
                initial={{ y: 0, height: "auto" }}
                animate={{
                  y: hoveredCard === index ? -10 : 0,
                  height: hoveredCard === index ? "auto" : "auto",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <h3 className="md:text-4xl text-2xl mb-2">{card.title}</h3>
                <p className="md:text-2xl">{card.description}</p>
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 10, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="grid md:grid-cols-2 md:gap-y-3 gap-y-2 font-semibold mt-3 overflow-hidden"
                    >
                      {card.pages.map((page, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link href={page.url} className="feature-item">
                            <p className="md:text-base text-xs text-center">
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
        <div className="md:w-[40%] h-[600px] mr-4 md:mr-0">
          <Image
            src={INFRASTRUCTURE_SECTION.image}
            alt=""
            height={500}
            width={500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
