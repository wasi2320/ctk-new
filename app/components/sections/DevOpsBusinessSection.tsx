import { DEVOPS_BUSINESS_SECTION } from "@/utils/data/devOpsBusinessSection";
import Image from "next/image";

const DevOpsBusinessSection = () => {
  return (
    <section className="md:px-28 px-4 py-20 flex flex-col md:flex-row justify-between items-center bg-[#F9F8F8]">
      <h2 className="text-2xl text-shadow-2xl nunito-bold font-bold md:hidden text-center mb-6">
        {DEVOPS_BUSINESS_SECTION.title}
      </h2>
      <div className="md:w-[45%]">
        <Image
          src={DEVOPS_BUSINESS_SECTION.image}
          alt="Hero"
          height={370}
          width={500}
          className="md:h-[370px] h-[300px] w-full"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl text-shadow-2xl nunito-bold font-bold w-9/12 hidden md:block">
          {DEVOPS_BUSINESS_SECTION.title}
        </h2>
        <p className="md:text-xl text-base md:w-12/12 my-8">
          {DEVOPS_BUSINESS_SECTION.description}
        </p>
        <div>
          {DEVOPS_BUSINESS_SECTION.points.map((point, index) => (
            <ul key={index}>
              <li className="md:text-xl list-disc list-inside">{point}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsBusinessSection;
