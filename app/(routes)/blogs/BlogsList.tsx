"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { stripMarkdown } from "@/lib/markdown";
import type { Blog, Category } from "@/lib/blogs";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface BlogsListProps {
  blogs: Blog[];
  categories: Category[];
}

/**
 * Interactive category filter over a pre-fetched blog list. Data arrives as
 * props from the server component, so the full grid is present in the initial
 * server-rendered HTML (crawlable) before any JS runs.
 */
export default function BlogsList({ blogs, categories }: BlogsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category_id === selectedCategory)
    : blogs;

  const handleCategoryFilter = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? "" : categoryId);
  };

  return (
    <>
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">
            Filter by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handleCategoryFilter("")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === ""
                  ? "bg-[#000209] text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-[#000209] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Blog Grid */}
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {selectedCategory
              ? "No blog posts found in this category."
              : "No blog posts available yet."}
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={blog.poster_url}
                  alt={blog.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-500">
                    {formatDate(blog.created_at)}
                  </div>
                  {blog.categories?.name && (
                    <span className="px-2 py-1 bg-[#000209]/10 text-[#000209] text-xs font-medium rounded-full">
                      {blog.categories.name}
                    </span>
                  )}
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
                  href={`/blogs/${blog.slug || blog.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#000209] hover:bg-[#000209]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209] transition-colors duration-200"
                >
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
