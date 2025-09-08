"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  poster_url: string;
  author_id: string;
  created_at: string;
  category_id?: string;
  categories?: {
    name: string;
  };
}

export default function BlogPostPage() {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (params.slug) {
      fetchBlog(params.slug as string);
    }
  }, [params.slug]);

  const fetchBlog = async (slug: string) => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select(
          `
          *,
          categories (
            name
          )
        `
        )
        .eq("slug", slug)
        .single();

      if (error) throw error;

      // Debug logging
      console.log("Fetched blog:", data);
      console.log("Blog excerpt:", data?.excerpt);
      console.log("Blog fields:", Object.keys(data || {}));

      setBlog(data);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#000209]"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            {error || "The blog post you are looking for does not exist."}
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#000209] hover:bg-[#000209]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="mb-8">
          <Image
            src={blog.poster_url}
            alt={blog.title}
            width={800}
            height={384}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

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
