"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface SolutionComponent {
  title: string;
  description: string;
}

interface CaseStudySolutionProps {
  solutions: SolutionComponent[];
  illustration?: string;
  illustrationAlt?: string;
  description?: string;
}

const CaseStudySolution: React.FC<CaseStudySolutionProps> = ({
  solutions,
  illustration,
  illustrationAlt,
  description,
}) => {
  const { scrollYProgress } = useScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 1, 0]
  );

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Proposed Solution
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="lg:col-span-2 grid md:grid-cols-2 gap-4"
          >
            {solutions.map((component, index) => (
              <motion.div
                key={index}
                custom={scrollYProgress.get() > 0.5 ? -1 : 1}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="p-5 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
              >
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {component.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed flex-grow">
                  {component.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex flex-col items-center justify-center lg:sticky lg:top-8 h-fit">
            {illustration && (
              <motion.div
                custom={scrollYProgress.get() > 0.5 ? -1 : 1}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={illustration}
                  alt={illustrationAlt || "Solution Illustration"}
                  width={450}
                  height={450}
                  className="rounded-lg"
                />
              </motion.div>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
                className="mt-6 text-start text-gray-700 text-lg"
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySolution;
