import { DIFFERENTIATE_SECTION } from "@/utils/data/differentiateSection";
import Image from "next/image";

const DifferentiateSection = () => {
  return (
    <section className="md:px-20 px-4 py-16 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <h2 className="md:text-4xl text-2xl nunito-bold font-bold text-center">
        {DIFFERENTIATE_SECTION.heading}
      </h2>
      <div className="grid md:grid-cols-3 mt-14 gap-10">
        {DIFFERENTIATE_SECTION.cards.map((card, index) => (
          <div key={index} className="">
            <div className="flex gap-3 mb-2">
              <Image src="/Images/Arrow_Right.svg" alt="" width={13} height={13} />
              <h3 className="md:text-2xl nunito-bold font-semibold">{card.title}</h3>
            </div>
            <p className="md:text-xl md:ml-6">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DifferentiateSection;
