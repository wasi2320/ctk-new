import { TECH_STACK_SECTION } from "@/utils/data/techStackSection";
import Link from "next/link";
import Image from "next/image";

const TechStackSection = () => {
  return (
    <section className="md:px-20 px-4 py-12 flex justify-between">
      <div className="md:w-1/2">
        <h2 className="md:text-6xl text-4xl">{TECH_STACK_SECTION.heading}</h2>
        <p className="md:text-xl mt-10 mb-8">{TECH_STACK_SECTION.subHeading}</p>
        <Link href={TECH_STACK_SECTION.button.link}>
          <button className="rounded-full px-7 py-2 bg-black text-white cursor-pointer">
            {TECH_STACK_SECTION.button.text}
          </button>
        </Link>
      </div>
      <div className="md:w-[42%] flex justify-between items-center">
        <div className="space-y-8">
          {TECH_STACK_SECTION.techImagesCol1.map((img, index) => (
            <div
              key={index}
              className="p-4 rounded-lg right-bottom-shadow bg-[linear-gradient(to_right,#ffffff,#D9D9D933)]"
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
        <div className="space-y-8">
          {TECH_STACK_SECTION.techImagesCol2.map((img, index) => (
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
        <div className="space-y-8">
          {TECH_STACK_SECTION.techImagesCol3.map((img, index) => (
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
        <div className="space-y-8">
          {TECH_STACK_SECTION.techImagesCol4.map((img, index) => (
            <div
              key={index}
              className="p-4 rounded-lg left-bottom-shadow bg-[linear-gradient(to_right,#D9D9D933,#FFFFFF)]"
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
      </div>
    </section>
  );
};

export default TechStackSection;
