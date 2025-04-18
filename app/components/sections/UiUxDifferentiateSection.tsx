import { UIUX_DIFFERENTIATE_SECTION } from "@/utils/data/uiUxDifferentiateSection";
import Image from "next/image";

const UiUxDifferentiateSection = () => {
  return (
    <section className="md:px-20 px-4 pt-24 pb-12 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <h2 className="md:text-4xl text-2xl nunito-bold font-bold mb-5">
        {UIUX_DIFFERENTIATE_SECTION.heading}
      </h2>
      <p className="md:text-2xl text-white/70 md:w-7/12">
        {UIUX_DIFFERENTIATE_SECTION.description}
      </p>
      <div className="grid md:grid-cols-3 mt-16 gap-12">
        {UIUX_DIFFERENTIATE_SECTION.cards.map((card, index) => (
          <div key={index} className="flex flex-col gap-3">
            <Image
              src={card.imageSrc}
              alt=""
              width={375}
              height={370}
              className="w-full h-[450px]"
            />
            <h3 className="md:text-xl nunito-bold font-semibold mt-5">
              {card.title}
            </h3>

            <p className="md:text- md:w-11/12 text-white/70">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UiUxDifferentiateSection;
