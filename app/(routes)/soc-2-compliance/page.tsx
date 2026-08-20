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

export const metadata = pageMetadata("/soc-2-compliance");

const controls = [
  {
    title: "Access Controls",
    body: "Least-privilege IAM, role-based access, MFA, and short-lived credentials so only authorized identities reach production systems and data.",
  },
  {
    title: "Audit Logging",
    body: "Centralized, tamper-evident logging with CloudTrail and CloudWatch, so every meaningful action is recorded and available as audit evidence.",
  },
  {
    title: "Change Management (IaC)",
    body: "Infrastructure-as-code with Terraform and Git-based review, giving you versioned, approved, auditable changes, exactly what SOC 2 change management expects.",
  },
  {
    title: "Monitoring & Alerting",
    body: "Continuous monitoring with Prometheus, Grafana, Datadog, and CloudWatch, with alerting on availability and security events mapped to the Trust Services Criteria.",
  },
  {
    title: "Encryption",
    body: "Encryption at rest with AWS KMS and in transit with TLS across databases, storage, and workloads to protect confidential data.",
  },
  {
    title: "Incident Response",
    body: "Documented incident response and disaster recovery processes so security and availability events are detected, contained, and recovered from predictably.",
  },
];

export default function Soc2CompliancePage() {
  return (
    <div>
      <JsonLd data={coreServiceSchemas["/soc-2-compliance"]} />

      <HeroSection
        title="SOC 2 Compliance on AWS"
        description="CodetoKloud, an AWS Advanced Tier Partner, gets your AWS infrastructure audit-ready for SOC 2, implementing the access controls, audit logging, change management, and monitoring the Trust Services Criteria require."
        imageSrc="/services/aws-solution-illustration.png"
        buttonText="Book a free SOC 2 readiness review"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-8">
        <TrustBadge />
      </div>

      {/* Answer capsule */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What is SOC 2, and how do you become compliant?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            SOC 2 is a security framework based on five Trust Services Criteria, security, availability, processing integrity, confidentiality, and
            privacy. A SOC 2 report is issued by an independent auditor after
            evaluating your controls. CodetoKloud, an AWS Advanced Tier Partner,
            builds and operates the AWS infrastructure and controls that a SOC 2
            audit evaluates, so you walk into the audit prepared.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-4">
            We can&apos;t issue your SOC 2 report, only an independent auditor
            can, but we do close the technical gaps and hand your auditor the
            evidence they ask for.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            SOC 2 Controls We Implement on AWS
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Mapped to the Trust Services Criteria your auditor evaluates.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {controls.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#16212e] transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {c.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 px-4 md:px-36 bg-[#0d1526] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a free SOC 2 readiness review
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;ll assess your AWS environment against SOC 2&apos;s technical
            controls and give you a prioritized plan to close the gaps before
            your audit window, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#0d1526] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book a free SOC 2 readiness review
          </Link>
        </div>
      </section>

      {/* Related case study */}
      <section className="px-4 md:px-36 pb-14 bg-white">
        <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 p-6">
          <p className="text-lg text-gray-700">
            See it in practice:{" "}
            <Link
              href="/soc-2-healthcare-aws-case-study"
              className="text-[#16212e] font-semibold underline hover:no-underline"
            >
              SOC 2 Multi-AZ Healthcare Platform on AWS
            </Link>{" "}
            (passed audit, 99.99% uptime).
          </p>
        </div>
      </section>

      <FaqSection
        items={pageFaqs["/soc-2-compliance"]}
        heading="SOC 2 Compliance FAQs"
        description="Common questions about getting SOC 2 audit-ready on AWS."
      />

      <ComplianceLinks currentPath="/soc-2-compliance" />
      <RelatedServices currentPath="/soc-2-compliance" />
    </div>
  );
}
