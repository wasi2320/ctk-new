import HeroSection from "@/app/components/HeroSection";
import EdTechTailoredSection from "@/app/components/sections/EdTechTailoredSection";
import EdTechEmpoweringEducation from "@/app/components/sections/EdTechEmpoweringEducation";
import EdTechTransformative from "@/app/components/sections/EdTechTransformative";
import EdTechFutureHealthcare from "@/app/components/sections/EdTechFutureHealthcare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/ed-tech");
const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="EdTech"
        description="We build the cloud infrastructure behind modern EdTech. From learning platforms and digital classrooms to secure student data and scale for exam-day traffic, we handle the AWS engineering so your product stays fast and reliable as you grow."
        imageSrc="/Images/ed-tech.png"
        buttonText="Book a free audit"
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
