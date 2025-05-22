import HeroSection from "@/app/components/HeroSection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import WebBusinessSection from "@/app/components/sections/WebBusinessSection";
import WebDifferentiateSection from "@/app/components/sections/WebDifferentiateSection";

const WebSolutions = () => {
  const webTechStack = {
    heading: "Web Development Technologies",
    description:
      "Building modern web experiences with advanced frameworks and libraries to create interactive, performant applications:",
    marqueeItems: [
      "/Images/PNGSS/react-logo.png",
      "/Images/PNGSS/next-js-logo.png",
      "/Images/PNGSS/vue-js-logo.png",
      "/Images/PNGSS/node-js-logo.png",
      "/Images/PNGSS/typescript-logo.png",
      "/Images/PNGSS/tailwind-css-logo.png",
      "/Images/PNGSS/GraphQL-logo.png",
    ],
  };

  return (
    <div>
      <HeroSection
        title="Your Trusted Source for Advanced Web Solutions"
        description="Your website is more than just code it is the heartbeat of your brand."
        imageSrc="/Images/Web_Hero.png"
        cover={true}
      />
      <TailoredSection heading="Optimize your infrastructure  today." />
      <WebBusinessSection />
      <WebDifferentiateSection />
      <TechDisplaySection techDisplaySection={webTechStack} />
      <CardScrollSection />
    </div>
  );
};

export default WebSolutions;
