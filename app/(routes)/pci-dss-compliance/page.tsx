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

export const metadata = pageMetadata("/pci-dss-compliance");

const controls = [
  {
    title: "Network Segmentation",
    body: "We isolate the cardholder data environment (CDE) from the rest of your infrastructure with dedicated VPCs, subnets, security groups, and firewalls, reducing both risk and PCI scope.",
  },
  {
    title: "Encryption of Cardholder Data",
    body: "We encrypt cardholder data at rest with AWS KMS and in transit with TLS, and manage keys and secrets securely so sensitive payment data is protected everywhere.",
  },
  {
    title: "Access Control & MFA",
    body: "We enforce least-privilege access, multi-factor authentication, and strong credential management so only authorized users and services can reach the CDE.",
  },
  {
    title: "Logging & Monitoring",
    body: "We enable centralized logging with CloudTrail and CloudWatch and continuous monitoring, so access to cardholder data is tracked and security events are caught quickly.",
  },
  {
    title: "Vulnerability Management",
    body: "We add image and dependency scanning, secure configuration baselines, and patching processes so vulnerabilities are found and fixed before they become incidents.",
  },
  {
    title: "Scope Reduction",
    body: "We reduce PCI scope with segmentation and, where appropriate, tokenization or third-party payment processors, so fewer systems fall under PCI DSS, lowering cost and effort.",
  },
];

export default function PciDssCompliancePage() {
  return (
    <div>
      <JsonLd data={coreServiceSchemas["/pci-dss-compliance"]} />

      <HeroSection
        title="PCI DSS Readiness and Cardholder Data Controls on AWS"
        description="CodetoKloud helps teams define PCI scope, segment the cardholder data environment, implement access, encryption, logging, and vulnerability controls, and prepare technical evidence for QSA review."
        imageSrc="/services/service-visuals/pci-dss-aws-controls.svg"
        imageAlt="PCI DSS-aligned AWS payment architecture with WAF, a segmented cardholder data environment, encryption, tokenization, least-privilege access, logging, and vulnerability scanning"
        buttonText="Book a PCI DSS review"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-5">
        <TrustBadge />
      </div>

      {/* Answer capsule */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What does PCI DSS readiness on AWS include?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            PCI DSS applies to organizations that store, process, or transmit
            cardholder data. CodetoKloud maps the in-scope payment flow, designs
            a segmented cardholder data environment on AWS, and implements
            encryption, least-privilege access, logging, scanning, and change
            controls within the agreed technical scope.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-4">
            Formal validation is performed by your Qualified Security Assessor
            or through the applicable self-assessment process. CodetoKloud does
            not certify PCI compliance. We implement and document technical
            controls, then coordinate with your assessor when requested.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-10 md:py-12 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            PCI DSS Controls We Implement on AWS
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            The technical controls that protect cardholder data and reduce your
            PCI scope.
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
            Review your PCI DSS technical scope
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Share your payment flow and current AWS concerns. We will confirm
            fit within one business day and use a focused 30-minute review to
            identify three practical technical priorities.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#0d1526] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book a PCI DSS review
          </Link>
        </div>
      </section>

      {/* Related case study */}
      <section className="px-4 py-8 md:px-36 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PCI DSS implementation example
          </h2>
          <Link
            href="/pci-dss-enterprise-case-study"
            className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:border-[#16212e] hover:shadow-sm transition-all md:flex-row md:items-center md:justify-between"
          >
            <h3 className="text-lg font-bold text-gray-900">
              PCI DSS-Aligned Cloud Workstations Foundation
            </h3>
            <span className="shrink-0 text-sm font-semibold text-[#16212e]">
              Read case study →
            </span>
          </Link>
        </div>
      </section>

      <FaqSection
        items={pageFaqs["/pci-dss-compliance"]}
        heading="PCI DSS Compliance FAQs"
        description="Common questions about building PCI DSS-aligned infrastructure on AWS."
      />

      <ComplianceLinks currentPath="/pci-dss-compliance" />
      <RelatedServices currentPath="/pci-dss-compliance" />
    </div>
  );
}
