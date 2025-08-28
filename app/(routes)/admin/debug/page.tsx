"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function DebugPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkDatabase();
  }, []);

  const checkDatabase = async () => {
    try {
      // Fetch all blogs
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      console.log("All blogs:", data);
      setBlogs(data || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const createTestBlog = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .insert({
          title: "Test Blog Post",
          excerpt: "This is a test excerpt to verify the field works",
          content:
            "# Test Content\n\nThis is a test blog post to verify the database structure.",
          poster_url: "https://via.placeholder.com/400x200",
          author_id: "test-user-id",
          created_at: new Date().toISOString(),
        })
        .select();

      if (error) throw error;

      console.log("Test blog created:", data);
      alert("Test blog created! Check console for details.");
      checkDatabase();
    } catch (error: any) {
      console.error("Error creating test blog:", error);
      alert(`Error: ${error.message}`);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Database Debug Page</h1>

      <div className="mb-6">
        <button
          onClick={createTestBlog}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Test Blog
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Database Structure Check</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p>
            <strong>Expected fields:</strong> id, title, excerpt, content,
            poster_url, author_id, created_at, updated_at
          </p>
          <p>
            <strong>Total blogs:</strong> {blogs.length}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Blog Data</h2>
        {blogs.length === 0 ? (
          <p className="text-gray-500">No blogs found</p>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="border p-4 rounded">
                <h3 className="font-semibold">Blog {index + 1}</h3>
                <div className="text-sm space-y-1">
                  <p>
                    <strong>ID:</strong> {blog.id}
                  </p>
                  <p>
                    <strong>Title:</strong> {blog.title}
                  </p>
                  <p>
                    <strong>Excerpt:</strong> {blog.excerpt || "NULL"}
                  </p>
                  <p>
                    <strong>Content length:</strong> {blog.content?.length || 0}
                  </p>
                  <p>
                    <strong>Fields:</strong> {Object.keys(blog).join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Console Logs</h2>
        <p className="text-sm text-gray-600">
          Check your browser console for detailed logs
        </p>
      </div>
    </div>
  );
}
