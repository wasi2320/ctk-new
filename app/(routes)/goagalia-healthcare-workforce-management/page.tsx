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
            "How CodetoKloud migrated GoAgalia's healthcare workforce platform to Amazon EKS with technical safeguards for regulated workloads, reducing cost by about 35% and API latency from 850 ms to 320 ms.",
          path: "/goagalia-healthcare-workforce-management",
          image: "/services/architecture/secure-aws-eks-platform.svg",
        })}
      />
      <CaseStudyContent />
    </>
  );
}
