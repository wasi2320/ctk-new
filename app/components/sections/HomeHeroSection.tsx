import { HOME_HERO_SECTION } from "@/utils/data/homeHeroSection";
import Link from "next/link";
import Image from "next/image";

const HomeHeroSection = () => {
  return (
    <section className="md:px-28 px-4 flex flex-col-reverse md:flex-row items-center justify-between h-[90vh]">
      <div className="md:w-1/2">
        <h1 className="md:text-7xl text-[40px] text-shadow-lg leading-10 md:leading-16 text-shadow-2xl text-center md:text-start">{HOME_HERO_SECTION.heading}</h1>
        <h3 className="md:text-xl md:w-6/12 my-8 text-center md:text-start">{HOME_HERO_SECTION.subHeading}</h3>
        <div className="flex items-center justify-center md:justify-start gap-8 md:gap-20">
          <Link href={HOME_HERO_SECTION.button.link}>
            <button className="rounded-full md:px-7 px-4 py-2 text-sm md:text-base bg-black text-white cursor-pointer">{HOME_HERO_SECTION.button.text}</button>
          </Link>
          <div className="md:w-[90px] w-[60px] md:h-[90px] h-[60px]">
          <Image src={HOME_HERO_SECTION.img} alt="" height={90} width={90} className="w-full h-full" />
          </div>
        </div>
        <p className="md:text-xl text-[#050B0B] mt-10 text-center md:text-start">{HOME_HERO_SECTION.text}</p>
      </div>
      <div className="md:w-[45%]">
        <Image
          src={HOME_HERO_SECTION.mainImage}
          alt=""
          height={500}
          width={500}
        />
      </div>
    </section>
  );
};

export default HomeHeroSection;
