import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import AiBusinessSection from "@/app/components/sections/AiBusinessSection";
import AiDifferentiateSection from "@/app/components/sections/AiDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";
import RelatedServices from "@/app/components/sections/RelatedServices";

export const metadata = pageMetadata("/ai");
const Ai = () => {
  const aiTechStack = {
    heading: "AI & Machine Learning Technologies",
    description:
      "Harnessing cutting-edge artificial intelligence and machine learning tools to create intelligent solutions:",
    marqueeItems: [
      "/Images/PNGSS/tensorflow-logo.png",
      "/Images/PNGSS/pytorch-logo.png",
      "/Images/PNGSS/scikit-learn-logo.png",
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/openai-logo.png",
      "/Images/PNGSS/langchain-logo.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/ai"]} />
      <HeroSection
        title="Power of AI, ML,and GenAI to drive smarter decisions,"
        description="Harness the power of AI, ML, and GenAI to drive smarter decisions, fuel innovation, and accelerate your business growth."
        imageSrc="/Images/Ai_Hero.png"
        cover={true}
      />
      <TailoredSection heading="Transform, Innovate & Scale with AI/ML & GenAI" />
      <AiBusinessSection />
      <AiDifferentiateSection />
      <TechDisplaySection techDisplaySection={aiTechStack} />
      <CardScrollSection />
      <RelatedServices currentPath="/ai" />
    </div>
  );
};

export default Ai;
