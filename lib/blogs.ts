/**
 * Server-side blog data access.
 *
 * These run in Server Components so blog content is present in the initial HTML
 * (crawlable/citable by AI engines) instead of being fetched client-side.
 */

import { createServerClient } from "@/lib/supabase";
import { LOCAL_BLOG_CATEGORY, LOCAL_BLOGS } from "@/lib/local-blogs";

export { stripMarkdown } from "@/lib/markdown";

export interface BlogCategoryRef {
  name: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  poster_url: string;
  author_id: string;
  created_at: string;
  updated_at?: string;
  category_id?: string;
  categories?: BlogCategoryRef | null;
  poster_alt?: string;
  seo_keywords?: string[];
  related_slugs?: string[];
  cta?: {
    heading: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}

export type BlogSummary = Omit<Blog, "content">;

export interface Category {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

const BLOG_SELECT = `
  *,
  categories (
    name
  )
`;

const BLOG_SUMMARY_SELECT = `
  id,
  title,
  slug,
  excerpt,
  poster_url,
  author_id,
  created_at,
  updated_at,
  category_id,
  categories (
    name
  )
`;

const localBlogSlugs = new Set(LOCAL_BLOGS.map((blog) => blog.slug));

function sortNewestFirst<T extends Pick<Blog, "created_at">>(blogs: T[]): T[] {
  return blogs.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
}

function localBlogSummaries(): BlogSummary[] {
  return LOCAL_BLOGS.map(({ content: _content, ...blog }) => blog);
}

/** Fetch a single published blog by slug. Returns null if missing/error. */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const localBlog = LOCAL_BLOGS.find((blog) => blog.slug === slug);
  if (localBlog) return localBlog;

  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("blogs")
      .select(BLOG_SELECT)
      .eq("slug", slug)
      .single();

    if (error) return null;
    return data as Blog;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}

/** Fetch all blogs, newest first. Returns [] on error. */
export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("blogs")
      .select(BLOG_SELECT)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching blogs:", error);
      return [...LOCAL_BLOGS];
    }
    const remoteBlogs = ((data as Blog[]) || []).filter(
      (blog) => !localBlogSlugs.has(blog.slug),
    );
    return sortNewestFirst([...LOCAL_BLOGS, ...remoteBlogs]);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [...LOCAL_BLOGS];
  }
}

/** Fetch card metadata without sending every article body to the client. */
export async function getAllBlogSummaries(): Promise<BlogSummary[]> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("blogs")
      .select(BLOG_SUMMARY_SELECT)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching blog summaries:", error);
      return localBlogSummaries();
    }

    const normalizedRemoteBlogs = (data || []).map((blog) => ({
      ...blog,
      categories: Array.isArray(blog.categories)
        ? blog.categories[0] || null
        : blog.categories,
    })) as BlogSummary[];
    const remoteBlogs = normalizedRemoteBlogs.filter(
      (blog) => !localBlogSlugs.has(blog.slug),
    );
    return sortNewestFirst([...localBlogSummaries(), ...remoteBlogs]);
  } catch (error) {
    console.error("Error fetching blog summaries:", error);
    return localBlogSummaries();
  }
}

/** Resolve curated local related-article cards without another database query. */
export function getRelatedLocalBlogs(slugs: string[]): BlogSummary[] {
  const order = new Map(slugs.map((slug, index) => [slug, index]));
  return localBlogSummaries()
    .filter((blog) => order.has(blog.slug))
    .sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0));
}

/** Fetch all categories, alphabetical. Returns [] on error. */
export async function getAllCategories(): Promise<Category[]> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("categories")
      .select("id, name, description, created_at")
      .order("name", { ascending: true });

    if (error) {
      console.error("Error fetching categories:", error);
      return [LOCAL_BLOG_CATEGORY];
    }
    const remoteCategories = (data as Category[]) || [];
    return remoteCategories.some(
      (category) =>
        category.id === LOCAL_BLOG_CATEGORY.id ||
        category.name.toLowerCase() === LOCAL_BLOG_CATEGORY.name.toLowerCase(),
    )
      ? remoteCategories
      : [...remoteCategories, LOCAL_BLOG_CATEGORY].sort((a, b) =>
          a.name.localeCompare(b.name),
        );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [LOCAL_BLOG_CATEGORY];
  }
}

/** Slugs for static generation. Returns [] on error (pages render on demand). */
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase.from("blogs").select("slug");
    if (error || !data) return LOCAL_BLOGS.map((blog) => blog.slug);
    const remoteSlugs = data
      .map((row: { slug: string | null }) => row.slug)
      .filter((slug): slug is string => Boolean(slug));
    return [...new Set([...LOCAL_BLOGS.map((blog) => blog.slug), ...remoteSlugs])];
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return LOCAL_BLOGS.map((blog) => blog.slug);
  }
}
