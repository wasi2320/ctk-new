import { WEB_BUSINESS_SECTION } from "@/utils/data/webBusinessSection";
import Image from "next/image";

const WebBusinessSection = () => {
  return (
    <section className="md:px-20 px-4 pt-12 pb-16">
      <h2 className="md:text-4xl text-3xl nunito-bold font-bold mb-5 text-center md:text-start">
        {WEB_BUSINESS_SECTION.heading}
      </h2>
      <p className="md:text-xl nunito-medium md:w-9/12 text-center md:text-start">
        {WEB_BUSINESS_SECTION.description}
      </p>
      <div className="grid md:grid-cols-4 mt-14 gap-10">
        {WEB_BUSINESS_SECTION.cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <Image
              src={card.imageSrc}
              alt=""
              width={60}
              height={60}
              className="w-[60px] h-[60px]"
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

export default WebBusinessSection;
