import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { caseStudySchema } from "@/lib/structured-data";
import CaseStudyContent from "./CaseStudyContent";

export const metadata = pageMetadata("/ecs-pr-preview-environments");

export default function Page() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "Automated ECS Deployment with PR Preview Environments",
          description:
            "How CodetoKloud automated Amazon ECS deployments with ephemeral PR preview environments using Terraform and GitHub Actions, cutting deployment time to under 40 minutes.",
          path: "/ecs-pr-preview-environments",
          image: "/services/architecture/ecs-pr-preview-workflow.svg",
        })}
      />
      <CaseStudyContent />
    </>
  );
}
