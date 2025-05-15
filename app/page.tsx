import HomeHeroSection from "./components/sections/HomeHeroSection";
import MissionSection from "./components/sections/MissionSection";
import InfrastructureSection from "./components/sections/InfrastructureSection";
import IndustriesSection from "./components/sections/IndustriesSection";
import TechStackSection from "./components/sections/TechStackSection";
import TechCarouselSection from "./components/sections/TechCarouselSection";
import EnsureSection from "./components/sections/EnsureSection";
import BusinessCarouselSection from "./components/sections/BusinessCarouselSection";
// import LoaderScreen from "./components/Loader";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      {/* <LoaderScreen /> */}
      <HomeHeroSection />
      <div style={{ width: "100%", position: "relative" }}>
        <MissionSection />
      </div>
      {/* <div className="max-w-[1200px] w-full mx-auto "> */}
      <InfrastructureSection />
      {/* </div> */}

      {/* <div className="max-w-[1200px] w-full mx-auto "> */}
      <IndustriesSection />
      {/* </div> */}

      {/* <div className="max-w-[1200px] w-full mx-auto "> */}
      <TechStackSection />
      {/* </div> */}

      {/* <div className="max-w-[1200px] w-full mx-auto "> */}
      <BusinessCarouselSection />
      {/* </div> */}

      {/* <div className="max-w-[1200px] w-full mx-auto "> */}
      <TechCarouselSection />
      {/* </div> */}

      {/* <div className="max-w-[1200px] w-full"> */}
      <EnsureSection />
      {/* </div> */}
    </div>
  );
}
