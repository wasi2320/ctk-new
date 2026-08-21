import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { SITE_URL } from "@/lib/structured-data";

export const metadata = pageMetadata("/case-studies");

const CASE_STUDIES = [
  {
    category: "Compliance",
    title: "SOC 2 Multi-AZ Healthcare Platform on AWS",
    summary:
      "A healthcare platform was rebuilt for automated failover, encrypted data, audit logging, and clearer compliance evidence.",
    outcomes: ["Passed SOC 2 audit", "99.99% uptime"],
    href: "/soc-2-healthcare-aws-case-study",
  },
  {
    category: "Compliance",
    title: "Four-Node RKE2 Platform for Compliance Targets",
    summary:
      "A four-node RKE2 platform combined two control-plane nodes, two GPU workers, GitOps, self-hosted observability, runtime security, and documented operations.",
    outcomes: ["Four-node RKE2 platform", "Two dedicated GPU workers"],
    href: "/kubernetes-compliance-platform-case-study",
  },
  {
    category: "Compliance",
    title: "HIPAA Hardening for a Healthcare Data Platform",
    summary:
      "A patient-facing analytics portal moved from staging to a hardened AWS production posture with private networking and managed data services.",
    outcomes: ["Private ECS Fargate", "Aurora PostgreSQL"],
    href: "/hipaa-aws-hardening-case-study",
  },
  {
    category: "Compliance",
    title: "PCI DSS-Aligned Cloud Workstations Foundation",
    summary:
      "Hardened Ubuntu Cloud Workstations, private networking, Shielded VMs, customer-managed encryption keys, Shared VPC design, Terraform modules, and control documentation were prepared to support QSA review.",
    outcomes: [
      "Private Cloud Workstations",
      "Terraform modules and QSA support documentation",
    ],
    href: "/pci-dss-enterprise-case-study",
  },
  {
    category: "Compliance",
    title: "Healthcare Workforce Platform on Amazon EKS",
    summary:
      "GoAgalia moved to a private, autoscaling EKS platform with GitOps, encrypted data services, monitoring, backup, and disaster recovery controls.",
    outcomes: ["About 35% lower infrastructure cost", "API latency reduced from 850 ms to 320 ms"],
    href: "/goagalia-healthcare-workforce-management",
  },
  {
    category: "Compliance",
    title: "CIS Kubernetes Benchmark Assessment",
    summary:
      "A control-by-control assessment covered Amazon EKS and Linode LKE, separating managed service responsibilities from workload, access, network, and node controls.",
    outcomes: ["Amazon EKS and Linode LKE", "Control responsibility mapped"],
    href: "/cis-kubernetes-benchmark-assessment-case-study",
  },
  {
    category: "AWS and DevOps",
    title: "Multi-Brand AWS Fargate Modernization",
    summary:
      "Four brands moved to a consistent Amazon ECS Fargate, Aurora MySQL, and AWS Amplify platform with repeatable delivery and production issue remediation.",
    outcomes: ["Four brands on a consistent platform", "Database issue resolved without downtime"],
    href: "/multi-brand-aws-fargate-modernization-case-study",
  },
  {
    category: "AWS and DevOps",
    title: "EKS Microservices Delivery with GitOps",
    summary:
      "Containerized microservices moved to Amazon EKS with GitHub Actions, Helm, ArgoCD, and external secret delivery across environments.",
    outcomes: ["Secrets kept out of Git", "Controlled production promotion"],
    href: "/eks-gitops-microservices-case-study",
  },
  {
    category: "AWS and DevOps",
    title: "GitOps Delivery with ArgoCD and Helm on EKS",
    summary:
      "GitLab CI builds and tests versioned images while ArgoCD and Helm promote reviewed configuration across EKS environments.",
    outcomes: ["80% less manual effort", "50% faster release cycles"],
    href: "/helm-pipeline",
  },
  {
    category: "AWS and DevOps",
    title: "Amazon ECS Delivery with Pull Request Previews",
    summary:
      "Terraform and GitHub Actions created isolated preview environments for pull requests and automated the path to shared environments.",
    outcomes: ["Deployment time under 40 minutes", "Ephemeral preview environments"],
    href: "/ecs-pr-preview-environments",
  },
  {
    category: "AWS and DevOps",
    title: "VoIP Platform with Call Protection on Kubernetes",
    summary:
      "FusionPBX, a voice verification service, monitoring, logs, and a containerized CRM were operated together on Kubernetes.",
    outcomes: ["50% faster release cycles", "40% faster issue resolution"],
    href: "/aws-scalable-secure",
  },
  {
    category: "AWS and DevOps",
    title: "Secure and Scalable AWS Application Platform",
    summary:
      "A production AWS environment combined private workloads, managed data services, delivery automation, monitoring, and layered security controls.",
    outcomes: ["Private workload architecture", "Centralized observability"],
    href: "/scalable-secure-aws",
  },
  {
    category: "AWS and DevOps",
    title: "Automated Financial Application Delivery on Amazon ECS",
    summary:
      "GitLab CI, Docker, Amazon ECR, and ECS deployment controls replaced manual releases with a repeatable delivery workflow.",
    outcomes: ["Automated deployment", "Controlled rollback path"],
    href: "/automated_deployment",
  },
  {
    category: "AWS and DevOps",
    title: "High Availability for an AWS Monolithic Application",
    summary:
      "CloudFront, an Application Load Balancer, Elastic Beanstalk, and Multi-AZ data services improved the resilience of an existing monolith.",
    outcomes: ["Multi-AZ architecture", "Horizontal application scaling"],
    href: "/monolithic-structure",
  },
  {
    category: "AWS and DevOps",
    title: "Secure Application Deployment on Amazon ECS",
    summary:
      "Container delivery, infrastructure automation, content processing, application security, and operational monitoring were brought into one AWS workflow.",
    outcomes: ["Repeatable ECS delivery", "Integrated security controls"],
    href: "/security-and-deployment",
  },
  {
    category: "AWS and DevOps",
    title: "AWS Security Hardening with DevSecOps",
    summary:
      "Private access, least-privilege IAM, pipeline scanning, managed secrets, GuardDuty, and security logging created defense in depth.",
    outcomes: ["Scanned delivery pipeline", "Layered access controls"],
    href: "/strengthening-aws",
  },
  {
    category: "Hybrid Cloud",
    title: "Hybrid Kubernetes over a WireGuard Mesh",
    summary:
      "On-premises hardware and cloud burst capacity were connected through an encrypted mesh and operated as one Kubernetes platform.",
    outcomes: ["Encrypted inter-site connectivity", "On-prem capacity with cloud burst"],
    href: "/hybrid-cloud-kubernetes-case-study",
  },
] as const;

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/case-studies/#webpage`,
  url: `${SITE_URL}/case-studies`,
  name: "AWS, DevOps, Kubernetes, and Compliance Case Studies",
  description:
    "Production case studies covering AWS architecture, DevOps, Kubernetes, cloud security, compliance controls, FinOps, and hybrid infrastructure.",
  inLanguage: "en-US",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: CASE_STUDIES.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}${study.href}`,
      name: study.title,
    })),
  },
};

function CaseIcon({ category }: { category: string }) {
  if (category === "Compliance") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 19 6v6c0 4.2-3 7-7 9-4-2-7-4.8-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (category === "Hybrid Cloud") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 18h9a4 4 0 0 0 .5-7.97A6 6 0 0 0 5 9.5 3.5 3.5 0 0 0 6 18Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 14h6M12 11v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M4 7.5 12 12l8-4.5M12 12v9" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export default function CaseStudiesPage() {
  const categories = ["Compliance", "AWS and DevOps", "Hybrid Cloud"] as const;

  return (
    <main className="bg-[#f4f7fb] text-[#16212e]">
      <JsonLd data={caseStudySchema} />

      <section className="border-b border-slate-200 bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0972d3]">
            Production client results
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            AWS, DevOps, Kubernetes, and compliance case studies
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            See the constraints clients brought to CodetoKloud, the architecture and engineering decisions behind each engagement, and the outcomes attributed to that specific project.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {categories.map((category) => (
              <a key={category} href={`#${category.toLowerCase().replaceAll(" ", "-")}`} className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:border-[#0972d3] hover:text-[#0972d3]">
                {category}
              </a>
            ))}
            <Link href="/contact" className="rounded-full bg-[#ff9900] px-5 py-3 text-sm font-semibold text-[#16212e] hover:bg-[#e88b00]">
              Book an AWS review
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#16212e] p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#78bdf4]">How to read the results</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">Every metric belongs to the named engagement.</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            Results depend on the starting architecture, workload, scope, and operating constraints. These examples show how a specific problem was addressed, not a company-wide guarantee for every project.
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const studies = CASE_STUDIES.filter((study) => study.category === category);
        const sectionId = category.toLowerCase().replaceAll(" ", "-");

        return (
          <section id={sectionId} key={category} className="scroll-mt-24 px-5 py-12 md:px-10 md:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#0972d3] shadow-sm [&_svg]:h-6 [&_svg]:w-6">
                  <CaseIcon category={category} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0972d3]">Case study group</p>
                  <h2 className="text-3xl font-bold">{category}</h2>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {studies.map((study) => (
                  <article key={study.href} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0972d3]">{study.category}</p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight">{study.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-slate-600">{study.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Attributed outcomes">
                      {study.outcomes.map((outcome) => (
                        <li key={outcome} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <Link href={study.href} className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0972d3] hover:text-[#0b5cad]">
                      Read the case study <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-[#16212e] to-[#0b5cad] px-7 py-14 text-center text-white md:px-14 md:py-20">
          <h2 className="text-3xl font-bold md:text-5xl">Bring us the constraint behind your next project.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Share the cloud, delivery, Kubernetes, cost, security, or compliance problem slowing your team down. We will confirm fit and identify three practical priorities.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#ff9900] px-7 py-4 font-semibold text-[#16212e] hover:bg-[#e88b00]">
            Book a 30-minute AWS review
          </Link>
        </div>
      </section>
    </main>
  );
}
