import { AI_DIFFERENTIATE_SECTION } from "@/utils/data/aiDifferentiateSection";
import Image from "next/image";

const AiDifferentiateSection = () => {
  return (
    <section className="md:px-20 px-4 py-12 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat flex justify-between items-center text-white gap-12">
      <div className="md:w-[45%]">
        <h2 className="md:text-4xl text-2xl nunito-bold font-bold md:ml-10">
          {AI_DIFFERENTIATE_SECTION.heading}
        </h2>
        <div className="md:h-[300px] my-4">
        <Image
          src={AI_DIFFERENTIATE_SECTION.image}
          alt=""
          width={260}
          height={260}
          className="h-full w-full object-cover rounded-3xl"
        />
        </div>
        <p className="md:text-lg md:ml-10">
          {AI_DIFFERENTIATE_SECTION.description}
        </p>
      </div>
      <div className="md:w-[55%]">
        <div className="grid md:grid-cols-1 gap-14">
          {AI_DIFFERENTIATE_SECTION.cards.map((card, index) => (
            <div key={index} className="">
              <div className="flex gap-3 mb-2">
                <Image
                  src="/Images/Arrow_Right.svg"
                  alt=""
                  width={13}
                  height={13}
                />
                <h3 className="md:text-2xl nunito-bold font-semibold">
                  {card.title}
                </h3>
              </div>
              <p className="md:text-xl md:ml-6">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiDifferentiateSection;
