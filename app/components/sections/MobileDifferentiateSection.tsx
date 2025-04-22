import { MOBILE_DIFFERENTIATE_SECTION } from "@/utils/data/mobileDifferentiateSection";
import Image from "next/image";

const MobileDifferentiateSection = () => {
  return (
    <section className="md:px-20 px-4 py-20 bg-[url('/Images/Mobile_Diff_Bg.png')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-between items-center text-white gap-12">
      <div className="md:w-[45%]">
        <h2 className="md:text-4xl text-3xl nunito-bold font-bold mb-4 text-center md:text-start">
          {MOBILE_DIFFERENTIATE_SECTION.heading}
        </h2>
        <p className="md:text-xl text-center md:text-start">
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
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/Images/Arrow_Right.svg"
                  alt=""
                  width={13}
                  height={13}
                   className="md:h-[20px] h-[16px] md:w-[20px] w-[16px]"
                />
                <h3 className="md:text-2xl text-lg nunito-bold font-bold">
                  {card.title}
                </h3>
              </div>
              <p className="md:text-xl text-sm ml-6 text-white/80">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileDifferentiateSection;
