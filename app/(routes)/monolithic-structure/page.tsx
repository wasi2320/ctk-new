import React from "react";
import CaseStudyLayout from "@/app/components/sections/caseStudies/CaseStudyLayout";
import CaseStudyHeader from "@/app/components/sections/caseStudies/CaseStudyHeader";
import CaseStudyProblemStatement from "@/app/components/sections/caseStudies/CaseStudyProblemStatement";
import CaseStudySolution from "@/app/components/sections/caseStudies/CaseStudySolution";
import CaseStudyTechStack from "@/app/components/sections/caseStudies/CaseStudyTechStack";
import CaseStudyLessons from "@/app/components/sections/caseStudies/CaseStudyLessons";
import MetricsDisplay from "@/app/components/metrics";

const services = [
  "Cloud Consulting & SI",
  "DevOps Managed Services",
  "Web Development",
];
const projectDetails = {
  client: "Clyk Studio",
  schedule: "Feb 2025 — Mar 2025",
  size: "$50,000 to $199,999",
};
const solutionComponents = [
  { title: "Route 53", description: "for DNS routing" },
  { title: "VPC", description: "for network isolation" },
  { title: "Elastic Beanstalk", description: "for deployment" },
  { title: "RDS", description: "for data storage" },
  { title: "Cognito, WAF, and KMS", description: "for security" },
  { title: "CloudWatch", description: "for performance monitoring" },
  { title: "GitHub, CodePipeline, CodeDeploy", description: "for CI/CD" },
  { title: "AWS Backup and EBS snapshots", description: "for backups" },
  {
    title: "Optional: CloudFront and GuardDuty",
    description: "for enhanced performance and security",
  },
];
const techStack = [
  { name: "Docker", icon: "/Images/PNGSS/bg_dock.png" },
  { name: "GitLab", icon: "/Images/PNGSS/gitlab.png" },
  { name: "AWS", icon: "/Images/PNGSS/aws.png" },
  { name: "Google Cloud", icon: "/Images/PNGSS/gcloud.png" },
];
const metrics = [
  {
    category: "Scalability",
    description:
      "Scalability achieved with Auto Scaling Groups and Elastic Beanstalk",
    bgColor: "bg-[#1a2e22]",
    width: "w-[90%]",
  },
  {
    category: "Availability",
    description:
      "High availability through Application Load Balancer and Route 53",
    bgColor: "bg-[#1a3b2a]",
    width: "w-[85%]",
  },
  {
    category: "Security",
    description: "Strong security with Cognito, WAF, and KMS",
    bgColor: "bg-[#3a6a50]",
    width: "w-[55%]",
  },
  {
    category: "Errors",
    description: "CI/CD pipelines reduce errors",
    bgColor: "bg-[#4d7a65]",
    width: "w-[40%]",
  },
  {
    category: "Performance",
    description: "Performance monitoring via CloudWatch, alerts via SNS/Slack",
    bgColor: "bg-[#2e4d3a]",
    width: "w-[85%]",
  },
  {
    category: "Cost Optimization",
    description: "Cost optimization with S3 storage and Auto Scaling",
    bgColor: "bg-[#3a5a4a]",
    width: "w-[80%]",
  },
  {
    category: "Data Protection",
    description: "Data protection ensured through AWS Backup and EBS snapshots",
    bgColor: "bg-[#4d7a65]",
    width: "w-[90%]",
  },
];

const lesson = {
  firstLesson:
    "Key lessons included the importance of planning and testing before migration to minimize downtime, ensuring system reliability through monitoring and security measures, and leveraging AWS automation features like auto-scaling. Continuous collaboration with stakeholders helped ensure smooth integration and adjustments throughout the project.",
  secondLesson:
    "A TCO analysis compared the cost of maintaining existing infrastructure with migrating to AWS. It accounted for setup, migration, and operational costs, including AWS services like EC2, RDS, and ELBs. The analysis showed that AWS offers reduced infrastructure costs, better scalability, and enhanced security, making it a cost-effective solution.",
};

export default function AwsMonolithicAppArchitecturePage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="AWS Monolithic App Architecture"
        subtitle="Services provided on this Project"
        services={services}
        arcSrc="/services/aws_mono.png"
        alt="AWS Architecture Diagram"
      />
      <CaseStudyProblemStatement
        statement="The challenge was to design and implement a scalable, secure AWS-based architecture for a monolithic application. It needed to support high availability, automated scaling, robust security, and seamless integration with CI/CD processes. The solution had to ensure user authentication, data storage, and backup, while maintaining performance and minimizing downtime."
        details={projectDetails}
      />
      <CaseStudySolution
        solutions={solutionComponents}
        illustration="/services/aws_mono2.png"
        illustrationAlt="Solution Illustration"
        description="This setup ensures scalability, high availability, and effective resource management."
      />
      <CaseStudyTechStack techs={techStack} />
      <MetricsDisplay metrics={metrics} />
      <CaseStudyLessons lessons={lesson.firstLesson} />
    </CaseStudyLayout>
  );
}
