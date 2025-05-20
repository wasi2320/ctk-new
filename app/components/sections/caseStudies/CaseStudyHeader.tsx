"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import CaseStudyImage from "./CaseStudyImage";
import { motion } from "framer-motion";

interface CaseStudyHeaderProps {
  title: string;
  subtitle: string;
  services: string[];
  arcSrc: string;
  alt: string;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  title,
  subtitle,
  services,
  arcSrc,
  alt,
}) => (
  <motion.header
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center p-7 shadow-2xl rounded-[20px] m-5"
  >
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl font-bold text-gray-900 mb-2"
    >
      {title}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-gray-600 text-2xl mb-4"
    >
      {subtitle}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-wrap justify-center gap-2 mb-4"
    >
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
        >
          <Badge variant="outline" className="text-sm py-2 px-4 rounded-full">
            {service}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <CaseStudyImage src={arcSrc} alt={alt} />
    </motion.div>
  </motion.header>
);

export default CaseStudyHeader;
