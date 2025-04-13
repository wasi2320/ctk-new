import HeroSection from "@/app/components/HeroSection";
import DifferentiateSection from "@/app/components/sections/DifferentiateSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import UpscaleSection from "@/app/components/sections/UpscaleSection";
import TechMarqueeSection from "@/app/components/sections/TechMarqueeSection";

const SecurityAndCompliance = () => {
  return (
    <div>
      <HeroSection
        title="Stays ahead of threats with security and compliance solutions"
        description="Solutions, designed to protect your data, mitigate risks, and meet industry regulations with confidence."
        imageSrc="/Images/Security_Hero.png"
      />
      <TailoredSection />
      <UpscaleSection />
      <DifferentiateSection />
      <TechMarqueeSection />
    </div>
  );
};

export default SecurityAndCompliance;
