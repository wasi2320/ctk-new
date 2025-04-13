import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";

const WebSolutions = () => {
  return (
    <div>
      <HeroSection
        title="Your Trusted Source for Advanced Web Solutions"
        description="Your website is more than just code it is the heartbeat of your brand."
        imageSrc="/Images/Web_Hero.png"
      />
      <TailoredSection />
    </div>
  );
};

export default WebSolutions;
