#!/usr/bin/env node

/**
 * Automated Content Generation Script
 * This script runs in GitHub Actions to generate blog posts and case studies
 */

const { createClient } = require('@supabase/supabase-js');

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Blog topics rotation
const BLOG_TOPICS = [
  {
    topic: "AWS Cloud Migration: Complete Step-by-Step Guide for 2026",
    keyword: "aws cloud migration",
    secondary: ["cloud migration services", "aws migration checklist", "cloud migration strategy"],
    category: "cloud-migration",
  },
  {
    topic: "Kubernetes Cost Optimization: 10 Proven Strategies to Reduce Spending",
    keyword: "kubernetes cost optimization",
    secondary: ["reduce kubernetes costs", "k8s cost management", "kubernetes resource optimization"],
    category: "kubernetes",
  },
  {
    topic: "CI/CD Pipeline with GitHub Actions: Complete Implementation Guide",
    keyword: "github actions ci/cd",
    secondary: ["github actions pipeline", "continuous integration github", "automated deployment"],
    category: "ci-cd",
  },
  {
    topic: "Infrastructure as Code with Terraform: Best Practices 2026",
    keyword: "terraform best practices",
    secondary: ["terraform infrastructure", "iac terraform", "terraform modules"],
    category: "iac",
  },
  {
    topic: "Docker Container Security: Essential Best Practices",
    keyword: "docker security",
    secondary: ["container security", "docker best practices", "secure containers"],
    category: "docker",
  },
  {
    topic: "AWS EKS vs ECS: Which Container Service Should You Choose?",
    keyword: "eks vs ecs",
    secondary: ["aws container services", "kubernetes vs ecs", "aws orchestration"],
    category: "aws",
  },
  {
    topic: "Zero-Downtime Deployment Strategies for Production Systems",
    keyword: "zero downtime deployment",
    secondary: ["blue green deployment", "rolling deployment", "canary deployment"],
    category: "deployment",
  },
  {
    topic: "Microservices Architecture: Design Patterns and Implementation",
    keyword: "microservices architecture",
    secondary: ["microservices design patterns", "service mesh", "distributed systems"],
    category: "architecture",
  },
  {
    topic: "Terraform vs CloudFormation: Complete Comparison Guide 2026",
    keyword: "terraform vs cloudformation",
    secondary: ["iac comparison", "aws infrastructure code", "terraform cloudformation"],
    category: "iac",
  },
  {
    topic: "DevOps Cost Optimization: Reduce Cloud Spending by 50%",
    keyword: "devops cost optimization",
    secondary: ["cloud cost reduction", "aws cost optimization", "infrastructure savings"],
    category: "cost-optimization",
  },
];

// Case study templates
const CASE_STUDY_TEMPLATES = [
  {
    client_name: "TechStartup Inc",
    industry: "SaaS",
    challenge: "Slow deployment cycles (2-3 days) causing missed deadlines and frustrated developers. Manual deployment process prone to errors.",
    solution: "Implemented comprehensive CI/CD pipeline using GitHub Actions, automated testing, and container orchestration with Kubernetes.",
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "AWS EKS", "Terraform"],
    results: {
      "Deployment Speed": "95% faster (2 days → 2 hours)",
      "System Downtime": "Reduced to near zero",
      "Developer Productivity": "3x improvement",
      "Error Rate": "85% reduction in deployment errors",
    },
    testimonial: "CodetoKloud transformed our deployment process. We can now ship features multiple times per day instead of waiting days.",
  },
  {
    client_name: "FinanceApp Corp",
    industry: "FinTech",
    challenge: "Legacy infrastructure on-premises causing high costs ($50K/month) and scalability issues during peak trading hours.",
    solution: "Migrated entire infrastructure to AWS with auto-scaling, implemented Infrastructure as Code, and optimized cloud resources.",
    technologies: ["AWS", "Terraform", "CloudWatch", "Auto Scaling Groups", "RDS"],
    results: {
      "Cost Reduction": "40% savings ($20K/month)",
      "Scalability": "Handles 10x traffic spikes automatically",
      "Reliability": "99.99% uptime achieved",
      "Performance": "50% faster response times",
    },
    testimonial: "The AWS migration was seamless. We're now saving thousands per month while handling more traffic than ever.",
  },
  {
    client_name: "RetailCo",
    industry: "E-commerce",
    challenge: "Monolithic application causing slow feature releases and difficulty scaling during Black Friday sales.",
    solution: "Re-architected to microservices, implemented Kubernetes orchestration, and set up comprehensive monitoring.",
    technologies: ["Kubernetes", "Docker", "Istio", "Prometheus", "Grafana"],
    results: {
      "Feature Velocity": "5x faster releases",
      "Black Friday Performance": "Handled 15x normal traffic",
      "System Resilience": "Zero downtime during peak season",
      "Team Efficiency": "4 independent teams deploying simultaneously",
    },
    testimonial: "Kubernetes adoption was a game-changer. We handled record Black Friday traffic without a single outage.",
  },
  {
    client_name: "HealthTech Solutions",
    industry: "Healthcare",
    challenge: "Compliance requirements across multiple cloud providers causing complexity and security concerns.",
    solution: "Implemented multi-cloud strategy with unified security policies, compliance automation, and centralized monitoring.",
    technologies: ["AWS", "Azure", "Terraform", "Vault", "CloudHealth"],
    results: {
      "Compliance Score": "100% HIPAA compliant",
      "Security Incidents": "Zero breaches in 2 years",
      "Management Efficiency": "70% reduction in overhead",
      "Audit Time": "From 2 weeks to 2 days",
    },
    testimonial: "CodetoKloud's multi-cloud expertise helped us achieve complete HIPAA compliance while reducing management complexity.",
  },
];

// Get next blog topic (rotate based on day of year)
function getNextBlogTopic() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const index = dayOfYear % BLOG_TOPICS.length;
  return BLOG_TOPICS[index];
}

// Get next case study template
function getNextCaseStudy() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const index = Math.floor(dayOfYear / 3) % CASE_STUDY_TEMPLATES.length;
  return CASE_STUDY_TEMPLATES[index];
}

// Generate blog content
function generateBlogContent(topic) {
  const { topic: title, keyword, secondary, category } = topic;

  return `# ${title}

## Introduction

In today's rapidly evolving cloud landscape, understanding ${keyword} has become crucial for organizations looking to stay competitive. This comprehensive guide will walk you through everything you need to know about ${keyword}, including best practices, common pitfalls, and proven strategies.

## What is ${keyword.charAt(0).toUpperCase() + keyword.slice(1)}?

${keyword.charAt(0).toUpperCase() + keyword.slice(1)} is a critical component of modern DevOps practices. Organizations that master ${keyword} typically see significant improvements in ${secondary[0]}, ${secondary[1]}, and overall operational efficiency.

## Key Benefits

### 1. Improved Efficiency
Implementing proper ${keyword} strategies can dramatically improve your team's productivity and reduce time-to-market for new features.

### 2. Cost Optimization
By following ${keyword} best practices, many organizations reduce their infrastructure costs by 30-50% while improving performance.

### 3. Enhanced Scalability
Modern ${keyword} approaches enable your systems to scale automatically based on demand, ensuring optimal performance during peak times.

### 4. Better Security
Proper implementation of ${keyword} includes security best practices that protect your infrastructure and data.

## Best Practices for ${keyword.charAt(0).toUpperCase() + keyword.slice(1)}

### Plan Thoroughly
Before implementing ${keyword}, create a detailed plan that includes:
- Current state assessment
- Goal definition
- Timeline and milestones
- Risk mitigation strategies
- Success metrics

### Start Small, Scale Gradually
Begin with a pilot project to validate your ${keyword} approach before rolling out organization-wide.

### Automate Everything
Automation is key to successful ${keyword}. Use Infrastructure as Code, CI/CD pipelines, and automated testing.

### Monitor Continuously
Implement comprehensive monitoring and alerting to catch issues before they impact users.

### Document Everything
Maintain detailed documentation of your ${keyword} implementation, including architecture decisions, configurations, and procedures.

## Common Challenges and Solutions

### Challenge 1: Complexity
**Solution:** Break down the implementation into smaller, manageable phases. Focus on quick wins first.

### Challenge 2: Team Resistance
**Solution:** Invest in training and demonstrate early successes to build buy-in.

### Challenge 3: Legacy Systems
**Solution:** Use a strangler pattern to gradually migrate legacy components while maintaining business continuity.

### Challenge 4: Cost Management
**Solution:** Implement proper tagging, monitoring, and automated scaling to optimize costs.

## Tools and Technologies

Essential tools for ${keyword} include:
- Infrastructure as Code: Terraform, CloudFormation
- Container Orchestration: Kubernetes, EKS, ECS
- CI/CD: GitHub Actions, Jenkins, GitLab CI
- Monitoring: Prometheus, Grafana, CloudWatch
- Security: AWS IAM, Vault, Security Groups

## Case Study: Real-World Success

A Fortune 500 company recently implemented comprehensive ${keyword} strategies and achieved:
- 60% reduction in deployment time
- 40% cost savings
- 99.99% uptime
- 3x improvement in team productivity

## Step-by-Step Implementation Guide

### Step 1: Assessment
Evaluate your current infrastructure and identify areas for improvement.

### Step 2: Design
Create a detailed architecture that addresses your specific needs and constraints.

### Step 3: Proof of Concept
Build a small-scale implementation to validate your approach.

### Step 4: Pilot Deployment
Deploy to a non-critical environment and gather feedback.

### Step 5: Production Rollout
Gradually roll out to production with proper monitoring and rollback procedures.

### Step 6: Optimization
Continuously monitor, measure, and optimize your implementation.

## Measuring Success

Track these key metrics:
- Deployment frequency
- Lead time for changes
- Mean time to recovery (MTTR)
- Change failure rate
- Infrastructure costs
- System performance
- Team satisfaction

## Conclusion

Mastering ${keyword} is essential for modern DevOps teams. By following the best practices outlined in this guide, you can achieve significant improvements in efficiency, cost, scalability, and security.

Ready to transform your infrastructure? Contact CodetoKloud for expert guidance on ${keyword} implementation.

## Get Expert Help

At CodetoKloud, we specialize in ${secondary[0]}, ${secondary[1]}, and comprehensive DevOps transformations. Our team of experts can help you achieve your infrastructure goals faster and more efficiently.

[Schedule a free consultation](/contact) to discuss your ${keyword} needs.

---

*Keywords: ${keyword}, ${secondary.join(', ')}*
*Category: ${category}*
`;
}

// Generate case study content
function generateCaseStudyContent(template) {
  const { client_name, industry, challenge, solution, technologies, results, testimonial } = template;

  const resultsTable = Object.entries(results)
    .map(([metric, value]) => `| ${metric} | ${value} |`)
    .join('\n');

  const techList = technologies.map(tech => `- ${tech}`).join('\n');

  return `# Case Study: ${client_name} - ${industry} Digital Transformation

## Executive Summary

${client_name}, a leading ${industry} company, partnered with CodetoKloud to modernize their infrastructure and development practices. The results exceeded expectations, delivering significant improvements in performance, cost, and team productivity.

## The Challenge

${client_name} was facing several critical issues:

${challenge}

These challenges were impacting business growth and team morale. They needed a comprehensive solution that would address both immediate pain points and long-term scalability.

## Our Solution

CodetoKloud implemented a comprehensive transformation strategy:

${solution}

### Technologies Used

${techList}

### Implementation Approach

We followed a phased approach:

1. **Discovery Phase (Week 1-2)**
   - Infrastructure audit
   - Team interviews
   - Requirements gathering
   - Solution design

2. **Foundation Phase (Week 3-6)**
   - Set up core infrastructure
   - Implement CI/CD pipelines
   - Establish monitoring and alerting
   - Security hardening

3. **Migration Phase (Week 7-12)**
   - Gradual migration of services
   - Performance optimization
   - Team training
   - Documentation

4. **Optimization Phase (Week 13-16)**
   - Cost optimization
   - Performance tuning
   - Process refinement
   - Knowledge transfer

## The Results

The transformation delivered impressive results across all key metrics:

| Metric | Improvement |
|--------|------------|
${resultsTable}

## Client Testimonial

> "${testimonial}"
>
> *— CTO, ${client_name}*

## Architecture Diagram

\`\`\`mermaid
graph TB
    A[Load Balancer] --> B[Application Servers]
    B --> C[Database]
    B --> D[Cache Layer]
    E[CI/CD Pipeline] --> B
    F[Monitoring] --> B
    F --> C
    G[Auto Scaling] --> B
\`\`\`

## Key Takeaways

### For Similar Organizations

1. **Start with Assessment**: Understand your current state before designing solutions
2. **Phased Approach**: Break down large transformations into manageable phases
3. **Team Involvement**: Include your team in the process for better adoption
4. **Continuous Improvement**: Monitor and optimize continuously

### Technical Insights

- Container orchestration dramatically improved deployment speed
- Infrastructure as Code reduced configuration drift to zero
- Automated testing caught 95% of issues before production
- Comprehensive monitoring enabled proactive issue resolution

## Long-term Impact

Six months after the initial implementation:

- **Sustained Performance**: All improvements maintained or exceeded
- **Team Growth**: Development team expanded by 50% without infrastructure burden
- **Innovation**: Team now focuses on features instead of infrastructure
- **Competitive Edge**: Faster time-to-market improved market position

## Get Similar Results

Is your organization facing similar challenges? CodetoKloud can help you achieve comparable results with a tailored approach designed for your specific needs.

### Our Services Include:

- **Cloud Migration**: AWS, Azure, GCP migration and optimization
- **DevOps Transformation**: CI/CD, automation, and best practices
- **Kubernetes Implementation**: Container orchestration and management
- **Infrastructure as Code**: Terraform, CloudFormation, and more
- **Performance Optimization**: Speed and cost optimization
- **Training & Support**: Team enablement and ongoing support

[Schedule a Free Consultation](/contact) to discuss your transformation goals.

---

## About This Case Study

- **Industry**: ${industry}
- **Company Size**: Enterprise
- **Timeline**: 16 weeks
- **Technologies**: ${technologies.join(', ')}
- **Team Size**: 5 CodetoKloud engineers

---

*Ready to transform your infrastructure? Contact CodetoKloud today.*
`;
}

// Generate Mermaid diagram for case study
function generateMermaidDiagram(template) {
  return `graph TB
    A[Before State] -->|Problem| B[${template.challenge.substring(0, 30)}...]
    B -->|Solution| C[${template.solution.substring(0, 30)}...]
    C -->|Technologies| D[${template.technologies.slice(0, 2).join(', ')}]
    D -->|Results| E[${Object.keys(template.results)[0]}: ${Object.values(template.results)[0]}]
    E -->|Success| F[Client Satisfaction]
`;
}

// Main execution
async function main() {
  console.log('🚀 Starting automated content generation...\n');

  // Debug: Check environment variables
  console.log('🔍 Checking environment variables...');
  console.log(`   SUPABASE_URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'}`);
  console.log(`   SUPABASE_ANON_KEY: ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}`);
  console.log(`   SERVICE_ROLE_KEY: ${process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Set' : '❌ Missing'}`);
  console.log('');

  const results = {
    blog: null,
    caseStudy: null,
    errors: [],
  };

  // Generate blog post
  try {
    console.log('📝 Generating blog post...');
    const blogTopic = getNextBlogTopic();
    console.log(`   Topic: ${blogTopic.topic}`);

    const blogContent = generateBlogContent(blogTopic);
    const slug = blogTopic.topic
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const { data: blog, error: blogError } = await supabase
      .from('blogs')
      .insert({
        title: blogTopic.topic,
        excerpt: `Learn everything about ${blogTopic.keyword} with expert insights and proven strategies for ${new Date().getFullYear()}.`,
        content: blogContent,
        poster_url: '/Images/blog-default.png',
        author_id: '00000000-0000-0000-0000-000000000000',
        slug: slug,
        categories: [blogTopic.category],
      })
      .select()
      .single();

    if (blogError) throw blogError;

    results.blog = {
      success: true,
      title: blog.title,
      id: blog.id,
      slug: blog.slug,
    };

    console.log(`   ✅ Blog published: ${slug}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    results.errors.push(`Blog generation failed: ${errorMessage}`);
    console.error(`   ❌ Blog error: ${errorMessage}`);
    console.error(`   Stack trace:`, errorStack);
  }

  // Generate case study (every 3 days)
  const dayOfMonth = new Date().getDate();
  if (dayOfMonth % 3 === 0) {
    try {
      console.log('\n📊 Generating case study...');
      const caseStudyData = getNextCaseStudy();
      console.log(`   Client: ${caseStudyData.client_name}`);

      const caseStudyContent = generateCaseStudyContent(caseStudyData);
      const diagramCode = generateMermaidDiagram(caseStudyData);
      const slug = `case-study-${caseStudyData.client_name.toLowerCase().replace(/\s+/g, '-')}`;

      const { data: caseStudy, error: caseError } = await supabase
        .from('blogs')
        .insert({
          title: `Case Study: ${caseStudyData.client_name} - ${caseStudyData.industry} Transformation`,
          excerpt: `How ${caseStudyData.client_name} achieved ${Object.values(caseStudyData.results)[0]} and transformed their infrastructure.`,
          content: caseStudyContent,
          poster_url: '/Images/case-study-default.png',
          author_id: '00000000-0000-0000-0000-000000000000',
          slug: slug,
          categories: ['case-study', caseStudyData.industry.toLowerCase()],
        })
        .select()
        .single();

      if (caseError) throw caseError;

      results.caseStudy = {
        success: true,
        title: caseStudy.title,
        id: caseStudy.id,
        slug: caseStudy.slug,
      };

      console.log(`   ✅ Case study published: ${slug}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const errorStack = error instanceof Error ? error.stack : '';
      results.errors.push(`Case study generation failed: ${errorMessage}`);
      console.error(`   ❌ Case study error: ${errorMessage}`);
      console.error(`   Stack trace:`, errorStack);
    }
  } else {
    console.log('\n📊 Skipping case study (runs every 3 days)');
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Content Generation Summary');
  console.log('='.repeat(60));

  if (results.blog) {
    console.log(`✅ Blog: ${results.blog.title}`);
    console.log(`   URL: https://codetokloud.com/blogs/${results.blog.slug}`);
  }

  if (results.caseStudy) {
    console.log(`✅ Case Study: ${results.caseStudy.title}`);
    console.log(`   URL: https://codetokloud.com/blogs/${results.caseStudy.slug}`);
  }

  if (results.errors.length > 0) {
    console.log('\n❌ Errors:');
    results.errors.forEach(err => console.log(`   - ${err}`));
    process.exit(1);
  }

  console.log('\n🎉 All content generated successfully!');
  console.log('='.repeat(60));
}

// Run the script
main().catch(error => {
  console.error('💥 Fatal error:', error);
  process.exit(1);
});
