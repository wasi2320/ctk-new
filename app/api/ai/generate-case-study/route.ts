import { NextRequest, NextResponse } from "next/server";

interface CaseStudyData {
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: Record<string, string>;
  timeline: string;
  team_size: string;
}

function generateMermaidDiagram(data: CaseStudyData): string {
  const techs = data.technologies;

  let diagram = `graph TB
    subgraph "Before"
        A[Legacy System] --> B[Manual Processes]
        B --> C[Scaling Issues]
        C --> D[High Costs]
    end

    subgraph "CodetoKloud Solution"
        E[Assessment & Planning] --> F[Architecture Design]
        F --> G[Implementation]
        G --> H[Testing & Validation]
        H --> I[Production Deployment]
    end

    subgraph "Technologies Used"`;

  techs.forEach((tech, index) => {
    diagram += `\n        T${index}[${tech}]`;
  });

  diagram += `\n    end

    subgraph "After - Results"`;

  Object.entries(data.results).forEach(([metric, value], index) => {
    diagram += `\n        R${index}[${metric}: ${value}]`;
  });

  diagram += `\n    end

    D --> E
    I --> R0`;

  if (Object.keys(data.results).length > 1) {
    diagram += `\n    I --> R1`;
  }

  diagram += `

    style A fill:#ff6b6b
    style D fill:#ff6b6b
    style E fill:#4ecdc4
    style I fill:#95e1d3
    style R0 fill:#a8e6cf
`;

  if (Object.keys(data.results).length > 1) {
    diagram += `    style R1 fill:#a8e6cf\n`;
  }

  return diagram;
}

function generateCaseStudyContent(data: CaseStudyData): string {
  const {
    client_name,
    industry,
    challenge,
    solution,
    technologies,
    results,
    timeline,
    team_size,
  } = data;

  const primaryTech = technologies[0] || "Cloud";
  const firstResult = Object.entries(results)[0];
  const title = `How ${client_name} ${firstResult ? "Achieved " + firstResult[1] : "Transformed Operations"} with ${primaryTech}`;

  let content = `# ${title}\n\n`;

  // Meta Tags
  content += `**Meta Title:** ${title} | CodetoKloud Case Study\n`;
  content += `**Meta Description:** ${client_name} transformed their ${industry} operations with ${primaryTech}. Learn how we delivered ${firstResult ? firstResult[1] : "measurable results"}.\n\n`;
  content += `---\n\n`;

  // Hero Section
  content += `## 📊 At a Glance\n\n`;
  content += `**Client:** ${client_name}\n`;
  content += `**Industry:** ${industry}\n`;
  content += `**Timeline:** ${timeline}\n`;
  content += `**Team Size:** ${team_size}\n`;
  content += `**Technologies:** ${technologies.join(", ")}\n\n`;

  // Stats Preview
  content += `### Key Results\n\n`;
  Object.entries(results).forEach(([metric, value]) => {
    content += `- 📈 **${metric}:** ${value}\n`;
  });
  content += `\n`;

  // Executive Summary
  content += `## Executive Summary\n\n`;
  content += `${client_name}, a leading ${industry} company, partnered with CodetoKloud to ${challenge.toLowerCase()}. `;
  content += `Using a modern tech stack including ${technologies.slice(0, 3).join(", ")}, we delivered ${firstResult ? firstResult[1] : "exceptional results"} `;
  content += `${timeline ? `in just ${timeline}` : ""}.\n\n`;

  // The Challenge
  content += `## 🎯 The Challenge\n\n`;
  content += `${client_name} faced significant obstacles in their digital transformation journey:\n\n`;
  content += `${challenge}\n\n`;
  content += `**Pain Points:**\n`;
  content += `- Legacy systems limiting innovation and agility\n`;
  content += `- High operational costs due to manual processes\n`;
  content += `- Difficulty scaling to meet growing demand\n`;
  content += `- Security and compliance concerns\n`;
  content += `- Extended deployment cycles impacting time-to-market\n\n`;
  content += `**The Stakes:** Without modernization, ${client_name} risked losing competitive advantage and market share to more agile competitors.\n\n`;

  // The Solution
  content += `## ⚡ The Solution\n\n`;
  content += `CodetoKloud designed and implemented a comprehensive ${industry} cloud solution leveraging:\n\n`;

  technologies.forEach((tech, index) => {
    content += `### ${index + 1}. ${tech}\n\n`;

    if (tech.toLowerCase().includes("kubernetes") || tech.toLowerCase().includes("k8s")) {
      content += `We deployed a production-ready Kubernetes cluster with auto-scaling, high availability, and comprehensive monitoring. This enabled containerized deployments with zero-downtime updates.\n\n`;
    } else if (tech.toLowerCase().includes("terraform") || tech.toLowerCase().includes("iac")) {
      content += `Infrastructure as Code allowed us to provision and manage all cloud resources through version-controlled configurations, ensuring consistency and repeatability across environments.\n\n`;
    } else if (tech.toLowerCase().includes("aws") || tech.toLowerCase().includes("azure") || tech.toLowerCase().includes("gcp")) {
      content += `Cloud-native architecture on ${tech} provided scalability, reliability, and cost optimization through managed services and serverless capabilities.\n\n`;
    } else if (tech.toLowerCase().includes("github") || tech.toLowerCase().includes("gitlab") || tech.toLowerCase().includes("ci/cd")) {
      content += `Automated CI/CD pipelines enabled rapid, reliable deployments with automated testing, security scanning, and rollback capabilities.\n\n`;
    } else {
      content += `${tech} played a crucial role in delivering a scalable, secure, and efficient solution.\n\n`;
    }
  });

  // Implementation Phases
  content += `### Implementation Roadmap\n\n`;
  content += `**Phase 1: Discovery & Planning (Weeks 1-2)**\n`;
  content += `- Current state assessment\n`;
  content += `- Architecture design workshops\n`;
  content += `- Technology stack finalization\n`;
  content += `- Risk assessment and mitigation planning\n\n`;

  content += `**Phase 2: Infrastructure Setup (Weeks 3-4)**\n`;
  content += `- Cloud environment provisioning\n`;
  content += `- Network and security configuration\n`;
  content += `- CI/CD pipeline implementation\n`;
  content += `- Monitoring and logging setup\n\n`;

  content += `**Phase 3: Application Migration (Weeks 5-8)**\n`;
  content += `- Containerization of applications\n`;
  content += `- Database migration strategy\n`;
  content += `- Integration testing\n`;
  content += `- Performance optimization\n\n`;

  content += `**Phase 4: Go-Live & Optimization (Weeks 9-12)**\n`;
  content += `- Production deployment\n`;
  content += `- Team training and knowledge transfer\n`;
  content += `- Post-launch monitoring\n`;
  content += `- Continuous optimization\n\n`;

  // Results
  content += `## 📈 The Results\n\n`;
  content += `The impact was immediate and measurable:\n\n`;

  content += `| Metric | Before | After | Improvement |\n`;
  content += `|--------|--------|-------|-------------|\n`;

  Object.entries(results).forEach(([metric]) => {
    if (metric.toLowerCase().includes("cost") || metric.toLowerCase().includes("spend")) {
      content += `| ${metric} | High | Optimized | ${results[metric]} |\n`;
    } else if (metric.toLowerCase().includes("deployment") || metric.toLowerCase().includes("speed")) {
      content += `| ${metric} | Slow | Fast | ${results[metric]} |\n`;
    } else if (metric.toLowerCase().includes("uptime") || metric.toLowerCase().includes("availability")) {
      content += `| ${metric} | 95% | ${results[metric]} | Improved |\n`;
    } else {
      content += `| ${metric} | Baseline | Improved | ${results[metric]} |\n`;
    }
  });

  content += `\n`;

  content += `### Business Impact\n\n`;
  content += `**Immediate Benefits:**\n`;
  content += `- Faster time-to-market for new features\n`;
  content += `- Reduced operational overhead and manual effort\n`;
  content += `- Improved system reliability and customer satisfaction\n`;
  content += `- Enhanced security posture and compliance\n\n`;

  content += `**Long-Term Value:**\n`;
  content += `- Scalable foundation for future growth\n`;
  content += `- Modern development workflows attracting top talent\n`;
  content += `- Data-driven decision making through observability\n`;
  content += `- Competitive advantage in the ${industry} market\n\n`;

  // Client Testimonial
  content += `## 💬 Client Testimonial\n\n`;
  content += `> "Working with CodetoKloud was transformative for our business. Their expertise in ${technologies[0]} and cloud architecture helped us achieve ${firstResult ? firstResult[1] : "remarkable results"} ${timeline ? `in just ${timeline}` : ""}. The team was professional, responsive, and truly understood our ${industry} business needs."\n`;
  content += `>\n`;
  content += `> **— Engineering Leader, ${client_name}**\n\n`;

  // Technologies Section
  content += `## 🔧 Technology Stack\n\n`;
  technologies.forEach(tech => {
    content += `- **${tech}**\n`;
  });
  content += `\n`;

  // Key Takeaways
  content += `## 🎯 Key Takeaways\n\n`;
  content += `1. **Assess Before Acting**: Thorough discovery and planning prevented costly missteps\n`;
  content += `2. **Phased Approach**: Incremental implementation reduced risk and enabled learning\n`;
  content += `3. **Automation First**: CI/CD and IaC accelerated delivery and improved reliability\n`;
  content += `4. **Measure Everything**: Comprehensive monitoring provided visibility and insights\n`;
  content += `5. **Team Enablement**: Knowledge transfer ensured long-term success\n\n`;

  // CTA
  content += `## Ready to Transform Your ${industry} Business?\n\n`;
  content += `${client_name}'s success story could be yours. Whether you're looking to:\n`;
  content += `- Migrate to the cloud\n`;
  content += `- Modernize legacy applications\n`;
  content += `- Implement DevOps practices\n`;
  content += `- Optimize cloud costs\n\n`;
  content += `Our team has the expertise to deliver measurable results.\n\n`;
  content += `**[Schedule a Free Consultation](/contact)** to discuss your specific challenges and goals.\n\n`;

  // Related Services
  content += `---\n\n`;
  content += `## Related Services\n\n`;
  content += `- [Cloud Migration](/cloud-migration)\n`;
  content += `- [DevOps Consulting](/devops)\n`;
  content += `- [${industry} Solutions](/${industry.toLowerCase().replace(/\s+/g, "-")})\n`;
  content += `- [Browse All Case Studies](/case-studies)\n`;

  return content;
}

export async function POST(request: NextRequest) {
  try {
    const data: CaseStudyData = await request.json();

    if (!data.client_name || !data.challenge) {
      return NextResponse.json(
        { error: "Client name and challenge are required" },
        { status: 400 }
      );
    }

    const caseStudyContent = generateCaseStudyContent(data);
    const diagramCode = generateMermaidDiagram(data);

    return NextResponse.json({
      success: true,
      content: caseStudyContent,
      diagram_code: diagramCode,
    });
  } catch (error) {
    console.error("Error generating case study:", error);
    return NextResponse.json(
      { error: "Failed to generate case study" },
      { status: 500 }
    );
  }
}
