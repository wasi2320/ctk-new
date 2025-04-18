import { MOBILE_DIFFERENTIATE_SECTION } from "@/utils/data/mobileDifferentiateSection";
import Image from "next/image";

const MobileDifferentiateSection = () => {
  return (
    <section className="md:px-20 px-4 py-16 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat flex justify-between items-center text-white gap-12">
      <div className="md:w-[45%]">
        <h2 className="md:text-4xl text-2xl nunito-bold font-bold mb-4">
          {MOBILE_DIFFERENTIATE_SECTION.heading}
        </h2>
        <p className="md:text-xl">
          {MOBILE_DIFFERENTIATE_SECTION.description}
        </p>
        <div className="md:h-[400px] mt-7">
          <Image
            src={MOBILE_DIFFERENTIATE_SECTION.image}
            alt=""
            width={260}
            height={400}
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
       
      </div>
      <div className="md:w-[55%]">
        <div className="grid md:grid-cols-1 gap-8">
          {MOBILE_DIFFERENTIATE_SECTION.cards.map((card, index) => (
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
              <p className="md:text-xl md:ml-6 text-white/80">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileDifferentiateSection;
