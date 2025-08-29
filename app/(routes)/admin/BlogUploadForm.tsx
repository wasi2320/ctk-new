"use client";

import { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import MDEditor from "@uiw/react-md-editor";
import { Upload, Save, Eye, Edit, Plus, Tag } from "lucide-react";
import Image from "next/image";
import CategoryModal from "./CategoryModal";
import Toast from "../../components/ui/Toast";

interface Category {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  poster_url: string;
  author_id: string;
  created_at: string;
  category_id?: string;
}

interface BlogUploadFormProps {
  user: {
    id: string;
    email: string;
  };
  editingBlog?: Blog | null;
  onEditComplete?: () => void;
  onCancelEdit?: () => void;
}

export default function BlogUploadForm({
  user,
  editingBlog,
  onEditComplete,
  onCancelEdit,
}: BlogUploadFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [posterPreview, setPosterPreview] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    isVisible: boolean;
  }>({ message: "", type: "success", isVisible: false });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize form when editing a blog
  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
      setPosterPreview(editingBlog.poster_url);
      setSelectedCategory(editingBlog.category_id || "");
      setPosterFile(null);
    } else {
      // Reset form for new blog
      setTitle("");
      setContent("");
      setPosterFile(null);
      setPosterPreview("");
      setSelectedCategory("");
      setMessage("");
    }
  }, [editingBlog]);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();

      if (response.ok) {
        setCategories(data.categories || []);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ ...toast, isVisible: false });
  };

  // Function to generate excerpt from content (first 3 lines)
  const generateExcerpt = (content: string): string => {
    if (!content) return "";

    // Split content into lines and filter out empty lines
    const lines = content.split("\n").filter((line) => line.trim().length > 0);

    // Take first 3 non-empty lines
    const previewLines = lines.slice(0, 3);

    // Join them and limit to ~150 characters
    let excerpt = previewLines.join(" ").trim();

    // Remove markdown tags
    excerpt = excerpt
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

    if (excerpt.length > 150) {
      excerpt = excerpt.substring(0, 147) + "...";
    }

    return excerpt;
  };

  const handlePosterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPosterFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPosterPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMarkdownImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);

      // Upload image to Supabase Storage
      const imageFileName = `blog-content/${Date.now()}-${file.name}`;
      const { data: imageData, error: imageError } = await supabase.storage
        .from("blog-posters")
        .upload(imageFileName, file);

      if (imageError) throw imageError;

      // Get public URL for the image
      const { data: imageUrl } = supabase.storage
        .from("blog-posters")
        .getPublicUrl(imageFileName);

      // Generate markdown link
      const markdownLink = `![${file.name}](${imageUrl.publicUrl})`;

      // Add the markdown link to content
      setContent((prev) => prev + "\n" + markdownLink);

      setMessage(
        `Image uploaded! Markdown link added to content: ${markdownLink}`
      );

      // Clear the file input
      if (e.target) {
        e.target.value = "";
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      setMessage(`Error uploading image: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      setMessage("Please fill in title and content");
      return;
    }

    // For new blogs, poster is required
    if (!editingBlog && !posterFile) {
      setMessage("Please upload a poster image");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      let posterUrl = editingBlog?.poster_url || "";

      // Upload new poster image if provided
      if (posterFile) {
        const posterFileName = `${Date.now()}-${posterFile.name}`;
        const { data: posterData, error: posterError } = await supabase.storage
          .from("blog-posters")
          .upload(posterFileName, posterFile);

        if (posterError) throw posterError;

        // Get public URL for the poster
        const { data: newPosterUrl } = supabase.storage
          .from("blog-posters")
          .getPublicUrl(posterFileName);

        posterUrl = newPosterUrl.publicUrl;

        // Delete old poster if editing
        if (editingBlog?.poster_url) {
          try {
            const oldPosterPath = editingBlog.poster_url.split("/").pop();
            if (oldPosterPath) {
              await supabase.storage
                .from("blog-posters")
                .remove([oldPosterPath]);
            }
          } catch (storageError) {
            console.warn("Could not delete old poster:", storageError);
          }
        }
      }

      if (editingBlog) {
        // Update existing blog
        const { error: updateError } = await supabase
          .from("blogs")
          .update({
            title,
            excerpt: generateExcerpt(content),
            content,
            poster_url: posterUrl,
            category_id: selectedCategory || null,
            updated_at: new Date().toISOString(),
          })
          .eq("id", editingBlog.id);

        if (updateError) throw updateError;

        setMessage("Blog updated successfully!");
        onEditComplete?.();
      } else {
        // Insert new blog
        const { error: insertError } = await supabase.from("blogs").insert({
          title,
          excerpt: generateExcerpt(content),
          content,
          poster_url: posterUrl,
          category_id: selectedCategory || null,
          author_id: user.id,
          created_at: new Date().toISOString(),
        });

        if (insertError) throw insertError;

        setMessage("Blog post uploaded successfully!");
        // Reset form for new blog
        setTitle("");
        setContent("");
        setPosterFile(null);
        setPosterPreview("");
        setSelectedCategory("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      setMessage(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    onCancelEdit?.();
  };

  const handleCategoryAdded = () => {
    fetchCategories();
    showToast("Category added successfully!", "success");
  };

  const handleCategoryUpdated = () => {
    fetchCategories();
    showToast("Category updated successfully!", "success");
  };

  return (
    <>
      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Blog Title *
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#000209] focus:border-[#000209]"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Category Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <button
                type="button"
                onClick={() => setShowCategoryModal(true)}
                className="flex items-center text-sm text-[#000209] hover:text-[#000209]/80"
              >
                <Tag className="h-4 w-4 mr-1" />
                Manage Categories
              </button>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#000209] focus:border-[#000209]"
            >
              <option value="">Select a category (optional)</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Auto-generated Excerpt Preview */}
          {content && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Auto-generated Excerpt Preview
              </label>
              <div className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-600">
                {generateExcerpt(content)}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                This excerpt is automatically generated from the first 3 lines
                of your blog content
              </p>
            </div>
          )}

          {/* Poster Image */}
          <div>
            <label
              htmlFor="poster"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Poster Image {!editingBlog && "*"}
            </label>
            <div className="flex items-center space-x-4">
              <input
                ref={fileInputRef}
                type="file"
                id="poster"
                accept="image/*"
                onChange={handlePosterChange}
                className="hidden"
                required={!editingBlog}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209]"
              >
                <Upload className="h-4 w-4 mr-2" />
                {editingBlog ? "Change Image" : "Choose Image"}
              </button>
              {posterFile && (
                <span className="text-sm text-gray-600">{posterFile.name}</span>
              )}
            </div>
            {posterPreview && (
              <div className="mt-4">
                <Image
                  src={posterPreview}
                  alt="Poster preview"
                  width={192}
                  height={128}
                  className="w-48 h-32 object-cover rounded-md border"
                />
              </div>
            )}
          </div>

          {/* Markdown Editor */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Blog Content (Markdown) *
              </label>
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center text-sm text-[#000209] hover:text-[#000209]/80"
              >
                <Eye className="h-4 w-4 mr-1" />
                {showPreview ? "Hide Preview" : "Show Preview"}
              </button>
            </div>

            {/* Image Upload for Markdown */}
            <div className="mb-4 p-3 bg-gray-50 rounded-md border">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Images for Blog Content
              </label>
              <div className="flex items-center space-x-4">
                <input
                  id="markdown-image-input"
                  type="file"
                  accept="image/*"
                  onChange={handleMarkdownImageUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#000209]/5 file:text-[#000209] hover:file:bg-[#000209]/10"
                />
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("markdown-image-input")?.click()
                  }
                  className="px-3 py-2 text-sm text-[#000209] hover:text-[#000209]/80 border border-[#000209]/20 rounded-md hover:bg-[#000209]/5"
                >
                  Upload Image
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Upload images here and copy the markdown link to paste in your
                content
              </p>
            </div>

            <div data-color-mode="light">
              <MDEditor
                value={content}
                onChange={(val) => setContent(val || "")}
                height={400}
                preview={showPreview ? "preview" : "edit"}
              />
            </div>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`p-3 rounded-md ${
                message.includes("Error")
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-green-50 text-green-700 border border-green-200"
              }`}
            >
              {message}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            {editingBlog && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#000209] hover:bg-[#000209]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {editingBlog ? (
                <>
                  <Edit className="h-4 w-4 mr-2" />
                  {loading ? "Updating..." : "Update Blog"}
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  {loading ? "Uploading..." : "Upload Blog"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Category Modal */}
      <CategoryModal
        isOpen={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        onCategoryAdded={handleCategoryAdded}
        onCategoryUpdated={handleCategoryUpdated}
      />

      {/* Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}
