import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import FinOpsBusinessSection from "@/app/components/sections/FinOpsBusinessSection";
import FinOpsDifferentiateSection from "@/app/components/sections/FinOpsDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";

const FinOps = () => {
  const finopsTechStack = {
    heading: "FinOps Technology Stack",
    description:
      "Optimizing financial operations with cutting-edge tools and platforms for cost management and financial analysis:",
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
      <HeroSection
        title="Streamlining FinOpsfor Enhanced Efficiency and Sustainable Growth"
        description="Optimizing FinOps for Improved Efficiency. Enabling Sustainable Growth through Effective Financial Management."
        imageSrc="/Images/Fin_Hero.png"
      />
      <TailoredSection />
      <FinOpsBusinessSection />
      <FinOpsDifferentiateSection />
      <TechDisplaySection techDisplaySection={finopsTechStack} />
      <CardScrollSection />
    </div>
  );
};

export default FinOps;
