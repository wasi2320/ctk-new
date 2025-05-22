import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import UiUxBusinessSection from "@/app/components/sections/UiUxBusinessSection";
import UiUxDifferentiateSection from "@/app/components/sections/UiUxDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";

const UiUx = () => {
  const uiUxTechStack = {
    heading: "UI/UX Design Technologies",
    description:
      "Creating beautiful, intuitive user experiences with industry-standard design and prototyping tools:",
    marqueeItems: [
      "/Images/PNGSS/Figma.png",
      "/Images/PNGSS/sketch-logo.png",
      "/Images/PNGSS/Adobe-XD-logo.png",
      "/Images/PNGSS/After-Effects-Logo.png",
      "/Images/PNGSS/illustrator-logo.png",
      "/Images/PNGSS/photoshop-logo.png",
    ],
  };

  return (
    <div>
      <HeroSection
        title="Captivating User Interface & User Experience Design"
        description="User Interface & Experience Design that sets you apart."
        imageSrc="/Images/uiux_Hero.png"
      />
      <TailoredSection />
      <UiUxBusinessSection />
      <UiUxDifferentiateSection />
      <TechDisplaySection techDisplaySection={uiUxTechStack} />
      <CardScrollSection />
    </div>
  );
};

export default UiUx;
