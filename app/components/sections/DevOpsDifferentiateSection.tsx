import { DEVOPS_DIFFERENTIATE_SECTION } from "@/utils/data/devOpsDifferentiateSection";
import Image from "next/image";

const DevOpsDifferentiateSection = () => {
  return (
    <section className="md:px-28 px-4 py-20 flex flex-col md:flex-row justify-between items-center bg-[#F9F8F8]">
      <h2 className="text-2xl text-shadow-2xl nunito-bold font-bold md:hidden text-center mb-6">
        {DEVOPS_DIFFERENTIATE_SECTION.title}
      </h2>
      <div className="md:w-[45%]">
        <Image
          src={DEVOPS_DIFFERENTIATE_SECTION.image}
          alt="Hero"
          height={470}
          width={500}
          className="md:h-[470px] h-[370px] w-full object-contain"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl text-shadow-2xl nunito-bold font-bold w-9/12 hidden md:block">
          {DEVOPS_DIFFERENTIATE_SECTION.title}
        </h2>
        <p className="md:text-xl text-base md:w-12/12 my-8">
          {DEVOPS_DIFFERENTIATE_SECTION.description}
        </p>
        <div>
          {DEVOPS_DIFFERENTIATE_SECTION.points.map((point, index) => (
            <ul key={index}>
              <li className="md:text-xl">{point}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsDifferentiateSection;
