import HeroSection from "@/app/components/HeroSection";
import DifferentiateSection from "@/app/components/sections/DifferentiateSection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import UpscaleSection from "@/app/components/sections/UpscaleSection";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";
import RelatedServices from "@/app/components/sections/RelatedServices";
import ComplianceLinks from "@/app/components/sections/ComplianceLinks";

export const metadata = pageMetadata("/security-and-compliance");
const SecurityAndCompliance = () => {
  const securityTechStack = {
    heading: "Security & Compliance Technologies",
    description:
      "Protecting your data and ensuring regulatory compliance with industry-leading security tools and platforms:",
    marqueeItems: [
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/cloudflare-logo.png",
      "/Images/PNGSS/vault-hashicorp.png",
      "/Images/PNGSS/soc2-logo.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/security-and-compliance"]} />
      <HeroSection
        title="Stays ahead of threats with security and compliance solutions"
        description="Solutions, designed to protect your data, mitigate risks, and meet industry regulations with confidence."
        imageSrc="/Images/Security_Hero.png"
        cover={true}
      />
      <TailoredSection />
      <UpscaleSection />
      <DifferentiateSection />
      <TechDisplaySection techDisplaySection={securityTechStack} />
      <CardScrollSection />
      <ComplianceLinks currentPath="/security-and-compliance" />
      <RelatedServices currentPath="/security-and-compliance" />
    </div>
  );
};

export default SecurityAndCompliance;
