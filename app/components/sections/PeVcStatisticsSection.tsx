"use client";
import { motion } from "framer-motion";
import { peVcSectionData } from "@/utils/data/peVcSection";

const PeVcStatisticsSection = () => {
  const stats = peVcSectionData.stats;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const statVariants = {
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

  return (
    <section className="bg-gradient-to-br from-[#0e0f11] to-[#1a2a1a] text-white py-20 px-4 md:px-28">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={statVariants}
            >
              <motion.div
                className="text-6xl md:text-7xl font-bold mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PeVcStatisticsSection;
