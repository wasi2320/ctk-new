import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";

const MobileApp = () => {
  return (
    <div>
      <HeroSection
        title="Revolutionize Your Business with Custom Mobile Apps"
        description="Your mobile app is your brand in the palm of your customer’s hand, driving connection and action with every tap."
        imageSrc="/Images/Ai_Hero.png"
      />
      <TailoredSection />
    </div>
  );
};

export default MobileApp;
