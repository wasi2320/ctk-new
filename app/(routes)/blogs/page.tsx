"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  poster_url: string;
  created_at: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };

  // Function to strip markdown tags from excerpt display
  const stripMarkdown = (text: string): string => {
    if (!text) return "";

    return text
      .replace(/#{1,6}\s+/g, "") // Remove headers (# ## ### etc)
      .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold (**text**)
      .replace(/\*(.*?)\*/g, "$1") // Remove italic (*text*)
      .replace(/`(.*?)`/g, "$1") // Remove inline code (`code`)
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove links [text](url) -> text
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "") // Remove images ![alt](url)
      .replace(/>\s*(.*)/g, "$1") // Remove blockquotes (> text)
      .replace(/^\s*[-*+]\s+/gm, "") // Remove list markers (- * +)
      .replace(/^\s*\d+\.\s+/gm, "") // Remove numbered list markers (1. 2. etc)
      .replace(/\*\*\*(.*?)\*\*\*/g, "$1") // Remove bold italic (***text***)
      .replace(/~~(.*?)~~/g, "$1") // Remove strikethrough (~~text~~)
      .replace(/\n+/g, " ") // Replace multiple newlines with space
      .replace(/\s+/g, " ") // Replace multiple spaces with single space
      .trim();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#000209]"></div>
      </div>
    );
  }

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

        {/* Blog Grid */}
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts available yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Blog Image */}
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={blog.poster_url}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {formatDate(blog.created_at)}
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt
                      ? stripMarkdown(blog.excerpt)
                      : "No excerpt available"}
                  </p>

                  <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#000209] hover:bg-[#000209]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209] transition-colors duration-200"
                  >
                    Read Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
