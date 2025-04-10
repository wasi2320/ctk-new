import { INFRASTRUCTURE_SECTION } from "@/utils/data/infrastructureSection";
import Image from "next/image";

const InfrastructureSection = () => {
  return (
    <section className="py-12">
      <h2 className="md:text-5xl text-center font-semibold md:w-7/12 mx-auto">
        {INFRASTRUCTURE_SECTION.heading}
      </h2>
      <p className="text-center md:text-lg md:w-5/12 mx-auto my-5">
        {INFRASTRUCTURE_SECTION.description}
      </p>
      <div className="flex items-center md:w-8/12 mx-auto">
        <div className="md:w-[60%] relative -right-10">
          <div className="flex flex-col gap-6">
            {INFRASTRUCTURE_SECTION.cards.map((card, index) => (
              <div
                key={index}
                className="shadow-2xl bg-white py-4 px-8 rounded-3xl"
              >
                <div className="flex justify-between">
                  <h3 className="md:text-3xl mb-3 font-semibold">
                    {card.title}
                  </h3>
                  <Image
                    src="/Images/Down_Arrow.svg"
                    alt=""
                    height={18}
                    width={18}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <p className="md:text-lg">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[40%] h-[550px]">
          <Image
            src={INFRASTRUCTURE_SECTION.image}
            alt=""
            height={500}
            width={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
