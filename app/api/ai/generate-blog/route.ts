import { NextRequest, NextResponse } from "next/server";

// DevOps keywords database
const DEVOPS_KEYWORDS = {
  "cloud migration": ["AWS migration", "Azure migration", "GCP migration", "cloud modernization", "lift and shift"],
  "kubernetes": ["k8s", "container orchestration", "pod management", "kubernetes deployment", "EKS", "GKE", "AKS"],
  "ci/cd": ["continuous integration", "continuous deployment", "GitHub Actions", "GitLab CI", "Jenkins", "automated deployment"],
  "terraform": ["infrastructure as code", "IaC", "CloudFormation", "terraform modules", "infrastructure automation"],
  "devops": ["DevOps practices", "automation", "deployment pipelines", "DevOps consulting", "DevOps transformation"],
};

interface BlogConfig {
  topic: string;
  target_keyword: string;
  secondary_keywords: string[];
  word_count: number;
}

function generateBlogOutline(topic: string, targetKeyword: string): string[] {
  const outlines: Record<string, string[]> = {
    kubernetes: [
      `Understanding ${targetKeyword}`,
      "Common Challenges and Pain Points",
      "Best Practices and Proven Strategies",
      "Implementation Guide",
      "Tools and Technologies",
      "Real-World Examples",
      "Measuring Success",
      "Future Trends and Recommendations",
    ],
    cloud: [
      `The Importance of ${targetKeyword}`,
      "Key Benefits and ROI",
      "Planning Your Strategy",
      "Step-by-Step Implementation",
      "Common Pitfalls to Avoid",
      "Security and Compliance Considerations",
      "Cost Optimization Tips",
      "Next Steps",
    ],
    devops: [
      `What is ${targetKeyword}?`,
      "Why It Matters for Your Business",
      "Core Components and Architecture",
      "Implementation Roadmap",
      "Tools and Best Practices",
      "Overcoming Common Challenges",
      "Measuring Impact and Success",
      "Conclusion and Action Plan",
    ],
  };

  // Detect topic category
  const topicLower = topic.toLowerCase();
  if (topicLower.includes("kubernetes") || topicLower.includes("k8s")) {
    return outlines.kubernetes;
  } else if (topicLower.includes("cloud") || topicLower.includes("aws") || topicLower.includes("azure") || topicLower.includes("gcp")) {
    return outlines.cloud;
  } else {
    return outlines.devops;
  }
}

function generateSEOOptimizedBlog(config: BlogConfig): string {
  const { topic, target_keyword, secondary_keywords, word_count } = config;

  const outline = generateBlogOutline(topic, target_keyword);
  const wordsPerSection = Math.floor(word_count / (outline.length + 2)); // +2 for intro and conclusion

  let blogContent = `# ${topic}\n\n`;

  // SEO Metadata
  blogContent += `**Meta Title:** ${topic} | Complete Guide 2026 | CodetoKloud\n\n`;
  blogContent += `**Meta Description:** Learn ${target_keyword} with our comprehensive guide. Expert insights on ${secondary_keywords.slice(0, 2).join(", ")}. Read now.\n\n`;
  blogContent += `**Target Keyword:** ${target_keyword}\n`;
  blogContent += `**Secondary Keywords:** ${secondary_keywords.join(", ")}\n\n`;
  blogContent += `---\n\n`;

  // Introduction
  blogContent += `## Introduction\n\n`;
  blogContent += `In today's rapidly evolving technology landscape, ${target_keyword} has become a critical priority for organizations looking to stay competitive. Whether you're modernizing legacy infrastructure or building cloud-native applications, understanding and implementing ${target_keyword} can dramatically transform your operations.\n\n`;
  blogContent += `This comprehensive guide explores everything you need to know about ${target_keyword}, from fundamental concepts to advanced implementation strategies. You'll discover proven techniques that leading companies use to achieve measurable results.\n\n`;
  blogContent += `**In this guide, you'll learn:**\n`;
  outline.forEach(section => {
    blogContent += `- ${section}\n`;
  });
  blogContent += `\n`;

  // Main Content Sections
  outline.forEach((heading, index) => {
    blogContent += `## ${heading}\n\n`;

    // Add keyword-rich content
    if (index === 0) {
      blogContent += `${target_keyword} is essential for modern businesses. `;
      if (secondary_keywords.length > 0) {
        blogContent += `When implementing ${secondary_keywords[0]}, organizations must consider several key factors including ${secondary_keywords[1] || "scalability, security, and cost optimization"}.\n\n`;
      }
    }

    // Generate section content based on heading
    if (heading.toLowerCase().includes("challenge") || heading.toLowerCase().includes("pain point")) {
      blogContent += `Organizations commonly face several challenges when dealing with ${target_keyword}:\n\n`;
      blogContent += `1. **Complexity**: Managing distributed systems and ensuring consistency\n`;
      blogContent += `2. **Cost Control**: Optimizing resource utilization and reducing cloud spend\n`;
      blogContent += `3. **Security**: Implementing robust security measures and compliance requirements\n`;
      blogContent += `4. **Skill Gap**: Finding and retaining talent with the right expertise\n\n`;
      blogContent += `These challenges require a strategic approach and often benefit from expert guidance.\n\n`;
    } else if (heading.toLowerCase().includes("best practice") || heading.toLowerCase().includes("strateg")) {
      blogContent += `Based on our experience with 50+ enterprise implementations, here are proven strategies:\n\n`;
      blogContent += `### 1. Start with Assessment\n\n`;
      blogContent += `Before diving into ${target_keyword}, conduct a thorough assessment of your current state, including infrastructure, processes, and team capabilities.\n\n`;
      blogContent += `### 2. Define Clear Objectives\n\n`;
      blogContent += `Establish measurable goals such as reducing deployment time by 50%, cutting cloud costs by 30%, or improving system reliability to 99.99% uptime.\n\n`;
      blogContent += `### 3. Implement Incrementally\n\n`;
      blogContent += `Adopt a phased approach rather than attempting a complete transformation overnight. Start with a pilot project to validate your approach.\n\n`;
      blogContent += `### 4. Automate Everything Possible\n\n`;
      blogContent += `Leverage automation tools for ${secondary_keywords[0] || "deployment"}, monitoring, and incident response to reduce manual effort and human error.\n\n`;
    } else if (heading.toLowerCase().includes("implementation") || heading.toLowerCase().includes("guide")) {
      blogContent += `Follow this proven framework for implementing ${target_keyword}:\n\n`;
      blogContent += `**Phase 1: Planning (Weeks 1-2)**\n`;
      blogContent += `- Stakeholder alignment\n`;
      blogContent += `- Requirements gathering\n`;
      blogContent += `- Architecture design\n`;
      blogContent += `- Tool selection\n\n`;
      blogContent += `**Phase 2: Proof of Concept (Weeks 3-4)**\n`;
      blogContent += `- Setup development environment\n`;
      blogContent += `- Implement core features\n`;
      blogContent += `- Validate approach\n`;
      blogContent += `- Gather feedback\n\n`;
      blogContent += `**Phase 3: Production Rollout (Weeks 5-8)**\n`;
      blogContent += `- Production environment setup\n`;
      blogContent += `- Security hardening\n`;
      blogContent += `- Monitoring and alerting\n`;
      blogContent += `- Team training\n\n`;
      blogContent += `**Phase 4: Optimization (Ongoing)**\n`;
      blogContent += `- Performance tuning\n`;
      blogContent += `- Cost optimization\n`;
      blogContent += `- Process improvements\n`;
      blogContent += `- Continuous learning\n\n`;
    } else if (heading.toLowerCase().includes("tool")) {
      blogContent += `The right tools can make or break your ${target_keyword} initiative. Here are our recommendations:\n\n`;
      blogContent += `**For ${secondary_keywords[0] || "automation"}:**\n`;
      blogContent += `- Terraform or CloudFormation for infrastructure\n`;
      blogContent += `- GitHub Actions or GitLab CI for pipelines\n`;
      blogContent += `- Ansible for configuration management\n\n`;
      blogContent += `**For Monitoring:**\n`;
      blogContent += `- Prometheus and Grafana for metrics\n`;
      blogContent += `- ELK Stack or CloudWatch for logs\n`;
      blogContent += `- PagerDuty for incident management\n\n`;
    } else {
      blogContent += `When implementing ${target_keyword}, it's crucial to understand the broader context and implications for your organization. This involves careful planning, stakeholder alignment, and a clear understanding of your desired outcomes.\n\n`;
      blogContent += `Key considerations include:\n\n`;
      blogContent += `- **Business Alignment**: Ensure technical decisions support business objectives\n`;
      blogContent += `- **Team Readiness**: Assess and develop necessary skills\n`;
      blogContent += `- **Risk Management**: Identify and mitigate potential challenges\n`;
      blogContent += `- **Success Metrics**: Define KPIs to measure progress\n\n`;
    }

    // Add call-to-action every few sections
    if ((index + 1) % 3 === 0) {
      blogContent += `> **Need expert guidance?** Our team has helped 50+ companies successfully implement ${target_keyword}. [Schedule a free consultation](/contact) to discuss your specific challenges.\n\n`;
    }
  });

  // Conclusion
  blogContent += `## Conclusion\n\n`;
  blogContent += `Implementing ${target_keyword} effectively requires a strategic approach, the right tools, and often expert guidance. The benefits—including improved efficiency, reduced costs, and enhanced reliability—make it a worthwhile investment for organizations of all sizes.\n\n`;
  blogContent += `Remember these key takeaways:\n\n`;
  blogContent += `1. Start with a clear assessment of your current state\n`;
  blogContent += `2. Define measurable objectives and success criteria\n`;
  blogContent += `3. Adopt a phased, incremental approach\n`;
  blogContent += `4. Invest in team training and skill development\n`;
  blogContent += `5. Leverage automation wherever possible\n`;
  blogContent += `6. Monitor, measure, and continuously improve\n\n`;
  blogContent += `**Ready to get started with ${target_keyword}?** [Contact CodetoKloud](/contact) for a free assessment and personalized roadmap. Our experts will help you navigate the complexities and achieve measurable results.\n\n`;
  blogContent += `---\n\n`;
  blogContent += `## Related Resources\n\n`;
  blogContent += `- [Cloud Migration Services](/cloud-migration)\n`;
  blogContent += `- [DevOps Consulting](/devops)\n`;
  blogContent += `- [AWS Solutions](/aws-scalable-secure)\n`;
  blogContent += `- [Read More Blogs](/blogs)\n`;

  return blogContent;
}

export async function POST(request: NextRequest) {
  try {
    const body: BlogConfig = await request.json();

    if (!body.topic || !body.target_keyword) {
      return NextResponse.json(
        { error: "Topic and target keyword are required" },
        { status: 400 }
      );
    }

    const generatedContent = generateSEOOptimizedBlog(body);

    return NextResponse.json({
      success: true,
      content: generatedContent,
      metadata: {
        word_count: generatedContent.split(/\s+/).length,
        keyword_density: (
          (generatedContent.toLowerCase().match(new RegExp(body.target_keyword.toLowerCase(), "g")) || []).length /
          generatedContent.split(/\s+/).length *
          100
        ).toFixed(2),
      },
    });
  } catch (error) {
    console.error("Error generating blog:", error);
    return NextResponse.json(
      { error: "Failed to generate blog content" },
      { status: 500 }
    );
  }
}
