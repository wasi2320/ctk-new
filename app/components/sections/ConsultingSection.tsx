import { CONSULTING_SECTION } from "@/utils/data/consultingSection";
import Image from "next/image";

const ConsultingSection = () => {
  return (
    <section className="md:px-20 px-4 md:py-20 py-10 flex flex-col md:flex-row justify-between items-center">
       <h2 className="text-2xl text-center mb-6 text-shadow-2xl nunito-bold font-bold md:hidden">
          {CONSULTING_SECTION.title}
        </h2>
      <div className="md:w-[45%]">
        <Image
          src={CONSULTING_SECTION.image}
          alt="Hero"
          height={350}
          width={500}
          className="md:h-[350px] h-[250px] w-full"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl text-shadow-2xl nunito-bold font-bold hidden md:block">
          {CONSULTING_SECTION.title}
        </h2>
        <p className="md:text-xl text-base md:w-11/12 my-8 text-gray-600 text-center md:text-start">
          {CONSULTING_SECTION.description}
        </p>
        <div>
          {CONSULTING_SECTION.points.map((point, index) => (
            <ul key={index} className="flex justify-center md:justify-start">
              <li className="md:text-xl text-gray-600 text-center md:text-start">{point}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
