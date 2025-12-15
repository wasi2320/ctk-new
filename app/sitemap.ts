import { MetadataRoute } from "next";
import { createServerClient } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codetokloud.com";

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/term-condition`,
      lastModified: new Date(),
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
    "/e-commerce",
    "/ed-tech",
    "/fin-tech",
    "/financial-services",
    "/finops",
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog routes
  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    const supabase = createServerClient();

    // Fetch blogs with category information
    const { data: blogs, error: blogsError } = await supabase
      .from("blogs")
      .select(
        `
        id,
        slug,
        title,
        updated_at,
        created_at,
        category_id,
        categories (name)
      `
      )
      .order("updated_at", { ascending: false });

    if (blogsError) {
      console.error("Error fetching blogs for sitemap:", blogsError);
    } else if (blogs) {
      blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug || blog.id}`,
        lastModified: new Date(blog.updated_at || blog.created_at),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }));
    }

    // Fetch categories for category-specific blog listings
    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("id, name, updated_at, created_at")
      .order("name", { ascending: true });

    if (categoriesError) {
      console.error("Error fetching categories for sitemap:", categoriesError);
    } else if (categories) {
      // Add category-specific blog listing pages (if you implement them)
      const categoryRoutes = categories.map((category) => ({
        url: `${baseUrl}/blogs?category=${category.id}`,
        lastModified: new Date(category.updated_at || category.created_at),
        changeFrequency: "weekly" as const,
        priority: 0.5,
      }));

      blogRoutes = [...blogRoutes, ...categoryRoutes];
    }
  } catch (error) {
    console.error("Error in sitemap generation:", error);
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
