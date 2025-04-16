import HomeHeroSection from "./components/sections/HomeHeroSection";
import MissionSection from "./components/sections/MissionSection";
import InfrastructureSection from "./components/sections/InfrastructureSection";
import IndustriesSection from "./components/sections/IndustriesSection";
import TechStackSection from "./components/sections/TechStackSection";
import TechCarouselSection from "./components/sections/TechCarouselSection";
import EnsureSection from "./components/sections/EnsureSection";
// import BusinessCarouselSection from "./components/sections/BusinessCarouselSection";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <MissionSection />
      <InfrastructureSection />
      <IndustriesSection />
      <TechStackSection />
      {/* <BusinessCarouselSection /> */}
      <TechCarouselSection />
      <EnsureSection />
    </div>
  );
}
