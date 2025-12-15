import { financialServicesSectionData } from "@/utils/data/financialServicesSection";

export default function FinancialServicesSection() {
  return (
    <section className="w-full py-12 px-2 md:px-0 bg-white relative">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Images/finance/graph.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-[#193728] text-2xl md:text-3xl font-bold mb-10 text-center">
          Our Financial Services
        </h2>
        <div className="w-full flex flex-col gap-4">
          {financialServicesSectionData.servicesData.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-start text-left w-full hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#193728]">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base md:text-[17px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
