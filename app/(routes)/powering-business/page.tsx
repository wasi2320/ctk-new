import HeroSection from "@/app/components/HeroSection";
import PoweringExpertiseTailoredSection from "@/app/components/sections/PoweringExpertiseTailoredSection";
import PoweringHealthcareSolution from "@/app/components/sections/PoweringHealthcareSolution";
import MarketDifference from "@/app/components/sections/MarketDifference";
import ProfessionalServices from "@/app/components/sections/ProfessionalServices";
import PoweringFutureHealthCare from "@/app/components/sections/PoweringFutureHealthCare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";

const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="Professional Services: Powering business 
        Excellence"
        description="Professional Services blend expert knowledge with modern technology to deliver agile, efficient, and results-driven solutions. From digital transformation to managed services, we empower organizations to evolve, scale, and stay ahead in today’s dynamic market landscape."
        imageSrc="/Images/healthcare.png"
        buttonText="Let’s connect"
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
