"use client";

import { TECH_CAROUSEL_SECTION } from "@/utils/data/techCarouselSection";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface TechCard {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  route: string;
}

const techCards: TechCard[] = [
  {
    title: "CI/CD Pipeline with ArgoCD Helm",
    subtitle: "Real-World cases in DevOps",
    imageSrc: "/services/ci_cd_eks2.png",
    imageAlt: "CI/CD Pipeline Illustration",
    route: "/helm-pipeline",
  },
  {
    title: "AWS Monolithic App Architecture",
    subtitle: "Real-World cases in Cloud Architecture",
    imageSrc: "/services/aws_mono2.png",
    imageAlt: "AWS Monolithic Architecture Illustration",
    route: "/monolithic-structure",
  },
  {
    title: "AWS Deployment & Security",
    subtitle: "Real-World cases in Cloud Security",
    imageSrc: "/services/awsDeployment2.png",
    imageAlt: "AWS Deployment Security Illustration",
    route: "/security-and-deployment",
  },
  {
    title: "Strengthening AWS Security",
    subtitle: "Real-World cases in Cloud Security",
    imageSrc: "/services/strength_aws2.png",
    imageAlt: "AWS Security Strengthening Illustration",
    route: "/strengthening-aws",
  },
  {
    title: "Automated Deployment",
    subtitle: "Real-World cases in DevOps",
    imageSrc: "/services/automated_aws2.png",
    imageAlt: "Automated Deployment Illustration",
    route: "/automated_deployment",
  },
  {
    title: "Scalable VoIP & AI Call Protection",
    subtitle: "Real-World cases in Cloud Services",
    imageSrc: "/services/GoAgalia2.png",
    imageAlt: "VoIP AI Protection Illustration",
    route: "/aws-scalable-secure",
  },
  {
    title: "Scalable and Secure AWS Setup",
    subtitle: "Real-World cases in Cloud Architecture",
    imageSrc: "/services/aws-solution-illustration.png",
    imageAlt: "Scalable AWS Setup Illustration",
    route: "/scalable-secure-aws",
  },
];

const TechCarouselSection = () => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center text-slate-800 mb-16">
        {TECH_CAROUSEL_SECTION.heading}
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
        <div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-600">
            Real-World Technology Solutions
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="rounded-3xl flex flex-col cursor-pointer items-start justify-between  lg:sticky lg:top-[6rem] all-sides-shadow overflow-hidden bg-cover bg-center mb-12 lg:mb-0 p-6 lg:p-20 bg-gray-50 z-10"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => router.push(card.route)}
            >
              <div className="w-full">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-lg text-slate-600 mb-4">{card.subtitle}</p>
              </div>
              <div className="flex justify-center w-full mt-4">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  width={300}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* <motion.button
                className="mt-6 px-6 py-3 text-xl text-slate-800 border-2 border-slate-800 rounded-full hover:bg-slate-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(card.route)}
              >
                Learn More
              </motion.button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCarouselSection;
