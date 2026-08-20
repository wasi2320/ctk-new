import ComparisonPage, {
  type ComparisonData,
} from "@/app/components/sections/ComparisonPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/fargate-vs-ec2");

const data: ComparisonData = {
  path: "/fargate-vs-ec2",
  heroTitle: "AWS Fargate vs EC2",
  intro:
    "Two ways to provide compute for containers on AWS, and how to choose. CodetoKloud, an AWS Advanced Tier Partner, helps teams pick the right launch type and build it on ECS or EKS.",
  heroImage: "/services/aws-solution-illustration.png",
  capsuleQuestion: "AWS Fargate vs EC2: what's the difference?",
  capsuleAnswer:
    "Fargate and EC2 are two ways to run the compute behind your containers on ECS or EKS. With Fargate, AWS provisions and manages the underlying servers, so you define CPU and memory per task and skip node management. With EC2, you run and manage the instances yourself, which gives more control over instance types, GPUs, and pricing options like Spot and Reserved. Fargate reduces operational work; EC2 can be cheaper at steady high scale and more flexible. CodetoKloud, an AWS Advanced Tier Partner, helps teams choose and build the right launch type.",
  tableHeaders: ["Option", "What it is", "Best for", "Tradeoffs"],
  tableRows: [
    [
      "AWS Fargate",
      "Serverless compute where AWS manages the nodes; you set CPU and memory per task.",
      "Variable or spiky workloads and teams that want minimal node operations.",
      "Less control over the host, no direct GPU support, and can cost more at steady high scale.",
    ],
    [
      "Amazon EC2",
      "Instances you provision and manage to host containers on ECS or EKS.",
      "Steady high-scale workloads, GPU needs, and fine-grained cost control.",
      "You manage patching, scaling, and capacity of the underlying nodes.",
    ],
  ],
  recommendation: [
    {
      title: "Choose Fargate if…",
      body: "you want to stop managing servers, your workloads are variable or bursty, and reduced operational overhead is worth trading some control.",
    },
    {
      title: "Choose EC2 if…",
      body: "you run steady high-scale workloads, need GPUs or specific instance types, or want to use Spot and Reserved pricing to lower cost.",
    },
    {
      title: "Consider both if…",
      body: "you mix baseline capacity on EC2 with Fargate for spikes. ECS and EKS let you combine launch types in one cluster.",
    },
  ],
  faq: [
    {
      question: "Is Fargate more expensive than EC2?",
      answer:
        "Per unit of steady capacity, EC2 with Spot or Reserved pricing is often cheaper, but Fargate removes idle node cost and management time. For spiky workloads Fargate can win overall. CodetoKloud, an AWS Advanced Tier Partner, models both before recommending one.",
    },
    {
      question: "Can I use Fargate and EC2 in the same cluster?",
      answer:
        "Yes. Both ECS and EKS support running some workloads on Fargate and others on EC2 nodes, so you can place steady workloads on EC2 and burst capacity on Fargate.",
    },
    {
      question: "Does Fargate support GPUs?",
      answer:
        "No. GPU workloads such as machine learning training need EC2 instances with GPU support. Fargate is CPU and memory only, so GPU tasks run on EC2 launch types.",
    },
  ],
  crossLinks: [
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    { name: "EKS vs ECS vs Fargate", href: "/eks-vs-ecs-vs-fargate" },
    { name: "FinOps & Cost Optimization", href: "/finops" },
  ],
};

export default function Page() {
  return <ComparisonPage data={data} />;
}
