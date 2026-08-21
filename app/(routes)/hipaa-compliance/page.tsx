import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import TrustBadge from "@/app/components/sections/TrustBadge";
import FaqSection from "@/app/components/sections/FaqSection";
import ComplianceLinks from "@/app/components/sections/ComplianceLinks";
import RelatedServices from "@/app/components/sections/RelatedServices";
import JsonLd from "@/app/components/JsonLd";
import { coreServiceSchemas } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/page-metadata";
import { pageFaqs } from "@/lib/faqs";

export const metadata = pageMetadata("/hipaa-compliance");

/** Technical safeguards, keyworded H3s with extractable, standalone prose. */
const safeguards = [
  {
    title: "HIPAA-Eligible Services & BAA",
    body: "We architect workloads around HIPAA-eligible AWS services covered by the applicable AWS Business Associate Addendum (BAA), with an approved service boundary for protected health information (PHI).",
  },
  {
    title: "Encryption of PHI",
    body: "We encrypt PHI at rest with AWS KMS and in transit with TLS across every layer, databases, storage, container workloads, and backups, so sensitive health data is protected end to end.",
  },
  {
    title: "Access Control (IAM & RBAC)",
    body: "We enforce least-privilege access with AWS IAM, IAM Roles for Service Accounts, and Kubernetes RBAC, plus MFA and short-lived credentials, so only the right people and services can reach PHI.",
  },
  {
    title: "Network Isolation",
    body: "We run workloads in private, isolated VPCs and private Amazon EKS clusters with no public exposure, using security groups, network policies, and private endpoints to keep PHI off the public internet.",
  },
  {
    title: "Audit Logging & Monitoring",
    body: "We enable centralized audit logging (CloudTrail, CloudWatch) and continuous monitoring with Datadog and Prometheus, so every access to PHI is recorded and anomalies are caught early.",
  },
  {
    title: "Backup & Disaster Recovery",
    body: "We design encrypted backups and disaster recovery so PHI stays available and recoverable, a core HIPAA requirement, with tested restore procedures and defined recovery objectives.",
  },
];

export default function HipaaCompliancePage() {
  return (
    <div>
      <JsonLd data={coreServiceSchemas["/hipaa-compliance"]} />

      <HeroSection
        title="AWS and Kubernetes Infrastructure for HIPAA-Regulated Workloads"
        description="CodetoKloud helps healthcare organizations implement and document encryption, access controls, audit logging, private networking, backup, and recovery safeguards on AWS and Amazon EKS."
        imageSrc="/services/service-visuals/hipaa-aws-controls.svg"
        imageAlt="HIPAA-regulated AWS workload with private Amazon EKS, IAM, RBAC, MFA, KMS encryption, audit logging, and backup and recovery controls"
        buttonText="Book a HIPAA readiness review"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-5">
        <TrustBadge />
      </div>

      {/* Answer capsule, definition-first, standalone, names the company. */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Can AWS and Kubernetes support HIPAA-regulated workloads?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Yes. AWS offers a Business Associate Addendum (BAA) and a broad set of
            HIPAA-eligible services, and Kubernetes on Amazon EKS can host
            protected health information (PHI) when it is configured with the
            right controls. CodetoKloud implements encryption, access controls,
            audit logging, network isolation, backup, and recovery safeguards
            on AWS and EKS, then documents the technical environment for your
            internal compliance program and qualified advisors.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-4">
            HIPAA compliance is an organizational responsibility that also
            includes policies, training, vendor management, and legal review.
            CodetoKloud focuses on the cloud and Kubernetes safeguards within
            the technical scope of that program.
          </p>
        </div>
      </section>

      {/* Safeguards */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Technical safeguards for HIPAA-regulated workloads
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            The technical safeguards that protect PHI on AWS and Amazon EKS.
          </p>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safeguards.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#16212e] transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof, the GoAgalia case study. */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Healthcare EKS implementation example
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl">
            We migrated GoAgalia&apos;s healthcare workforce management platform
            to an Amazon EKS architecture designed for its HIPAA program, with
            private networking, autoscaling, GitOps delivery, and centralized
            observability.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "~35% lower cloud cost",
              "850ms → 320ms API latency",
              "99.7% uptime",
              "MTTR from 40+ min to 10-12 min",
            ].map((m) => (
              <span
                key={m}
                className="text-sm font-medium text-[#16212e] bg-[#16212e]/10 rounded-full px-4 py-2"
              >
                {m}
              </span>
            ))}
          </div>
          <Link
            href="/goagalia-healthcare-workforce-management"
            className="inline-block rounded-full border border-[#16212e] text-[#16212e] font-semibold px-6 py-3 hover:bg-[#16212e] hover:text-white transition-colors"
          >
            Read the GoAgalia case study →
          </Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-[#0d1526] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Review the technical scope of your HIPAA program
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Tell us about your healthcare workload. We will review the AWS or
            Kubernetes scope, confirm fit, and identify three technical
            priorities for the first conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#0d1526] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book a HIPAA readiness review
          </Link>
        </div>
      </section>

      {/* Related case studies */}
      <section className="px-4 py-8 md:px-36 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More HIPAA case studies
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/hipaa-aws-hardening-case-study"
              className="group flex min-h-32 flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:border-[#16212e] hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900">
                HIPAA Hardening for a Healthcare Data Platform on AWS
              </h3>
              <span className="mt-4 text-sm font-semibold text-[#16212e]">
                Read case study →
              </span>
            </Link>
            <Link
              href="/kubernetes-compliance-platform-case-study"
              className="group flex min-h-32 flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:border-[#16212e] hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900">
                On-Prem Kubernetes Platform for SOC 2, HIPAA &amp; NIST
              </h3>
              <span className="mt-4 text-sm font-semibold text-[#16212e]">
                Read case study →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection
        items={pageFaqs["/hipaa-compliance"]}
        heading="HIPAA Compliance FAQs"
        description="Common questions about supporting HIPAA-regulated workloads on AWS and Amazon EKS."
      />

      <ComplianceLinks currentPath="/hipaa-compliance" />
      <RelatedServices currentPath="/hipaa-compliance" />
    </div>
  );
}
