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
        { name: "AWS Cloud Infrastructure", link: "/cloud-service" },
        { name: "Cloud Architecture Advisory", link: "/consulting-and-advisory" },
        { name: "Security and Compliance", link: "/security-and-compliance" },
        { name: "HIPAA Compliance", link: "/hipaa-compliance" },
        { name: "SOC 2 Compliance", link: "/soc-2-compliance" },
        { name: "PCI DSS Compliance", link: "/pci-dss-compliance" },
        { name: "Cloud Migration", link: "/cloud-migration" },
        { name: "FinOps", link: "/finops" },
        { name: "DevOps and CI/CD", link: "/devops" },
        { name: "Kubernetes and Amazon EKS", link: "/kubernetes" },
        { name: "UI and UX Design", link: "/ui-ux" },
        { name: "Web Application Development", link: "/web-solutions" },
        { name: "Mobile App Development", link: "/mobile-app" },
        { name: "AI Automation and GenAI", link: "/ai" },
      ],
    },
    {
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
        { name: "Professional Services", link: "/powering-business" },
        { name: "Financial Services", link: "/financial-services" },
        { name: "Real Estate", link: "/real-estate" },
        { name: "Private Equity and VC Firms", link: "/pe-vc" },
      ],
    },
    {
      name: "Case Studies",
      groups: [
        {
          heading: "Overview",
          items: [
            {
              name: "View All Case Studies",
              link: "/case-studies",
            },
          ],
        },
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
              name: "Healthcare EKS Migration (GoAgalia)",
              link: "/goagalia-healthcare-workforce-management",
            },
            {
              name: "CIS Kubernetes Benchmark Assessment",
              link: "/cis-kubernetes-benchmark-assessment-case-study",
            },
          ],
        },
        {
          heading: "AWS",
          items: [
            {
              name: "Multi-Brand AWS Fargate Modernization",
              link: "/multi-brand-aws-fargate-modernization-case-study",
            },
            {
              name: "EKS Microservices with GitOps",
              link: "/eks-gitops-microservices-case-study",
            },
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
    {
      name: "Resources",
      groups: [
        {
          heading: "Guides",
          items: [
            { name: "What Is Amazon EKS?", link: "/what-is-amazon-eks" },
            { name: "What Is GitOps?", link: "/what-is-gitops" },
            { name: "What Is FinOps?", link: "/what-is-finops" },
            { name: "What Is Infrastructure as Code?", link: "/what-is-infrastructure-as-code" },
            { name: "AWS Well-Architected Review", link: "/what-is-a-well-architected-review" },
            { name: "Platform Engineering vs DevOps", link: "/platform-engineering-vs-devops" },
            { name: "What Is a Kubernetes Consultant?", link: "/what-is-a-kubernetes-consultant" },
            { name: "What Does a DevOps Consultant Do?", link: "/what-does-a-devops-consultant-do" },
          ],
        },
        {
          heading: "Compare",
          items: [
            { name: "EKS vs ECS vs Fargate", link: "/eks-vs-ecs-vs-fargate" },
            { name: "EKS vs GKE vs AKS", link: "/eks-vs-gke-vs-aks" },
            { name: "ECS vs Kubernetes", link: "/ecs-vs-kubernetes" },
            { name: "Fargate vs EC2", link: "/fargate-vs-ec2" },
            { name: "Terraform vs CloudFormation", link: "/terraform-vs-cloudformation" },
            { name: "Terraform vs Pulumi", link: "/terraform-vs-pulumi" },
            { name: "ArgoCD vs Flux", link: "/argocd-vs-flux" },
            { name: "GitHub Actions vs Jenkins vs GitLab CI", link: "/github-actions-vs-jenkins-vs-gitlab-ci" },
            { name: "Prometheus vs Datadog", link: "/prometheus-vs-datadog" },
          ],
        },
        {
          heading: "Pricing",
          items: [
            { name: "DevOps Consulting Cost", link: "/devops-consulting-cost" },
            { name: "Kubernetes Consulting Cost", link: "/kubernetes-consulting-cost" },
            { name: "Cloud Migration Cost", link: "/cloud-migration-cost" },
            { name: "SOC 2 Compliance Cost", link: "/soc-2-cost" },
            { name: "Engagement Models", link: "/engagement-models" },
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
