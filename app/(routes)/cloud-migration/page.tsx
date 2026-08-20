import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import GrowthSection from "@/app/components/sections/GrowthSection";
import DifferentiateCardSection from "@/app/components/sections/DifferentiateCardSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import { pageMetadata } from "@/lib/page-metadata";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import RelatedServices from "@/app/components/sections/RelatedServices";

export const metadata = pageMetadata("/cloud-migration");
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
      <JsonLd data={coreServiceSchemas["/cloud-migration"]} />
      <HeroSection
        title="Skill of Cloud Migration is Key to Enhancing Flexibility and Security"
        description="Move to the cloud with minimal downtime and a plan built around your workloads, so you get the performance, security, and cost control the cloud should deliver."
        imageSrc="/Images/Cloud_Hero.png"
      />
      <TailoredSection />
      <GrowthSection />
      <DifferentiateCardSection />
      <TechDisplaySection techDisplaySection={migrationTechStack} />
      <CardScrollSection />
      <RelatedServices currentPath="/cloud-migration" />
    </div>
  );
};

export default CloudMigration;
