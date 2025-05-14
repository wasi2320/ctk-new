import HomeHeroSection from "./components/sections/HomeHeroSection";
import MissionSection from "./components/sections/MissionSection";
import InfrastructureSection from "./components/sections/InfrastructureSection";
import IndustriesSection from "./components/sections/IndustriesSection";
import TechStackSection from "./components/sections/TechStackSection";
import TechCarouselSection from "./components/sections/TechCarouselSection";
import EnsureSection from "./components/sections/EnsureSection";
import BusinessCarouselSection from "./components/sections/BusinessCarouselSection";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <HomeHeroSection />
      <MissionSection />

      <div className="max-w-[1200px] w-full">
        <InfrastructureSection />
      </div>

      <div className="max-w-[1200px] w-full">
        <IndustriesSection />
      </div>

      <div className="max-w-[1200px] w-full">
        <TechStackSection />
      </div>

      <div className="max-w-[1200px] w-full">
        <BusinessCarouselSection />
      </div>

      <div className="max-w-[1200px] w-full">
        <TechCarouselSection />
      </div>

      <div className="max-w-[1200px] w-full">
        <EnsureSection />
      </div>
    </div>
  );
}
