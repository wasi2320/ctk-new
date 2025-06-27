import HeroSection from "@/app/components/HeroSection";
import EdTechTailoredSection from "@/app/components/sections/EdTechTailoredSection";
import EdTechEmpoweringEducation from "@/app/components/sections/EdTechEmpoweringEducation";
import EdTechTransformative from "@/app/components/sections/EdTechTransformative";
import EdTechFutureHealthcare from "@/app/components/sections/EdTechFutureHealthcare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";

const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="EdTech"
        description="EdTech blends education with innovative technology to create smarter, faster, and more personalized learning experiences. From digital classrooms to cloud-powered platforms, it enables institutions to innovate, scale, and meet the evolving needs of learners worldwide."
        imageSrc="/Images/ed-tech.png"
        buttonText="Let’s connect"
        buttonLink="/contact"
      />
      <EdTechTailoredSection />
      <EdTechTransformative />
      <EdTechEmpoweringEducation />
      <EdTechFutureHealthcare />
      <ContactUsSection />
    </div>
  );
};

export default CloudMigration;
