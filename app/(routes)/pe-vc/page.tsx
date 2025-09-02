import HeroSection from "@/app/components/HeroSection";
import StatsSection from "@/app/components/sections/StatsSection";
import PeVcImpactSection from "@/app/components/sections/PeVcImpactSection";
import PeVcDifferentiationSection from "@/app/components/sections/PeVcDifferentiationSection";
import PeVcPortfolioSection from "@/app/components/sections/PeVcPortfolioSection";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import { peVcSectionData } from "@/utils/data/peVcSection";

const PEVCPage = () => {
  return (
    <div>
      <HeroSection
        title={peVcSectionData.title}
        description={peVcSectionData.description}
        imageSrc={peVcSectionData.imageSrc}
        buttonText={peVcSectionData.buttonText}
        buttonLink={peVcSectionData.buttonLink}
      />
      <StatsSection
        title="PE/VC Impact"
        stats={peVcSectionData.stats}
        backgroundImage="/Images/nonprofit/nonprofit-Section2_bg.svg"
      />
      <PeVcImpactSection />
      <PeVcDifferentiationSection />
      <PeVcPortfolioSection />
      <ContactUsSection />
    </div>
  );
};

export default PEVCPage;
