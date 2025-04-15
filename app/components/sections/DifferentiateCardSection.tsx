import { DIFFERENTIATE_CARD_SECTION } from "@/utils/data/differentiateCardSection";
import Image from "next/image";

const DifferentiateCardSection = () => {
  return (
    <section className="md:px-20 px-4 py-20 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat">
      <h2 className="md:text-4xl text-2xl nunito-bold font-bold text-white">
        {DIFFERENTIATE_CARD_SECTION.heading}
      </h2>
      <div className="grid md:grid-cols-2 mt-14 gap-10">
        {DIFFERENTIATE_CARD_SECTION.cards.map((card, index) => (
          <div
            key={index}
            className="bg-[linear-gradient(to_right,#D9D9D9,#A4AEAB)] py-8 px-12 rounded-2xl"
          >
            <div className="mb-2">
              <Image src="/Images/Line.svg" alt="" width={30} height={30} />
            </div>
            <h3 className="nunito-bold font-semibold mb-5">{card.title}</h3>
            <p className="md:text-2xl font-bold">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DifferentiateCardSection;
