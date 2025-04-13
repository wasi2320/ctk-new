import { CONSULTING_SECTION } from "@/utils/data/consultingSection";
import Image from "next/image";

const ConsultingSection = () => {
  return (
    <section className="md:px-20 px-4 py-20 flex justify-between items-center">
      <div className="md:w-[45%]">
        <Image
          src={CONSULTING_SECTION.image}
          alt="Hero"
          height={350}
          width={500}
          className="h-[350px] w-full"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="md:text-4xl text-2xl text-shadow-2xl nunito-bold font-bold">
          {CONSULTING_SECTION.title}
        </h2>
        <p className="md:text-xl text-base md:w-11/12 my-8 text-gray-600">
          {CONSULTING_SECTION.description}
        </p>
        <div>
          {CONSULTING_SECTION.points.map((point, index) => (
            <ul key={index}>
              <li className="md:text-xl text-gray-600">{point}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
