import { MetadataRoute } from "next";
import { getAllBlogSummaries } from "@/lib/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codetokloud.com";

  // Fixed content-modification date for static/service pages. Bump this when
  // page content materially changes, do NOT use `new Date()`, which stamps
  // today's date on every build and makes crawlers distrust the lastmod signal.
  const LAST_MODIFIED = new Date("2026-07-06");
  const REFRESHED_LAST_MODIFIED = new Date("2026-08-20");
  const REFRESHED_ROUTES = new Set([
    "/ai",
    "/automated_deployment",
    "/aws-scalable-secure",
    "/cis-kubernetes-benchmark-assessment-case-study",
    "/cloud-migration",
    "/cloud-service",
    "/consulting-and-advisory",
    "/devops",
    "/e-commerce",
    "/ecs-pr-preview-environments",
    "/eks-gitops-microservices-case-study",
    "/ed-tech",
    "/fin-tech",
    "/financial-services",
    "/finops",
    "/goagalia-healthcare-workforce-management",
    "/healthcare",
    "/helm-pipeline",
    "/hipaa-aws-hardening-case-study",
    "/hipaa-compliance",
    "/hybrid-cloud-kubernetes-case-study",
    "/kubernetes-compliance-platform-case-study",
    "/manufacturing",
    "/mobile-app",
    "/monolithic-structure",
    "/multi-brand-aws-fargate-modernization-case-study",
    "/non-profits",
    "/pci-dss-enterprise-case-study",
    "/pci-dss-compliance",
    "/pe-vc",
    "/powering-business",
    "/real-estate",
    "/saas-isv",
    "/scalable-secure-aws",
    "/security-and-compliance",
    "/security-and-deployment",
    "/small-and-mid-size-business",
    "/soc-2-healthcare-aws-case-study",
    "/soc-2-compliance",
    "/strengthening-aws",
    "/ui-ux",
    "/web-solutions",
  ]);

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: REFRESHED_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: REFRESHED_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: REFRESHED_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/term-condition`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Service routes
  const serviceRoutes = [
    "/ai",
    "/automated_deployment",
    "/aws-scalable-secure",
    "/cloud-migration",
    "/cloud-service",
    "/consulting-and-advisory",
    "/devops",
    "/kubernetes",
    "/e-commerce",
    "/ed-tech",
    "/fin-tech",
    "/financial-services",
    "/finops",
    "/hipaa-compliance",
    "/soc-2-compliance",
    "/pci-dss-compliance",
    "/healthcare",
    "/helm-pipeline",
    "/manufacturing",
    "/mobile-app",
    "/monolithic-structure",
    "/non-profits",
    "/pe-vc",
    "/powering-business",
    "/real-estate",
    "/saas-isv",
    "/scalable-secure-aws",
    "/security-and-compliance",
    "/security-and-deployment",
    "/small-and-mid-size-business",
    "/strengthening-aws",
    "/ui-ux",
    "/web-solutions",
    // Case studies
    "/ecs-pr-preview-environments",
    "/goagalia-healthcare-workforce-management",
    "/soc-2-healthcare-aws-case-study",
    "/kubernetes-compliance-platform-case-study",
    "/hipaa-aws-hardening-case-study",
    "/pci-dss-enterprise-case-study",
    "/hybrid-cloud-kubernetes-case-study",
    "/multi-brand-aws-fargate-modernization-case-study",
    "/eks-gitops-microservices-case-study",
    "/cis-kubernetes-benchmark-assessment-case-study",
    // Comparisons
    "/eks-vs-ecs-vs-fargate",
    "/eks-vs-gke-vs-aks",
    "/terraform-vs-cloudformation",
    "/argocd-vs-flux",
    "/github-actions-vs-jenkins-vs-gitlab-ci",
    "/fargate-vs-ec2",
    "/ecs-vs-kubernetes",
    "/terraform-vs-pulumi",
    "/prometheus-vs-datadog",
    // Local
    "/devops-consulting-naperville-il",
    "/devops-kubernetes-consulting-chicago",
    "/devops-consulting-austin",
    "/devops-consulting-dallas",
    "/devops-consulting-denver",
    // Guides / definitional
    "/what-is-a-kubernetes-consultant",
    "/what-does-a-devops-consultant-do",
    "/devops-consulting-cost",
    "/engagement-models",
    "/what-is-gitops",
    "/what-is-finops",
    "/what-is-amazon-eks",
    "/what-is-a-well-architected-review",
    "/what-is-infrastructure-as-code",
    "/platform-engineering-vs-devops",
    "/kubernetes-consulting-cost",
    "/cloud-migration-cost",
    "/soc-2-cost",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: REFRESHED_ROUTES.has(route)
      ? REFRESHED_LAST_MODIFIED
      : LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog routes
  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    const blogs = await getAllBlogSummaries();
    blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug || blog.id}`,
      lastModified: new Date(blog.updated_at || blog.created_at),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

    // Note: category filter URLs (/blogs?category=…) are intentionally excluded.
    // They are query-string variants of the /blogs listing (client-side filter),
    // not distinct indexable pages, so including them creates duplicate-content
    // noise in the sitemap.
  } catch (error) {
    console.error("Error in sitemap generation:", error);
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
