import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import ConsultingSection from "@/app/components/sections/ConsultingSection";
import WhyUsSection from "@/app/components/sections/WhyUsSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import { pageMetadata } from "@/lib/page-metadata";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import RelatedServices from "@/app/components/sections/RelatedServices";

export const metadata = pageMetadata("/consulting-and-advisory");
const ConsultingAndAdvisory = () => {
  const consultingTechStack = {
    heading: "Consulting & Advisory Technologies",
    description:
      "Using data analytics and business intelligence tools to provide strategic insights that drive better decisions:",
    marqueeItems: [
      "/Images/PNGSS/tableau-logo.png",
      "/Images/PNGSS/salesforce-logo.png",
      "/Images/PNGSS/jira-logo.png",
      "/Images/PNGSS/ms-teams-logo.png",
      "/Images/PNGSS/slack-logo.png",
      "/Images/PNGSS/asana-logo.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/consulting-and-advisory"]} />
      <HeroSection
        title="Cloud and DevOps Consulting and Advisory"
        description="We help your team make confident decisions on AWS. From architecture reviews to hands-on roadmaps, we guide you through the hard calls and stay to help you deliver."
        imageSrc="/Images/Consulting_Hero.png"
      />
      <TailoredSection />
      <ConsultingSection />
      <WhyUsSection />
      <TechDisplaySection techDisplaySection={consultingTechStack} />
      <CardScrollSection />
      <RelatedServices currentPath="/consulting-and-advisory" />
    </div>
  );
};

export default ConsultingAndAdvisory;
