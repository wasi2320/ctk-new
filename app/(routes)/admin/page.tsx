"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import LoginForm from "./LoginForm";
import BlogUploadForm from "./BlogUploadForm";
import BlogList from "./BlogList";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  poster_url: string;
  author_id: string;
  created_at: string;
}

export default function AdminPage() {
  const [user, setUser] = useState<{
    id: string;
    email: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"create" | "manage">("create");
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user && user.email) {
        setUser({
          id: user.id,
          email: user.email,
        });
      }
      setLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user && session.user.email) {
        setUser({
          id: session.user.id,
          email: session.user.email,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setActiveTab("create"); // Switch to create tab for editing
  };

  const handleEditComplete = () => {
    setEditingBlog(null);
    setActiveTab("manage"); // Switch back to manage tab
  };

  const handleCancelEdit = () => {
    setEditingBlog(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#000209]"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Blog Admin Panel
              </h1>
              <p className="text-gray-600">Welcome back, {user.email}</p>
            </div>
            <button
              onClick={() => supabase.auth.signOut()}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
            >
              Logout
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-8">
            <button
              onClick={() => {
                setActiveTab("create");
                setEditingBlog(null);
              }}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "create"
                  ? "border-[#000209] text-[#000209]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {editingBlog ? "Edit Blog" : "Create New Blog"}
            </button>
            <button
              onClick={() => setActiveTab("manage")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "manage"
                  ? "border-[#000209] text-[#000209]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Manage Blogs
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "create" ? (
          <BlogUploadForm
            user={user}
            editingBlog={editingBlog}
            onEditComplete={handleEditComplete}
            onCancelEdit={handleCancelEdit}
          />
        ) : (
          <BlogList onEditBlog={handleEditBlog} />
        )}
      </div>
    </div>
  );
}
