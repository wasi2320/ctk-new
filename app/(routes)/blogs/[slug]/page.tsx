import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import {
  getBlogBySlug,
  getAllBlogSlugs,
  getRelatedLocalBlogs,
  stripMarkdown,
} from "@/lib/blogs";
import { SITE_URL, blogPostingSchema } from "@/lib/structured-data";
import JsonLd from "@/app/components/JsonLd";

// ISR: cache each post but refresh within a minute so edits show quickly.
// New slugs render on demand (dynamicParams defaults to true).
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog Post Not Found | CodetoKloud" };
  }

  const description = blog.excerpt
    ? stripMarkdown(blog.excerpt).slice(0, 160)
    : `Read "${blog.title}" on the CodetoKloud blog.`;
  const url = `${SITE_URL}/blogs/${blog.slug}`;
  const imageUrl = blog.poster_url
    ? /^https?:\/\//i.test(blog.poster_url)
      ? blog.poster_url
      : `${SITE_URL}${
          blog.poster_url.startsWith("/")
            ? blog.poster_url
            : `/${blog.poster_url}`
        }`
    : undefined;

  return {
    title: `${blog.title} | CodetoKloud`,
    description,
    keywords: blog.seo_keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description,
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at || blog.created_at,
      images: imageUrl
        ? [{ url: imageUrl, alt: blog.poster_alt || blog.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function readingTime(content: string) {
  const words = stripMarkdown(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const articleSchema = blogPostingSchema({
    title: blog.title,
    description: blog.excerpt
      ? stripMarkdown(blog.excerpt).slice(0, 300)
      : blog.title,
    slug: blog.slug,
    image: blog.poster_url,
    datePublished: blog.created_at,
    dateModified: blog.updated_at,
    categoryName: blog.categories?.name,
  });
  const relatedBlogs = getRelatedLocalBlogs(blog.related_slugs || []);
  const cta = blog.cta || {
    heading: "Turn this guidance into a practical cloud plan",
    body: "Bring your AWS, DevOps, Kubernetes, security, or AI automation concern to a focused 30-minute review. We will confirm fit and identify three useful priorities.",
    primaryLabel: "Book an AWS review",
    primaryHref: "/contact",
    secondaryLabel: "Explore DevOps services",
    secondaryHref: "/devops",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={articleSchema} />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blogs
        </Link>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500 flex flex-wrap items-center gap-x-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(blog.created_at)}</span>
              <span aria-hidden="true">•</span>
              <span>{readingTime(blog.content)} min read</span>
            </div>
            {blog.categories?.name && (
              <span className="px-3 py-1 bg-[#0d1526]/10 text-[#0d1526] text-sm font-medium rounded-full">
                {blog.categories.name}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>
          {blog.excerpt && (
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              {stripMarkdown(blog.excerpt)}
            </p>
          )}
        </header>

        {/* Featured Image */}
        {blog.poster_url && (
          <div className="mb-8">
            <Image
              src={blog.poster_url}
              alt={blog.poster_alt || blog.title}
              width={800}
              height={384}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="markdown-content">
          <ReactMarkdown
            components={{
              // Custom component for images with lazy loading
              img: ({ node, ...props }) => (
                <Image
                  {...props}
                  src={props.src || ""}
                  alt={props.alt || "Blog content image"}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              ),
              // Custom component for code blocks
              code: ({ className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                const isInline = !className || !className.includes("language-");
                return !isInline && match ? (
                  <pre>
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                ) : (
                  <code {...props}>{children}</code>
                );
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        {relatedBlogs.length > 0 && (
          <aside className="mt-14" aria-labelledby="related-articles-heading">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold tracking-[0.16em] uppercase text-[#0972d3] mb-2">
                  Continue the series
                </p>
                <h2
                  id="related-articles-heading"
                  className="text-2xl md:text-3xl font-bold text-gray-900"
                >
                  Related AI and DevOps guides
                </h2>
              </div>
              <Link
                href="/blogs"
                className="hidden sm:inline text-sm font-semibold text-[#0972d3] hover:text-[#0b5cad]"
              >
                View all articles
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {relatedBlogs.map((related) => (
                <article
                  key={related.slug}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <Image
                    src={related.poster_url}
                    alt={related.poster_alt || related.title}
                    width={600}
                    height={315}
                    className="aspect-[1200/630] w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 leading-snug mb-3">
                      {related.title}
                    </h3>
                    <Link
                      href={`/blogs/${related.slug}`}
                      className="text-sm font-semibold text-[#0972d3] hover:text-[#0b5cad]"
                    >
                      Read the guide
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-[#0d1526] hover:text-[#0d1526]/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Link>
            <div className="text-sm text-gray-500">
              Published on {formatDate(blog.created_at)}
            </div>
          </div>
        </footer>

        {/* Lead-gen CTA band */}
        <div className="mt-14 rounded-2xl overflow-hidden bg-gradient-to-br from-[#16212e] via-[#0d5cad] to-[#2b8fe8] text-white px-6 md:px-10 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {cta.heading}
          </h2>
          <p className="text-white/85 max-w-2xl mx-auto mb-6">
            {cta.body}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={cta.primaryHref}
              className="rounded-full px-6 py-3 bg-[#ff9900] text-[#16212e] font-semibold hover:brightness-95 transition"
            >
              {cta.primaryLabel}
            </Link>
            <Link
              href={cta.secondaryHref}
              className="rounded-full px-6 py-3 border border-white/30 text-white font-semibold hover:bg-white/10 transition"
            >
              {cta.secondaryLabel}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
