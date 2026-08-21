import CaseStudyArticle, {
  type CaseStudyData,
} from "@/app/components/sections/CaseStudyArticle";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "/cis-kubernetes-benchmark-assessment-case-study",
);

const data: CaseStudyData = {
  path: "/cis-kubernetes-benchmark-assessment-case-study",
  title: "CIS Kubernetes Benchmark Assessment Across EKS and LKE",
  heroTitle: "A Shared-Responsibility CIS Kubernetes Assessment",
  intro:
    "A software company needed a control-by-control view of its managed Kubernetes environments on Amazon EKS and Linode LKE. We mapped provider and customer responsibilities, reviewed the customer-managed surfaces, and organized technical evidence without representing the work as certification.",
  heroImage: "/services/architecture/cis-kubernetes-assessment.svg",
  heroImageAlt:
    "Assessment diagram showing CIS Kubernetes Benchmark controls divided between managed provider responsibilities and customer-managed workloads, RBAC, network policies, and nodes across Amazon EKS and Linode LKE, with kube-bench evidence feeding documented findings.",
  metaDescription:
    "How CodetoKloud assessed CIS Kubernetes Benchmark controls across Amazon EKS and Linode LKE through shared-responsibility mapping, configuration review, and kube-bench evidence.",
  problem: [
    "The company operated Kubernetes workloads across Amazon EKS and Linode LKE and needed to assess them against the CIS Kubernetes Benchmark. A simple checklist could not distinguish managed control plane settings from configuration the customer could inspect or change.",
    "The assessment needed defensible responsibility statements, evidence for observable controls, and clear findings for workloads, access, networking, and nodes. Its purpose was to document posture and remediation needs, not to claim certification or compliance.",
  ],
  solution: [
    {
      title: "Shared-Responsibility Mapping",
      body: "We mapped managed control plane controls to the relevant provider responsibility and documented why some settings could not be configured directly by the customer.",
    },
    {
      title: "Workload Configuration Review",
      body: "We reviewed customer-managed workload configuration against the benchmark areas that could be evaluated from deployed Kubernetes resources.",
    },
    {
      title: "RBAC and Access Review",
      body: "We examined role-based access configuration and related access paths to identify where permissions and administrative boundaries required attention.",
    },
    {
      title: "Network and Node Review",
      body: "Network policy and node configuration were assessed separately from managed control plane responsibilities so the findings remained actionable for the operating team.",
    },
    {
      title: "kube-bench Evidence",
      body: "Where the environment exposed a testable surface, kube-bench output supported the technical evidence. Automated observations were paired with manual context rather than treated as a complete assessment on their own.",
    },
    {
      title: "Documented Findings",
      body: "Each control received a responsibility position, available evidence, and an assessment note so stakeholders could understand what was managed by the provider and what required customer action.",
    },
  ],
  solutionHeading: "How We Assessed the Environment",
  results: [
    "The organization received a control-by-control assessment spanning both managed Kubernetes providers.",
    "Managed control plane responsibilities were separated from customer-managed workload, access, network, and node responsibilities.",
    "kube-bench results and manual review notes were organized as evidence for follow-up and remediation planning, without making a certification or pass claim.",
  ],
  resultHeading: "What the Assessment Delivered",
  stack: [
    "CIS Kubernetes Benchmark",
    "Amazon EKS",
    "Linode LKE",
    "Kubernetes RBAC",
    "NetworkPolicy",
    "kube-bench",
  ],
  crossLinks: [
    { name: "Kubernetes and EKS", href: "/kubernetes" },
    { name: "Security and Compliance", href: "/security-and-compliance" },
    { name: "SOC 2 Compliance", href: "/soc-2-compliance" },
  ],
};

export default function Page() {
  return <CaseStudyArticle data={data} />;
}
