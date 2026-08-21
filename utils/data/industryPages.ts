import type { IndustryPageContent } from "@/app/components/sections/industry/IndustryPage";

export const industryPages: Record<string, IndustryPageContent> = {
  nonprofits: {
    eyebrow: "Cloud engineering for nonprofits",
    title: "AWS Cloud Consulting for Nonprofits",
    description:
      "Modernize donor, program, and operations systems on AWS while protecting sensitive data and keeping cloud spending understandable to leadership, boards, and funders.",
    primaryCta: "Review our nonprofit AWS priorities",
    visualTitle: "Mission systems with accountable operations",
    visualLabel:
      "A nonprofit cloud priority map connecting mission systems, a governed AWS foundation, and reliable service delivery",
    visualSteps: [
      {
        title: "Mission and donor systems",
        description: "Program delivery, fundraising, payments, reporting, and staff workflows",
      },
      {
        title: "Governed AWS foundation",
        description: "Identity, encryption, backups, deployment controls, budgets, and ownership",
      },
      {
        title: "Reliable service delivery",
        description: "Available applications, traceable changes, useful alerts, and explainable cost",
      },
    ],
    overview: {
      question: "How does CodetoKloud help nonprofits use AWS effectively?",
      answer:
        "CodetoKloud assesses and improves the AWS infrastructure behind donor services, program applications, internal operations, and public digital experiences. The work can include migration planning, infrastructure as code, release automation, security controls, recovery planning, and cost governance, with documentation that a lean internal team can own.",
      bestFit:
        "Nonprofits with important cloud workloads, limited platform capacity, rising AWS cost, or a modernization project that needs senior engineering support.",
      firstConversation:
        "Bring one mission-critical system, reliability concern, security requirement, or AWS bill. We will identify the most useful place to start.",
    },
    problems: [
      {
        title: "Critical services are fragile",
        description:
          "Donation campaigns, enrollment windows, and public programs can create traffic peaks that expose single points of failure or weak recovery plans.",
      },
      {
        title: "Sensitive data lacks clear boundaries",
        description:
          "Donor, beneficiary, volunteer, and payment data may span disconnected tools with inconsistent access, retention, and audit trails.",
      },
      {
        title: "Cloud spending is hard to explain",
        description:
          "Missing tags, owners, budgets, and environment policies make it difficult to connect AWS cost to programs or plan future funding.",
      },
    ],
    capabilities: [
      {
        title: "Reliable AWS foundations",
        description:
          "Build practical networking, identity, backup, monitoring, and recovery patterns around the systems that support your mission.",
        href: "/cloud-service",
        label: "Explore cloud infrastructure",
      },
      {
        title: "Low-risk cloud migration",
        description:
          "Inventory dependencies, choose an appropriate migration path, and move workloads in phases with rollback and validation plans.",
        href: "/cloud-migration",
        label: "Explore cloud migration",
      },
      {
        title: "Security control implementation",
        description:
          "Improve access control, encryption, logging, vulnerability management, and evidence collection around sensitive systems.",
        href: "/security-and-compliance",
        label: "Explore security services",
      },
      {
        title: "AWS cost governance",
        description:
          "Introduce allocation tags, budgets, utilization reviews, and savings options without compromising service reliability.",
        href: "/finops",
        label: "Explore FinOps",
      },
    ],
    caveat: {
      title: "Compliance depends on your data and programs",
      description:
        "Payment card, health, education, grant, and privacy obligations vary by program, geography, contracts, and the people you serve. CodetoKloud implements and documents technical safeguards, but legal counsel, leadership, and qualified assessors determine applicable requirements and attest compliance.",
    },
    engagement: [
      {
        title: "Map the mission-critical path",
        description:
          "Identify key systems, data flows, owners, deadlines, existing controls, and the operational impact of downtime.",
      },
      {
        title: "Prioritize a realistic plan",
        description:
          "Separate immediate risk reduction from longer modernization work, with scope and tradeoffs your stakeholders can understand.",
      },
      {
        title: "Implement and transfer ownership",
        description:
          "Deliver the selected changes in phases, validate them in production, and leave your team with documentation and runbooks.",
      },
    ],
    related: [
      {
        title: "Cloud Infrastructure Services",
        description:
          "See how we design and improve secure, observable, and maintainable AWS environments.",
        href: "/cloud-service",
        label: "Service",
      },
      {
        title: "FinOps and AWS Cost Optimization",
        description:
          "Learn how allocation, utilization, commitments, and governance can make cloud spending more predictable.",
        href: "/finops",
        label: "Service",
      },
      {
        title: "Scalable and Secure AWS Setup",
        description:
          "Review an implementation example combining private networking, Kubernetes, delivery automation, and monitoring.",
        href: "/scalable-secure-aws",
        label: "Implementation example",
      },
    ],
  },

  smb: {
    eyebrow: "Cloud engineering for growing businesses",
    title: "AWS Cloud Consulting for Small and Mid Size Businesses",
    description:
      "Replace fragile infrastructure and manual releases with a practical AWS platform that supports growth, protects customer data, and keeps operating costs visible.",
    primaryCta: "Plan my next AWS step",
    visualTitle: "A maintainable path from growth to scale",
    visualLabel:
      "A small and mid size business cloud priority map connecting customer systems, a right-sized AWS platform, and predictable operations",
    visualSteps: [
      {
        title: "Customer and business systems",
        description: "Web applications, internal tools, integrations, databases, and reporting",
      },
      {
        title: "Right-sized AWS platform",
        description: "Infrastructure as code, automated delivery, security, monitoring, and backups",
      },
      {
        title: "Predictable operations",
        description: "Fewer manual steps, clearer ownership, controlled spend, and a path to scale",
      },
    ],
    overview: {
      question: "What AWS support does a growing business actually need?",
      answer:
        "Most growing businesses need a dependable cloud foundation, a repeatable way to release software, useful monitoring, tested recovery, and enough cost governance to avoid surprises. CodetoKloud scopes those capabilities around the current team and product, without introducing a larger platform than the business can maintain.",
      bestFit:
        "Businesses outgrowing a first cloud setup, preparing to launch or migrate a product, or relying on a small engineering team for production operations.",
      firstConversation:
        "We review your most important application, current delivery process, reliability concerns, and AWS cost, then identify three priorities.",
    },
    problems: [
      {
        title: "Growth exposes single points of failure",
        description:
          "A production environment that worked for early demand may depend on one instance, one engineer, or a recovery process that has never been tested.",
      },
      {
        title: "Releases rely on manual knowledge",
        description:
          "Hand-built deployments and configuration drift slow delivery and make routine changes more stressful than they need to be.",
      },
      {
        title: "AWS cost grows without ownership",
        description:
          "Unused resources, oversized services, and unclear environment policies create waste while decision makers lack a reliable cost view.",
      },
    ],
    capabilities: [
      {
        title: "Practical AWS architecture",
        description:
          "Choose managed services, resilience patterns, and operational controls that match the workload, budget, and internal skills.",
        href: "/cloud-service",
        label: "Explore cloud infrastructure",
      },
      {
        title: "Migration with business continuity",
        description:
          "Plan dependencies, data movement, testing, cutover, and rollback around real operating constraints.",
        href: "/cloud-migration",
        label: "Explore cloud migration",
      },
      {
        title: "Automated software delivery",
        description:
          "Use CI/CD and infrastructure as code to make application and environment changes repeatable and reviewable.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Cost visibility and optimization",
        description:
          "Connect spend to environments and owners, remove waste, and select commitments only after usage is understood.",
        href: "/finops",
        label: "Explore FinOps",
      },
    ],
    caveat: {
      title: "The right control set depends on your business",
      description:
        "Security and compliance obligations depend on the data you handle, your customers, industry, contracts, and operating regions. We can engineer and document relevant technical controls, but certification and legal determinations remain with your organization and its qualified advisors.",
    },
    engagement: [
      {
        title: "Assess the current bottleneck",
        description:
          "Review architecture, delivery, recovery, security, and cost around the application that matters most.",
      },
      {
        title: "Choose the smallest useful change",
        description:
          "Define a sequenced roadmap that protects business continuity and fits your team, budget, and deadline.",
      },
      {
        title: "Build with your team",
        description:
          "Implement, test, document, and hand over the platform so daily operations do not depend on an outside vendor.",
      },
    ],
    related: [
      {
        title: "AWS Cloud Migration",
        description:
          "See how we plan discovery, landing zones, data movement, cutover, rollback, and post-migration validation.",
        href: "/cloud-migration",
        label: "Service",
      },
      {
        title: "Scalable AWS Architecture for a Monolithic Application",
        description:
          "Review a reference implementation using managed AWS services for deployment, data, security, monitoring, and backup.",
        href: "/monolithic-structure",
        label: "Implementation example",
      },
      {
        title: "DevOps Services",
        description:
          "Learn how CI/CD, infrastructure as code, observability, and release controls reduce manual operations.",
        href: "/devops",
        label: "Service",
      },
    ],
  },

  saas: {
    eyebrow: "Platform engineering for SaaS and ISVs",
    title: "AWS DevOps and Kubernetes Consulting for SaaS and ISVs",
    description:
      "Build a SaaS platform that can release safely, isolate tenant workloads, explain cloud cost, and scale without turning product engineers into full-time infrastructure operators.",
    primaryCta: "Review my SaaS platform",
    visualTitle: "A product delivery platform built for repeatability",
    visualLabel:
      "A SaaS platform priority map connecting product code, automated delivery, and reliable multi-tenant operations",
    visualSteps: [
      {
        title: "Product and platform code",
        description: "Application services, infrastructure definitions, policies, and deployment configuration",
      },
      {
        title: "Automated delivery",
        description: "CI checks, artifact security, GitOps, environment promotion, and rollback",
      },
      {
        title: "Tenant-aware operations",
        description: "Isolation, observability, scaling, recovery, and cost allocation by product context",
      },
    ],
    overview: {
      question: "How does CodetoKloud improve AWS platforms for SaaS products?",
      answer:
        "CodetoKloud designs and improves the platform layer between a SaaS product and AWS. That can include Amazon EKS or ECS, CI/CD, GitOps, infrastructure as code, tenant-aware observability, security controls, recovery, and FinOps. The goal is a supported delivery path that product teams can use without bypassing operational guardrails.",
      bestFit:
        "SaaS and ISV teams with a growing product, slow or risky releases, Kubernetes complexity, enterprise security requirements, or rising infrastructure cost.",
      firstConversation:
        "We trace one release from commit to production and review the platform risks affecting roadmap speed, reliability, and enterprise readiness.",
    },
    problems: [
      {
        title: "Delivery speed has plateaued",
        description:
          "Pipelines are slow or inconsistent, environments drift, and releases depend on platform specialists to diagnose routine failures.",
      },
      {
        title: "Tenant and service boundaries are unclear",
        description:
          "Rapid product growth can leave identity, network, data, and workload isolation decisions implicit or difficult to verify.",
      },
      {
        title: "Reliability and cost lack product context",
        description:
          "Teams see infrastructure metrics and AWS charges, but cannot connect them to tenants, services, releases, or customer experience.",
      },
    ],
    capabilities: [
      {
        title: "Amazon EKS and Kubernetes platforms",
        description:
          "Build cluster, workload, policy, ingress, secrets, autoscaling, and observability patterns that product teams can use consistently.",
        href: "/kubernetes",
        label: "Explore Kubernetes consulting",
      },
      {
        title: "CI/CD and GitOps",
        description:
          "Create a traceable route from commit to production with automated checks, controlled promotion, and practical rollback.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Enterprise security readiness",
        description:
          "Implement access, logging, encryption, vulnerability, change, and evidence controls around the production platform.",
        href: "/security-and-compliance",
        label: "Explore security services",
      },
      {
        title: "SaaS cloud economics",
        description:
          "Allocate cost by service or environment, find inefficient usage, and evaluate architecture changes against product value.",
        href: "/finops",
        label: "Explore FinOps",
      },
    ],
    caveat: {
      title: "Technical readiness is not a certification",
      description:
        "SOC 2, ISO 27001, HIPAA, PCI DSS, and customer security requirements depend on product scope, data flows, policies, people, and independent review. We implement and document technical controls that support your program. Your organization and its auditor or assessor determine scope and issue any attestation or certification.",
    },
    engagement: [
      {
        title: "Trace the platform path",
        description:
          "Review architecture, tenant boundaries, delivery, production access, observability, recovery, and cost allocation.",
      },
      {
        title: "Create a platform backlog",
        description:
          "Prioritize work by customer impact, delivery friction, operational risk, and the product roadmap.",
      },
      {
        title: "Ship incremental improvements",
        description:
          "Implement the highest-value platform changes with product teams, test adoption, and document the supported path.",
      },
    ],
    related: [
      {
        title: "CI/CD with Argo CD and Helm on Amazon EKS",
        description:
          "See a GitOps delivery example connecting source control, images, Helm releases, and EKS environments.",
        href: "/helm-pipeline",
        label: "Case study",
      },
      {
        title: "Automated ECS PR Preview Environments",
        description:
          "See how isolated preview environments can give product teams earlier feedback before production.",
        href: "/ecs-pr-preview-environments",
        label: "Case study",
      },
      {
        title: "Four-Brand AWS Modernization",
        description:
          "See how four application brands moved to a consistent ECS Fargate platform with Aurora Multi-AZ, automated delivery, and phased cutovers.",
        href: "/multi-brand-aws-fargate-modernization-case-study",
        label: "Case study",
      },
    ],
  },

  healthcare: {
    eyebrow: "Cloud engineering for healthcare and HealthTech",
    title: "AWS Cloud and DevOps Consulting for Healthcare",
    description:
      "Design reliable healthcare platforms on AWS with clear data boundaries, controlled delivery, recovery planning, and technical safeguards that support your HIPAA program.",
    primaryCta: "Review my healthcare AWS platform",
    visualTitle: "Protected health workflows with operational evidence",
    visualLabel:
      "A healthcare cloud priority map connecting care applications, protected AWS services, and reliable evidence-ready operations",
    visualSteps: [
      {
        title: "Care and workforce applications",
        description: "Patient, provider, scheduling, data exchange, analytics, and operational workflows",
      },
      {
        title: "Protected AWS services",
        description: "Private access, encryption, identity, logging, backups, and controlled deployment",
      },
      {
        title: "Resilient operations",
        description: "Availability, recovery tests, alerting, change history, and usable evidence",
      },
    ],
    overview: {
      question: "What does healthcare cloud engineering on AWS include?",
      answer:
        "Healthcare cloud engineering connects architecture, delivery, security, resilience, and evidence. CodetoKloud helps healthcare and HealthTech teams map protected health information flows, establish AWS account and network boundaries, automate controlled releases, improve recovery, and document technical safeguards for internal risk and compliance teams.",
      bestFit:
        "Healthcare software, workforce, analytics, interoperability, and patient service teams preparing to scale, modernize, recover reliably, or strengthen technical safeguards.",
      firstConversation:
        "We start with one workflow involving sensitive health data, its AWS boundary, availability target, change process, and current control gaps.",
    },
    problems: [
      {
        title: "Protected data crosses unclear boundaries",
        description:
          "Applications, integrations, analytics, and support workflows can expand access to health data without a current, testable data flow model.",
      },
      {
        title: "Recovery assumptions are untested",
        description:
          "Backups may exist while failover, restore time, dependency recovery, and staff responsibilities remain uncertain.",
      },
      {
        title: "Delivery and evidence are disconnected",
        description:
          "Teams ship changes, manage access, and respond to alerts, but producing a clear record for risk reviews requires manual reconstruction.",
      },
    ],
    capabilities: [
      {
        title: "HIPAA-aligned AWS safeguards",
        description:
          "Implement identity, encryption, network segmentation, logging, backup, and monitoring controls around in-scope systems.",
        href: "/hipaa-compliance",
        label: "Explore HIPAA support",
      },
      {
        title: "Resilient healthcare architecture",
        description:
          "Design availability and recovery around workflow criticality, dependencies, recovery objectives, and tested operating procedures.",
        href: "/cloud-service",
        label: "Explore cloud infrastructure",
      },
      {
        title: "Controlled DevOps delivery",
        description:
          "Add review, testing, artifact, approval, deployment, and rollback controls without making every release a manual event.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Healthcare cloud migration",
        description:
          "Plan data movement, cutover, validation, rollback, and operating ownership for sensitive workloads moving to AWS.",
        href: "/cloud-migration",
        label: "Explore cloud migration",
      },
    ],
    caveat: {
      title: "Technical safeguards support HIPAA compliance",
      description:
        "No infrastructure configuration alone makes an organization HIPAA compliant. Compliance also depends on risk analysis, policies, training, vendor management, Business Associate Agreements, breach processes, and the organization operating the controls. CodetoKloud implements and documents technical safeguards within an agreed scope. Your organization and qualified legal or compliance advisors determine compliance.",
    },
    engagement: [
      {
        title: "Define the sensitive workflow",
        description:
          "Map data, identities, integrations, environments, availability needs, current controls, and responsible owners.",
      },
      {
        title: "Prioritize risk and reliability",
        description:
          "Create a plan that separates immediate exposure, recovery gaps, and evidence needs from longer modernization work.",
      },
      {
        title: "Implement, test, and document",
        description:
          "Deliver safeguards and platform improvements, validate recovery and alerts, and produce maintainable operating evidence.",
      },
    ],
    related: [
      {
        title: "GoAgalia Healthcare Workforce Platform",
        description:
          "See an AWS and Amazon EKS platform built for a healthcare workforce management product.",
        href: "/goagalia-healthcare-workforce-management",
        label: "Case study",
      },
      {
        title: "HIPAA Hardening for a Healthcare Data Platform",
        description:
          "Review an implementation focused on private networking, encryption, managed data services, and production milestones.",
        href: "/hipaa-aws-hardening-case-study",
        label: "Case study",
      },
      {
        title: "SOC 2 Multi-AZ Healthcare Platform on AWS",
        description:
          "See a healthcare platform rebuild focused on failover, segmentation, audit trails, and containerized services.",
        href: "/soc-2-healthcare-aws-case-study",
        label: "Case study",
      },
    ],
  },

  ecommerce: {
    eyebrow: "Cloud engineering for digital commerce",
    title: "AWS Cloud and DevOps Consulting for E-commerce",
    description:
      "Keep storefront, checkout, inventory, and fulfillment workflows responsive through demand spikes with AWS architecture, delivery automation, security, observability, and cost controls.",
    primaryCta: "Prepare my platform for peak demand",
    visualTitle: "A commerce path designed for busy moments",
    visualLabel:
      "An e-commerce cloud priority map connecting the customer journey, resilient AWS services, and order operations",
    visualSteps: [
      {
        title: "Customer journey",
        description: "Storefront, search, catalog, cart, checkout, account, and mobile traffic",
      },
      {
        title: "Resilient AWS services",
        description: "Edge delivery, workload scaling, protected APIs, data services, and observability",
      },
      {
        title: "Order operations",
        description: "Payments, inventory, fulfillment, notifications, integrations, and recovery",
      },
    ],
    overview: {
      question: "How can AWS engineering improve an e-commerce platform?",
      answer:
        "AWS engineering can protect the revenue path by addressing capacity, failure isolation, deployment safety, payment boundaries, integration reliability, monitoring, and cost together. CodetoKloud maps the flow from customer request to completed order, then improves the infrastructure and delivery controls behind the highest-risk steps.",
      bestFit:
        "Commerce teams preparing for seasonal demand, seeing intermittent checkout or integration issues, modernizing a store, or struggling to release safely.",
      firstConversation:
        "We trace one purchase from edge to payment and fulfillment, including traffic patterns, dependencies, failure modes, security scope, and AWS cost.",
    },
    problems: [
      {
        title: "Peak traffic reaches hidden limits",
        description:
          "Storefront capacity may scale while sessions, databases, search, queues, rate limits, or third-party services become the actual bottleneck.",
      },
      {
        title: "Checkout changes carry revenue risk",
        description:
          "Large releases, limited preview environments, and weak rollback controls make it difficult to change the purchase path confidently.",
      },
      {
        title: "Security and cost expand with the stack",
        description:
          "Payment flows, customer data, marketing tools, and duplicated environments can increase control scope and AWS spend without clear ownership.",
      },
    ],
    capabilities: [
      {
        title: "Peak-ready AWS architecture",
        description:
          "Design edge, caching, scaling, queueing, data, and recovery patterns around measured customer and order traffic.",
        href: "/cloud-service",
        label: "Explore cloud infrastructure",
      },
      {
        title: "Safer commerce releases",
        description:
          "Automate build, testing, preview, promotion, deployment, and rollback for storefront and backend services.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Payment and customer data safeguards",
        description:
          "Reduce unnecessary exposure and improve identity, secrets, logging, segmentation, and evidence around sensitive workflows.",
        href: "/pci-dss-compliance",
        label: "Explore PCI DSS support",
      },
      {
        title: "Commerce cost control",
        description:
          "Connect spend to traffic, environments, services, and business cycles so optimization does not undermine customer experience.",
        href: "/finops",
        label: "Explore FinOps",
      },
    ],
    caveat: {
      title: "Payment architecture affects PCI DSS scope",
      description:
        "Using a payment provider can reduce direct card data exposure, but it does not automatically remove every PCI DSS responsibility. Scope depends on the payment flow, integrations, administrative access, and current standard. CodetoKloud implements scoped technical controls. A qualified assessor and your organization determine applicability and validate compliance.",
    },
    engagement: [
      {
        title: "Map the revenue path",
        description:
          "Trace customer requests, checkout, payment, order, inventory, and fulfillment dependencies under normal and peak load.",
      },
      {
        title: "Test the critical assumptions",
        description:
          "Prioritize capacity, failure, rollback, observability, security, and cost questions using available evidence and targeted tests.",
      },
      {
        title: "Improve before the next peak",
        description:
          "Deliver changes in a sequence that protects current operations, then validate dashboards, alerts, runbooks, and recovery.",
      },
    ],
    related: [
      {
        title: "Scalable AWS Architecture for a Monolithic Application",
        description:
          "Review a managed AWS pattern for teams improving scale and reliability before a larger application rewrite.",
        href: "/monolithic-structure",
        label: "Implementation example",
      },
      {
        title: "Secure Automated Deployment on AWS ECS",
        description:
          "See an implementation using containers, infrastructure as code, edge protection, secrets, monitoring, and CI/CD.",
        href: "/security-and-deployment",
        label: "Case study",
      },
      {
        title: "FinOps and AWS Cost Optimization",
        description:
          "Learn how usage analysis and cost ownership can support sustainable platform growth.",
        href: "/finops",
        label: "Service",
      },
    ],
  },

  manufacturing: {
    eyebrow: "Cloud engineering for connected manufacturing",
    title: "AWS Cloud and DevOps Consulting for Manufacturing",
    description:
      "Connect plant, ERP, quality, supply chain, and analytics systems through a reliable cloud platform without ignoring production boundaries, change controls, or operational technology risk.",
    primaryCta: "Review my cloud and plant boundary",
    visualTitle: "A controlled path from production data to decisions",
    visualLabel:
      "A manufacturing cloud priority map connecting plant systems, a secure integration layer, and AWS data and application services",
    visualSteps: [
      {
        title: "Plant and enterprise systems",
        description: "Machines, gateways, MES, ERP, quality, maintenance, and supply chain tools",
      },
      {
        title: "Controlled integration boundary",
        description: "Identity, network segmentation, buffering, schemas, change control, and monitoring",
      },
      {
        title: "AWS data and applications",
        description: "Storage, processing, analytics, dashboards, APIs, alerts, and governed access",
      },
    ],
    overview: {
      question: "Where does AWS fit in a modern manufacturing environment?",
      answer:
        "AWS can support manufacturing data ingestion, integration, analytics, application hosting, disaster recovery, and centralized operations. CodetoKloud helps define the boundary between operational technology and cloud systems, design reliable data paths, automate cloud application delivery, and add monitoring and security controls without treating the plant network like a conventional web environment.",
      bestFit:
        "Manufacturers connecting sites and systems, modernizing plant-facing applications, building data platforms, or improving a hybrid Kubernetes or cloud operating model.",
      firstConversation:
        "We start with one production or data workflow, the systems and sites involved, connectivity limits, ownership, change windows, and business consequence of failure.",
    },
    problems: [
      {
        title: "Plant and enterprise data stays fragmented",
        description:
          "Different protocols, schemas, site practices, and ownership models make it difficult to create a reliable view across production and business systems.",
      },
      {
        title: "Connectivity and change windows are constrained",
        description:
          "A design that assumes constant bandwidth or routine production access can fail when a site disconnects or a change requires plant approval.",
      },
      {
        title: "Cloud and operational boundaries are weak",
        description:
          "Unclear identity, network, vendor access, patching, and monitoring responsibilities can increase cyber and production risk.",
      },
    ],
    capabilities: [
      {
        title: "Hybrid cloud and Kubernetes",
        description:
          "Design connectivity, workload placement, cluster operations, storage, and recovery across sites and cloud environments.",
        href: "/kubernetes",
        label: "Explore Kubernetes consulting",
      },
      {
        title: "AWS data platform foundations",
        description:
          "Create governed ingestion, storage, processing, access, and observability patterns for manufacturing data products.",
        href: "/cloud-service",
        label: "Explore cloud infrastructure",
      },
      {
        title: "Controlled application delivery",
        description:
          "Use infrastructure as code and deployment automation while respecting plant schedules, approvals, and rollback needs.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Cloud and OT boundary review",
        description:
          "Assess access, segmentation, secrets, logging, vulnerability handling, and responsibility across connected environments.",
        href: "/security-and-compliance",
        label: "Explore security services",
      },
    ],
    caveat: {
      title: "Production safety and OT governance come first",
      description:
        "Cloud changes must follow the manufacturer's approved safety, quality, vendor, and operational change processes. Frameworks such as NIST, IEC 62443, and CMMC may be relevant depending on products and contracts, but applicability and conformance require organization-specific review. CodetoKloud scopes technical work with the responsible plant, security, compliance, and engineering teams.",
    },
    engagement: [
      {
        title: "Define one operational boundary",
        description:
          "Map systems, protocols, data ownership, connectivity, access, safety constraints, and change authority for a selected workflow.",
      },
      {
        title: "Design and test a bounded pilot",
        description:
          "Validate data flow, failure handling, security, observability, and support responsibilities before expanding scope.",
      },
      {
        title: "Standardize what worked",
        description:
          "Turn the validated design into reusable infrastructure, deployment, monitoring, and operating patterns for additional sites.",
      },
    ],
    related: [
      {
        title: "Hybrid Cloud Kubernetes over a WireGuard Mesh",
        description:
          "See a hybrid implementation joining sites with encrypted networking, GitOps, distributed storage, and Kubernetes.",
        href: "/hybrid-cloud-kubernetes-case-study",
        label: "Case study",
      },
      {
        title: "AWS Cloud Migration",
        description:
          "Review our approach to discovery, dependency planning, landing zones, data movement, cutover, and validation.",
        href: "/cloud-migration",
        label: "Service",
      },
      {
        title: "Security and Compliance Engineering",
        description:
          "Learn how technical controls are scoped, implemented, tested, and documented around a workload.",
        href: "/security-and-compliance",
        label: "Service",
      },
    ],
  },

  edtech: {
    eyebrow: "Cloud engineering for learning platforms",
    title: "AWS Cloud and DevOps Consulting for EdTech",
    description:
      "Keep learning, assessment, enrollment, and educator workflows available through predictable demand peaks while protecting student data and controlling seasonal cloud cost.",
    primaryCta: "Review my learning platform",
    visualTitle: "Learning experiences backed by reliable operations",
    visualLabel:
      "An EdTech cloud priority map connecting learners and educators, a secure learning platform, and dependable academic operations",
    visualSteps: [
      {
        title: "Learners and educators",
        description: "Enrollment, classrooms, content, assessments, progress, and administration",
      },
      {
        title: "Secure learning platform",
        description: "Identity, applications, APIs, data services, integrations, and automated delivery",
      },
      {
        title: "Academic operations",
        description: "Peak capacity, observability, recovery, support, data controls, and cost governance",
      },
    ],
    overview: {
      question: "How does cloud engineering support an EdTech product?",
      answer:
        "Cloud engineering helps an EdTech team prepare for enrollment and assessment peaks, release without interrupting classes, protect student and educator data, recover key workflows, and align infrastructure cost with the academic calendar. CodetoKloud improves those capabilities across AWS architecture, DevOps, observability, security, and FinOps.",
      bestFit:
        "Learning platform, assessment, classroom, student information, content, and education operations teams with important AWS workloads.",
      firstConversation:
        "We review one high-impact learner or educator journey, its demand pattern, data, integrations, release process, support model, and recovery needs.",
    },
    problems: [
      {
        title: "Academic peaks are unforgiving",
        description:
          "Enrollment, first-day access, live classes, and timed assessments concentrate demand into windows when degraded performance has immediate impact.",
      },
      {
        title: "Student data spans many systems",
        description:
          "Identity providers, institutions, content tools, analytics, and support workflows can create unclear access and retention boundaries.",
      },
      {
        title: "Delivery and spend ignore the calendar",
        description:
          "Teams need safe release windows and seasonal capacity plans, but environments and cloud commitments may remain static all year.",
      },
    ],
    capabilities: [
      {
        title: "Elastic learning platform architecture",
        description:
          "Design workload scaling, caching, queues, databases, and recovery around measured learning and assessment demand.",
        href: "/cloud-service",
        label: "Explore cloud infrastructure",
      },
      {
        title: "Academic-calendar DevOps",
        description:
          "Automate testing, preview, deployment, and rollback while planning changes around high-impact teaching and assessment windows.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Student data safeguards",
        description:
          "Improve identity, least privilege, encryption, logging, retention implementation, and evidence for in-scope systems.",
        href: "/security-and-compliance",
        label: "Explore security services",
      },
      {
        title: "Seasonal cloud economics",
        description:
          "Match capacity and commitments to demand cycles while preserving headroom for known academic events.",
        href: "/finops",
        label: "Explore FinOps",
      },
    ],
    caveat: {
      title: "Student privacy obligations vary",
      description:
        "FERPA, COPPA, state privacy laws, institution agreements, and regional requirements may apply differently based on student age, product role, geography, and data use. CodetoKloud implements scoped technical safeguards. Your organization, institutions, and qualified legal or compliance advisors determine obligations and policies.",
    },
    engagement: [
      {
        title: "Map the learning journey",
        description:
          "Identify users, peak events, data flows, integrations, release constraints, support ownership, and recovery expectations.",
      },
      {
        title: "Prioritize before the next key date",
        description:
          "Create a capacity, reliability, delivery, security, and cost plan tied to the academic calendar.",
      },
      {
        title: "Implement and rehearse",
        description:
          "Deliver the selected improvements, test load and recovery assumptions, and prepare dashboards and runbooks before demand arrives.",
      },
    ],
    related: [
      {
        title: "Scalable and Secure AWS Setup",
        description:
          "Review a platform implementation combining Kubernetes, delivery automation, private access, and monitoring.",
        href: "/scalable-secure-aws",
        label: "Case study",
      },
      {
        title: "DevOps Services",
        description:
          "See how delivery automation, infrastructure as code, observability, and operating practices support safer releases.",
        href: "/devops",
        label: "Service",
      },
      {
        title: "Security and Compliance Engineering",
        description:
          "Learn how we turn control requirements into scoped cloud and delivery implementation work.",
        href: "/security-and-compliance",
        label: "Service",
      },
    ],
  },

  fintech: {
    eyebrow: "Cloud engineering for financial technology",
    title: "AWS Cloud, DevOps, and Security Consulting for FinTech",
    description:
      "Build and operate financial products on AWS with controlled releases, resilient transaction paths, traceable access, useful evidence, and cost visibility.",
    primaryCta: "Review my FinTech platform",
    visualTitle: "Financial product delivery with explicit controls",
    visualLabel:
      "A FinTech cloud priority map connecting financial product workflows, controlled AWS services, and evidence-ready operations",
    visualSteps: [
      {
        title: "Financial product workflows",
        description: "Customer onboarding, payments, accounts, transactions, data, and partner integrations",
      },
      {
        title: "Controlled AWS services",
        description: "Identity, segmentation, encryption, delivery, secrets, observability, and recovery",
      },
      {
        title: "Evidence-ready operations",
        description: "Traceable changes, access review support, alerts, tested response, and cost ownership",
      },
    ],
    overview: {
      question: "What does AWS platform engineering for FinTech include?",
      answer:
        "FinTech platform engineering combines reliable architecture, secure delivery, access and data controls, observability, recovery, evidence, and cost governance. CodetoKloud helps product and risk teams translate a defined financial workflow into an AWS environment and release process that engineers can operate consistently.",
      bestFit:
        "FinTech teams launching regulated workflows, preparing for enterprise review, modernizing AWS, improving PCI or SOC 2 readiness, or reducing release and reliability risk.",
      firstConversation:
        "We trace one financial workflow, the data and external services it touches, production access, release controls, recovery requirements, and current evidence.",
    },
    problems: [
      {
        title: "Delivery and control processes compete",
        description:
          "Manual approvals and evidence collection slow releases, while bypassing them creates risk and leaves changes difficult to reconstruct.",
      },
      {
        title: "Transaction reliability spans dependencies",
        description:
          "Queues, ledgers, payment processors, identity, data stores, and partner APIs require explicit timeout, retry, recovery, and reconciliation behavior.",
      },
      {
        title: "Cloud cost lacks product context",
        description:
          "AWS charges may grow across environments and data services without clear allocation to products, transaction volume, or control requirements.",
      },
    ],
    capabilities: [
      {
        title: "Secure AWS foundations",
        description:
          "Design account, identity, network, encryption, secrets, logging, monitoring, backup, and recovery controls around in-scope workflows.",
        href: "/cloud-service",
        label: "Explore cloud infrastructure",
      },
      {
        title: "PCI DSS and SOC 2 readiness",
        description:
          "Translate scoped control needs into technical implementation, validation, documentation, and maintainable evidence workflows.",
        href: "/security-and-compliance",
        label: "Explore security services",
      },
      {
        title: "Controlled CI/CD",
        description:
          "Automate review, testing, artifact handling, approvals, deployment, rollback, and change records around product releases.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Reliability and FinOps",
        description:
          "Connect architecture and cost decisions to transaction criticality, service objectives, environment use, and product growth.",
        href: "/finops",
        label: "Explore FinOps",
      },
    ],
    caveat: {
      title: "Financial requirements depend on product and jurisdiction",
      description:
        "PCI DSS, SOC 2, GLBA, state rules, partner obligations, and other requirements may apply based on the product, licenses, data, payment flow, customers, and operating regions. CodetoKloud implements scoped technical controls. Your legal, risk, compliance, and assessor teams determine applicability and approve the overall program.",
    },
    engagement: [
      {
        title: "Scope the financial workflow",
        description:
          "Map data, transactions, dependencies, production access, changes, evidence, recovery needs, and responsible teams.",
      },
      {
        title: "Build a control-aware roadmap",
        description:
          "Prioritize platform work by customer impact, operational risk, regulatory commitments, and delivery constraints.",
      },
      {
        title: "Implement with evidence",
        description:
          "Automate and document the selected controls, test recovery and alerts, and hand over repeatable operating procedures.",
      },
    ],
    related: [
      {
        title: "Zero-Downtime Automated Deployment for a Financial App",
        description:
          "See a GitLab CI and AWS ECS delivery implementation designed for safer application updates.",
        href: "/automated_deployment",
        label: "Case study",
      },
      {
        title: "PCI DSS-Aligned Cloud Workstations Foundation",
        description:
          "Review a Google Cloud design with hardened Ubuntu workstations, private networking, Shielded VMs, customer-managed encryption keys, and Terraform control modules.",
        href: "/pci-dss-enterprise-case-study",
        label: "Case study",
      },
      {
        title: "Strengthening AWS Security with DevSecOps",
        description:
          "See a defense-in-depth implementation covering private networking, identity, delivery, detection, encryption, and secrets.",
        href: "/strengthening-aws",
        label: "Case study",
      },
    ],
  },

  professionalServices: {
    eyebrow: "Cloud engineering for professional services",
    title: "AWS Engineering for Professional Services Firms",
    description:
      "Modernize client portals, delivery workflows, data platforms, and internal systems with AWS architecture and automation that improve reliability without disrupting billable work.",
    primaryCta: "Review my delivery platform",
    visualTitle: "Client delivery supported by dependable systems",
    visualLabel:
      "A professional services cloud priority map connecting client work, an automated AWS platform, and controlled operations",
    visualSteps: [
      {
        title: "Client and team workflows",
        description: "Portals, projects, documents, data exchange, reporting, and internal operations",
      },
      {
        title: "Automated AWS platform",
        description: "Applications, integrations, identity, delivery pipelines, monitoring, and backups",
      },
      {
        title: "Controlled operations",
        description: "Clear access, reliable releases, client data boundaries, recovery, and predictable cost",
      },
    ],
    overview: {
      question: "How can AWS engineering improve professional services delivery?",
      answer:
        "AWS engineering can make client-facing applications, data exchange, project workflows, and internal tools more reliable and easier to change. CodetoKloud helps professional services firms assess the systems behind delivery, modernize the highest-value workflows, automate releases, strengthen client data controls, and establish an operating model the internal team can support.",
      bestFit:
        "Consulting, legal, accounting, engineering, staffing, and specialist firms with client portals, data-heavy workflows, custom applications, or growing AWS operations.",
      firstConversation:
        "We review one client or delivery workflow, the systems and data it depends on, current manual work, release risk, and the impact of downtime.",
    },
    problems: [
      {
        title: "Client work depends on manual handoffs",
        description:
          "Documents, approvals, data, and project status move across disconnected systems, increasing delay and making ownership unclear.",
      },
      {
        title: "Client-facing systems are difficult to change",
        description:
          "Fragile deployments and limited test environments turn portal and workflow improvements into operational events.",
      },
      {
        title: "Data boundaries vary by engagement",
        description:
          "Client, project, contractor, and internal access can accumulate without a consistent model for separation, review, retention, and evidence.",
      },
    ],
    capabilities: [
      {
        title: "Application and workflow modernization",
        description:
          "Assess custom systems and integrations, then choose targeted migration, managed service, or redesign work based on business value.",
        href: "/cloud-migration",
        label: "Explore cloud migration",
      },
      {
        title: "Reliable AWS operations",
        description:
          "Improve identity, networking, monitoring, backups, recovery, and support ownership around client-facing services.",
        href: "/cloud-service",
        label: "Explore cloud infrastructure",
      },
      {
        title: "Automated delivery workflows",
        description:
          "Use CI/CD and infrastructure as code to reduce release friction and make environment changes traceable.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Architecture and operating guidance",
        description:
          "Get an evidence-based assessment and sequenced plan before committing to a major platform or transformation program.",
        href: "/consulting-and-advisory",
        label: "Explore cloud advisory",
      },
    ],
    caveat: {
      title: "Client obligations shape the control scope",
      description:
        "Security, privacy, retention, residency, and sector requirements often come from client contracts and the data handled on each engagement. CodetoKloud implements and documents agreed technical controls. Your legal, risk, and client governance teams determine contractual and regulatory obligations.",
    },
    engagement: [
      {
        title: "Map one delivery workflow",
        description:
          "Identify users, data, systems, handoffs, access boundaries, pain points, and the business impact of delay or failure.",
      },
      {
        title: "Design a focused improvement",
        description:
          "Choose the smallest architecture, automation, or migration step that produces measurable operational value.",
      },
      {
        title: "Implement around client commitments",
        description:
          "Deliver in controlled phases, validate the workflow, and hand over documentation without disrupting active engagements.",
      },
    ],
    related: [
      {
        title: "Cloud Consulting and Advisory",
        description:
          "Get a practical architecture assessment, risk view, and sequenced roadmap for a cloud or platform priority.",
        href: "/consulting-and-advisory",
        label: "Service",
      },
      {
        title: "Engagement Models",
        description:
          "Compare focused assessments, projects, and ongoing engineering support for your team.",
        href: "/engagement-models",
        label: "Planning guide",
      },
      {
        title: "AWS Cloud Migration",
        description:
          "Review our discovery, dependency, landing zone, data, cutover, rollback, and validation approach.",
        href: "/cloud-migration",
        label: "Service",
      },
    ],
  },

  financialServices: {
    eyebrow: "Cloud engineering for regulated financial services",
    title: "AWS Cloud Engineering for Financial Services",
    description:
      "Modernize banking, lending, insurance, wealth, and financial operations on AWS with resilient architecture, controlled delivery, technical safeguards, and evidence that risk teams can use.",
    primaryCta: "Review my financial platform",
    visualTitle: "Modern delivery within a controlled financial environment",
    visualLabel:
      "A financial services cloud priority map connecting customer and core workflows, a governed AWS platform, and resilient operations",
    visualSteps: [
      {
        title: "Customer and core workflows",
        description: "Accounts, lending, policies, claims, payments, reporting, data, and integrations",
      },
      {
        title: "Governed AWS platform",
        description: "Identity, segmentation, encryption, change control, logging, resilience, and evidence",
      },
      {
        title: "Resilient operations",
        description: "Service monitoring, recovery tests, traceable access, incident readiness, and cost ownership",
      },
    ],
    overview: {
      question: "How does CodetoKloud support financial services workloads on AWS?",
      answer:
        "CodetoKloud helps financial services teams assess, migrate, build, and operate AWS platforms around a defined business workflow and control scope. The work can include landing zones, network and identity boundaries, delivery automation, data services, resilience, observability, disaster recovery, evidence collection, and FinOps.",
      bestFit:
        "Banks, lenders, insurers, wealth platforms, payment teams, and financial operations groups modernizing important workloads or strengthening cloud delivery and controls.",
      firstConversation:
        "We review one business-critical workflow, its data and dependencies, current control owners, recovery objectives, release process, and modernization constraints.",
    },
    problems: [
      {
        title: "Legacy dependencies complicate migration",
        description:
          "Core systems, batch processes, partner links, and reporting workloads require more than moving servers to preserve timing and reconciliation.",
      },
      {
        title: "Access and change evidence is fragmented",
        description:
          "Identity, privileged activity, deployments, exceptions, and approvals may span tools that do not produce a coherent operating record.",
      },
      {
        title: "Resilience is assumed rather than tested",
        description:
          "Multi-AZ resources and backups are useful, but service recovery also depends on data consistency, integrations, runbooks, and practiced teams.",
      },
    ],
    capabilities: [
      {
        title: "Controlled cloud migration",
        description:
          "Plan workload dependencies, data movement, parallel operation, reconciliation, cutover, rollback, and post-migration support.",
        href: "/cloud-migration",
        label: "Explore cloud migration",
      },
      {
        title: "Financial workload safeguards",
        description:
          "Implement identity, segmentation, encryption, logging, vulnerability, change, backup, and evidence controls within scope.",
        href: "/security-and-compliance",
        label: "Explore security services",
      },
      {
        title: "Automated and traceable delivery",
        description:
          "Build release paths with review, testing, artifact controls, approvals, deployment records, and rollback.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Resilience and cost governance",
        description:
          "Align service objectives, recovery investment, monitoring, capacity, ownership, and AWS cost with workflow criticality.",
        href: "/finops",
        label: "Explore FinOps",
      },
    ],
    caveat: {
      title: "Regulatory scope requires organization-specific review",
      description:
        "GLBA, PCI DSS, SOX, state rules, regulator guidance, contractual obligations, and other frameworks may apply based on entity, product, data, jurisdiction, and control ownership. CodetoKloud implements and documents scoped technical controls. Your legal, compliance, risk, regulator, and assessor teams determine applicability and approve the program.",
    },
    engagement: [
      {
        title: "Define the workload and control boundary",
        description:
          "Map business processes, systems, data, identities, dependencies, control owners, evidence, and recovery expectations.",
      },
      {
        title: "Design a sequenced target state",
        description:
          "Prioritize risk reduction and modernization with explicit decisions for migration, resilience, delivery, and operations.",
      },
      {
        title: "Deliver in controlled phases",
        description:
          "Implement, validate, reconcile, test recovery, document evidence, and transfer ownership at agreed milestones.",
      },
    ],
    related: [
      {
        title: "PCI DSS-Aligned Cloud Workstations Foundation",
        description:
          "Review a Google Cloud design with hardened workstations, private networking, Shielded VMs, customer-managed encryption keys, and QSA support documentation.",
        href: "/pci-dss-enterprise-case-study",
        label: "Case study",
      },
      {
        title: "Zero-Downtime Deployment for a Financial App",
        description:
          "See a container delivery implementation using GitLab CI, AWS ECS, availability zones, and rollback support.",
        href: "/automated_deployment",
        label: "Case study",
      },
      {
        title: "Strengthening AWS Security with DevSecOps",
        description:
          "Review a security implementation spanning network, access, delivery, monitoring, encryption, and secrets.",
        href: "/strengthening-aws",
        label: "Case study",
      },
    ],
  },

  realEstate: {
    eyebrow: "Cloud engineering for real estate technology",
    title: "AWS Cloud Engineering for Real Estate Platforms",
    description:
      "Modernize listing, tenant, transaction, property management, valuation, and operations platforms with reliable AWS infrastructure, secure integrations, and repeatable delivery.",
    primaryCta: "Review my real estate platform",
    visualTitle: "Property workflows connected through a reliable platform",
    visualLabel:
      "A real estate cloud priority map connecting customer and property workflows, an integrated AWS platform, and dependable operations",
    visualSteps: [
      {
        title: "Property and customer workflows",
        description: "Listings, leasing, tenants, transactions, maintenance, valuation, and reporting",
      },
      {
        title: "Integrated AWS platform",
        description: "Applications, APIs, identity, data services, document flows, and automated delivery",
      },
      {
        title: "Dependable operations",
        description: "Data access, monitoring, recovery, integration health, scaling, and cost ownership",
      },
    ],
    overview: {
      question: "How does AWS engineering support real estate platforms?",
      answer:
        "AWS engineering provides the infrastructure, integrations, delivery automation, data controls, and operating visibility behind real estate applications. CodetoKloud helps teams improve the path between listing, tenant, transaction, property, document, and analytics systems so customer-facing workflows remain reliable and product changes are easier to ship.",
      bestFit:
        "PropTech products, brokerages, property managers, operators, marketplaces, and data teams with custom applications or important AWS workloads.",
      firstConversation:
        "We review one listing, leasing, tenant, transaction, or property workflow and the applications, data, integrations, access, and support model behind it.",
    },
    problems: [
      {
        title: "Critical data is spread across systems",
        description:
          "Listing feeds, property systems, documents, payments, CRM, identity, and analytics may disagree or fail without clear integration ownership.",
      },
      {
        title: "Customer workflows inherit legacy limits",
        description:
          "Older application and database designs can make search, portal, mobile, reporting, and transaction improvements slow or fragile.",
      },
      {
        title: "Access grows across properties and partners",
        description:
          "Tenant, owner, broker, vendor, staff, and support access requires deliberate separation, review, logging, and data retention.",
      },
    ],
    capabilities: [
      {
        title: "Platform and application modernization",
        description:
          "Choose practical migration, managed service, container, API, and data changes around the current product and integration landscape.",
        href: "/cloud-migration",
        label: "Explore cloud migration",
      },
      {
        title: "Reliable AWS infrastructure",
        description:
          "Improve networking, scaling, data services, backups, recovery, monitoring, and operational ownership.",
        href: "/cloud-service",
        label: "Explore cloud infrastructure",
      },
      {
        title: "Repeatable product delivery",
        description:
          "Automate application and infrastructure changes with consistent environments, testing, deployment, and rollback.",
        href: "/devops",
        label: "Explore DevOps",
      },
      {
        title: "Identity and data safeguards",
        description:
          "Strengthen access, secrets, encryption, logging, vulnerability handling, and evidence across applications and integrations.",
        href: "/security-and-compliance",
        label: "Explore security services",
      },
    ],
    caveat: {
      title: "Data and transaction obligations vary by workflow",
      description:
        "Privacy, fair housing, payment, document retention, accessibility, consumer, and regional requirements may apply differently across listing, leasing, sales, tenant, and property operations. CodetoKloud implements scoped technical safeguards. Your legal, compliance, and business teams determine policy and regulatory obligations.",
    },
    engagement: [
      {
        title: "Trace the property workflow",
        description:
          "Map users, applications, feeds, documents, data stores, access, dependencies, failure impact, and support ownership.",
      },
      {
        title: "Prioritize the platform work",
        description:
          "Separate immediate reliability and security fixes from integration, data, and modernization investments.",
      },
      {
        title: "Deliver without disrupting operations",
        description:
          "Implement in phases, validate data and integrations, prepare rollback, and document ongoing support.",
      },
    ],
    related: [
      {
        title: "Scalable AWS Architecture for a Monolithic Application",
        description:
          "Review a managed AWS architecture for improving a mature application without requiring an immediate rewrite.",
        href: "/monolithic-structure",
        label: "Implementation example",
      },
      {
        title: "AWS Cloud Migration",
        description:
          "See our approach to discovery, dependency planning, landing zones, data movement, cutover, and validation.",
        href: "/cloud-migration",
        label: "Service",
      },
      {
        title: "Security and Compliance Engineering",
        description:
          "Learn how we implement and document scoped access, data, logging, and delivery controls.",
        href: "/security-and-compliance",
        label: "Service",
      },
    ],
  },

  pevc: {
    eyebrow: "Cloud diligence and engineering for investors",
    title: "Cloud Due Diligence and Engineering for PE and VC Portfolios",
    description:
      "Assess cloud risk, delivery maturity, security, reliability, and AWS cost before investment, then turn findings into a practical value plan for portfolio engineering teams.",
    primaryCta: "Review a portfolio company",
    visualTitle: "From technical evidence to an executable value plan",
    visualLabel:
      "A PE and VC cloud priority map connecting a portfolio company's evidence, prioritized findings, and post-investment engineering",
    visualSteps: [
      {
        title: "Portfolio company evidence",
        description: "Architecture, access, delivery, incidents, recovery, cloud bills, backlog, and team ownership",
      },
      {
        title: "Prioritized findings",
        description: "Business impact, technical risk, cost opportunity, dependencies, and confidence level",
      },
      {
        title: "Post-investment execution",
        description: "A sequenced plan for reliability, security, delivery, cost, and platform ownership",
      },
    ],
    overview: {
      question: "What should cloud due diligence cover for a portfolio company?",
      answer:
        "Cloud due diligence should connect architecture and engineering evidence to business impact. CodetoKloud reviews AWS foundations, delivery practices, security controls, reliability, recovery, observability, cost, technical ownership, and material dependencies. Findings are ranked by severity, value creation relevance, effort, and confidence, with a practical path for the company after close.",
      bestFit:
        "PE and VC firms evaluating cloud-dependent businesses or helping portfolio companies improve margins, enterprise readiness, reliability, and engineering execution.",
      firstConversation:
        "We align on the investment thesis, transaction stage, available evidence, management access, decision deadline, and the risks or value levers that matter most.",
    },
    problems: [
      {
        title: "Diligence evidence is incomplete",
        description:
          "Architecture diagrams and policy answers may not match deployed resources, recent incidents, access patterns, delivery workflows, or cloud bills.",
      },
      {
        title: "Cloud cost obscures margin opportunity",
        description:
          "Commitments, shared services, data transfer, idle capacity, and product growth can make apparent savings difficult to validate quickly.",
      },
      {
        title: "Post-close priorities compete",
        description:
          "Reliability, security, enterprise requirements, delivery speed, and cost all matter, but the portfolio company needs a sequenced plan it can execute.",
      },
    ],
    capabilities: [
      {
        title: "Technical cloud due diligence",
        description:
          "Review evidence and management input across architecture, delivery, security, resilience, cost, ownership, and material dependencies.",
        href: "/consulting-and-advisory",
        label: "Explore cloud advisory",
      },
      {
        title: "AWS cost and unit economics review",
        description:
          "Separate immediate waste, rate opportunities, architecture questions, and growth-linked cost before assigning a savings target.",
        href: "/finops",
        label: "Explore FinOps",
      },
      {
        title: "Security and enterprise readiness",
        description:
          "Identify material technical control gaps and translate them into a prioritized implementation and evidence plan.",
        href: "/security-and-compliance",
        label: "Explore security services",
      },
      {
        title: "Post-close platform engineering",
        description:
          "Implement selected reliability, DevOps, Kubernetes, cloud foundation, and cost improvements with the portfolio team.",
        href: "/devops",
        label: "Explore DevOps",
      },
    ],
    caveat: {
      title: "Technical diligence is scoped and point in time",
      description:
        "Findings depend on the evidence, access, interviews, systems, and time available during the review. CodetoKloud technical diligence is not a financial audit, legal opinion, penetration test, or compliance attestation unless a separate scope explicitly states otherwise. Investment, legal, cyber, and regulatory decisions remain with the appropriate advisors and decision makers.",
    },
    engagement: [
      {
        title: "Align scope to the investment thesis",
        description:
          "Define decision questions, material workloads, evidence access, management sessions, timeline, and report expectations.",
      },
      {
        title: "Test evidence and rank findings",
        description:
          "Review available artifacts, validate material claims, and distinguish confirmed issues from assumptions requiring follow-up.",
      },
      {
        title: "Build and support the value plan",
        description:
          "Translate findings into a sequenced roadmap and, when useful, help the portfolio engineering team execute it after close.",
      },
    ],
    related: [
      {
        title: "Cloud Consulting and Advisory",
        description:
          "Review our approach to architecture assessment, decision support, risk prioritization, and practical roadmaps.",
        href: "/consulting-and-advisory",
        label: "Service",
      },
      {
        title: "FinOps and AWS Cost Optimization",
        description:
          "See how cost allocation, utilization, commitments, and operating ownership inform an optimization plan.",
        href: "/finops",
        label: "Service",
      },
      {
        title: "Strengthening AWS Security with DevSecOps",
        description:
          "Review an implementation example spanning network, access, delivery, monitoring, encryption, and secrets.",
        href: "/strengthening-aws",
        label: "Case study",
      },
    ],
  },
};
