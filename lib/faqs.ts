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

  "/kubernetes": [
    {
      question: "What is Kubernetes and why do businesses use it?",
      answer:
        "Kubernetes is an open-source platform that automates the deployment, scaling, and management of containerized applications. Businesses use it to run applications reliably across many servers, scale automatically with demand, recover from failures without downtime, and ship updates safely. CodetoKloud designs and operates production Kubernetes clusters for companies that need this level of scalability and resilience.",
    },
    {
      question: "What is Amazon EKS and when should you use it?",
      answer:
        "Amazon EKS (Elastic Kubernetes Service) is AWS's managed Kubernetes service, which runs the Kubernetes control plane for you so your team focuses on applications instead of cluster infrastructure. It is the right choice when you want Kubernetes on AWS with deep integration into services like IAM, VPC networking, and CloudWatch. As an AWS Advanced Tier Partner, CodetoKloud specializes in EKS cluster design, managed node groups, and day-2 operations.",
    },
    {
      question: "What does CodetoKloud's Kubernetes consulting include?",
      answer:
        "CodetoKloud's Kubernetes consulting covers cluster architecture and setup on Amazon EKS, GitOps delivery with ArgoCD, Helm-based application packaging, horizontal and cluster autoscaling, observability with Prometheus, Grafana, Datadog, and CloudWatch, cost optimization, security hardening, and ongoing managed operations including version upgrades and disaster recovery.",
    },
    {
      question: "EKS vs ECS vs Fargate — which should we use?",
      answer:
        "Amazon EKS is best when you need full Kubernetes portability, a rich ecosystem (Helm, ArgoCD, operators), or already run Kubernetes elsewhere. Amazon ECS is a simpler AWS-native container orchestrator that is faster to adopt for straightforward workloads. AWS Fargate is a serverless compute engine that runs containers for either EKS or ECS without managing servers. CodetoKloud helps teams choose based on portability needs, team skills, and operational overhead — and has delivered both ECS and EKS platforms in production.",
    },
    {
      question: "How do you reduce Kubernetes and EKS costs?",
      answer:
        "CodetoKloud reduces Kubernetes costs by right-sizing pod requests and limits, tuning cluster autoscaling and node groups, using Spot instances and modern autoscalers like Karpenter, consolidating underused workloads, and adding cost visibility. On a healthcare workload migrated to Amazon EKS, this approach cut cloud costs by roughly 35% while improving reliability.",
    },
    {
      question: "How do you secure a Kubernetes cluster?",
      answer:
        "CodetoKloud secures Kubernetes clusters using private networking, least-privilege RBAC and IAM roles for service accounts, network policies, encrypted secrets management, image vulnerability scanning, and continuous monitoring. This DevSecOps approach lets clusters support regulated workloads, including SOC 2, HIPAA, and PCI DSS requirements on AWS.",
    },
    {
      question: "What is GitOps and do you use ArgoCD?",
      answer:
        "GitOps is a delivery model where the desired state of your Kubernetes environment is stored in Git and automatically synced to the cluster, so every change is versioned, reviewable, and auditable. CodetoKloud implements GitOps with ArgoCD and Helm — on one client pipeline this delivered a 95% deployment success rate and reduced manual deployment effort by 80%.",
    },
    {
      question: "Can you migrate our applications to Kubernetes or Amazon EKS?",
      answer:
        "Yes. CodetoKloud plans and executes migrations from virtual machines, on-premises servers, or other container platforms to Kubernetes on Amazon EKS, including containerization, Helm packaging, CI/CD and GitOps setup, and cutover with minimal downtime. A recent EKS migration cut API latency from 850ms to 320ms and reached 99.7% uptime.",
    },
    {
      question: "Can Kubernetes run HIPAA or SOC 2 compliant workloads?",
      answer:
        "Yes. Kubernetes can host compliant workloads when the cluster is configured with the right controls — private networking, encryption, access controls, audit logging, and monitoring. CodetoKloud has built HIPAA-compliant infrastructure on Amazon EKS for healthcare clients and applies the same controls for SOC 2 and PCI DSS environments.",
    },
    {
      question: "Do you provide ongoing Kubernetes management and upgrades?",
      answer:
        "Yes. CodetoKloud offers managed day-2 Kubernetes operations, including cluster and node version upgrades, patching, monitoring and alerting, autoscaling tuning, incident response, and disaster recovery, so your platform stays secure, current, and reliable after the initial build.",
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

  "/hipaa-compliance": [
    {
      question: "Can AWS and Kubernetes be HIPAA compliant?",
      answer:
        "Yes. AWS offers a Business Associate Addendum (BAA) and a broad set of HIPAA-eligible services, and Kubernetes on Amazon EKS can host protected health information (PHI) when configured with the right controls. CodetoKloud builds HIPAA-compliant infrastructure on AWS and EKS using encryption, access controls, audit logging, network isolation, and disaster recovery.",
    },
    {
      question: "What does HIPAA-compliant infrastructure require?",
      answer:
        "HIPAA-compliant infrastructure generally requires encryption of PHI at rest and in transit, strict access controls, audit logging, network isolation, secure backups and disaster recovery, and a signed BAA covering the services in use. CodetoKloud implements and documents each of these technical safeguards on AWS.",
    },
    {
      question: "How does CodetoKloud secure protected health information (PHI) on AWS?",
      answer:
        "CodetoKloud secures PHI using AWS KMS encryption, private networking and isolated VPCs, least-privilege IAM and Kubernetes RBAC, encrypted secrets management, and continuous monitoring with tools like CloudWatch and Datadog. Only HIPAA-eligible AWS services are used for workloads that handle PHI.",
    },
    {
      question: "Has CodetoKloud built HIPAA-compliant systems before?",
      answer:
        "Yes. CodetoKloud migrated GoAgalia's healthcare workforce management platform to a HIPAA-compliant architecture on Amazon EKS with autoscaling, GitOps, and full observability — cutting cloud costs by roughly 35%, reducing API latency from 850ms to 320ms, and reaching 99.7% uptime.",
    },
    {
      question: "How does the BAA work with AWS?",
      answer:
        "AWS provides a Business Associate Addendum (BAA) that covers its HIPAA-eligible services. CodetoKloud architects your environment to use those eligible services correctly so that PHI is only processed and stored within HIPAA-eligible boundaries; specific contractual terms are handled as part of your engagement.",
    },
    {
      question: "Can you help us prepare for a HIPAA assessment?",
      answer:
        "Yes. CodetoKloud implements and documents the technical safeguards a HIPAA assessment looks for — encryption, access control, logging, and disaster recovery. Formal assessments are performed by independent third parties; we prepare your infrastructure and evidence so that process goes smoothly.",
    },
  ],

  "/soc-2-compliance": [
    {
      question: "What is SOC 2?",
      answer:
        "SOC 2 is a security framework based on the Trust Services Criteria — security, availability, processing integrity, confidentiality, and privacy. A SOC 2 report is issued by an independent auditor after evaluating your controls. CodetoKloud builds and operates the AWS infrastructure and controls that a SOC 2 audit evaluates.",
    },
    {
      question: "Can CodetoKloud make us SOC 2 compliant?",
      answer:
        "SOC 2 reports are issued by independent auditors, not vendors. What CodetoKloud does is get you audit-ready: we implement the access controls, audit logging, change management, monitoring, and encryption that SOC 2 requires, and provide the technical evidence auditors ask for.",
    },
    {
      question: "What controls does CodetoKloud implement for SOC 2 on AWS?",
      answer:
        "CodetoKloud implements least-privilege IAM and access controls, centralized audit logging, change management through infrastructure-as-code, encryption at rest and in transit, monitoring and alerting, and incident response processes — mapped to the SOC 2 Trust Services Criteria.",
    },
    {
      question: "How long does SOC 2 readiness take?",
      answer:
        "It depends on the current state of your infrastructure. CodetoKloud starts with a gap assessment, then closes the technical gaps — often the fastest path is standardizing infrastructure-as-code, logging, and access controls before your audit window begins.",
    },
    {
      question: "Do you work with our auditor?",
      answer:
        "Yes. CodetoKloud provides the technical documentation, architecture diagrams, and control evidence your auditor needs, and remediates findings on the infrastructure side so your audit stays on track.",
    },
  ],

  "/pci-dss-compliance": [
    {
      question: "What is PCI DSS?",
      answer:
        "PCI DSS (Payment Card Industry Data Security Standard) is a security standard for organizations that store, process, or transmit cardholder data. CodetoKloud builds PCI DSS-aligned infrastructure on AWS with the segmentation, encryption, access control, and logging the standard requires.",
    },
    {
      question: "Can you build a PCI DSS-compliant environment on AWS?",
      answer:
        "Yes. CodetoKloud designs AWS cardholder data environments (CDE) with network segmentation, encryption in transit and at rest, least-privilege access, logging and monitoring, and vulnerability management. Formal validation is performed by a Qualified Security Assessor (QSA); we build and document the controls that validation depends on.",
    },
    {
      question: "How do you reduce PCI DSS scope?",
      answer:
        "CodetoKloud reduces PCI scope by segmenting the cardholder data environment from the rest of your infrastructure and, where appropriate, recommending tokenization or third-party payment processors so fewer systems fall under PCI DSS requirements — which lowers both risk and cost.",
    },
    {
      question: "What PCI DSS controls does CodetoKloud implement?",
      answer:
        "CodetoKloud implements network segmentation and firewalls, encryption of cardholder data, strict access controls and MFA, centralized logging and monitoring, vulnerability scanning, and secure configuration baselines across the AWS environment.",
    },
    {
      question: "Do you work with e-commerce and fintech businesses?",
      answer:
        "Yes. CodetoKloud works with e-commerce platforms, fintech companies, and SaaS providers that handle payments, building secure, PCI DSS-aligned infrastructure on AWS that scales with the business.",
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
