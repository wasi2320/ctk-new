import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import FinOpsBusinessSection from "@/app/components/sections/FinOpsBusinessSection";
import FinOpsDifferentiateSection from "@/app/components/sections/FinOpsDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";

const FinOps = () => {
  return (
    <div>
      <HeroSection
        title="Streamlining FinOpsfor Enhanced Efficiency and Sustainable Growth"
        description="Optimizing FinOps for Improved Efficiency. Enabling Sustainable Growth through Effective Financial Management."
        imageSrc="/Images/Fin_Hero.png"
      />
      <TailoredSection />
      <FinOpsBusinessSection />
      <FinOpsDifferentiateSection />
      <TechDisplaySection />
      <CardScrollSection />
    </div>
  );
};

export default FinOps;
