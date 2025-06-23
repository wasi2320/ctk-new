import Image from "next/image";
import { SMB_BUSINESS_SECTION } from "@/utils/data/smbBusinessSection";

const SMBBusinessSection = () => {
  return (
    <section className="md:px-28 px-4 pt-12 pb-24">
      <h2 className="md:text-4xl text-2xl text-center nunito-bold font-bold mb-5">
        {SMB_BUSINESS_SECTION.heading}
      </h2>
      <p className="md:text-xl nunito-medium md:w-8/12 mx-auto text-center font-semibold mb-16">
        {SMB_BUSINESS_SECTION.description}
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 md:w-10/12 mx-auto">
        {SMB_BUSINESS_SECTION.cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 md:p-8"
          >
            <div className="mb-6">
              <Image
                src={card.icon}
                alt={card.title}
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            <h3 className="nunito-bold md:text-2xl text-xl font-semibold mb-4">
              {card.title}
            </h3>
            <p className="md:text-lg text-base leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SMBBusinessSection;
