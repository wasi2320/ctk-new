import ComparisonPage, {
  type ComparisonData,
} from "@/app/components/sections/ComparisonPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/terraform-vs-cloudformation");

const data: ComparisonData = {
  path: "/terraform-vs-cloudformation",
  heroTitle: "Terraform vs CloudFormation",
  intro:
    "Two infrastructure-as-code tools for AWS, and how to choose. CodetoKloud builds with both and helps teams pick based on their cloud strategy.",
  heroImage: "/services/aws_mono2.png",
  capsuleQuestion: "Terraform vs CloudFormation: which should you use?",
  capsuleAnswer:
    "Terraform and AWS CloudFormation are both infrastructure-as-code tools that provision cloud resources from version-controlled definitions. CloudFormation is AWS-native. Terraform is cloud-agnostic and works across AWS, Azure, Google Cloud, and many other providers. CodetoKloud builds with both and helps teams choose based on whether they are AWS-only or multi-cloud.",
  tableHeaders: ["Tool", "Scope", "Strengths", "Tradeoffs"],
  tableRows: [
    [
      "Terraform",
      "Multi-cloud (AWS, Azure, GCP, and many providers).",
      "One tool and language across clouds, a huge module ecosystem, and a strong plan and apply workflow.",
      "You manage state files, and provider coverage can lag brand-new AWS features slightly.",
    ],
    [
      "AWS CloudFormation",
      "AWS-only.",
      "Native to AWS, no state files to manage, and tight integration with AWS services and drift detection.",
      "AWS-only, and templates get verbose. Weaker fit if you go multi-cloud.",
    ],
  ],
  recommendation: [
    {
      title: "Choose Terraform if…",
      body: "you are multi-cloud, want one IaC language across providers, or value the large module ecosystem.",
    },
    {
      title: "Choose CloudFormation if…",
      body: "you are all-in on AWS and want a native tool with no state files to manage.",
    },
    {
      title: "Use both if…",
      body: "CloudFormation manages some AWS-specific stacks while Terraform manages the broader estate. We set clear boundaries so they do not conflict.",
    },
  ],
  faq: [
    {
      question: "Can you use Terraform and CloudFormation together?",
      answer:
        "Yes, and teams often do. CloudFormation may manage some AWS-specific stacks while Terraform manages the broader estate. CodetoKloud sets clear boundaries so the two tools do not fight over the same resources.",
    },
    {
      question: "Is Terraform better than CloudFormation?",
      answer:
        "Neither is strictly better. Terraform wins on multi-cloud and ecosystem. CloudFormation wins on native AWS integration and not having to manage state. The right pick depends on whether you are AWS-only or multi-cloud.",
    },
    {
      question: "Do you manage Terraform state for us?",
      answer:
        "Yes. CodetoKloud sets up remote state with locking (for example, Amazon S3 and DynamoDB) so your team can collaborate safely, and we build reusable modules so environments stay consistent.",
    },
  ],
  crossLinks: [
    { name: "DevOps Consulting", href: "/devops" },
    { name: "Kubernetes & EKS Consulting", href: "/kubernetes" },
    { name: "EKS vs ECS vs Fargate", href: "/eks-vs-ecs-vs-fargate" },
  ],
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
