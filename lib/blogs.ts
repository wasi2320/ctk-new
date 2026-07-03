/**
 * Server-side blog data access.
 *
 * These run in Server Components so blog content is present in the initial HTML
 * (crawlable/citable by AI engines) instead of being fetched client-side.
 */

import { createServerClient } from "@/lib/supabase";

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
}

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

/** Fetch a single published blog by slug. Returns null if missing/error. */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
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
      return [];
    }
    return (data as Blog[]) || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
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
      return [];
    }
    return (data as Category[]) || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

/** Slugs for static generation. Returns [] on error (pages render on demand). */
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase.from("blogs").select("slug");
    if (error || !data) return [];
    return data
      .map((row: { slug: string | null }) => row.slug)
      .filter((slug): slug is string => Boolean(slug));
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}
