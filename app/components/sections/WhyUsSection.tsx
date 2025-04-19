import { WHY_US_SECTION } from "@/utils/data/whyUsSection";
import Image from "next/image";

const WhyUsSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-5 bg-[url('/Images/Mission_Bg.png')] bg-cover bg-center bg-no-repeat h-[65vh]">
      <div className="md:w-1/2 text-white md:ml-32">
        <h2 className="md:text-4xl text-2xl text-shadow-2xl nunito-bold font-bold text-center md:text-start md:w-10/12 px-4 md:px-0 md:leading-12 mt-7 md:mt-0">
          {WHY_US_SECTION.heading}
        </h2>
        <p className="md:text-lg text-sm md:mt-7 pt-3 text-gray-300 md:w-10/12 px-4 md:px-0 text-center md:text-start">
          {WHY_US_SECTION.description}
        </p>
      </div>
      <div className="md:w-1/2 h-full">
        <Image
          src={WHY_US_SECTION.rightImage}
          alt=""
          height={500}
          width={500}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default WhyUsSection;
