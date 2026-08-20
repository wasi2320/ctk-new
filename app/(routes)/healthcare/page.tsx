import HeroSection from "@/app/components/HeroSection";
import PoweringExpertiseTailoredSection from "@/app/components/sections/PoweringExpertiseTailoredSection";
import PoweringHealthcareSolution from "@/app/components/sections/PoweringHealthcareSolution";
import MarketDifference from "@/app/components/sections/MarketDifference";
import ProfessionalServices from "@/app/components/sections/ProfessionalServices";
import PoweringFutureHealthCare from "@/app/components/sections/PoweringFutureHealthCare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/healthcare");
export default function HealthcarePage() {
  return (
    <div>
      <HeroSection
        title="Healthcare"
        description="We build secure, HIPAA-ready cloud infrastructure for healthcare and HealthTech teams. From telehealth platforms to patient data and interoperability, we handle the AWS engineering so your systems stay compliant, available, and ready to scale."
        imageSrc="/Images/healthcare.png"
        buttonText="Book a free audit"
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
