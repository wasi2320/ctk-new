"use client";

import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import MDEditor from "@uiw/react-md-editor";
import { LogOut, Upload, Save, Eye } from "lucide-react";

interface BlogUploadFormProps {
  user: any;
}

export default function BlogUploadForm({ user }: BlogUploadFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [posterPreview, setPosterPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    } catch (error: any) {
      setMessage(`Error uploading image: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !posterFile) {
      setMessage("Please fill in all fields and upload a poster image");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Upload poster image to Supabase Storage
      const posterFileName = `${Date.now()}-${posterFile.name}`;
      const { data: posterData, error: posterError } = await supabase.storage
        .from("blog-posters")
        .upload(posterFileName, posterFile);

      if (posterError) throw posterError;

      // Get public URL for the poster
      const { data: posterUrl } = supabase.storage
        .from("blog-posters")
        .getPublicUrl(posterFileName);

      // Insert blog post into database
      const { error: insertError } = await supabase.from("blogs").insert({
        title,
        excerpt: generateExcerpt(content),
        content,
        poster_url: posterUrl.publicUrl,
        author_id: user.id,
        created_at: new Date().toISOString(),
      });

      if (insertError) throw insertError;

      setMessage("Blog post uploaded successfully!");
      // Reset form
      setTitle("");
      setContent("");
      setPosterFile(null);
      setPosterPreview("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Blog Management
            </h1>
            <p className="text-gray-600">Welcome back, {user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </button>
        </div>

        {/* Form */}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500"
                placeholder="Enter blog title"
                required
              />
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
                Poster Image *
              </label>
              <div className="flex items-center space-x-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  id="poster"
                  accept="image/*"
                  onChange={handlePosterChange}
                  className="hidden"
                  required
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Image
                </button>
                {posterFile && (
                  <span className="text-sm text-gray-600">
                    {posterFile.name}
                  </span>
                )}
              </div>
              {posterPreview && (
                <div className="mt-4">
                  <img
                    src={posterPreview}
                    alt="Poster preview"
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

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#000209] hover:bg-[#000209]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="h-4 w-4 mr-2" />
                {loading ? "Uploading..." : "Upload Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
