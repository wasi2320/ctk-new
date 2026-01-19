"use client";

import { useState } from "react";

interface CaseStudyData {
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: Record<string, string>;
  timeline: string;
  team_size: string;
}

export default function CaseStudyGeneratorPage() {
  const [formData, setFormData] = useState<CaseStudyData>({
    client_name: "",
    industry: "",
    challenge: "",
    solution: "",
    technologies: [],
    results: {},
    timeline: "",
    team_size: "",
  });

  const [technology, setTechnology] = useState("");
  const [resultMetric, setResultMetric] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [diagramCode, setDiagramCode] = useState("");

  const addTechnology = () => {
    if (technology.trim()) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, technology.trim()],
      });
      setTechnology("");
    }
  };

  const addResult = () => {
    if (resultMetric.trim() && resultValue.trim()) {
      setFormData({
        ...formData,
        results: {
          ...formData.results,
          [resultMetric.trim()]: resultValue.trim(),
        },
      });
      setResultMetric("");
      setResultValue("");
    }
  };

  const generateCaseStudy = async () => {
    setGenerating(true);

    try {
      const response = await fetch("/api/ai/generate-case-study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setGeneratedContent(data.content);
      setDiagramCode(data.diagram_code);
    } catch (error) {
      console.error("Error generating case study:", error);
    } finally {
      setGenerating(false);
    }
  };

  const copyDiagramCode = () => {
    navigator.clipboard.writeText(diagramCode);
    alert("Diagram code copied! Paste it into Mermaid Live Editor or your markdown.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            AI Case Study Generator
          </h1>

          <div className="space-y-6">
            {/* Client Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Name
                </label>
                <input
                  type="text"
                  value={formData.client_name}
                  onChange={(e) =>
                    setFormData({ ...formData, client_name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., TechCorp"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., FinTech"
                />
              </div>
            </div>

            {/* Challenge */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Challenge
              </label>
              <textarea
                value={formData.challenge}
                onChange={(e) =>
                  setFormData({ ...formData, challenge: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Describe the problem they were facing..."
              />
            </div>

            {/* Solution */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Solution Overview
              </label>
              <textarea
                value={formData.solution}
                onChange={(e) =>
                  setFormData({ ...formData, solution: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Describe what you did to solve the problem..."
              />
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technologies Used
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTechnology()}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Kubernetes, AWS EKS, Terraform"
                />
                <button
                  onClick={addTechnology}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results/Metrics */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Results & Metrics
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={resultMetric}
                  onChange={(e) => setResultMetric(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Metric (e.g., Deployment Speed)"
                />
                <input
                  type="text"
                  value={resultValue}
                  onChange={(e) => setResultValue(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Value (e.g., 10x faster)"
                />
                <button
                  onClick={addResult}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="space-y-1">
                {Object.entries(formData.results).map(([metric, value], index) => (
                  <div key={index} className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                    <span className="font-medium">{metric}:</span>
                    <span className="text-green-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline and Team Size */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Timeline
                </label>
                <input
                  type="text"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., 3 months"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Size
                </label>
                <input
                  type="text"
                  value={formData.team_size}
                  onChange={(e) =>
                    setFormData({ ...formData, team_size: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., 4 engineers"
                />
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateCaseStudy}
              disabled={generating || !formData.client_name || !formData.challenge}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 font-medium text-lg"
            >
              {generating ? "Generating..." : "Generate Case Study"}
            </button>
          </div>
        </div>

        {/* Generated Content */}
        {generatedContent && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Generated Case Study
              </h2>
              <div className="prose max-w-none bg-gray-50 p-6 rounded-md border">
                <pre className="whitespace-pre-wrap font-sans text-sm">
                  {generatedContent}
                </pre>
              </div>
            </div>

            {/* Architecture Diagram */}
            {diagramCode && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Architecture Diagram (Mermaid)
                  </h2>
                  <button
                    onClick={copyDiagramCode}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Copy Diagram Code
                  </button>
                </div>
                <div className="bg-gray-50 p-6 rounded-md border">
                  <pre className="text-sm overflow-x-auto">{diagramCode}</pre>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Paste this code into{" "}
                  <a
                    href="https://mermaid.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Mermaid Live Editor
                  </a>{" "}
                  to visualize and export the diagram.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
