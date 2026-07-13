import type { Metadata } from "next";
import { getAllBlogs, getAllCategories } from "@/lib/blogs";
import { SITE_URL } from "@/lib/structured-data";
import BlogsList from "./BlogsList";

// Always render the latest blog list (no ISR cache) so newly published posts
// appear immediately. Still fully server-rendered, so the list stays crawlable.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Cloud, DevOps & AI Insights | CodetoKloud",
  description:
    "Insights and guides on AWS cloud infrastructure, DevOps, AI automation, and compliance from the CodetoKloud team.",
  alternates: { canonical: `${SITE_URL}/blogs` },
};

export default async function BlogsPage() {
  const [blogs, categories] = await Promise.all([
    getAllBlogs(),
    getAllCategories(),
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, updates, and stories from our team
          </p>
        </div>

        <BlogsList blogs={blogs} categories={categories} />
      </div>
    </div>
  );
}
