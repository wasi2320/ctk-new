import { DIFFERENTIATE_CARD_SECTION } from "@/utils/data/differentiateCardSection";
import Image from "next/image";

const DifferentiateCardSection = () => {
  return (
    <section className="md:px-28 px-4 py-20 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat">
      <h2 className="md:text-4xl text-2xl nunito-bold font-bold text-white text-center md:text-start">
        {DIFFERENTIATE_CARD_SECTION.heading}
      </h2>
      <div className="grid md:grid-cols-2 mt-14 md:gap-10 gap-5">
        {DIFFERENTIATE_CARD_SECTION.cards.map((card, index) => (
          <div
            key={index}
            className="bg-[linear-gradient(to_right,#D9D9D9,#A4AEAB)] md:py-8 py-4 md:px-12 px-6 rounded-2xl"
          >
            <div className="mb-2 hidden md:block">
              <Image src="/Images/Line.svg" alt="" width={30} height={30} />
            </div>
            <h3 className="nunito-bold font-semibold md:mb-5 mb-3 text-xl md:text-base text-center md:text-start">{card.title}</h3>
            <p className="md:text-2xl font-bold text-center md:text-start">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DifferentiateCardSection;
