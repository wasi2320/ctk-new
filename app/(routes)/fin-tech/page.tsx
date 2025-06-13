import HeroSection from "@/app/components/HeroSection";
import FinTechTailoredSection from "@/app/components/sections/FinTechTailoredSection";
import FinTechEmpoweringEducation from "@/app/components/sections/FinTechEmpoweringEducation";
import FinTechFutureHealthcare from "@/app/components/sections/FinTechFutureHealthcare";
import FinTechTransformative from "@/app/components/sections/FinTechTransformative";
import ContactUsSection from "@/app/components/sections/ContactUsSection";

const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="FinTech"
        description="Empower your financial services with cutting-edge cloud solutions. From modernizing legacy systems to enhancing customer experiences, we help your team leverage the cloud to unlock agility, scalability, and security all while staying compliant in a rapidly evolving industry."
        imageSrc="/Images/fin-tech.png"
        buttonText="Scheduale your cloud assessment"
        buttonLink="/fin-tech"
      />
      <FinTechTailoredSection />
      <FinTechTransformative />
      <FinTechEmpoweringEducation />
      <FinTechFutureHealthcare />
      <ContactUsSection />
    </div>
  );
};

export default CloudMigration;
