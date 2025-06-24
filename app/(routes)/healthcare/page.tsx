import HeroSection from "@/app/components/HeroSection";
import PoweringExpertiseTailoredSection from "@/app/components/sections/PoweringExpertiseTailoredSection";
import PoweringHealthcareSolution from "@/app/components/sections/PoweringHealthcareSolution";
import MarketDifference from "@/app/components/sections/MarketDifference";
import ProfessionalServices from "@/app/components/sections/ProfessionalServices";
import PoweringFutureHealthCare from "@/app/components/sections/PoweringFutureHealthCare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
export default function HealthcarePage() {
  return (
    <div>
      <HeroSection
        title="Healthcare"
        description="HealthTech blends healthcare with innovative technology to create smarter, faster, and more personalized patient care experiences. From virtual consultations to cloud-powered healthcare platforms, it enables organizations to innovate, scale, and meet the evolving needs of patients worldwide."
        imageSrc="/Images/healthcare.png"
        buttonText="Scheduale your cloud assessment"
        buttonLink="/contact"
      />
      <PoweringExpertiseTailoredSection />
      <PoweringHealthcareSolution />
      <MarketDifference />
      <ProfessionalServices />
      <PoweringFutureHealthCare />
      <ContactUsSection />
    </div>
  );
}
