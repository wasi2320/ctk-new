import HeroSection from "@/app/components/HeroSection";
import TailoredSection from "@/app/components/sections/TailoredSection";
import DevOpsBusinessSection from "@/app/components/sections/DevOpsBusinessSection";
import BenefitSection from "@/app/components/sections/BenefitSection";
import DevOpsDifferentiateSection from "@/app/components/sections/DevOpsDifferentiateSection";
import TechDisplaySection from "@/app/components/sections/TechDisplaySection";
import { CardScrollSection } from "@/app/components/sections/CardScrollSection";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";
import { pageFaqs } from "@/lib/faqs";
import RelatedServices from "@/app/components/sections/RelatedServices";
import TrustBadge from "@/app/components/sections/TrustBadge";
import FaqSection from "@/app/components/sections/FaqSection";

export const metadata = pageMetadata("/devops");

/** DevOps capabilities, keyworded H3s with extractable, standalone prose. */
const capabilities = [
  {
    title: "CI/CD Pipeline Automation",
    body: "We design and build automated CI/CD pipelines with GitHub Actions, GitLab CI, Jenkins, and Argo CD that test, build, and deploy your code on every change. One client pipeline reached a 95% deployment success rate and 50% faster release cycles.",
  },
  {
    title: "Infrastructure as Code (Terraform & CloudFormation)",
    body: "We provision and manage cloud infrastructure as code with Terraform, CloudFormation, and Kubernetes manifests, so every environment is consistent, version-controlled, and repeatable, no manual, drift-prone setup.",
  },
  {
    title: "GitOps Delivery with ArgoCD",
    body: "We implement GitOps with ArgoCD, keeping your environment's desired state in Git and syncing it automatically. Changes become versioned, reviewable, and auditable, and rollbacks are a Git revert away.",
  },
  {
    title: "Containers & Kubernetes on Amazon EKS",
    body: "We containerize applications with Docker and run them on Kubernetes and Amazon EKS with Helm packaging and autoscaling. Explore our dedicated Kubernetes & EKS consulting for cluster design, migration, and day-2 operations.",
  },
  {
    title: "Observability & Monitoring",
    body: "We add monitoring, logging, and alerting with Prometheus, Grafana, Datadog, and CloudWatch so you have real-time visibility into your systems and can resolve incidents before they affect customers.",
  },
  {
    title: "DevSecOps & Security",
    body: "We build security into the pipeline with least-privilege access, secrets management, image and dependency scanning, and continuous monitoring, helping teams meet SOC 2, HIPAA, and PCI DSS requirements on AWS.",
  },
];

const DevOps = () => {
  const devopsTechStack = {
    heading: "DevOps Technologies & Tools",
    description:
      "Streamlining development workflows with automation and integration tools for continuous delivery:",
    marqueeItems: [
      "/Images/PNGSS/Jenkins-logo.png",
      "/Images/PNGSS/GitHub-Logo.png",
      "/Images/PNGSS/gitlab.png",
      "/Images/PNGSS/circleci-logo.png",
      "/Images/PNGSS/ansible-logo.png",
      "/Images/PNGSS/Argo-1-e1630327305635-1.png",
      "/Images/PNGSS/prometheus.png",
      "/Images/PNGSS/terraform-cloud.png",
      "/Images/PNGSS/Kubernetes-Logo.png",
      "/Images/PNGSS/Docker.png",
    ],
  };

  return (
    <div>
      <JsonLd data={coreServiceSchemas["/devops"]} />
      <HeroSection
        title="AWS DevOps Consulting & CI/CD Automation"
        description="CodetoKloud, an AWS Advanced Tier Partner, automates your delivery with CI/CD pipelines, Terraform infrastructure-as-code, GitOps, and Kubernetes, so you ship faster, more reliably, and at lower cost."
        imageSrc="/Images/DevOps_Hero.png"
        buttonText="Get a free CI/CD pipeline audit"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-8">
        <TrustBadge />
      </div>

      {/* Answer capsule, definition-first, standalone, names the company. */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What is DevOps consulting?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            DevOps consulting is expert help automating how software is built,
            tested, deployed, and operated, combining CI/CD pipelines,
            infrastructure as code, and monitoring so teams release faster and
            more reliably. CodetoKloud, an AWS Advanced Tier Partner, delivers
            DevOps consulting on AWS: CI/CD automation, Terraform, GitOps with
            ArgoCD, Kubernetes on Amazon EKS, observability, and DevSecOps.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Our DevOps Services
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            End-to-end DevOps engineering that automates delivery and improves
            reliability across your AWS environment.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#16212e] transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {c.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TailoredSection />
      <DevOpsBusinessSection />
      <BenefitSection />
      <DevOpsDifferentiateSection />
      <TechDisplaySection techDisplaySection={devopsTechStack} />
      <CardScrollSection />

      <FaqSection
        items={pageFaqs["/devops"]}
        heading="DevOps Consulting FAQs"
        description="Common questions about our CI/CD, cloud, Kubernetes, and DevOps managed services."
      />

      <RelatedServices currentPath="/devops" />
    </div>
  );
};

export default DevOps;
