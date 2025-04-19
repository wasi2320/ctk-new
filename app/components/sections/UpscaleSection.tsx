import { UPSCALE_SECTION } from "@/utils/data/upscaleSection";
import Image from "next/image";

const UpscaleSection = () => {
  return (
    <section className="md:px-20 px-4 py-12 flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-[45%]">
        <h2 className="md:text-4xl text-2xl text-shadow-2xl nunito-bold font-bold md:w-10/12 md:leading-10 text-center md:text-start">
          {UPSCALE_SECTION.heading}
        </h2>
        <p className="md:text-lg mt-7 text-gray-800 md:w-10/12 text-center md:text-start">
          {UPSCALE_SECTION.description}
        </p>
      </div>

      <div className="md:w-[50%] md:mr-12 mt-10 md:mt-0">
        <div className="grid md:grid-cols-2 md:gap-x-5 gap-x-3">
          {UPSCALE_SECTION.cards.map((card, index) => {
            // Render first two cards normally
            if (index < 2) {
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="space-y-9">
                    <div
                      className={`md:rounded-3xl rounded-2xl all-sides-shadow ${
                        index === 0 ? "pt-5 md:px-8 px-4 md:pb-14 pb-5" : "py-5 md:px-8 px-4"
                      } ${index === 1 ? "mt-12" : ""} ${
                        index === 1
                          ? "bg-[#245444] text-white"
                          : "text-[#152F27]"
                      }`}
                    >
                      <h5 className="md:text-2xl text-sm mb-3 text-center md:text-start">{card.title}</h5>
                      <p className="text-xs md:text-base text-center md:text-start">{card.description}</p>
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
            <div className="flex gap-2 md:px-8 px-4 all-sides-shadow bg-[#1D493A] md:rounded-3xl rounded-2xl justify-center md:ml-16 md:w-1/2 md:h-[100px] h-[70px] items-center mt-5">
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

            <div className="flex gap-2 md:px-8 px-4 all-sides-shadow bg-white md:rounded-3xl rounded-2xl justify-center md:w-1/2 items-center mt-10 mb-1 md:h-[100px] h-[70px]">
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
                    className={`md:rounded-3xl rounded-2xl all-sides-shadow ${
                      actualIndex === 3 ? "pt-5 md:px-8 px-4 md:pb-14 pb-5" : "py-5 md:px-8 px-4"
                    } ${
                      actualIndex === 3
                        ? "bg-[#152F27] text-white"
                        : "text-[#152F27]"
                    } ${actualIndex === 3 ? "mt-4" : ""}`}
                  >
                    <h5 className="md:text-2xl text-sm mb-3 text-center md:text-start">{card.title}</h5>
                    <p className="text-xs md:text-base text-center md:text-start">{card.description}</p>
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
