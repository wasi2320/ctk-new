import { AI_BUSINESS_SECTION } from "@/utils/data/aiBusinessSection";
import Image from "next/image";

const AiBusinessSection = () => {
  return (
    <section className="md:px-20 px-4 pt-12 pb-20">
      <div className="md:ml-10">
        <h2 className="md:text-4xl text-2xl nunito-bold font-bold mb-5">
          {AI_BUSINESS_SECTION.heading}
        </h2>
        <p className="md:text-lg font-semibold">
          {AI_BUSINESS_SECTION.description}
        </p>
      </div>
      <div className="flex justify-between items-center mt-14">
        <div className="grid md:grid-cols-1 gap-8 md:w-[65%]">
          {AI_BUSINESS_SECTION.cards.map((card, index) => (
            <div key={index} className="">
              <div className="flex gap-5 mb-2">
                <Image src="/Images/Tick.svg" alt="" width={20} height={20} />
                <h3 className="md:text-2xl nunito-bold font-semibold">
                  {card.title}
                </h3>
              </div>
              <p className="md:text-xl md:ml-10 md:w-10/12">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-[35%]">
          <Image
            src={AI_BUSINESS_SECTION.image}
            alt=""
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default AiBusinessSection;
