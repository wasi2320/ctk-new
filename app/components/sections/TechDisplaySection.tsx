"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const technologyNames: Record<string, string> = {
  "amazon_web_services-logo.wine.png": "AWS",
  "aws.png": "AWS",
  "gcloud.png": "Google Cloud",
  "azure-logo.png": "Microsoft Azure",
  "docker.png": "Docker",
  "kubernetes.png": "Kubernetes",
  "kubernetes-logo.png": "Kubernetes",
  "terraform-cloud.png": "Terraform",
  "ansible-logo.png": "Ansible",
  "github-logo.png": "GitHub",
  "gitlab.png": "GitLab",
  "jenkins-logo.png": "Jenkins",
  "argo-1-e1630327305635-1.png": "Argo CD",
  "prometheus.png": "Prometheus",
  "grafana_logo.svg.png": "Grafana",
  "figma.png": "Figma",
  "sketch-logo.png": "Sketch",
  "illustrator-logo.png": "Adobe Illustrator",
  "photoshop-logo.png": "Adobe Photoshop",
  "after-effects-logo.png": "Adobe After Effects",
  "typescript-logo.png": "TypeScript",
  "react-logo.png": "React",
  "next-js-logo.png": "Next.js",
  "node-js-logo.png": "Node.js",
  "graphql-logo.png": "GraphQL",
  "tailwind-css-logo.png": "Tailwind CSS",
  "swift-logo.png": "Swift",
  "kotlin-logo.png": "Kotlin",
  "react-native-logo.png": "React Native",
  "flutter-logo.png": "Flutter",
  "firebase-logo.png": "Firebase",
  "app-store-logo.png": "Apple App Store",
  "cloudflare-logo.png": "Cloudflare",
  "vault-hashicorp.png": "HashiCorp Vault",
  "crowdstrike-logo.png": "CrowdStrike",
  "soc2-logo.png": "SOC 2",
  "cloudendure-logo.png": "AWS Application Migration Service",
  "vmware-cloud-logo.png": "VMware Cloud",
  "tableau-logo.png": "Tableau",
  "salesforce-logo.png": "Salesforce",
  "jira-logo.png": "Jira",
  "ms-teams-logo.png": "Microsoft Teams",
  "slack-logo.png": "Slack",
  "asana-logo.png": "Asana",
  "openai-logo.png": "OpenAI",
  "langchain-logo.png": "LangChain",
  "pytorch-logo.png": "PyTorch",
  "tensorflow-logo.png": "TensorFlow",
  "scikit-learn-logo.png": "scikit-learn",
};

function technologyAlt(src: string) {
  const filename = src.split("/").pop()?.toLowerCase() ?? "";
  const name = technologyNames[filename] ?? "Technology";
  return `${name} logo`;
}

const TechDisplaySection = ({
  techDisplaySection,
}: {
  techDisplaySection: {
    heading: string;
    description: string;
    marqueeItems: string[];
  };
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 2000 })]
  );
  const [slidesToShow, setSlidesToShow] = useState(5);

  const updateSlidesToShow = useCallback(() => {
    if (emblaApi) {
      const newSlidesToShow = window.innerWidth < 768 ? 3 : 5;
      setSlidesToShow(newSlidesToShow);
    }
  }, [emblaApi]);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [updateSlidesToShow]);

  return (
    <section className="overflow-hidden bg-[#F9F8F8] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="nunito-bold mb-3 text-center text-2xl font-bold md:text-4xl">
          {techDisplaySection.heading}
        </h2>
        <p className="nunito-semiBold mx-auto max-w-3xl text-center font-semibold md:text-lg">
          {techDisplaySection.description}
        </p>

        <div className="mt-8 py-2 md:mx-12">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container h-full">
              {techDisplaySection.marqueeItems.map(
                (img: string, index: number) => (
                  <div
                    key={index}
                    className="embla__slide flex items-center justify-center"
                    style={{
                      minWidth: `${100 / slidesToShow}%`,
                      padding: "6px 0",
                    }}
                  >
                    <div className="left-right-bottom-shadow mx-2 flex h-full items-center justify-center rounded-lg bg-[#EFEEEE]/40 p-3">
                      <Image
                        src={img}
                        alt={technologyAlt(img)}
                        height={64}
                        width={64}
                        className="h-[38px] w-[38px] object-contain md:h-16 md:w-16"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .embla {
          overflow: hidden;
          padding: 8px 0; /* Additional padding insurance */
        }
        .embla__container {
          display: flex;
          align-items: center; /* Vertical centering */
        }
        .embla__slide {
          position: relative;
          flex: 0 0 auto;
        }
      `}</style>
    </section>
  );
};

export default TechDisplaySection;
