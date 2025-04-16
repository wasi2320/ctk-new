import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import CloudBusinessSection from "@/app/components/sections/CloudBusinessSection";
import CloudDifferentiateSection from "@/app/components/sections/CloudDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";

const CloudService = () => {
  return (
    <div>
      <HeroSection
        title="Power Your Business in the Cloud"
        description="Leverage the power of Public Cloud for scalable, secure, and cost-efficient solutions"
        imageSrc="/Images/Cloud_Service_Hero.png"
      />
      <TailoredSection />
      <CloudBusinessSection />
      <CloudDifferentiateSection />
      <TechDisplaySection />
    </div>
  );
};

export default CloudService;
