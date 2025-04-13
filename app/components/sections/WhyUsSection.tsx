import { WHY_US_SECTION } from "@/utils/data/whyUsSection";
import Image from "next/image";

const WhyUsSection = () => {
  return (
    <section className="flex justify-between items-center gap-5 bg-[url('/Images/Mission_Bg.png')] bg-cover bg-center bg-no-repeat h-[65vh]">
      <div className="md:w-1/2 text-white md:ml-32">
        <h2 className="md:text-4xl text-2xl text-shadow-2xl nunito-bold font-bold md:w-10/12 leading-12">
          {WHY_US_SECTION.heading}
        </h2>
        <p className="md:text-lg mt-7 text-gray-300 md:w-10/12">
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
