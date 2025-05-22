import HeroSection from "@/app/components/HeroSection";
import DifferentiateSection from "@/app/components/sections/DifferentiateSection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import UpscaleSection from "@/app/components/sections/UpscaleSection";

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
      "/Images/PNGSS/gdpr-logo.png",
      "/Images/PNGSS/crowdstrike-logo.png",
      "/Images/PNGSS/palo-alto-networks.png",
    ],
  };

  return (
    <div>
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
    </div>
  );
};

export default SecurityAndCompliance;
