import React from "react";
import CaseStudyLayout from "@/app/components/sections/caseStudies/CaseStudyLayout";
import CaseStudyHeader from "@/app/components/sections/caseStudies/CaseStudyHeader";
import CaseStudyProblemStatement from "@/app/components/sections/caseStudies/CaseStudyProblemStatement";
import CaseStudySolution from "@/app/components/sections/caseStudies/CaseStudySolution";
import CaseStudyTechStack from "@/app/components/sections/caseStudies/CaseStudyTechStack";
import CaseStudyLessons from "@/app/components/sections/caseStudies/CaseStudyLessons";
import MetricsDisplay from "@/app/components/metrics";

const services = ["DevOps Managed Services", "Cloud Consulting & SI"];
const projectDetails = {
  client: "Goagalia",
  schedule: "Aug 2024 — Dec 2024",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  {
    title: "FusionPBX",
    description:
      "was deployed on Kubernetes in a DigitalOcean cluster, with Rancher managing the cluster.",
  },
  {
    title: "PostgreSQL",
    description: "configured as a StatefulSet for persistent storage.",
  },
  {
    title: "Python-based AI voice bot",
    description: "was integrated for real-time scam detection.",
  },
  {
    title: "Monitoring",
    description: "was set up using Prometheus, Grafana, and Loki.",
  },
  { title: "Odoo CRM", description: "was deployed in containers." },
];
const techStack = [
  {
    name: "Docker",
    icon: "/Images/PNGSS/bg_dock.png",
  },
  { name: "GitLab", icon: "/Images/PNGSS/gitlab.png" },
  { name: "React", icon: "/Images/PNGSS/react.png" },
  {
    name: "Google Cloud",
    icon: "/Images/PNGSS/gcloud.png",
  },
  { name: "AI Tools", icon: "/Images/PNGSS/Figma.png" },
];
const metrics = [
  {
    category: "Release Cycles",
    description: "50% faster release cycles due to CI/CD automation",
    bgColor: "bg-[#1a2e22]",
    width: "w-[75%]", // First row extends about 75% across
  },
  {
    category: "Issue Resolution",
    description: "40% faster issue resolution with monitoring tools",
    bgColor: "bg-[#1a3b2a]",
    width: "w-full", // Second row extends fully
  },
  {
    category: "Security",
    description: "Improved security and high availability",
    bgColor: "bg-[#3a6a50]",
    width: "w-[65%]", // Third row extends about 65% across
  },
  {
    category: "Cost Efficiency",
    description:
      "Cost-efficiency and scalability aligned with future business growth",
    bgColor: "bg-[#4d7a65]",
    width: "w-[90%]", // Fourth row extends about 90% across
  },
];

const lesson = {
  firstLesson:
    "Key lessons included the importance of cluster planning for high availability, fine-tuning resource allocation to optimize costs, and thorough testing for seamless AI integration. Monitoring tools and GitOps for configuration management were essential for stability and efficiency. The project demonstrated that Kubernetes offers scalability and automation, but careful planning, testing, and monitoring are critical for success.",
};

export default function VoipAiCallProtectionPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="Scalable VoIP & AI Call Protection"
        subtitle="Services provided on this Project"
        services={services}
        arcSrc="/services/GoAgalia.png"
        alt="AWS Architecture Diagram"
      />
      <CaseStudyProblemStatement
        statement="The client needed a scalable, reliable VoIP solution that integrates AI for real-time call verification and scam call detection. The goal was to deploy FusionPBX on Kubernetes with seamless AI integration, along with Rancher for cluster management and monitoring tools like Prometheus, Grafana, and Loki. The challenge was to ensure high availability, performance, and smooth integration."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        illustration="/services/GoAgalia2.png"
        illustrationAlt="Solution Illustration"
        description="To improve AWS security, the solution focused on network security, access management, pipeline security, monitoring, and data encryption."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
    </CaseStudyLayout>
  );
}
