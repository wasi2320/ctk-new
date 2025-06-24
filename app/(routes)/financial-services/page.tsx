import HeroSection from "@/app/components/HeroSection";
import PoweringExpertiseTailoredSection from "@/app/components/sections/PoweringExpertiseTailoredSection";
import PoweringHealthcareSolution from "@/app/components/sections/PoweringHealthcareSolution";
import MarketDifference from "@/app/components/sections/MarketDifference";
import ProfessionalServices from "@/app/components/sections/ProfessionalServices";
import PoweringFutureHealthCare from "@/app/components/sections/PoweringFutureHealthCare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import FinancialServicesSection from "@/app/components/FinancialService";

export default function FinancialServicesPage() {
  return (
    <div>
      <HeroSection
        title="Financial Services"
        description="Our comprehensive financial services are designed to support your goals—whether personal or business. From smart investment strategies and insurance solutions to loans, retirement planning, and beyond, we offer expert guidance every step of the way. With a focus on trust, technology, and tailored advice, we help turn financial complexity into clarity."
        imageSrc="/Images/healthcare.png"
        buttonText="Scheduale your cloud assessment"
        buttonLink="/contact"
      />
      <PoweringExpertiseTailoredSection />
      <PoweringHealthcareSolution />
      <MarketDifference />
      <ProfessionalServices />
      <FinancialServicesSection />
      <PoweringFutureHealthCare />
      <ContactUsSection />
    </div>
  );
}
