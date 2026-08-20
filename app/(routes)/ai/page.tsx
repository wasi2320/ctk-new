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
import FaqSection from "@/app/components/sections/FaqSection";
import { pageFaqs } from "@/lib/faqs";

export const metadata = pageMetadata("/ai");
const Ai = () => {
  const aiTechStack = {
    heading: "AI & Machine Learning Technologies",
    description:
      "Building production AI and machine learning systems with proven frameworks and platforms:",
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
        title="AI, ML, and GenAI That Drive Smarter Decisions"
        description="We build production AI, ML, and GenAI systems on secure AWS infrastructure that speed up decisions, automate workflows, and support real business growth."
        imageSrc="/Images/Ai_Hero.png"
      />
      <TailoredSection heading="Transform, Innovate & Scale with AI/ML & GenAI" />
      <AiBusinessSection />
      <AiDifferentiateSection />
      <TechDisplaySection techDisplaySection={aiTechStack} />
      <CardScrollSection />
      <FaqSection items={pageFaqs["/ai"]} />
      <RelatedServices currentPath="/ai" />
    </div>
  );
};

export default Ai;
