import { AI_DIFFERENTIATE_SECTION } from "@/utils/data/aiDifferentiateSection";
import Image from "next/image";

const AiDifferentiateSection = () => {
  return (
    <section className="md:px-28 px-4 py-12 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-between items-center text-white gap-12">
      <div className="md:w-[45%]">
        <h2 className="md:text-4xl text-3xl text-center md:text-start nunito-bold font-bold md:ml-10">
          {AI_DIFFERENTIATE_SECTION.heading}
        </h2>
        <div className="md:h-[300px] my-4">
        <p className="text-center mb-5 md:hidden">
          {AI_DIFFERENTIATE_SECTION.description}
        </p>
        <Image
          src={AI_DIFFERENTIATE_SECTION.image}
          alt=""
          width={260}
          height={260}
          className="h-full w-full object-cover rounded-3xl"
        />
        </div>
        <p className="text-lg ml-10 hidden md:block">
          {AI_DIFFERENTIATE_SECTION.description}
        </p>
      </div>
      <div className="md:w-[55%]">
        <div className="grid md:grid-cols-1 gap-14">
          {AI_DIFFERENTIATE_SECTION.cards.map((card, index) => (
            <div key={index} className="">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/Images/Arrow_Right.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="md:h-[20px] h-[16px] md:w-[20px] w-[16px]"
                />
                <h3 className="md:text-2xl text-xl nunito-bold font-bold">
                  {card.title}
                </h3>
              </div>
              <p className="md:text-xl ml-6">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiDifferentiateSection;
