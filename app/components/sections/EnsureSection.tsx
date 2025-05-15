import { ENSURE_SECTION } from "@/utils/data/ensureSection";
import Image from "next/image";

const EnsureSection = () => {
  return (
    <section className="w-[100vw] py-12 px-4 md:px-28">
      <h2 className="text-4xl md:text-6xl text-center hidden md:block">
        {ENSURE_SECTION.heading}
      </h2>
      <div
        style={{ overflow: "scroll" }}
        className="flex flex-col md:flex-row justify-between items-center md:mt-20 gap-6"
      >
        {ENSURE_SECTION.ensureCard.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start items-center md:gap-6"
          >
            {/* Card */}
            <div className="space-y-9">
              <div className="bg-[linear-gradient(to_right,#245444,#050B0B)] py-6 px-8 rounded-3xl flex flex-col justify-center items-center gap-2 w-[150px] mx-auto">
                <div className="flex justify-center mb-1.5 w-full">
                  <Image
                    src={card.icon}
                    alt=""
                    height={50}
                    width={50}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {card.title}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#112743] md:text-lg text-center">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Insert Needle after 1st and 2nd card */}
            {index < 2 && (
              <div className="flex items-center md:w-[300px] w-[150px] h-auto mt-6">
                <Image
                  src="/Images/Needle.svg"
                  alt=""
                  height={100}
                  width={100}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnsureSection;
