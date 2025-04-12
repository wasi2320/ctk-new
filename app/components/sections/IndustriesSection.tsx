import { INDUSTRIES_SECTION } from "@/utils/data/industriesSection";
import Image from "next/image";

const IndustriesSection = () => {
  return (
    <section className="py-12 px-4 md:px-20">
      <div className="flex justify-between items-center">
        <h2 className="md:text-5xl font-medium md:w-4/12">
          {INDUSTRIES_SECTION.heading}
        </h2>
        <p className="md:text-xl md:w-4/12">{INDUSTRIES_SECTION.description}</p>
      </div>
      <div className="flex items-center mt-7 gap-10">
        <div className="md:w-[30%] h-[550px]">
          <Image
            src={INDUSTRIES_SECTION.image}
            alt=""
            height={500}
            width={500}
            className="w-full h-full"
          />
        </div>
        <div className="md:w-[70%]">
          <div className="grid md:grid-cols-3 gap-5">
            {INDUSTRIES_SECTION.cards.map((card, index) => {
              // Debugging: Log the index and check the condition
              console.log(`Index: ${index}, Condition: ${index === 1}`);

              return (
                <div
                  key={index}
                  className={`
                    bg-white 
                    px-4 py-6 
                    rounded-3xl 
                    border 
                    border-[#152F27] 
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    ${index === 1 ? "!bg-[#081410] text-white" : ""}
                  `}
                >
                  <Image
                    src={card.img}
                    alt=""
                    height={50}
                    width={50}
                    className="w-[50px] h-[50px]"
                  />
                  <h3
                    className={`
                    md:text-xl 
                    my-6 
                    font-medium 
                    nunito-medium
                    ${index === 1 ? "text-white" : "text-[#172A46]"}
                  `}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`
                    md:text-base 
                    text-center 
                    ${index === 1 ? "text-white" : "text-[#172A46]"}
                  `}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
