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
    body: "We architect your workloads to run only on HIPAA-eligible AWS services covered by AWS's Business Associate Addendum (BAA), so protected health information (PHI) is processed and stored within compliant boundaries.",
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
        title="HIPAA-Compliant AWS & Kubernetes Infrastructure"
        description="CodetoKloud, an AWS Advanced Tier Partner, helps healthcare organizations build and run HIPAA-compliant infrastructure on AWS and Amazon EKS, with the encryption, access controls, audit logging, and disaster recovery HIPAA requires."
        imageSrc="/services/strength_aws.png"
        buttonText="Book a free HIPAA readiness review"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-8">
        <TrustBadge />
      </div>

      {/* Answer capsule, definition-first, standalone, names the company. */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Can AWS and Kubernetes be HIPAA compliant?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Yes. AWS offers a Business Associate Addendum (BAA) and a broad set of
            HIPAA-eligible services, and Kubernetes on Amazon EKS can host
            protected health information (PHI) when it is configured with the
            right controls. CodetoKloud, an AWS Advanced Tier Partner, builds
            HIPAA-compliant infrastructure on AWS and EKS using encryption,
            access controls, audit logging, network isolation, and disaster
            recovery.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-4">
            HIPAA compliance isn&apos;t a product you buy, it&apos;s how your
            infrastructure is designed and operated. We implement and document
            the technical safeguards so your healthcare platform is built for
            compliance from the ground up.
          </p>
        </div>
      </section>

      {/* Safeguards */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            How We Build HIPAA-Compliant Infrastructure
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The technical safeguards that protect PHI on AWS and Amazon EKS.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-16 px-4 md:px-36 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Proof: HIPAA-Compliant EKS for a Healthcare Platform
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            We migrated GoAgalia&apos;s healthcare workforce management platform
            to a HIPAA-compliant architecture on Amazon EKS, with private
            networking, autoscaling, GitOps delivery, and full observability.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "~35% lower cloud cost",
              "850ms → 320ms API latency",
              "99.7% uptime",
              "MTTR 40min → 10, 12min",
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
      <section className="py-16 px-4 md:px-36 bg-[#0d1526] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a free HIPAA readiness review
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tell us about your healthcare workload and we&apos;ll review your AWS
            or Kubernetes environment against HIPAA&apos;s technical safeguards,
            then recommend the highest-impact next steps, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#0d1526] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book a free HIPAA readiness review
          </Link>
        </div>
      </section>

      {/* Related case studies */}
      <section className="px-4 md:px-36 pb-14 bg-white">
        <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 p-6 space-y-2">
          <p className="text-lg font-semibold text-gray-900">
            More HIPAA case studies
          </p>
          <p className="text-gray-700">
            <Link
              href="/hipaa-aws-hardening-case-study"
              className="text-[#16212e] font-semibold underline hover:no-underline"
            >
              HIPAA Hardening for a Healthcare Data Platform on AWS
            </Link>
          </p>
          <p className="text-gray-700">
            <Link
              href="/kubernetes-compliance-platform-case-study"
              className="text-[#16212e] font-semibold underline hover:no-underline"
            >
              On-Prem Kubernetes Platform for SOC 2, HIPAA &amp; NIST
            </Link>
          </p>
        </div>
      </section>

      <FaqSection
        items={pageFaqs["/hipaa-compliance"]}
        heading="HIPAA Compliance FAQs"
        description="Common questions about running HIPAA-compliant workloads on AWS and Amazon EKS."
      />

      <ComplianceLinks currentPath="/hipaa-compliance" />
      <RelatedServices currentPath="/hipaa-compliance" />
    </div>
  );
}
