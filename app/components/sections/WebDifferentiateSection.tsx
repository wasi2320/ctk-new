import { WEB_DIFFERENTIATE_SECTION } from "@/utils/data/webDifferentiateSection";
import Image from "next/image";

const WebDifferentiateSection = () => {
  return (
    <section className="md:px-20 px-4 py-12 bg-[url('/Images/Differentiate_Bg.png')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <h2 className="md:text-5xl text-3xl nunito-bold font-bold text-white md:w-11/12 text-center md:text-start">
          {WEB_DIFFERENTIATE_SECTION.heading}
        </h2>
        <div className="md:flex flex-col mt-10">
          {WEB_DIFFERENTIATE_SECTION.leftCard.map((card, index) => {
            const hasImage = card.image !== undefined;

            return (
              <div
                key={index}
                className={`
                  ${
                    hasImage
                      ? "col-span-2 my-10"
                      : "bg-[linear-gradient(to_right,#D9D9D9,#A4AEAB)] md:py-8 py-4 px-6 md:px-12 rounded-2xl"
                  }
                  ${index === 1 ? "md:col-start-2" : ""}
                `}
              >
                {hasImage ? (
                  <div className="relative w-full md:h-[430px] h-[250px]">
                    <Image
                      src={card.image}
                      alt="HTML Business Benefits"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                ) : (
                  <>
                    <div className="mb-2">
                      <Image
                        src="/Images/Line.svg"
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>
                    <h3 className="text-xl nunito-bold font-semibold mb-4">
                      {card.title}
                    </h3>
                    <p className="md:text-lg text-sm font-bold">{card.description}</p>
                    <div className="flex gap-2 md:mt-8 mt-5">
                      <button className="font-semibold text-lg">
                        Learn More
                      </button>
                      <div className="w-7 h-7 flex justify-center items-center bg-[#152F27] rounded-full">
                        <Image
                          src="/Images/Arrow_Down.svg"
                          alt=""
                          width={12}
                          height={12}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col space-y-10">
        {WEB_DIFFERENTIATE_SECTION.rightCard.map((card, index) => {
          const hasImage = card.image !== undefined;
          const hasScore = card.score !== undefined;

          return (
            <div
              key={index}
              className={`
                ${
                  hasImage
                    ? "col-span-2 mb-10"
                    : "bg-[linear-gradient(to_right,#D9D9D9,#A4AEAB)] md:py-8 py-4 px-6 md:px-12 rounded-2xl text-black"
                }
              `}
            >
              {hasImage ? (
                <div className="relative w-full md:h-[410px] h-[250px]">
                  <Image
                    src={card.image}
                    alt="Web Development Services"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              ) : (
                <>
                  <div className="mb-2">
                    <Image
                      src="/Images/Line.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <h3 className="text-xl nunito-bold font-semibold mb-4">
                    {card.title}
                  </h3>
                  <p className="md:text-lg text-sm font-bold mb-4">
                    {card.description}
                  </p>

                  {card.listOne && (
                    <ul className="list-decimal md:text-lg font-semibold pl-5 mt-4 space-y-2">
                      <li>{card.listOne}</li>
                      <li>{card.listTwo}</li>
                      <li>{card.listThree}</li>
                    </ul>
                  )}

                  {hasScore && (
                    <div className="mt-5">
                      <span className="text-4xl font-bold">{card.score}</span>
                      <p className="md:text-lg text-sm font-semibold">
                        {card.descriptionScore}
                      </p>
                    </div>
                  )}

                  <div
                    className={`flex gap-2 mt-3 ${
                      index === 2 ? "hidden" : "block"
                    }`}
                  >
                    <button className="font-semibold text-lg">
                      Learn More
                    </button>
                    <div className="w-7 h-7 flex justify-center items-center bg-[#152F27] rounded-full">
                      <Image
                        src="/Images/Arrow_Down.svg"
                        alt=""
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WebDifferentiateSection;
