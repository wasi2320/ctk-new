"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// import FluidBackground from "./FluidBackground";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  cover?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

// Animation variants
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

const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth easing
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    },
  },
};

const buttonVariants = {
  rest: {
    scale: 1,
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#ffffff",
    color: "#000000",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

const HeroSection = ({
  title,
  description,
  imageSrc,
  cover = false,
  buttonText = "Let's connect", // default value
  buttonLink = "/contact",
}: HeroSectionProps) => {
  return (
    // <FluidBackground>
    <motion.section
      className="md:px-36 px-4 flex flex-col-reverse md:flex-row items-center justify-between h-auto md:h-[90vh] gap-10 my-10 md:my-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="md:w-[55%] text-center md:text-left"
        variants={textVariants}
      >
        <motion.h1
          className="md:text-[44px] text-4xl text-shadow-lg"
          variants={textVariants}
        >
          {title}
        </motion.h1>
        <motion.p
          className="md:text-xl text-base md:w-11/12 my-8 text-gray-700"
          variants={textVariants}
        >
          {description}
        </motion.p>

        {buttonText && buttonLink && (
          <motion.div variants={textVariants}>
            <Link href={buttonLink}>
              <motion.button
                className="rounded-full px-8 py-3 border border-transparent cursor-pointer shadow-2xl font-medium"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                {buttonText}
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="md:w-[55%] w-full flex justify-center"
        variants={imageVariants}
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Image
            src={imageSrc}
            alt="Hero"
            height={500}
            width={500}
            className={`md:w-full md:h-[350px] lg:w-[80%] lg:h-[500px] ${
              cover ? "object-cover" : ""
            }`}
          />
        </motion.div>
      </motion.div>
    </motion.section>
    // </FluidBackground>
  );
};

export default HeroSection;
