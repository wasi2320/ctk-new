import type { Metadata } from "next";
import { getAllBlogSummaries, getAllCategories } from "@/lib/blogs";
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
    getAllBlogSummaries(),
    getAllCategories(),
  ]);

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* AWS-aligned gradient hero */}
      <section className="bg-gradient-to-br from-[#16212e] via-[#0d5cad] to-[#2b8fe8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#9fd0ff] mb-4">
            Insights &amp; Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Cloud, DevOps &amp; AI Insights
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Field notes and guides on AWS, Kubernetes, DevOps automation, and
            compliance from the CodetoKloud engineering team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <BlogsList blogs={blogs} categories={categories} />
      </div>
    </div>
  );
}
