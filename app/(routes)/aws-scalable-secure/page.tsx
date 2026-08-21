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

export const metadata = pageMetadata("/aws-scalable-secure");
const services = [
  "Kubernetes Platform Engineering",
  "VoIP Infrastructure",
  "Monitoring and Observability",
];
const projectDetails = {
  client: "VoIP platform team",
  schedule: "Aug 2024 to Dec 2024",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  {
    title: "Containerized FusionPBX",
    description:
      "FusionPBX was deployed on Kubernetes in a DigitalOcean cluster, with Rancher providing centralized cluster management.",
  },
  {
    title: "Persistent call data",
    description:
      "PostgreSQL ran as a StatefulSet so the communications workload retained durable data as application pods changed.",
  },
  {
    title: "Real-time call verification",
    description:
      "A Python voice service was integrated with the platform to verify calls and flag suspected scam activity in real time.",
  },
  {
    title: "Metrics, dashboards, and logs",
    description:
      "Prometheus, Grafana, and Loki provided a shared operational view for service health, performance, and troubleshooting.",
  },
  {
    title: "Containerized CRM",
    description:
      "Odoo CRM was deployed in containers alongside the communications platform to keep deployment and operations consistent.",
  },
];
const techStack = [
  {
    name: "DigitalOcean",
    icon: "/Images/PNGSS/DigitalOcean_logo.png",
  },
  { name: "Kubernetes", icon: "/Images/PNGSS/Kubernetes-Logo.png" },
  { name: "Python", icon: "/Images/PNGSS/Python-logo-notext.svg.png" },
  { name: "Prometheus", icon: "/Images/PNGSS/prometheus.png" },
  { name: "Grafana", icon: "/Images/PNGSS/Grafana_logo.svg.png" },
];
const metrics = [
  {
    category: "Release Cycles",
    description: "50% faster release cycles due to CI/CD automation",
    bgColor: "bg-[#16273c]",
    width: "w-[75%]", // First row extends about 75% across
  },
  {
    category: "Issue Resolution",
    description: "40% faster issue resolution with monitoring tools",
    bgColor: "bg-[#16324f]",
    width: "w-full", // Second row extends fully
  },
  {
    category: "Security",
    description: "Improved security and high availability",
    bgColor: "bg-[#2b6ca8]",
    width: "w-[65%]", // Third row extends about 65% across
  },
  {
    category: "Cost Efficiency",
    description:
      "Cost-efficiency and scalability aligned with future business growth",
    bgColor: "bg-[#4a86bf]",
    width: "w-[90%]", // Fourth row extends about 90% across
  },
];

const lesson = {
  firstLesson:
    "This project showed that a stateful VoIP workload needs deliberate capacity planning, persistent data design, and end-to-end observability. The call verification service also required realistic integration testing before it could operate safely in the live request path.",
};

export default function VoipAiCallProtectionPage() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "Scalable VoIP Platform with AI Call Protection on Kubernetes",
          description:
            "How CodetoKloud deployed a scalable, secure VoIP platform (FusionPBX) with AI-based scam-call detection on Kubernetes, achieving 50% faster releases and 40% faster issue resolution.",
          path: "/aws-scalable-secure",
          image: "/services/architecture/kubernetes-voip-call-protection.svg",
        })}
      />
      <CaseStudyLayout>
      <CaseStudyHeader
        title="Scalable VoIP and AI Call Protection on Kubernetes"
        subtitle="FusionPBX, persistent call data, and real-time scam detection were brought together on one observable platform."
        services={services}
        arcSrc="/services/architecture/kubernetes-voip-call-protection.svg"
        alt="VoIP platform architecture with FusionPBX and PostgreSQL on Kubernetes, Python call verification, Rancher management, and Prometheus, Grafana, and Loki observability"
      />
      <CaseStudyProblemStatement
        statement="A VoIP platform team needed to scale FusionPBX while adding real-time call verification and scam detection. The workload combined stateful communications data, a Python voice service, and strict reliability requirements, so the team also needed consistent cluster management and a clear view of metrics, dashboards, and logs."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        description="The resulting platform separated the call path, persistent data, management, and observability concerns. That made scaling and troubleshooting more predictable as call volume changed."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
      <section className="bg-[#0d1526] px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Building a stateful Kubernetes platform?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          We can review workload state, scaling constraints, integrations, and
          observability before they become production bottlenecks.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#0d1526] hover:bg-gray-100"
        >
          Review my platform architecture
        </Link>
      </section>
    </CaseStudyLayout>
    </>
  );
}
