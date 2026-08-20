import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/platform-engineering-vs-devops");

const data: DefinitionData = {
  path: "/platform-engineering-vs-devops",
  heroTitle: "Platform Engineering vs DevOps",
  intro:
    "How platform engineering and DevOps relate: DevOps is a culture and set of practices, while platform engineering builds an internal developer platform that makes those practices the default. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/Images/DevOps_Hero.png",
  capsuleQuestion: "What is the difference between platform engineering and DevOps?",
  capsuleAnswer:
    "DevOps is a culture and set of practices for shortening the path from code to production through automation, shared ownership, and fast feedback. Platform engineering is a discipline that builds an internal developer platform (IDP): paved-path tooling, self-service infrastructure, and golden templates that make DevOps practices the default for every team. Platform engineering does not replace DevOps; it productizes it so developers ship without deep infrastructure expertise. CodetoKloud builds both as an AWS Advanced Tier Partner.",
  sections: [
    {
      title: "What DevOps is",
      body: "DevOps is about how teams work: breaking down the wall between development and operations, automating build, test, and deploy, and taking shared responsibility for reliability. Its practices include CI/CD, infrastructure as code, observability, and blameless incident response. DevOps is a philosophy with supporting tooling, not a specific product or team you can buy off the shelf.",
    },
    {
      title: "What platform engineering is",
      body: "Platform engineering treats the internal tooling as a product with developers as its users. A platform team builds an internal developer platform: self-service ways to provision environments, deploy services, and get observability, plus golden paths and templates that bake in security and best practices. The goal is to reduce cognitive load so a product engineer can ship a service without becoming a Kubernetes or Terraform expert.",
    },
    {
      title: "How they overlap and differ",
      body: "They share the same aim, faster and safer delivery, and the same tools underneath: Kubernetes, IaC, CI/CD, and GitOps. The difference is scope. DevOps can leave each team assembling its own pipelines, which works until an organization has many teams and the wheel gets reinvented. Platform engineering centralizes and productizes that work so it is consistent, self-service, and maintained by a dedicated team.",
    },
    {
      title: "Which your team needs",
      body: "Smaller organizations usually need solid DevOps foundations first: CI/CD, IaC, and observability that work well. A dedicated platform investment makes sense once you have enough teams that duplicated tooling and inconsistent paths slow everyone down. CodetoKloud helps teams build the DevOps foundation and, when the scale justifies it, an internal developer platform on AWS and EKS.",
    },
  ],
  faq: [
    {
      question: "Does platform engineering replace DevOps?",
      answer:
        "No. Platform engineering is a way of delivering DevOps outcomes at scale. It builds on DevOps practices and packages them into a self-service platform so more teams can adopt them consistently. The culture and practices of DevOps still underpin it.",
    },
    {
      question: "When should we invest in a platform team?",
      answer:
        "Usually once you have several product teams each maintaining their own pipelines and infrastructure, and that duplication is causing drift and slow onboarding. Before that point, the higher-impact move is getting core DevOps practices solid. We help assess where you are.",
    },
    {
      question: "What is an internal developer platform?",
      answer:
        "An internal developer platform (IDP) is the self-service layer a platform team builds on top of infrastructure like AWS and Kubernetes. It gives developers paved paths to provision resources, deploy, and observe services through templates and tooling, without needing to operate the underlying systems directly.",
    },
  ],
  crossLinks: [
    { name: "DevOps Consulting", href: "/devops" },
    { name: "Kubernetes & EKS", href: "/kubernetes" },
    {
      name: "What Does a DevOps Consultant Do?",
      href: "/what-does-a-devops-consultant-do",
    },
  ],
  ctaHeading: "Talk to an AWS partner",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
