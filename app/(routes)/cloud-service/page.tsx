import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import CloudBusinessSection from "@/app/components/sections/CloudBusinessSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import CloudDifferentiateSection from "@/app/components/sections/CloudDifferentiateSection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";

const CloudService = () => {
  const cloudTechStack = {
    heading: "Cloud Services Technologies",
    description:
      "Building scalable, reliable cloud infrastructure with industry-leading platforms and tools:",
    marqueeItems: [
      "/Images/PNGSS/Amazon_Web_Services-Logo.wine.png",
      "/Images/PNGSS/gcloud.png",
      "/Images/PNGSS/azure-logo.png",
      "/Images/PNGSS/Docker.png",
      "/Images/PNGSS/Kubernetes.png",
      "/Images/PNGSS/terraform-cloud.png",
    ],
  };

  return (
    <div>
      <HeroSection
        title="Secure, Scalable & Reliable Cloud Service Solutions"
        description="Efficient cloud infrastructure that grows with your business and keeps data safe."
        imageSrc="/Images/Cloud_Hero.png"
      />
      <TailoredSection />
      <CloudBusinessSection />
      <CloudDifferentiateSection />
      <TechDisplaySection techDisplaySection={cloudTechStack} />
      <CardScrollSection />
    </div>
  );
};

export default CloudService;
