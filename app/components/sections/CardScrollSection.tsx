"use client";
import { CARD_SCROLL_SECTION } from "@/utils/data/cardScrollSection";
import { motion } from "framer-motion";
import Image from "next/image";

export const CardScrollSection = () => {
  return (
    <section className="my-20">
      <div className="px-4 md:px-0">
        <h2 className="md:text-[22px]  text-3xl text-center nunito-bold font-bold mb-6">
          {CARD_SCROLL_SECTION.heading}
        </h2>
        <p className="md:text-xl text-sm nunito-semiBold md:w-7/12 mx-auto text-center font-semibold">
          {CARD_SCROLL_SECTION.description}
        </p>
      </div>

      {/* Mobile Sticky Container */}
      <div className="block md:hidden relative">
        {CARD_SCROLL_SECTION.cards.map((item, index) => (
          <motion.div
            key={index}
            className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-4xl all-sides-shadow w-full  p-6 flex flex-col">
              <div className="w-full h-[40%] mb-4">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 overflow-y-auto">
                <h2 className="text-[20px] nunito-bold font-bold mb-4  ">
                  {item.heading}
                </h2>
                <p className="nunito-extraLight mb-6">{item.description}</p>
                <div className="flex gap-2">
                  <button className="text-lg">Learn More</button>
                  <div className="w-7 h-7 flex justify-center items-center bg-[#152F27] rounded-full">
                    <Image
                      src="/Images/Arrow_Left.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Sticky Container (original code) */}
      <div className="hidden md:block relative pb-3 lg:pb-[6rem] md:px-28 px-4 mb-12">
        {CARD_SCROLL_SECTION.cards.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-4xl flex flex-col lg:flex-row items-center justify-between h-full lg:h-[90vh] lg:sticky lg:top-[.2rem] all-sides-shadow overflow-hidden bg-cover bg-center mb-12 lg:mb-0 p-6 lg:p-20 bg-white z-10"
            initial={{ y: 100 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <div className="w-full lg:w-[40%] space-y-4 lg:space-y-6 h-full flex flex-col justify-center">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="md:text-[22px]  text-2xl nunito-bold font-bold ">
                  {item.heading}
                </h2>
                <p className="md:text-xl nunito-extraLight">
                  {item.description}
                </p>

                <div
                  className="flex gap-2 mt-12 w-fit cursor-pointer"
                  onClick={() => {
                    window.location.href = item.route;
                  }}
                >
                  <button className="text-2xl cursor-pointer">
                    Learn More
                  </button>
                  <div className="w-7 h-7 flex justify-center items-center bg-[#152F27] rounded-full">
                    <Image
                      src="/Images/Arrow_Left.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[60%] pl-0 lg:pl-24">
              <Image
                src={item.image}
                alt={item.heading}
                width={500}
                height={500}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
