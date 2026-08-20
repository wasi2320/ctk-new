import HeroSection from "@/app/components/HeroSection";
import ManufacturingExpertiseTailoredSection from "@/app/components/sections/ManufacturingExpertiseTailoredSection";
import ManufacturingSolution from "@/app/components/sections/ManufacturingSolution";
import ManufacturingTransformative from "@/app/components/sections/ManufacturingTransformative";
import ManufacturingReimagine from "@/app/components/sections/ManufacturingReimagine";
import ManufacturingFutureHealthcare from "@/app/components/sections/ManufacturingFutureHealthcare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/manufacturing");
const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="Manufacturing"
        description="We build the cloud and data infrastructure behind modern manufacturing. From IoT and shop-floor data to ERP integration and analytics, we handle the AWS engineering so your systems run reliably and scale with production."
        imageSrc="/Images/manufacturing.webp"
        buttonText="Book a free audit"
        buttonLink="/contact"
      />
      <ManufacturingExpertiseTailoredSection />
      <ManufacturingSolution />
      <ManufacturingReimagine />
      <ManufacturingTransformative />
      <ManufacturingFutureHealthcare />
      <ContactUsSection />
    </div>
  );
};

export default CloudMigration;
