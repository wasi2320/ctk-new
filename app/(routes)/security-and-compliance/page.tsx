import HeroSection from "@/app/components/HeroSection";
import DifferentiateSection from "@/app/components/sections/DifferentiateSection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import UpscaleSection from "@/app/components/sections/UpscaleSection";

const SecurityAndCompliance = () => {
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
      <TechDisplaySection />
      <CardScrollSection />
    </div>
  );
};

export default SecurityAndCompliance;
