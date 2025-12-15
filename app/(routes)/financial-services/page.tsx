import StatsSection from "@/app/components/sections/StatsSection";
import FinancialServicesSection from "@/app/components/sections/FinancialServicesSection";
import FinancialServicesDifferentiationSection from "@/app/components/sections/FinancialServicesDifferentiationSection";
import FinancialServicesHelpSection from "@/app/components/sections/FinancialServicesHelpSection";
import PeVcPortfolioSection from "@/app/components/sections/PeVcPortfolioSection";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import { financialServicesSectionData } from "@/utils/data/financialServicesSection";
import HeroSection from "@/app/components/HeroSection";

const FinancialServicesPage = () => {
  return (
    <div>
      <HeroSection
        title={financialServicesSectionData.title}
        description={financialServicesSectionData.description}
        imageSrc={financialServicesSectionData.imageSrc}
        buttonText={financialServicesSectionData.buttonText}
        buttonLink={financialServicesSectionData.buttonLink}
      />
      <StatsSection
        title="Powering Business"
        stats={financialServicesSectionData.stats}
        backgroundImage="/Images/nonprofit/nonprofit-Section2_bg.svg"
      />
      <FinancialServicesSection />
      <FinancialServicesDifferentiationSection />
      <FinancialServicesHelpSection />
      <PeVcPortfolioSection />
      <ContactUsSection />
    </div>
  );
};

export default FinancialServicesPage;
