import { SAAS_DIFFERENTIATE_SECTION } from "@/utils/data/saasDifferentiateSection";
import Image from "next/image";

const SaaSDifferentiateSection = () => {
  return (
    <section className="bg-[#0e0f11] text-white py-16 px-4 md:px-28">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
        {/* Left side - Heading and description */}
        <div className="md:w-[45%] w-full border-r-2 pr-10">
          <h2 className="md:text-4xl text-3xl nunito-bold font-bold mb-6 text-center md:text-left">
            {SAAS_DIFFERENTIATE_SECTION.heading}
          </h2>
          <p className="md:text-lg text-base text-white/80 text-center md:text-left">
            {SAAS_DIFFERENTIATE_SECTION.description}
          </p>
        </div>

        {/* Right side - Cards */}
        <div className="md:w-[55%] w-full self-center">
          <div className="space-y-8  ">
            {SAAS_DIFFERENTIATE_SECTION.cards.map((card, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-2">
                  <Image
                    src="/Images/Arrow_Right.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
                <div>
                  <h3 className="md:text-xl text-lg nunito-bold font-bold mb-3">
                    {card.title}
                  </h3>
                  <p className="md:text-base text-sm text-white/80">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSDifferentiateSection;
