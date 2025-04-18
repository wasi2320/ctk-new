"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const portfolioData = [
  {
    id: 1,
    title: "Sheertopia.io",
    projectUrl: "https://sheertopia.io/",
    description1:
      "Revolutionizing Gaming: Blockchain-Powered Immersive Experiences with Unity and Solidity",
    description2:
      "Sheertopia.io required a fusion of gaming and Web3, leading us to create an immersive platform that integrates blockchain technology for a unique gaming experience. Utilizing Unity and Solidity, we delivered a seamless interface that offers players blockchain-based assets, elevating their gaming journey.",
    backgroundImage: "/portfolio/sheertopia-home.webp",
    technologies: ["Unity", "Solidity", "Blockchain"],
    clientTestimonial:
      "Sheertopia.io transformed our gaming experience with innovative blockchain integration.",
  },
  {
    id: 2,
    title: "Magnus Home Products",
    projectUrl: "https://www.magnushomeproducts.com/",
    description1:
      "Boosting Sales with SEO-Optimized E-Commerce for Home Products",
    description2:
      "Magnus Home Products sought to enhance their online presence and sales. We developed a robust, SEO-optimized e-commerce site, complemented by a comprehensive digital marketing strategy. This approach significantly increased their online visibility and sales, showcasing their extensive product catalog.",
    backgroundImage: "/portfolio/magnus-home.webp",
    technologies: [
      "Hydrogen Shopify",
      "Sanity",
      "Digital Marketing",
      "E-Commerce",
    ],
    clientTestimonial:
      "Our online sales soared thanks to the SEO and marketing strategies implemented.",
  },
  {
    id: 3,
    title: "QuantixAI",
    projectUrl: "https://quantixai.io/",
    description1:
      "AI and Blockchain: Showcasing Cutting-Edge Solutions with a Fusion of Web2 and Web3",
    description2:
      "QuantixAI aimed to showcase their AI and blockchain solutions. We created a website that combines Web2 and Web3 functionalities, highlighting their expertise in AI-driven applications for blockchain, establishing them as thought leaders in the space.",
    backgroundImage: "/portfolio/quantix-ai.png",
    technologies: ["AI", "Blockchain", "Web2 & Web3"],
    clientTestimonial:
      "QuantixAI perfectly demonstrates our expertise in AI and blockchain technology.",
  },
];

export const PortfolioSection = () => {
  return (
    <>
      <section className="relative pb-3 lg:pb-[6rem] md:px-20 px-4 my-12">
        {portfolioData.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              className={`rounded-4xl flex flex-col lg:flex-row items-start justify-between h-full lg:h-screen lg:sticky lg:top-[.2rem] bg-black overflow-hidden ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } bg-cover bg-center mb-12 lg:mb-0`}
              initial={{ y: 100 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              {index == 0 ? (
                <Image
                  src="/decorator/s-10.png"
                  height={500}
                  width={500}
                  alt="decorator"
                  className="absolute left-0 bottom-0 z-30 opacity-30"
                />
              ) : index == 1 ? (
                <Image
                  src="/decorator/s-4.png"
                  height={500}
                  width={500}
                  alt="decorator"
                  className="absolute right-0 bottom-0 z-30 opacity-30"
                />
              ) : index == 2 ? (
                <Image
                  src="/decorator/s-9.png"
                  height={500}
                  width={500}
                  alt="decorator"
                  className="absolute left-0 bottom-10 z-30 opacity-20"
                />
              ) : (
                <></>
              )}
              <div className="w-full lg:w-[50%] space-y-4 lg:space-y-6 h-full p-6 lg:p-12 flex flex-col justify-start">
                <h3 className="text-xl lg:text-2xl text-white">{`0${item.id}`}</h3>

                <div className="space-y-4 lg:space-y-5">
                  <p className="text-white">{item.description1}</p>
                  <p className="text-white">{item.description2}</p>
                  <ul className="list-disc pl-5 text-white">
                    {item.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <blockquote className="italic text-white border-l-4 border-white pl-4">
                    {item.clientTestimonial}
                  </blockquote>
                </div>
                <div className="pt-8 lg:pt-12 flex gap-4"></div>
              </div>
              <div className="w-full lg:w-[50%] h-[300px] lg:h-[94vh]">
                <Image
                  src={item.backgroundImage}
                  alt={item.title || "portfolio"}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </section>
    </>
  );
};
