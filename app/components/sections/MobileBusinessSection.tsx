import { MOBILE_BUSINESS_SECTION } from "@/utils/data/mobileBusinessSection";
import Image from "next/image";

const MobileBusinessSection = () => {
  return (
    <section className="md:px-20 px-4 pt-12 pb-24">
      <h2 className="md:text-4xl text-3xl nunito-bold font-bold mb-5 text-center md:text-start">
        {MOBILE_BUSINESS_SECTION.heading}
      </h2>
      <p className="md:text-xl nunito-medium md:w-9/12 text-center md:text-start">
        {MOBILE_BUSINESS_SECTION.description}
      </p>
      <div className="grid md:grid-cols-2 mt-14 gap-10">
        {MOBILE_BUSINESS_SECTION.cards.map((card, index) => (
          <div key={index} className="flex gap-5">
            <div>
              <Image
                src={card.imageSrc}
                alt=""
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
            </div>
            <div>
              <h3 className="md:text-2xl nunito-bold font-semibold mb-2">
                {card.title}
              </h3>
              <p className="md:text-xl">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileBusinessSection;
