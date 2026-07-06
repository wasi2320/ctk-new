export interface HeaderNavLink {
  name: string;
  link: string;
}

/** A titled group of links inside a mega-menu dropdown. */
export interface HeaderNavGroup {
  heading: string;
  items: HeaderNavLink[];
}

export type HeaderNavItem =
  | { name: string; link: string }
  | { name: string; link: HeaderNavLink[] }
  | { name: string; groups: HeaderNavGroup[] };

export interface HeaderData {
  navItems: HeaderNavItem[];
  search: string;
}

export const HEADER: HeaderData = {
  navItems: [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: [
        { name: "Public Cloud services", link: "/cloud-service" },
        { name: "Consulting and Advisory", link: "/consulting-and-advisory" },
        { name: "Security & Compliance", link: "/security-and-compliance" },
        { name: "HIPAA Compliance", link: "/hipaa-compliance" },
        { name: "SOC 2 Compliance", link: "/soc-2-compliance" },
        { name: "PCI DSS Compliance", link: "/pci-dss-compliance" },
        { name: "Cloud Migration", link: "/cloud-migration" },
        { name: "FinOps", link: "/finops" },
        { name: "DevOps Implementation", link: "/devops" },
        { name: "Kubernetes & EKS", link: "/kubernetes" },
        { name: "UI/UX Designs and animation", link: "/ui-ux" },
        { name: "Web Solutions", link: "/web-solutions" },
        { name: "Mobile Development", link: "/mobile-app" },
        { name: "AI & GenAI", link: "/ai" },
      ],
    },
    {
      // TODO: Add back the industries
      name: "Industries",
      link: [
        { name: "Nonprofits", link: "/non-profits" },
        {
          name: "Small and Mid-Sized Business",
          link: "/small-and-mid-size-business",
        },
        { name: "SaaS and ISV", link: "/saas-isv" },
        { name: "Healthcare", link: "/healthcare" },
        { name: "E-commerce", link: "/e-commerce" },
        { name: "Manufacturing", link: "/manufacturing" },
        { name: "EdTech", link: "/ed-tech" },
        { name: "FinTech", link: "/fin-tech" },
        { name: "Powering Business", link: "/powering-business" },
        { name: "Financial Services", link: "/financial-services" },
        { name: "Real Estate", link: "/real-estate" },
        { name: "Private Equity and VC Firms", link: "/pe-vc" },
      ],
    },
    {
      name: "Case Studies",
      groups: [
        {
          heading: "Compliance",
          items: [
            {
              name: "SOC 2 Multi-AZ Healthcare",
              link: "/soc-2-healthcare-aws-case-study",
            },
            {
              name: "On-Prem Kubernetes Compliance",
              link: "/kubernetes-compliance-platform-case-study",
            },
            {
              name: "HIPAA Hardening on AWS",
              link: "/hipaa-aws-hardening-case-study",
            },
            {
              name: "PCI DSS Enterprise Foundation",
              link: "/pci-dss-enterprise-case-study",
            },
            {
              name: "HIPAA-Compliant EKS (GoAgalia)",
              link: "/goagalia-healthcare-workforce-management",
            },
          ],
        },
        {
          heading: "AWS",
          items: [
            { name: "CI/CD with ArgoCD & Helm on EKS", link: "/helm-pipeline" },
            {
              name: "Automated ECS with PR Previews",
              link: "/ecs-pr-preview-environments",
            },
            {
              name: "Scalable VoIP & AI Call Protection",
              link: "/aws-scalable-secure",
            },
            { name: "Scalable & Secure AWS Setup", link: "/scalable-secure-aws" },
            {
              name: "Zero-Downtime Automated Deployment",
              link: "/automated_deployment",
            },
            {
              name: "AWS Monolithic App Architecture",
              link: "/monolithic-structure",
            },
            {
              name: "Secure Deployment on AWS ECS",
              link: "/security-and-deployment",
            },
            { name: "Strengthening AWS Security", link: "/strengthening-aws" },
          ],
        },
        {
          heading: "Hybrid Cloud",
          items: [
            {
              name: "Hybrid On-Prem + Cloud Kubernetes",
              link: "/hybrid-cloud-kubernetes-case-study",
            },
          ],
        },
      ],
    },
    { name: "Blog", link: "/blogs" },
    { name: "About Us", link: "/aboutus" },
    { name: "Careers", link: "/careers" },
    { name: "FAQ", link: "/faq" },
    { name: "Contact Us", link: "/contact" },
  ],
  search: "/Images/Search.svg",
};
