"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { peVcSectionData } from "@/utils/data/peVcSection";

const PeVcPortfolioSection = () => {
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
    <section className="bg-white py-20 px-4 md:px-28">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section with Title and Button */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 border-b border-green-800 pb-8">
          <div className="mb-6 lg:mb-0">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-2"
              variants={cardVariants}
            >
              Our Portfolio
            </motion.h2>
            <motion.p className="text-xl text-black" variants={cardVariants}>
              Real-World cases in Fintech
            </motion.p>
          </div>

          <motion.div variants={cardVariants}>
            <Link href="/fin-tech">
              <motion.button
                className="inline-flex items-center gap-2 border-2 border-black text-black px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Real-World cases in Fintech
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Portfolio Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {peVcSectionData.portfolioData.map((caseItem, index) => (
            <Link key={index} href={caseItem.link}>
              <motion.div
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-[500px] w-full"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-8 h-full flex flex-col">
                  <h3 className="text-3xl font-bold text-black mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-lg text-black mb-6">{caseItem.subtitle}</p>
                  <div className="flex justify-center flex-1 items-center">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.title}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg max-h-[300px] object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PeVcPortfolioSection;
