import React from "react";
import Link from "next/link";
import CaseStudyLayout from "@/app/components/sections/caseStudies/CaseStudyLayout";
import CaseStudyHeader from "@/app/components/sections/caseStudies/CaseStudyHeader";
import CaseStudyProblemStatement from "@/app/components/sections/caseStudies/CaseStudyProblemStatement";
import CaseStudySolution from "@/app/components/sections/caseStudies/CaseStudySolution";
import CaseStudyTechStack from "@/app/components/sections/caseStudies/CaseStudyTechStack";
import CaseStudyLessons from "@/app/components/sections/caseStudies/CaseStudyLessons";
import MetricsDisplay from "@/app/components/metrics";
import { pageMetadata } from "@/lib/page-metadata";
import JsonLd from "@/app/components/JsonLd";
import { caseStudySchema } from "@/lib/structured-data";

export const metadata = pageMetadata("/scalable-secure-aws");
const services = [
  "AWS Architecture",
  "Kubernetes and EKS",
  "DevOps Automation",
];
const projectDetails = {
  client: "Spiderdoor",
  schedule: "Oct 2024 to Dec 2024",
  size: "$10,000 to $49,999",
};
const solutionComponents = [
  {
    title: "Protected request path",
    description:
      "CloudFront, AWS WAF, and an Application Load Balancer provided edge protection and distributed traffic to private application workloads.",
  },
  {
    title: "Private application and data tiers",
    description:
      "Containerized services ran on Amazon EKS, while Amazon RDS provided managed database availability in private subnets.",
  },
  {
    title: "Automated delivery",
    description:
      "Jenkins, Docker, and Argo CD established a repeatable CI/CD workflow with a private source repository and container registry.",
  },
  {
    title: "Monitoring and recovery data",
    description:
      "Prometheus and Grafana provided operational visibility, while Amazon S3 retained logs and backup data.",
  },
  {
    title: "Controlled administrative access",
    description:
      "VPC segmentation, VPN access, managed secrets, and encryption reduced exposure compared with the previous VPS environment.",
  },
];
const techStack = [
  {
    name: "AWS",
    icon: "/Images/PNGSS/aws.png",
  },
  { name: "Kubernetes", icon: "/Images/PNGSS/Kubernetes-Logo.png" },
  { name: "Argo CD", icon: "/Images/PNGSS/Argo-1-e1630327305635-1.png" },
  { name: "Prometheus", icon: "/Images/PNGSS/prometheus.png" },
];
const metrics = [
  {
    category: "Release Cycles",
    description: "50% faster release cycles due to CI/CD automation",
    bgColor: "bg-[#16273c]",
    width: "w-[75%]",
  },
  {
    category: "Issue Resolution",
    description: "40% faster issue resolution with monitoring tools",
    bgColor: "bg-[#16324f]",
    width: "w-full",
  },
  {
    category: "Security",
    description: "Improved security and high availability",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[65%]",
  },
  {
    category: "Cost Efficiency",
    description:
      "Cost-efficiency and scalability aligned with future business growth",
    bgColor: "bg-[#4a86bf]",
    width: "w-[90%]",
  },
];

const lesson = {
  firstLesson:
    "For this SaaS migration, automated delivery and observability were as important as the target infrastructure. Auto scaling provided capacity flexibility, but ongoing resource review remained necessary to prevent overprovisioning.",
  secondLesson:
    "The project comparison favored AWS for this workload because managed services, automated scaling, and repeatable delivery replaced several manual VPS operations. The cost advantage depended on right sizing and continued resource management.",
};

export default function ScalableSecureAwsPage() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "Scalable, Secure & Cost-Efficient AWS Setup",
          description:
            "How CodetoKloud migrated a SaaS application to modern AWS infrastructure with container orchestration, CI/CD, and Prometheus/Grafana monitoring, improving cost, security, and performance.",
          path: "/scalable-secure-aws",
          image: "/services/architecture/secure-aws-eks-platform.svg",
        })}
      />
      <CaseStudyLayout>
      <CaseStudyHeader
        title="How Spiderdoor Moved from a VPS to a Secure AWS Platform"
        subtitle="A private Amazon EKS architecture combined automated delivery, managed data, monitoring, and layered traffic protection."
        services={services}
        arcSrc="/services/architecture/secure-aws-eks-platform.svg"
        alt="Secure Amazon EKS architecture with GitOps delivery, private workloads, Multi-AZ data services, and centralized observability"
      />
      <CaseStudyProblemStatement
        statement="Spiderdoor needed to move its SaaS application from a VPS to AWS. The existing environment relied on manual deployment work, had limited scaling options, and did not provide the network controls or operational visibility the team needed for continued growth."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        description="The new environment brought delivery, runtime, data, security, and monitoring into one AWS operating model. Each layer has a defined purpose and can be reviewed independently as the SaaS workload grows."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons
        lessons={lesson.firstLesson}
        secondLesson={lesson.secondLesson}
      />
      <section className="bg-[#0d1526] px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Considering a VPS to AWS migration?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          We will review the current workload, identify migration risks, and map
          the smallest practical path to a secure, operable AWS foundation.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0d1526] hover:bg-gray-100"
        >
          Review my AWS migration
        </Link>
      </section>
    </CaseStudyLayout>
    </>
  );
}
