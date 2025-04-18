import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import AiBusinessSection from "@/app/components/sections/AiBusinessSection";
import AiDifferentiateSection from "@/app/components/sections/AiDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";

const Ai = () => {
  return (
    <div>
      <HeroSection
        title="Power of AI, ML,and GenAI to drive smarter decisions,"
        description="Harness the power of AI, ML, and GenAI to drive smarter decisions, fuel innovation, and accelerate your business growth."
        imageSrc="/Images/Ai_Hero.png"
      />
      <TailoredSection heading="Transform, Innovate & Scale with AI/ML & GenAI" />
      <AiBusinessSection />
      <AiDifferentiateSection />
      <TechDisplaySection />
    </div>
  );
};

export default Ai;
