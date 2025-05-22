import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import GrowthSection from "@/app/components/sections/GrowthSection";
import DifferentiateCardSection from "@/app/components/sections/DifferentiateCardSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";

const CloudMigration = () => {
  const migrationTechStack = {
    heading: "Cloud Migration Technologies",
    description:
      "Enabling smooth transitions to the cloud with specialized migration and assessment tools:",
    marqueeItems: [
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/azure-logo.png",
      "/Images/PNGSS/cloudendure-logo.png",
      "/Images/PNGSS/vmware-cloud-logo.png",
    ],
  };

  return (
    <div>
      <HeroSection
        title="Cloud Migration: Seamless Transition to Better Infrastructure"
        description="Our expert team ensures smooth cloud migration, enhancing scalability, security, and performance without disruption."
        imageSrc="/Images/CloudMigration_Hero.png"
      />
      <TailoredSection />
      <GrowthSection />
      <DifferentiateCardSection />
      <TechDisplaySection techDisplaySection={migrationTechStack} />
      <CardScrollSection />
    </div>
  );
};

export default CloudMigration;
