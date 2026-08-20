import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import MobileBusinessSection from "@/app/components/sections/MobileBusinessSection";
import MobileDifferentiateSection from "@/app/components/sections/MobileDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import { pageMetadata } from "@/lib/page-metadata";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import RelatedServices from "@/app/components/sections/RelatedServices";

export const metadata = pageMetadata("/mobile-app");
const MobileApp = () => {
  const mobileTechStack = {
    heading: "Mobile App Development Stack",
    description:
      "Native and cross-platform apps built on a modern, well-supported stack:",
    marqueeItems: [
      "/Images/PNGSS/react-native-logo.png",
      "/Images/PNGSS/flutter-logo.png",
      "/Images/PNGSS/swift-logo.png",
      "/Images/PNGSS/kotlin-logo.png",
      "/Images/PNGSS/firebase-logo.png",
      "/Images/PNGSS/aws.png",
      "/Images/PNGSS/app-store-logo.png",
    ],
  };
  return (
    <div>
      <JsonLd data={coreServiceSchemas["/mobile-app"]} />
      <HeroSection
        title="Custom Mobile Apps, Built to Scale"
        description="Your mobile app is your brand in the palm of your customer's hand, driving connection and action with every tap."
        imageSrc="/Images/mobile_app.svg"
      />
      <TailoredSection heading="Develop, Launch & Grow Your Mobile App with Confidence" />
      <MobileBusinessSection />
      <MobileDifferentiateSection />
      <TechDisplaySection techDisplaySection={mobileTechStack} />
      <CardScrollSection />
      <RelatedServices currentPath="/mobile-app" />
    </div>
  );
};

export default MobileApp;
