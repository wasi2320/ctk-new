import { GROWTH_SECTION } from "@/utils/data/growthSection";
import Image from "next/image";

const GrowthSection = () => {
  return (
    <section className="md:px-20 px-4 pt-12 pb-24 bg-[#F9F8F8]">
      <h2 className="md:text-4xl text-2xl text-center nunito-bold font-bold mb-5">
        {GROWTH_SECTION.heading}
      </h2>
      <p className="md:text-xl nunito-medium md:w-7/12 mx-auto text-center font-semibold">
        {GROWTH_SECTION.description}
      </p>
      <div className="grid md:grid-cols-3 mt-14 gap-10">
        {GROWTH_SECTION.cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <Image
              src={card.imageSrc}
              alt=""
              width={75}
              height={75}
              className="w-[75px] h-[75px]"
            />
            <h3 className="md:text-2xl text-xl nunito-bold font-semibold">
              {card.title}
            </h3>

            <p className="md:text-xl text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowthSection;
