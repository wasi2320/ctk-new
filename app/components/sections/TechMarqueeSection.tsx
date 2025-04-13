import { TECH_MARQUEE_SECTION } from "@/utils/data/techMarqueeSection";
import Image from "next/image";

const TechMarqueeSection = () => {
  return (
    <section className="bg-[#F9F8F8] py-20 md:px-20 px-4">
      <h2 className="md:text-4xl text-2xl text-center nunito-bold font-bold mb-5">
        {TECH_MARQUEE_SECTION.heading}
      </h2>
      <p className="md:text-xl nunito-medium md:w-6/12 mx-auto text-center font-semibold">
        {TECH_MARQUEE_SECTION.description}
      </p>
      <div className="flex justify-between mt-12 mx-20">
        {TECH_MARQUEE_SECTION.marqueeItems.map((img, index) => (
          <div
            key={index}
            className="p-4 rounded-lg left-right-bottom-shadow bg-[#EFEEEE]/40"
          >
            <Image
              src={img}
              alt=""
              height={80}
              width={80}
              className="w-[80px] h-[80px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechMarqueeSection;
