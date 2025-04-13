import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";

const DevOps = () => {
  return (
    <div>
      <HeroSection
        title="Transform Your Workflow with Expert DevOps Implementation"
        description="Automate processes, improve team collaboration, and scale your infrastructure to meet your unique business needs."
        imageSrc="/Images/DevOps_Hero.png"
      />
      <TailoredSection />
    </div>
  );
};

export default DevOps;
