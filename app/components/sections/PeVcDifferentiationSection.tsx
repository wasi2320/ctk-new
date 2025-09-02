"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { peVcSectionData } from "@/utils/data/peVcSection";

const PeVcDifferentiationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    <section
      className="w-full py-20 px-4 md:px-28 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${peVcSectionData.differentiateData.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="md:text-4xl text-3xl font-bold text-center mb-16 text-white"
          variants={cardVariants}
        >
          {peVcSectionData.differentiateData.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {peVcSectionData.differentiateData.cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-green-900/20 backdrop-blur-md rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 shadow-lg shadow-green-900/20"
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-16 flex items-center justify-center mb-4">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={96}
                    height={64}
                    className="w-24 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PeVcDifferentiationSection;
