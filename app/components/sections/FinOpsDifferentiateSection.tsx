import { FINOPS_DIFFERENTIATE_SECTION } from "@/utils/data/finOpsDifferentiateSection";
import Image from "next/image";

const FinOpsDifferentiateSection = () => {
  return (
    <section className="md:px-20 px-4 pb-24 pt-12 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <h2 className="md:text-4xl text-2xl nunito-bold font-bold mb-5">
        {FINOPS_DIFFERENTIATE_SECTION.heading}
      </h2>
      <p className="md:text-2xl text-white/70">
        {FINOPS_DIFFERENTIATE_SECTION.description}
      </p>
      <div className="grid md:grid-cols-4 mt-16 gap-10">
        {FINOPS_DIFFERENTIATE_SECTION.cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <Image
              src={card.imageSrc}
              alt=""
              width={75}
              height={75}
              className="w-[75px] h-[75px]"
            />
            <h3 className="md:text-xl nunito-bold font-semibold">
              {card.title}
            </h3>

            <p className="md:text-lg text-white/70 text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinOpsDifferentiateSection;
