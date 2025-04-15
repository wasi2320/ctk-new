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
      <div className="grid md:grid-cols-2 mt-20 md:w-8/12 mx-auto">
        {FINOPS_BUSINESS_SECTION.cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? "border-b-2 border-r-2 border-[#152F27] pb-12 pr-12"
                : ""
            }
                ${
                  index === 3
                    ? "border-t-2 border-l-2 border-l-[linear-gradient(to_right,#D9D9D9,#A4AEAB)] border-[#152F27] pt-12 pl-12 -ml-[1px] -mt-[1px]"
                    : ""
                }
                ${index === 2 ? "mt-12 mr-12" : ""}
                ${index === 1 ? "ml-12" : ""}
                `}
          >
            <h3 className="nunito-bold md:text-3xl font-semibold mb-5 text-center">
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
