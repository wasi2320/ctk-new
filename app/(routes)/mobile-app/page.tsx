import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import MobileBusinessSection from "@/app/components/sections/MobileBusinessSection";
import MobileDifferentiateSection from "@/app/components/sections/MobileDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";

const MobileApp = () => {
  return (
    <div>
      <HeroSection
        title="Revolutionize Your Business with Custom Mobile Apps"
        description="Your mobile app is your brand in the palm of your customer’s hand, driving connection and action with every tap."
        imageSrc="/Images/Ai_Hero.png"
      />
      <TailoredSection heading="Develop, Launch & Grow Your Mobile App with Confidence" />
      <MobileBusinessSection />
      <MobileDifferentiateSection />
      <TechDisplaySection />
      <CardScrollSection />
    </div>
  );
};

export default MobileApp;
