import { financialServicesSectionData } from "@/utils/data/financialServicesSection";
import Link from "next/link";

const FinancialServicesHelpSection = () => {
  return (
    <section className="w-full py-16 px-2 md:px-0 bg-white relative">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Images/Differentiate_Bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {financialServicesSectionData.helpData.title}
        </h2>
        <p className="text-xl text-white leading-relaxed">
          {financialServicesSectionData.helpData.description}
        </p>
      </div>
    </section>
  );
};

export default FinancialServicesHelpSection;
