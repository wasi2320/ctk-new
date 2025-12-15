import { financialServicesSectionData } from "@/utils/data/financialServicesSection";
import Image from "next/image";

const FinancialServicesDifferentiationSection = () => {
  return (
    <section className="w-full py-16 px-2 md:px-0 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-6 text-center">
          {financialServicesSectionData.differentiateData.title}
        </h2>
        <p className="text-gray-700 text-lg md:text-xl text-center mb-12 max-w-4xl">
          {financialServicesSectionData.differentiateData.description}
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {financialServicesSectionData.differentiateData.cards.map(
            (item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-start text-left hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesDifferentiationSection;
