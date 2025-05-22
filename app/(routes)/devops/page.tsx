import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import DevOpsBusinessSection from "@/app/components/sections/DevOpsBusinessSection";
import BenefitSection from "@/app/components/sections/BenefitSection";
import DevOpsDifferentiateSection from "@/app/components/sections/DevOpsDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";

const DevOps = () => {
  const devopsTechStack = {
    heading: "DevOps Technologies & Tools",
    description:
      "Streamlining development workflows with automation and integration tools for continuous delivery:",
    marqueeItems: [
      "/Images/PNGSS/Jenkins-logo.png",
      "/Images/PNGSS/GitHub-Logo.png",
      "/Images/PNGSS/GitLab-logo.png",
      "/Images/PNGSS/circleci-logo.png",
      "/Images/PNGSS/ansible-logo.png",
      "/Images/PNGSS/Argo-1-e1630327305635-1.png",
      "/Images/PNGSS/prometheus.png",
    ],
  };

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
      <TechDisplaySection techDisplaySection={devopsTechStack} />
      <CardScrollSection />
    </div>
  );
};

export default DevOps;
