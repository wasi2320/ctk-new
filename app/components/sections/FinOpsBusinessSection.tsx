import { FINOPS_BUSINESS_SECTION } from "@/utils/data/finOpsBusinessSection";

const FinOpsBusinessSection = () => {
  return (
    <section className="md:px-20 px-4 pt-12 pb-24">
      <h2 className="md:text-4xl text-2xl text-center nunito-bold font-bold mb-5">
        {FINOPS_BUSINESS_SECTION.heading}
      </h2>
      <p className="md:text-xl nunito-medium md:w-8/12 mx-auto text-center font-semibold">
        {FINOPS_BUSINESS_SECTION.description}
      </p>
      <div className="grid grid-cols-2 mt-20 md:w-8/12 mx-auto">
        {FINOPS_BUSINESS_SECTION.cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? "border-b-2 border-r-2 border-[#152F27] md:pb-12 md:pr-12 pb-6 pr-6"
                : ""
            }
                ${
                  index === 3
                    ? "border-t-2 border-l-2 border-l-[linear-gradient(to_right,#D9D9D9,#A4AEAB)] border-[#152F27] md:pt-12 md:pl-12 pt-6 pl-6 -ml-[1px] md:-mt-[1.5px] -mt-[2px]"
                    : ""
                }
                ${index === 2 ? "md:mt-12 md:mr-12 mt-6 mr-6" : ""}
                ${index === 1 ? "md:ml-12 ml-6" : ""}
                `}
          >
            <h3 className="nunito-bold md:text-3xl text-xl font-semibold md:mb-5 mb-3 text-center">
              {card.title}
            </h3>
            <p className="md:text-2xl text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinOpsBusinessSection;
