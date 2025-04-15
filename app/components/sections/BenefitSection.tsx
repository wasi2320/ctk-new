import { BENEIT_SECTION } from "@/utils/data/benefitSection";
import Image from "next/image";

const BenefitSection = () => {
  return (
    <section className="md:px-20 px-4 py- flex justify-between items-center bg-black text-white">
      <div className="md:w-[38%]">
        <h2 className="md:text-4xl text-2xl text-shadow-2xl nunito-bold font-bold md:w-9/12">
          {BENEIT_SECTION.title}
        </h2>
        <p className="md:text-xl text-base md:w-12/12 my-8 text-white/80">
          {BENEIT_SECTION.description}
        </p>
        <div>
          {BENEIT_SECTION.points.map((point, index) => (
            <ul key={index}>
              <li className="md:text-xl text-white/80">{point}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="md:w-[65%]">
        <Image
          src={BENEIT_SECTION.image}
          alt="Hero"
          height={480}
          width={500}
          className="h-[480px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default BenefitSection;
