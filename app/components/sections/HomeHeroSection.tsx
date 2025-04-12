import { HOME_HERO_SECTION } from "@/utils/data/homeHeroSection";
import Link from "next/link";
import Image from "next/image";

const HomeHeroSection = () => {
  return (
    <section className="md:px-20 px-4 flex items-center justify-between h-[90vh]">
      <div className="md:w-1/2">
        <h1 className="md:text-7xl text-4xl text-shadow-2xl">{HOME_HERO_SECTION.heading}</h1>
        <h3 className="md:text-xl md:w-6/12 my-8">{HOME_HERO_SECTION.subHeading}</h3>
        <div className="flex items-center gap-20">
          <Link href={HOME_HERO_SECTION.button.link}>
            <button className="rounded-full px-7 py-2 bg-black text-white cursor-pointer">{HOME_HERO_SECTION.button.text}</button>
          </Link>
          <Image src={HOME_HERO_SECTION.img} alt="" height={90} width={90} />
        </div>
        <p className="md:text-xl text-[#050B0B] mt-10">{HOME_HERO_SECTION.text}</p>
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
