import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";

const CloudService = () => {
  return (
    <div>
      <HeroSection
        title="Power Your Business in the Cloud"
        description="Leverage the power of Public Cloud for scalable, secure, and cost-efficient solutions"
        imageSrc="/Images/Cloud_Service_Hero.png"
      />
      <TailoredSection />
    </div>
  );
};

export default CloudService;
