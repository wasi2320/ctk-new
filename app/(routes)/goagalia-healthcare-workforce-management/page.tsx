import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { caseStudySchema } from "@/lib/structured-data";
import CaseStudyContent from "./CaseStudyContent";

export const metadata = pageMetadata("/goagalia-healthcare-workforce-management");

export default function Page() {
  return (
    <>
      <JsonLd
        data={caseStudySchema({
          title: "GoAgalia: Scalable AWS Cloud Infrastructure",
          description:
            "How CodetoKloud migrated GoAgalia's healthcare workforce platform to a scalable, HIPAA-compliant AWS architecture on Amazon EKS, cutting costs ~35% and API latency from 850ms to 320ms.",
          path: "/goagalia-healthcare-workforce-management",
          image: "/services/strength_aws.png",
        })}
      />
      <CaseStudyContent />
    </>
  );
}
