import { CLOUD_BUSINESS_SECTION } from "@/utils/data/cloudBusinessSection";
import Image from "next/image";

const CloudBusinessSection = () => {
  return (
    <section className="md:px-20 px-4 py-16">
      <h2 className="md:text-4xl text-2xl text-center nunito-bold font-bold mb-5">
        {CLOUD_BUSINESS_SECTION.heading}
      </h2>

      <div className="grid md:grid-cols-4 mt-16 gap-10">
        {CLOUD_BUSINESS_SECTION.cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 bg-white py-12 px-6 rounded-2xl all-sides-shadow"
          >
            <Image
              src={card.imageSrc}
              alt=""
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
            <h3 className="md:text-xl nunito-bold font-semibold text-center">
              {card.title}
            </h3>

            <p className="md:text-lg text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudBusinessSection;
