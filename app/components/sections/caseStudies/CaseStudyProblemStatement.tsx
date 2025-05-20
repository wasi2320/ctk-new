"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectDetail {
  label: string;
  value: string;
}

interface ProjectDetails {
  client: string;
  schedule: string;
  size: string;
}

interface CaseStudyProblemStatementProps {
  statement: string;
  details: ProjectDetails;
}

const CaseStudyProblemStatement: React.FC<CaseStudyProblemStatementProps> = ({
  statement,
  details,
}) => {
  const { scrollYProgress } = useScroll();
  const [scrollDirection, setScrollDirection] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 1 : -1);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const projectDetails: ProjectDetail[] = [
    { label: "CLIENT", value: details.client },
    { label: "PROJECT SCHEDULE", value: details.schedule },
    { label: "PROJECT SIZE", value: details.size },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
      y: direction > 0 ? 20 : -20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
      className="p-8 rounded-[14px] min-h-[700px] flex justify-center items-center bg-gray-50 py-12 m-5 relative"
      style={{
        backgroundImage: 'url("/section_bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl w-[80%] text-white mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        <motion.div
          custom={scrollDirection}
          variants={itemVariants}
          className="md:col-span-2 flex flex-col h-full justify-between"
        >
          <motion.h2
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-4xl font-bold mb-6"
          >
            Problem Statement
          </motion.h2>
          <motion.p
            custom={scrollDirection}
            variants={itemVariants}
            className="mb-4 w-full text-xl md:text-2xl md:w-[80%]"
          >
            {statement}
          </motion.p>
        </motion.div>
        <div>
          {projectDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              custom={scrollDirection}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className={`backdrop-blur-md bg-[#677F76]/30 text-white p-4 py-7 rounded-lg border border-white/20 ${
                index !== projectDetails.length - 1 ? "mb-6" : ""
              }`}
            >
              <h3 className="text-xl font-extralight text-gray-200">
                {detail.label}
              </h3>
              <p className="text-xl font-extrabold">{detail.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudyProblemStatement;
