import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/what-is-infrastructure-as-code");

const data: DefinitionData = {
  path: "/what-is-infrastructure-as-code",
  heroTitle: "What Is Infrastructure as Code?",
  intro:
    "How Infrastructure as Code works: defining cloud infrastructure in version-controlled files with tools like Terraform and CloudFormation, so environments are repeatable, reviewable, and auditable. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/Images/DevOps_Hero.png",
  capsuleQuestion: "What is Infrastructure as Code (IaC)?",
  capsuleAnswer:
    "Infrastructure as Code (IaC) is the practice of defining and provisioning cloud infrastructure through machine-readable configuration files instead of manual console clicks. Tools like Terraform and AWS CloudFormation read declarative definitions and create, update, or destroy resources to match. Because the definitions live in version control, infrastructure becomes repeatable, reviewable, and auditable, and you can rebuild an environment from code. CodetoKloud builds IaC on AWS as an AWS Advanced Tier Partner.",
  sections: [
    {
      title: "Declarative definitions",
      body: "With IaC you describe the desired end state, such as a VPC, subnets, an EKS cluster, and databases, and the tool works out how to reach it. Terraform uses HCL and manages a state file that tracks real resources; CloudFormation uses JSON or YAML templates native to AWS. Either way, the same definition produces the same environment every time, which removes the drift and snowflake servers that come from manual changes.",
    },
    {
      title: "Version control and review",
      body: "Because infrastructure is code, it goes in Git. Changes become pull requests that teammates review before anything touches production, and every change has an author, a timestamp, and a reason. You can plan a change to see exactly what will be created, modified, or destroyed before applying it. That review gate and change history are also useful evidence for SOC 2 and similar frameworks.",
    },
    {
      title: "Repeatability and disaster recovery",
      body: "IaC makes environments reproducible. You can stand up an identical staging environment, spin up per-branch preview environments, or rebuild a region after a failure from the same code. Combined with CI/CD, applying infrastructure changes becomes an automated, tested pipeline rather than a risky manual task.",
    },
    {
      title: "How CodetoKloud implements IaC",
      body: "We build AWS infrastructure with Terraform or CloudFormation, structured into reusable modules, with remote state, automated plan and apply pipelines, and policy checks. As an AWS Advanced Tier Partner, we also help teams choose a tool and migrate off click-ops. See our Terraform vs CloudFormation and Terraform vs Pulumi guides for how we compare the options.",
    },
  ],
  faq: [
    {
      question: "Should I use Terraform or CloudFormation?",
      answer:
        "Both are solid. CloudFormation is native to AWS and needs no extra tooling; Terraform is cloud-agnostic, has a large module ecosystem, and manages multi-provider setups. The right choice depends on whether you are all-in on AWS and on your team's experience. Our Terraform vs CloudFormation guide covers the tradeoffs.",
    },
    {
      question: "Is IaC only for large teams?",
      answer:
        "No. Even a small team benefits from reproducible environments and reviewed changes. IaC pays off as soon as you have more than one environment or more than one person changing infrastructure.",
    },
    {
      question: "How does IaC relate to DevOps?",
      answer:
        "IaC is a foundational DevOps practice. It lets infrastructure changes flow through the same version control, review, and CI/CD pipelines as application code, which is what makes automated, reliable delivery possible.",
    },
  ],
  crossLinks: [
    { name: "DevOps Consulting", href: "/devops" },
    { name: "Terraform vs CloudFormation", href: "/terraform-vs-cloudformation" },
    { name: "Terraform vs Pulumi", href: "/terraform-vs-pulumi" },
  ],
  ctaHeading: "Talk to an AWS partner",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
