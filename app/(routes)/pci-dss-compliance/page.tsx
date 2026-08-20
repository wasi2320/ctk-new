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
        title="PCI DSS Compliance on AWS"
        description="CodetoKloud, an AWS Advanced Tier Partner, builds PCI DSS-aligned infrastructure on AWS, network segmentation, encryption, access control, logging, and vulnerability management for cardholder data environments."
        imageSrc="/services/awsDeployment2.png"
        buttonText="Book a free PCI DSS review"
        buttonLink="/contact"
      />

      <div className="px-4 md:px-36 -mt-2 mb-8">
        <TrustBadge />
      </div>

      {/* Answer capsule */}
      <section className="py-14 px-4 md:px-36 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Can you build a PCI DSS-compliant environment on AWS?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Yes. PCI DSS (Payment Card Industry Data Security Standard) applies to
            any business that stores, processes, or transmits cardholder data.
            CodetoKloud, an AWS Advanced Tier Partner, designs PCI DSS-aligned
            cardholder data environments on AWS with network segmentation,
            encryption, strict access control, logging, and vulnerability
            management.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-4">
            Formal PCI validation is performed by a Qualified Security Assessor
            (QSA), we build and document the controls that validation depends
            on, and reduce your PCI scope wherever we can.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-16 px-4 md:px-36 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            PCI DSS Controls We Implement on AWS
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The technical controls that protect cardholder data and reduce your
            PCI scope.
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
            Get a free PCI DSS review
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;ll review your AWS environment against PCI DSS controls,
            identify scope-reduction opportunities, and give you a prioritized
            remediation plan, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white text-[#0d1526] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Book a free PCI DSS review
          </Link>
        </div>
      </section>

      {/* Related case study */}
      <section className="px-4 md:px-36 pb-14 bg-white">
        <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 p-6">
          <p className="text-lg text-gray-700">
            See it in practice:{" "}
            <Link
              href="/pci-dss-enterprise-case-study"
              className="text-[#16212e] font-semibold underline hover:no-underline"
            >
              PCI DSS Enterprise Cloud Foundation
            </Link>
            .
          </p>
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
