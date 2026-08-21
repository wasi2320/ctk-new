"use client";
import type { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// import FluidBackground from "./FluidBackground";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
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
    backgroundColor: "#ff9900",
    color: "#16212e",
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#16212e",
    color: "#ffffff",
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
  imageAlt,
  cover = false,
  buttonText = "Book an AWS review",
  buttonLink = "/contact",
}: HeroSectionProps) => {
  const isAnchorLink = Boolean(buttonLink?.startsWith("#"));

  const handleAnchorClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!isAnchorLink || !buttonLink) return;

    event.preventDefault();
    const target = document.querySelector(buttonLink);

    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", buttonLink);
    } else {
      window.location.hash = buttonLink;
    }
  };

  const renderButton = () => (
    <motion.button
      type="button"
      className="rounded-full px-8 py-3 border border-transparent cursor-pointer shadow-2xl font-medium"
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={isAnchorLink ? handleAnchorClick : undefined}
    >
      {buttonText}
    </motion.button>
  );

  return (
    // <FluidBackground>
    <motion.section
      className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-14 lg:px-16 lg:py-14 xl:px-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="text-center md:text-left"
        variants={textVariants}
      >
        <motion.h1
          className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[44px]"
          variants={textVariants}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg md:mx-0 md:max-w-xl lg:text-xl"
          variants={textVariants}
        >
          {description}
        </motion.p>

        {buttonText && buttonLink && (
          <motion.div className="mt-6" variants={textVariants}>
            {isAnchorLink ? (
              renderButton()
            ) : (
              <Link href={buttonLink}>{renderButton()}</Link>
            )}
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="flex w-full justify-center"
        variants={imageVariants}
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          className="w-full max-w-[420px] md:max-w-[480px]"
        >
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            height={500}
            width={500}
            className={`h-auto max-h-[280px] w-full sm:max-h-[320px] md:max-h-[380px] lg:max-h-[420px] ${
              cover ? "object-cover" : "object-contain"
            }`}
          />
        </motion.div>
      </motion.div>
    </motion.section>
    // </FluidBackground>
  );
};

export default HeroSection;
