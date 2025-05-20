"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface Tech {
  name: string;
  icon: string;
}

interface CaseStudyTechStackProps {
  techs: Tech[];
}

const CaseStudyTechStack: React.FC<CaseStudyTechStackProps> = ({ techs }) => {
  const { scrollYProgress } = useScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 50 : -50,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 1, 0]
  );

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-4xl font-bold mb-2"
        >
          Core tech stack we work with
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl w-[80%] mx-auto text-gray-600 mb-8"
        >
          Leveraging the Leading Programming Languages and Frameworks to Deliver
          Reliable, Scalable Solutions.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-12"
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              custom={scrollYProgress.get() > 0.5 ? -1 : 1}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.5 },
              }}
              className="bg-white p-4 rounded-lg shadow-sm object-fill hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={80}
                height={80}
                objectFit="cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyTechStack;
