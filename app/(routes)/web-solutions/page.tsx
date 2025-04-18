import HeroSection from "@/app/components/HeroSection";
import { PortfolioSection } from "@/app/components/sections/portfolioSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import WebBusinessSection from "@/app/components/sections/WebBusinessSection";
import WebDifferentiateSection from "@/app/components/sections/WebDifferentiateSection";

const WebSolutions = () => {
  return (
    <div>
      <HeroSection
        title="Your Trusted Source for Advanced Web Solutions"
        description="Your website is more than just code it is the heartbeat of your brand."
        imageSrc="/Images/Web_Hero.png"
      />
      <TailoredSection heading="Optimize your infrastructure  today." />
      <WebBusinessSection />
      <WebDifferentiateSection />
    </div>
  );
};

export default WebSolutions;
