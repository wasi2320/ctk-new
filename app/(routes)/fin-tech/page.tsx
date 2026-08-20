import HeroSection from "@/app/components/HeroSection";
import FinTechTailoredSection from "@/app/components/sections/FinTechTailoredSection";
import FinTechEmpoweringEducation from "@/app/components/sections/FinTechEmpoweringEducation";
import FinTechFutureHealthcare from "@/app/components/sections/FinTechFutureHealthcare";
import FinTechTransformative from "@/app/components/sections/FinTechTransformative";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/fin-tech");
const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="FinTech"
        description="We build secure, compliant cloud infrastructure for financial services and FinTech teams. From modernizing legacy systems to improving customer experiences, we help you move faster while meeting the security and compliance bar your industry demands."
        imageSrc="/Images/fin-tech.png"
        buttonText="Book a free audit"
        buttonLink="/contact"
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
