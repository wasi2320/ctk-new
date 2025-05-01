import HeroSection from "@/app/components/HeroSection";
import ExpertiseTailoredSection from "@/app/components/sections/ExpertiseTailoredSection";
import EmpoweringEducation from "@/app/components/sections/EmpoweringEducation";
import HealthcareSolution from "@/app/components/sections/HealthcareSolution";
import FutureHealthcare from "@/app/components/sections/FutureHealthcare";
import GetInTouch from "@/app/components/sections/GetInTouch";

const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="Healthcare"
        description="HealthTech blends healthcare with innovative technology to create smarter, faster, and more personalized patient care experiences. From virtual consultations to cloud-powered healthcare platforms, it enables organizations to innovate, scale, and meet the evolving needs of patients worldwide."
        imageSrc="/Images/healthcare.png"
        buttonText="Scheduale your cloud assessment"
        buttonLink="/healthcare"

      />
      <ExpertiseTailoredSection />
      <EmpoweringEducation />
      <HealthcareSolution />
      <FutureHealthcare />
      <GetInTouch />
    </div>
  );
};

export default CloudMigration;
