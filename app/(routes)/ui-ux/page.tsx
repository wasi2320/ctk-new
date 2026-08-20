import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import UiUxBusinessSection from "@/app/components/sections/UiUxBusinessSection";
import UiUxDifferentiateSection from "@/app/components/sections/UiUxDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import { pageMetadata } from "@/lib/page-metadata";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import RelatedServices from "@/app/components/sections/RelatedServices";

export const metadata = pageMetadata("/ui-ux");
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
      "/Images/PNGSS/Illustrator-Logo.png",
      "/Images/PNGSS/photoshop-logo.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/ui-ux"]} />
      <HeroSection
        title="Captivating User Interface & User Experience Design"
        description="User Interface & Experience Design that sets you apart."
        imageSrc="/Images/UiUx_Hero.png"
      />
      <TailoredSection />
      <UiUxBusinessSection />
      <UiUxDifferentiateSection />
      <TechDisplaySection techDisplaySection={uiUxTechStack} />
      <CardScrollSection />
      <RelatedServices currentPath="/ui-ux" />
    </div>
  );
};

export default UiUx;
