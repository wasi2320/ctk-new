import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import UiUxBusinessSection from "@/app/components/sections/UiUxBusinessSection";
import UiUxDifferentiateSection from "@/app/components/sections/UiUxDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";

const UiUx = () => {
  return (
    <div>
      <HeroSection
        title="Elevate Your Digital Experience with UI/UX Design and Animation"
        description="Designing clean, functional interfaces that connect with users effortlessly."
        imageSrc="/Images/UiUx_Hero.png"
        cover={true}
      />
      <TailoredSection heading="Create, Engage & Elevate with UI/UX Design & Animation" />
      <UiUxBusinessSection />
      <UiUxDifferentiateSection />
      <TechDisplaySection />
      <CardScrollSection />
    </div>
  );
};

export default UiUx;
