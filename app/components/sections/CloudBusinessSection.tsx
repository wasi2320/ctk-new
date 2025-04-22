import { CLOUD_BUSINESS_SECTION } from "@/utils/data/cloudBusinessSection";
import Image from "next/image";

const CloudBusinessSection = () => {
  return (
    <section className="md:px-20 px-4 py-16">
      <h2 className="md:text-4xl text-3xl text-center nunito-bold font-bold mb-5">
        {CLOUD_BUSINESS_SECTION.heading}
      </h2>

      <div className="grid md:grid-cols-4 grid-cols-2 mt-16 md:gap-10 gap-4">
        {CLOUD_BUSINESS_SECTION.cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 bg-white md:pt-12 md:pb-24 py-6 md:px-6 px-3 rounded-2xl all-shadow"
          >
            <Image
              src={card.imageSrc}
              alt=""
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
            <h3 className="md:text-xl text-lg nunito-bold font-semibold text-center">
              {card.title}
            </h3>

            <p className="md:text-lg text-sm text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudBusinessSection;
