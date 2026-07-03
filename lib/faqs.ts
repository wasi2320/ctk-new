import type { FaqItem } from "@/lib/structured-data";

/**
 * FAQ content per route. Rendered as a visible on-page FAQ section AND emitted
 * as FAQPage JSON-LD, so the same question/answer text is both human-readable
 * and machine-extractable by AI engines and search crawlers.
 *
 * Copy is provided verbatim by CodetoKloud.
 */
export const pageFaqs: Record<string, FaqItem[]> = {
  "/devops": [
    {
      question: "Do you offer managed DevOps services or one-time projects?",
      answer:
        "We provide both. Whether you need a one-time infrastructure setup, CI/CD implementation, cloud migration, or ongoing DevOps management, we can tailor our engagement to your team's needs.",
    },
    {
      question: "Which cloud platforms do you support?",
      answer:
        "We primarily work with AWS, Google Cloud Platform (GCP), and Microsoft Azure. We help clients design, deploy, migrate, and manage cloud infrastructure across these platforms.",
    },
    {
      question: "Can you migrate our applications to the cloud?",
      answer:
        "Yes. We plan and execute cloud migrations with minimal downtime, including application migration, database migration, infrastructure modernization, and post-migration optimization.",
    },
    {
      question: "Do you build CI/CD pipelines?",
      answer:
        "Yes. We implement automated CI/CD pipelines using tools such as GitHub Actions, GitLab CI, Jenkins, Azure DevOps, Argo CD, and other modern deployment platforms.",
    },
    {
      question: "Can you help reduce our cloud costs?",
      answer:
        "Yes. We perform cloud cost optimization by identifying unused resources, right-sizing infrastructure, improving autoscaling, and recommending architectural improvements to lower monthly cloud spend.",
    },
    {
      question: "Do you work with Kubernetes?",
      answer:
        "Yes. We design, deploy, and manage Kubernetes environments, including Amazon EKS, Google Kubernetes Engine (GKE), Azure Kubernetes Service (AKS), and self-managed Kubernetes clusters.",
    },
    {
      question: "Can you improve our deployment process?",
      answer:
        "Absolutely. We automate deployments, introduce infrastructure as code, implement rollback strategies, and build reliable release pipelines that reduce manual work and deployment risks.",
    },
    {
      question: "Do you support Infrastructure as Code (IaC)?",
      answer:
        "Yes. We use Infrastructure as Code to provision and manage cloud resources with tools like Terraform, CloudFormation, and Kubernetes manifests, making environments consistent and repeatable.",
    },
    {
      question: "Can you monitor our infrastructure 24/7?",
      answer:
        "Yes. We implement monitoring, alerting, and observability solutions using tools such as Prometheus, Grafana, CloudWatch, Datadog, and other platforms based on your environment.",
    },
    {
      question: "Do you work with startups as well as enterprise companies?",
      answer:
        "Yes. We work with startups building their first production infrastructure as well as established organizations looking to modernize, scale, or optimize existing cloud environments.",
    },
  ],

  "/cloud-service": [
    {
      question: "What cloud services does CodetoKloud provide?",
      answer:
        "We offer cloud architecture, infrastructure deployment, cloud migration, Kubernetes, DevOps automation, security hardening, monitoring, disaster recovery, and ongoing cloud management.",
    },
    {
      question: "Can you design a cloud architecture from scratch?",
      answer:
        "Yes. We design scalable, secure, and cost-efficient cloud architectures based on your application requirements and future growth plans.",
    },
    {
      question: "Which cloud provider should I choose?",
      answer:
        "The right provider depends on your application, budget, compliance needs, and existing technology stack. We help clients evaluate AWS, Azure, and Google Cloud to find the best fit.",
    },
    {
      question: "Can you migrate from on-premises servers to the cloud?",
      answer:
        "Yes. We help businesses migrate applications, databases, storage, and workloads from on-premises environments to modern cloud infrastructure with minimal disruption.",
    },
    {
      question: "Can you help optimize cloud performance?",
      answer:
        "Yes. We review infrastructure, networking, storage, compute resources, and application architecture to improve performance, reliability, and scalability.",
    },
    {
      question: "How long does a cloud migration take?",
      answer:
        "Every project is different. Smaller migrations may take days, while larger enterprise migrations can take several weeks depending on infrastructure complexity.",
    },
  ],

  "/security-and-compliance": [
    {
      question: "Can you secure our cloud infrastructure?",
      answer:
        "Yes. We help improve cloud security by implementing identity and access controls, network security, encryption, secrets management, logging, and security best practices.",
    },
    {
      question: "Do you help prepare for compliance requirements?",
      answer:
        "Yes. We help organizations implement cloud infrastructure aligned with common compliance frameworks by improving security controls, audit logging, and operational practices.",
    },
    {
      question: "Can you perform security reviews of our cloud environment?",
      answer:
        "Yes. We review cloud infrastructure to identify security risks, misconfigurations, excessive permissions, exposed services, and opportunities for improvement.",
    },
    {
      question: "How do you protect sensitive data?",
      answer:
        "We recommend encryption at rest and in transit, secure secrets management, least-privilege access controls, and centralized monitoring to help protect sensitive business data.",
    },
    {
      question: "Do you implement backup and disaster recovery solutions?",
      answer:
        "Yes. We design backup strategies and disaster recovery plans to improve business continuity and reduce downtime during unexpected failures.",
    },
  ],

  "/ai": [
    {
      question: "Can you deploy AI applications in the cloud?",
      answer:
        "Yes. We deploy AI applications on scalable cloud infrastructure with secure APIs, containerization, monitoring, and automated deployment pipelines.",
    },
    {
      question: "Do you integrate AI models into existing applications?",
      answer:
        "Yes. We integrate AI capabilities into web applications, mobile apps, APIs, and internal business systems based on your workflow requirements.",
    },
    {
      question: "Can you build AI automation workflows?",
      answer:
        "Yes. We create AI-powered automation workflows that connect business systems, process documents, generate content, analyze data, and automate repetitive tasks.",
    },
    {
      question: "Which AI platforms do you work with?",
      answer:
        "We work with leading AI platforms and APIs depending on project requirements, including cloud-hosted AI services and modern large language model integrations.",
    },
    {
      question: "Can AI be deployed securely?",
      answer:
        "Yes. We help deploy AI systems using secure infrastructure, access controls, API security, monitoring, and scalable cloud architecture.",
    },
  ],

  "/aboutus": [
    {
      question: "What does CodetoKloud do?",
      answer:
        "CodetoKloud provides cloud engineering, DevOps consulting, infrastructure automation, Kubernetes, cloud migrations, AI infrastructure, and managed cloud services for businesses of all sizes.",
    },
    {
      question: "Which industries do you work with?",
      answer:
        "We work with startups, SaaS companies, healthcare organizations, fintech businesses, e-commerce platforms, and other organizations that rely on secure, scalable cloud infrastructure.",
    },
    {
      question: "Do you work with businesses worldwide?",
      answer:
        "Yes. We collaborate remotely with businesses across different regions and time zones, providing cloud engineering and DevOps support for global teams.",
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer:
        "Yes. We offer ongoing infrastructure management, monitoring, maintenance, optimization, and technical support after projects go live.",
    },
    {
      question: "How do I get started with CodetoKloud?",
      answer:
        "Contact us through our website to discuss your project. We'll review your requirements, recommend an approach, and provide a roadmap for implementation.",
    },
  ],
};
