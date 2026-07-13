import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import {
  getBlogBySlug,
  getAllBlogSlugs,
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

  return {
    title: `${blog.title} | CodetoKloud`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description,
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at || blog.created_at,
      images: blog.poster_url ? [{ url: blog.poster_url }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: blog.poster_url ? [blog.poster_url] : undefined,
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
            <div className="text-sm text-gray-500 flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(blog.created_at)}
            </div>
            {blog.categories?.name && (
              <span className="px-3 py-1 bg-[#000209]/10 text-[#000209] text-sm font-medium rounded-full">
                {blog.categories.name}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>
        </header>

        {/* Featured Image */}
        {blog.poster_url && (
          <div className="mb-8">
            <Image
              src={blog.poster_url}
              alt={blog.title}
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

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-[#000209] hover:text-[#000209]/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Link>
            <div className="text-sm text-gray-500">
              Published on {formatDate(blog.created_at)}
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
