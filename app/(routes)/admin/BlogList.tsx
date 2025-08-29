"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Edit, Trash2, Eye, Calendar, User, RefreshCw } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
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

interface BlogListProps {
  onEditBlog: (blog: Blog) => void;
}

export default function BlogList({ onEditBlog }: BlogListProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setMessage("");
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
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setMessage("Error fetching blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchBlogs();
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      setLoading(true);

      // Get the blog to extract poster URL for deletion
      const blog = blogs.find((b) => b.id === blogId);

      // Delete from database
      const { error: deleteError } = await supabase
        .from("blogs")
        .delete()
        .eq("id", blogId);

      if (deleteError) throw deleteError;

      // Delete poster image from storage if it exists
      if (blog?.poster_url) {
        try {
          const posterPath = blog.poster_url.split("/").pop();
          if (posterPath) {
            await supabase.storage.from("blog-posters").remove([posterPath]);
          }
        } catch (storageError) {
          console.warn("Could not delete poster image:", storageError);
        }
      }

      setMessage("Blog deleted successfully!");
      fetchBlogs(); // Refresh the list
    } catch (error) {
      console.error("Error deleting blog:", error);
      setMessage("Error deleting blog");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#000209]"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Manage Existing Blogs ({blogs.length})
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              View, edit, and delete your published blogs
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw
              className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </button>
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className="mx-6 mt-4 p-3 rounded-md bg-green-50 text-green-700 border border-green-200">
          {message}
        </div>
      )}

      {/* Blog List */}
      <div className="divide-y divide-gray-200">
        {blogs.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-500">
            <p>No blogs found. Create your first blog above!</p>
          </div>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="p-6">
              <div className="flex items-start space-x-4">
                {/* Blog Poster */}
                <div className="flex-shrink-0">
                  <Image
                    src={blog.poster_url}
                    alt={blog.title}
                    width={96}
                    height={64}
                    className="w-24 h-16 object-cover rounded-md border"
                  />
                </div>

                {/* Blog Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {truncateText(blog.excerpt, 120)}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(blog.created_at)}
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {blog.author_id}
                        </div>
                        {blog.categories?.name && (
                          <div className="flex items-center">
                            <span className="px-2 py-1 bg-[#000209]/10 text-[#000209] text-xs font-medium rounded-full">
                              {blog.categories.name}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => setSelectedBlog(blog)}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                        title="Preview Blog"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onEditBlog(blog)}
                        className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                        title="Edit Blog"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                        title="Delete Blog"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Blog Preview Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                {selectedBlog.title}
              </h3>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="mb-6">
                <Image
                  src={selectedBlog.poster_url}
                  alt={selectedBlog.title}
                  width={800}
                  height={256}
                  className="w-full max-h-64 object-cover rounded-lg"
                />
              </div>

              <div className="mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(selectedBlog.created_at)}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {selectedBlog.author_id}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Excerpt:
                  </h4>
                  <p className="text-gray-600">{selectedBlog.excerpt}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium text-gray-700">
                    Content:
                  </h4>
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="text-sm text-[#000209] hover:text-[#000209]/80"
                  >
                    {showPreview ? "Show Markdown" : "Show Preview"}
                  </button>
                </div>

                <div data-color-mode="light">
                  <MDEditor.Markdown source={selectedBlog.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
