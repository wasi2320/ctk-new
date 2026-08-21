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
        title="SOC 2 Readiness and Technical Controls on AWS"
        description="CodetoKloud helps teams assess AWS control gaps, implement access, logging, change, monitoring, and recovery controls, and organize technical evidence for an independent SOC 2 auditor."
        imageSrc="/services/service-visuals/soc2-aws-controls.svg"
        imageAlt="SOC 2 technical controls on AWS showing identity, versioned infrastructure changes, Multi-AZ recovery, logging, monitoring, and evidence review by an independent auditor"
        buttonText="Book a SOC 2 readiness review"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-5">
        <TrustBadge />
      </div>

      {/* Answer capsule */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What does SOC 2 readiness on AWS include?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            SOC 2 readiness connects the Trust Services Criteria selected for
            your program to controls your team can operate and demonstrate.
            CodetoKloud reviews the AWS environment, closes agreed technical
            gaps, and documents evidence for identity, change management,
            logging, availability, encryption, and incident response.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-4">
            Only an independent CPA firm can issue a SOC 2 report. Your
            organization remains responsible for policies and operating the
            controls. CodetoKloud supports the AWS infrastructure and technical
            evidence within the agreed scope.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            SOC 2 Controls We Implement on AWS
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Mapped to the Trust Services Criteria your auditor evaluates.
          </p>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-10 md:py-12 px-4 md:px-36 bg-[#0d1526] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Review your SOC 2 technical scope
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Share your audit window and current AWS concerns. We will confirm
            fit within one business day and use a focused 30-minute review to
            identify three practical technical priorities.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#0d1526] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book a SOC 2 readiness review
          </Link>
        </div>
      </section>

      {/* Related case study */}
      <section className="px-4 py-8 md:px-36 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            SOC 2 proof from a related engagement
          </h2>
          <Link
            href="/soc-2-healthcare-aws-case-study"
            className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:border-[#16212e] hover:shadow-sm transition-all md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                SOC 2 Multi-AZ Healthcare Platform on AWS
              </h3>
              <p className="mt-1 text-gray-600">
                Passed audit with 99.99% uptime.
              </p>
            </div>
            <span className="shrink-0 text-sm font-semibold text-[#16212e]">
              Read case study →
            </span>
          </Link>
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
