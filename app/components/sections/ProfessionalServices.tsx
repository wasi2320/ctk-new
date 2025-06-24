"use client";
import { PROFESSIONAL_SERVICES_SECTION } from "@/utils/data/professionalServicesSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProfessionalServicesProps {
  heading?: string;
  description?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProfessionalServices = ({
  heading,
  description,
}: ProfessionalServicesProps) => {
  return (
    <motion.section
      className="text-dark py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-Nunito mb-12"
          variants={itemVariants}
        >
          {heading || PROFESSIONAL_SERVICES_SECTION.heading}
        </motion.h2>
        <motion.p
          className="text-lg font-Nunito text-center md:w-[90%] mx-auto mb-12"
          variants={itemVariants}
        >
          {description || PROFESSIONAL_SERVICES_SECTION.description}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ProfessionalServices;
