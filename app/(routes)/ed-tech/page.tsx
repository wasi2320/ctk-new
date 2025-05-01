import HeroSection from "@/app/components/HeroSection";
import EdTechTailoredSection from "@/app/components/sections/EdTechTailoredSection";
import EdTechEmpoweringEducation from "@/app/components/sections/EdTechEmpoweringEducation";
import GetInTouch from "@/app/components/sections/GetInTouch";
import EdTechTransformative from "@/app/components/sections/EdTechTransformative";
import EdTechFutureHealthcare from "@/app/components/sections/EdTechFutureHealthcare";

const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="EdTech"
        description="EdTech blends education with innovative technology to create smarter, faster, and more personalized learning experiences. From digital classrooms to cloud-powered platforms, it enables institutions to innovate, scale, and meet the evolving needs of learners worldwide."
        imageSrc="/Images/ed-tech.png"
        buttonText="Scheduale your cloud assessment"
        buttonLink="/healthcare"

      />
      <EdTechTailoredSection />
      <EdTechTransformative />
      <EdTechEmpoweringEducation />
      <EdTechFutureHealthcare />
      <GetInTouch />
    </div>
  );
};

export default CloudMigration;
