import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import DevOpsBusinessSection from "@/app/components/sections/DevOpsBusinessSection";
import BenefitSection from "@/app/components/sections/BenefitSection";
import DevOpsDifferentiateSection from "@/app/components/sections/DevOpsDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";

const DevOps = () => {
  return (
    <div>
      <HeroSection
        title="Transform Your Workflow with Expert DevOps Implementation"
        description="Automate processes, improve team collaboration, and scale your infrastructure to meet your unique business needs."
        imageSrc="/Images/DevOps_Hero.png"
      />
      <TailoredSection />
      <DevOpsBusinessSection />
      <BenefitSection />
      <DevOpsDifferentiateSection />
      <TechDisplaySection />
    </div>
  );
};

export default DevOps;
