"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

interface BlogConfig {
  topic: string;
  target_keyword: string;
  secondary_keywords: string[];
  category_id: string;
  word_count: number;
}

export default function BlogGeneratorPage() {
  const router = useRouter();
  const [config, setConfig] = useState<BlogConfig>({
    topic: "",
    target_keyword: "",
    secondary_keywords: [],
    category_id: "",
    word_count: 2000,
  });
  const [secondaryKeyword, setSecondaryKeyword] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [error, setError] = useState("");

  const addSecondaryKeyword = () => {
    if (secondaryKeyword.trim()) {
      setConfig({
        ...config,
        secondary_keywords: [...config.secondary_keywords, secondaryKeyword.trim()],
      });
      setSecondaryKeyword("");
    }
  };

  const removeSecondaryKeyword = (index: number) => {
    setConfig({
      ...config,
      secondary_keywords: config.secondary_keywords.filter((_, i) => i !== index),
    });
  };

  const generateBlog = async () => {
    if (!config.topic || !config.target_keyword) {
      setError("Topic and target keyword are required");
      return;
    }

    setGenerating(true);
    setError("");

    try {
      const response = await fetch("/api/ai/generate-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
      });

      if (!response.ok) {
        throw new Error("Failed to generate blog");
      }

      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setGenerating(false);
    }
  };

  const saveToDraft = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setError("You must be logged in to save");
        return;
      }

      const { error: saveError } = await supabase.from("blogs").insert({
        title: config.topic,
        excerpt: generatedContent.substring(0, 200) + "...",
        content: generatedContent,
        poster_url: "/Images/default-blog.png", // You can update this
        author_id: user.id,
        category_id: config.category_id || null,
        slug: config.topic
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
      });

      if (saveError) throw saveError;

      alert("Blog saved as draft!");
      router.push("/admin/blogs");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            AI Blog Generator
          </h1>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          <div className="space-y-6">
            {/* Topic */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Topic / Title
              </label>
              <input
                type="text"
                value={config.topic}
                onChange={(e) => setConfig({ ...config, topic: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Kubernetes Cost Optimization: 10 Proven Strategies"
              />
            </div>

            {/* Target Keyword */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Keyword (Primary)
              </label>
              <input
                type="text"
                value={config.target_keyword}
                onChange={(e) =>
                  setConfig({ ...config, target_keyword: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., kubernetes cost optimization"
              />
            </div>

            {/* Secondary Keywords */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secondary Keywords
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={secondaryKeyword}
                  onChange={(e) => setSecondaryKeyword(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addSecondaryKeyword()}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., k8s cost reduction"
                />
                <button
                  onClick={addSecondaryKeyword}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {config.secondary_keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-2"
                  >
                    {keyword}
                    <button
                      onClick={() => removeSecondaryKeyword(index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Word Count */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Word Count
              </label>
              <input
                type="number"
                value={config.word_count}
                onChange={(e) =>
                  setConfig({ ...config, word_count: parseInt(e.target.value) })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="500"
                max="5000"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={generateBlog}
              disabled={generating || !config.topic || !config.target_keyword}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium text-lg"
            >
              {generating ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Generating AI Content...
                </span>
              ) : (
                "Generate Blog Post"
              )}
            </button>
          </div>
        </div>

        {/* Generated Content */}
        {generatedContent && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Generated Content
              </h2>
              <button
                onClick={saveToDraft}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save as Draft
              </button>
            </div>

            <div className="prose max-w-none">
              <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                <pre className="whitespace-pre-wrap font-sans">
                  {generatedContent}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
