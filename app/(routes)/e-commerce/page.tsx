import HeroSection from "@/app/components/HeroSection";
import EcommerceExpertiseTailoredSection from "@/app/components/sections/EcommerceExpertiseTailoredSection";
import EcommerceTransformative from "@/app/components/sections/EcommerceTransformative";
import EcommerceSolution from "@/app/components/sections/EcommerceSolution";
import EcommerceFutureHealthcare from "@/app/components/sections/EcommerceFutureHealthcare";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/e-commerce");
const CloudMigration = () => {
  return (
    <div>
      <HeroSection
        title="E-Commerce"
        description="We build the cloud platforms behind high-traffic e-commerce. From storefronts and checkout to inventory and peak-season scale, we handle the AWS engineering so your store stays fast, secure, and always on."
        imageSrc="/Images/healthcare.png"
        buttonText="Book a free audit"
        buttonLink="/contact"
      />
      <EcommerceExpertiseTailoredSection />
      <EcommerceTransformative />
      <EcommerceSolution />
      <EcommerceFutureHealthcare />
      <ContactUsSection />
    </div>
  );
};

export default CloudMigration;
