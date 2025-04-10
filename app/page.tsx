import HomeHeroSection from "./components/sections/HomeHeroSection";
import MissionSection from "./components/sections/MissionSection";
import InfrastructureSection from "./components/sections/InfrastructureSection";
import IndustriesSection from "./components/sections/IndustriesSection";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <MissionSection />
      <InfrastructureSection />
      <IndustriesSection />
    </div>
  );
}
