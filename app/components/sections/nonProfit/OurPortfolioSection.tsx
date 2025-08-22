"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export default function OurPortfolioSection() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="text-5xl font-bold text-center text-slate-800 mb-16"
        variants={itemVariants}
      >
        We Strive For Innovation
      </motion.h2>

      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start mb-12"
        variants={itemVariants}
      >
        <div>
          <motion.h2
            className="text-4xl font-bold text-slate-800 mb-2"
            variants={itemVariants}
          >
            Our Portfolio
          </motion.h2>
          <motion.p className="text-xl text-slate-600" variants={itemVariants}>
            Real-World Technology Solutions for Non-Profits
          </motion.p>
        </div>

        <motion.div
          className="mt-6 lg:mt-0"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/scalable-secure-aws"
            className="inline-block px-6 py-3 text-xl text-slate-800 border-2 border-slate-800 hover:bg-slate-100 transition-colors"
            style={{
              borderRadius: "1rem",
            }}
          >
            Real-World cases in Fintech
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {/* Cost Optimization Card */}
        <motion.a
          href="/automated_deployment"
          className="bg-gray-50 rounded-3xl p-8 shadow-lg cursor-pointer block"
          variants={cardVariants}
          whileHover={{
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-3xl font-bold text-slate-800 mb-2"
            variants={itemVariants}
          >
            Cost Optimization
          </motion.h3>
          <motion.p
            className="text-xl text-slate-600 mb-6"
            variants={itemVariants}
          >
            Automated deployment reducing non-profit operational costs
          </motion.p>
          <motion.div className="flex justify-center" variants={imageVariants}>
            <Image
              src="/services/automated_aws2.png"
              alt="Cost Optimization Case Study"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.a>

        {/* Technology Infrastructure Card */}
        <motion.a
          href="/scalable-secure-aws"
          className="bg-gray-50 rounded-3xl p-8 shadow-lg cursor-pointer block"
          variants={cardVariants}
          whileHover={{
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-3xl font-bold text-slate-800 mb-2"
            variants={itemVariants}
          >
            Scalable Infrastructure
          </motion.h3>
          <motion.p
            className="text-xl text-slate-600 mb-6"
            variants={itemVariants}
          >
            Secure AWS setup enabling non-profit growth and impact
          </motion.p>
          <motion.div className="flex justify-center" variants={imageVariants}>
            <Image
              src="/services/aws-solution-illustration.png"
              alt="Scalable Infrastructure Case Study"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
