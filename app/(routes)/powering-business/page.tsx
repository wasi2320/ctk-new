import HeroSection from "@/app/components/HeroSection";
import PoweringExpertiseTailoredSection from "@/app/components/sections/PoweringExpertiseTailoredSection";
import PoweringHealthcareSolution from "@/app/components/sections/PoweringHealthcareSolution";
import MarketDifference from "@/app/components/sections/MarketDifference";
import ProfessionalServices from "@/app/components/sections/ProfessionalServices";
import PoweringFutureHealthCare from "@/app/components/sections/PoweringFutureHealthCare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/powering-business");
const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="Professional Services: Powering business 
        Excellence"
        description="We combine senior engineering with modern cloud technology to deliver practical, results-driven services. From digital transformation to managed operations, we help organizations modernize, scale, and run reliably."
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
};

export default CloudMigration;
