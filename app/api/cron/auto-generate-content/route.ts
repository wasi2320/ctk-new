import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with service role key for admin access
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Topic database - rotates through these topics automatically
const BLOG_TOPICS = [
  // Cloud Migration Topics
  {
    topic: "AWS Cloud Migration: Complete Step-by-Step Guide for 2026",
    keyword: "aws cloud migration",
    secondary: ["cloud migration services", "aws migration checklist", "enterprise cloud migration"],
    category: "cloud-migration",
  },
  {
    topic: "Azure vs AWS: Which Cloud Platform is Right for Your Business?",
    keyword: "azure vs aws",
    secondary: ["cloud platform comparison", "azure migration", "aws vs azure 2026"],
    category: "cloud-migration",
  },
  {
    topic: "Google Cloud Platform Migration: Best Practices and Strategies",
    keyword: "gcp migration",
    secondary: ["google cloud migration", "gcp best practices", "migrate to google cloud"],
    category: "cloud-migration",
  },

  // Kubernetes Topics
  {
    topic: "Kubernetes Cost Optimization: 10 Proven Strategies to Cut Spending",
    keyword: "kubernetes cost optimization",
    secondary: ["k8s cost reduction", "kubernetes pricing", "reduce kubernetes costs"],
    category: "devops",
  },
  {
    topic: "Production Kubernetes Deployment: Security Best Practices 2026",
    keyword: "kubernetes security",
    secondary: ["k8s security best practices", "secure kubernetes", "kubernetes production"],
    category: "devops",
  },
  {
    topic: "Kubernetes vs Docker Swarm: Complete Comparison for 2026",
    keyword: "kubernetes vs docker swarm",
    secondary: ["container orchestration comparison", "k8s vs swarm", "best container orchestration"],
    category: "devops",
  },

  // CI/CD Topics
  {
    topic: "GitHub Actions vs GitLab CI: Which CI/CD Tool to Choose in 2026?",
    keyword: "github actions vs gitlab ci",
    secondary: ["ci/cd comparison", "best ci/cd tool", "github actions tutorial"],
    category: "devops",
  },
  {
    topic: "CI/CD Pipeline Best Practices: Building Reliable Deployments",
    keyword: "ci/cd pipeline best practices",
    secondary: ["cicd best practices", "deployment pipeline", "automated deployment"],
    category: "devops",
  },
  {
    topic: "Automated Deployment Strategies: Zero-Downtime Releases",
    keyword: "zero downtime deployment",
    secondary: ["blue green deployment", "canary deployment", "rolling deployment"],
    category: "devops",
  },

  // Infrastructure as Code
  {
    topic: "Terraform vs CloudFormation: Complete IaC Comparison 2026",
    keyword: "terraform vs cloudformation",
    secondary: ["infrastructure as code comparison", "terraform benefits", "iac tools"],
    category: "devops",
  },
  {
    topic: "Infrastructure as Code Best Practices: Terraform Edition",
    keyword: "terraform best practices",
    secondary: ["terraform modules", "iac best practices", "terraform state management"],
    category: "devops",
  },
  {
    topic: "Getting Started with Terraform: Beginner's Complete Guide",
    keyword: "terraform tutorial",
    secondary: ["learn terraform", "terraform for beginners", "terraform aws"],
    category: "devops",
  },

  // DevOps Culture
  {
    topic: "DevOps Transformation: How to Implement DevOps in Your Organization",
    keyword: "devops transformation",
    secondary: ["implement devops", "devops culture", "devops adoption"],
    category: "devops",
  },
  {
    topic: "Site Reliability Engineering (SRE): Principles and Best Practices",
    keyword: "site reliability engineering",
    secondary: ["sre best practices", "sre vs devops", "what is sre"],
    category: "devops",
  },

  // Monitoring & Observability
  {
    topic: "Prometheus and Grafana: Complete Monitoring Setup Guide",
    keyword: "prometheus grafana setup",
    secondary: ["kubernetes monitoring", "prometheus tutorial", "grafana dashboard"],
    category: "devops",
  },
  {
    topic: "Observability vs Monitoring: Understanding the Difference",
    keyword: "observability vs monitoring",
    secondary: ["what is observability", "observability tools", "monitoring best practices"],
    category: "devops",
  },

  // Cost Optimization
  {
    topic: "Cloud Cost Optimization: 15 Ways to Reduce Your AWS Bill",
    keyword: "aws cost optimization",
    secondary: ["reduce aws costs", "cloud cost management", "aws pricing optimization"],
    category: "cloud-migration",
  },
  {
    topic: "FinOps: The Complete Guide to Cloud Financial Management",
    keyword: "finops",
    secondary: ["cloud financial management", "finops framework", "cloud cost optimization"],
    category: "cloud-migration",
  },

  // Emerging Technologies
  {
    topic: "GitOps: Modern Application Deployment with ArgoCD",
    keyword: "gitops",
    secondary: ["argocd tutorial", "gitops workflow", "gitops best practices"],
    category: "devops",
  },
  {
    topic: "Service Mesh with Istio: When and How to Implement",
    keyword: "istio service mesh",
    secondary: ["service mesh tutorial", "istio kubernetes", "microservices service mesh"],
    category: "devops",
  },
];

// Case study templates - auto-generates from these templates
const CASE_STUDY_TEMPLATES = [
  {
    client_name: "TechStartup Inc",
    industry: "SaaS",
    challenge: "Slow deployment cycles taking 2-3 days, manual processes causing errors, and inability to scale during peak traffic",
    solution: "Implemented automated CI/CD pipeline with GitHub Actions, containerized applications with Docker, and deployed on Kubernetes for auto-scaling",
    technologies: ["Kubernetes", "GitHub Actions", "Docker", "AWS EKS", "Terraform"],
    results: {
      "Deployment Speed": "95% faster (2 days to 2 hours)",
      "System Downtime": "Reduced to near zero",
      "Developer Productivity": "3x increase",
      "Infrastructure Costs": "40% reduction",
    },
    timeline: "8 weeks",
    team_size: "4 engineers",
  },
  {
    client_name: "FinanceApp Solutions",
    industry: "FinTech",
    challenge: "Legacy monolithic application on physical servers, high operational costs, security compliance issues, and poor disaster recovery",
    solution: "Migrated to AWS cloud with microservices architecture, implemented infrastructure as code with Terraform, and established automated compliance monitoring",
    technologies: ["AWS", "Terraform", "Kubernetes", "GitLab CI", "Prometheus"],
    results: {
      "Infrastructure Costs": "50% reduction",
      "Deployment Frequency": "From monthly to daily",
      "System Availability": "99.99% uptime",
      "Compliance Violations": "Zero in 6 months",
    },
    timeline: "12 weeks",
    team_size: "6 engineers",
  },
  {
    client_name: "E-Commerce Platform",
    industry: "E-Commerce",
    challenge: "Unable to handle Black Friday traffic, frequent outages during peak times, slow page load times affecting conversion rates",
    solution: "Cloud migration to GCP with auto-scaling architecture, CDN implementation, and performance optimization using Kubernetes and Redis caching",
    technologies: ["Google Cloud Platform", "Kubernetes", "Redis", "Cloud CDN", "ArgoCD"],
    results: {
      "Traffic Capacity": "10x increase",
      "Page Load Time": "70% faster",
      "Conversion Rate": "25% improvement",
      "Black Friday Uptime": "100%",
    },
    timeline: "10 weeks",
    team_size: "5 engineers",
  },
  {
    client_name: "HealthTech Provider",
    industry: "Healthcare",
    challenge: "HIPAA compliance concerns with legacy systems, manual backup processes, data security vulnerabilities, and lack of audit trails",
    solution: "Azure cloud migration with HIPAA-compliant architecture, automated backup and disaster recovery, encryption at rest and in transit, comprehensive logging and monitoring",
    technologies: ["Azure", "Kubernetes (AKS)", "Azure Security Center", "Terraform", "ELK Stack"],
    results: {
      "Security Incidents": "Zero breaches",
      "HIPAA Compliance": "100% certified",
      "Backup Recovery Time": "From 24 hours to 15 minutes",
      "Audit Trail Coverage": "Complete visibility",
    },
    timeline: "16 weeks",
    team_size: "7 engineers",
  },
];

async function getNextBlogTopic() {
  // Get the count of existing blogs to determine which topic to use next
  const { count } = await supabase
    .from("blogs")
    .select("*", { count: "exact", head: true });

  const topicIndex = (count || 0) % BLOG_TOPICS.length;
  return BLOG_TOPICS[topicIndex];
}

async function getNextCaseStudyTemplate() {
  // Rotate through case study templates
  const { count } = await supabase
    .from("blogs")
    .select("*", { count: "exact", head: true })
    .ilike("title", "%case study%");

  const templateIndex = (count || 0) % CASE_STUDY_TEMPLATES.length;
  return CASE_STUDY_TEMPLATES[templateIndex];
}

export async function GET(request: NextRequest) {
  try {
    // Verify cron secret to prevent unauthorized access
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    interface BlogResult {
      success: boolean;
      title: string;
      id: string;
    }

    interface CaseStudyResult {
      success: boolean;
      title: string;
      id: string;
    }

    const results: {
      blog: BlogResult | null;
      caseStudy: CaseStudyResult | null;
      errors: string[];
    } = {
      blog: null,
      caseStudy: null,
      errors: [],
    };

    // Generate and publish blog post
    try {
      const blogTopic = await getNextBlogTopic();

      // Generate blog content
      const blogResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/ai/generate-blog`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: blogTopic.topic,
          target_keyword: blogTopic.keyword,
          secondary_keywords: blogTopic.secondary,
          word_count: 2000,
        }),
      });

      const blogData = await blogResponse.json();

      // Save to database
      const { data: blog, error: blogError } = await supabase
        .from("blogs")
        .insert({
          title: blogTopic.topic,
          excerpt: `Learn everything about ${blogTopic.keyword} with expert insights and proven strategies.`,
          content: blogData.content,
          poster_url: "/Images/blog-default.png",
          author_id: "00000000-0000-0000-0000-000000000000", // System user
          slug: blogTopic.topic
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),
        })
        .select()
        .single();

      if (blogError) throw blogError;
      results.blog = { success: true, title: blog.title, id: blog.id };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      results.errors.push(`Blog generation failed: ${errorMessage}`);
    }

    // Generate and publish case study (every 3 days)
    const dayOfMonth = new Date().getDate();
    if (dayOfMonth % 3 === 0) {
      try {
        const caseStudyTemplate = await getNextCaseStudyTemplate();

        // Generate case study content
        const caseStudyResponse = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/ai/generate-case-study`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(caseStudyTemplate),
          }
        );

        const caseStudyData = await caseStudyResponse.json();

        // Save to database
        const { data: caseStudy, error: caseError } = await supabase
          .from("blogs")
          .insert({
            title: `Case Study: ${caseStudyTemplate.client_name} - ${caseStudyTemplate.industry} Success Story`,
            excerpt: `How ${caseStudyTemplate.client_name} achieved ${Object.values(caseStudyTemplate.results)[0]} with modern cloud infrastructure.`,
            content: caseStudyData.content,
            poster_url: "/Images/case-study-default.png",
            author_id: "00000000-0000-0000-0000-000000000000",
            slug: `case-study-${caseStudyTemplate.client_name.toLowerCase().replace(/\s+/g, "-")}`,
          })
          .select()
          .single();

        if (caseError) throw caseError;
        results.caseStudy = { success: true, title: caseStudy.title, id: caseStudy.id };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        results.errors.push(`Case study generation failed: ${errorMessage}`);
      }
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      results,
    });
  } catch (error) {
    console.error("Auto-generation error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { error: "Failed to auto-generate content", details: errorMessage },
      { status: 500 }
    );
  }
}
