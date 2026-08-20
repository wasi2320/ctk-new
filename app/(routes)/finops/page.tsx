import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import FinOpsBusinessSection from "@/app/components/sections/FinOpsBusinessSection";
import FinOpsDifferentiateSection from "@/app/components/sections/FinOpsDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import { pageMetadata } from "@/lib/page-metadata";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import RelatedServices from "@/app/components/sections/RelatedServices";

export const metadata = pageMetadata("/finops");
const FinOps = () => {
  const finopsTechStack = {
    heading: "FinOps Technology Stack",
    description:
      "Managing and optimizing AWS spend with the leading FinOps tools and platforms:",
    marqueeItems: [
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/gcloud.png",
      "/Images/PNGSS/azure-logo.png",
      "/Images/PNGSS/terraform-cloud.png",
      "/Images/PNGSS/Kubernetes.png",
      "/Images/PNGSS/prometheus.png",
      "/Images/PNGSS/Grafana_logo.svg.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/finops"]} />
      <HeroSection
        title="AWS Cost Optimization and FinOps That Pays for Itself"
        description="We turn your AWS bill into something you can see, forecast, and control, with cost visibility, rightsizing, and Savings Plans that cut spend without slowing your team down."
        imageSrc="/Images/Fin_Hero.png"
      />
      <TailoredSection />
      <FinOpsBusinessSection />
      <FinOpsDifferentiateSection />
      <TechDisplaySection techDisplaySection={finopsTechStack} />
      <CardScrollSection />
      <RelatedServices currentPath="/finops" />
    </div>
  );
};

export default FinOps;
