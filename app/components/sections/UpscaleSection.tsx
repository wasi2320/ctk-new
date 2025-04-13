import { UPSCALE_SECTION } from "@/utils/data/upscaleSection";
import Image from "next/image";

const UpscaleSection = () => {
  return (
    <section className="md:px-20 px-4 py-12 flex justify-between items-center">
      <div className="md:w-[45%]">
        <h2 className="md:text-4xl text-2xl text-shadow-2xl nunito-bold font-bold md:w-10/12 leading-10">
          {UPSCALE_SECTION.heading}
        </h2>
        <p className="md:text-lg mt-7 text-gray-800 md:w-10/12">
          {UPSCALE_SECTION.description}
        </p>
      </div>

      <div className="md:w-[50%] md:mr-12">
        <div className="grid md:grid-cols-2 gap-x-5">
          {UPSCALE_SECTION.cards.map((card, index) => {
            // Render first two cards normally
            if (index < 2) {
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="space-y-9">
                    <div
                      className={`rounded-3xl all-sides-shadow ${
                        index === 0 ? "pt-5 px-8 pb-14" : "py-5 px-8"
                      } ${index === 1 ? "mt-12" : ""} ${
                        index === 1
                          ? "bg-[#245444] text-white"
                          : "text-[#152F27]"
                      }`}
                    >
                      <h5 className="md:text-2xl mb-3">{card.title}</h5>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              );
            }

            // Skip rendering the 3rd card for now (we’ll add it after stars)
            return null;
          })}

          {/* Two star divs side by side */}
          <div className="flex gap-6 col-span-2">
            <div className="flex gap-2 px-8 all-sides-shadow bg-[#1D493A] rounded-3xl justify-center md:ml-16 md:w-1/2 h-[100px] items-center mt-5">
              {UPSCALE_SECTION.StarOne.map((star, index) => (
                <div key={index}>
                  <Image
                    src={star}
                    alt=""
                    height={40}
                    width={40}
                    className="w-10 h-10"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-2 px-8 all-sides-shadow bg-white rounded-3xl justify-center md:w-1/2 items-center mt-10 mb-1 h-[100px]">
              {UPSCALE_SECTION.StarTwo.map((star, index) => (
                <div key={index}>
                  <Image
                    src={star}
                    alt=""
                    height={40}
                    width={40}
                    className="w-10 h-10"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Render the rest of the cards */}
          {UPSCALE_SECTION.cards.slice(2).map((card, index) => {
            const actualIndex = index + 2; // Since we're slicing from index 2
            return (
              <div key={actualIndex} className="flex items-start gap-6">
                <div className="space-y-9">
                  <div
                    className={`rounded-3xl all-sides-shadow ${
                      actualIndex === 3 ? "pt-5 px-8 pb-14" : "py-5 px-8"
                    } ${
                      actualIndex === 3
                        ? "bg-[#152F27] text-white"
                        : "text-[#152F27]"
                    } ${actualIndex === 3 ? "mt-4" : ""}`}
                  >
                    <h5 className="md:text-2xl mb-3">{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpscaleSection;
