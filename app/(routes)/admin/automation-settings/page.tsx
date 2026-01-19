"use client";

import { useState } from "react";

export default function AutomationSettingsPage() {
  const [cronSecret, setCronSecret] = useState("");
  const [testResult, setTestResult] = useState<any>(null);
  const [testing, setTesting] = useState(false);

  const testAutomation = async () => {
    setTesting(true);
    setTestResult(null);

    try {
      const response = await fetch("/api/cron/auto-generate-content", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cronSecret}`,
        },
      });

      const data = await response.json();
      setTestResult(data);
    } catch (error: any) {
      setTestResult({ error: error.message });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            ✨ Automated Content Generation Settings
          </h1>

          <div className="space-y-8">
            {/* Status */}
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h2 className="text-lg font-semibold text-green-900">
                  Automation Active
                </h2>
              </div>
              <p className="text-green-700 mt-2">
                Your content automation is running daily at 9:00 AM UTC
              </p>
            </div>

            {/* Schedule Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                📅 Schedule
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-md">
                  <div>
                    <p className="font-medium text-blue-900">Daily Blog Post</p>
                    <p className="text-sm text-blue-700">
                      Automatically generates and publishes 1 SEO-optimized blog post
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                    Every Day 9 AM
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-md">
                  <div>
                    <p className="font-medium text-purple-900">Case Study</p>
                    <p className="text-sm text-purple-700">
                      Publishes a professional case study with diagrams
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
                    Every 3 Days
                  </span>
                </div>
              </div>
            </div>

            {/* Topics Queue */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                📝 Upcoming Topics (Auto-Rotating)
              </h2>
              <div className="bg-gray-50 rounded-md p-4 space-y-2">
                <p className="text-sm text-gray-600">Next 5 blog topics:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>AWS Cloud Migration: Complete Step-by-Step Guide</li>
                  <li>Kubernetes Cost Optimization: 10 Proven Strategies</li>
                  <li>GitHub Actions vs GitLab CI: Complete Comparison</li>
                  <li>Terraform vs CloudFormation: Which to Choose?</li>
                  <li>DevOps Transformation: Implementation Guide</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  ℹ️ System automatically rotates through 20+ topics to ensure variety
                </p>
              </div>
            </div>

            {/* Test Automation */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                🧪 Test Automation
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cron Secret (from .env.local)
                  </label>
                  <input
                    type="password"
                    value={cronSecret}
                    onChange={(e) => setCronSecret(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="your-secret-key-for-cron-jobs"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Found in your .env.local file as CRON_SECRET
                  </p>
                </div>

                <button
                  onClick={testAutomation}
                  disabled={testing || !cronSecret}
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 font-medium"
                >
                  {testing ? "Testing..." : "Test Automation Now"}
                </button>

                {testResult && (
                  <div
                    className={`p-4 rounded-md ${
                      testResult.success
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <pre className="text-sm overflow-auto">
                      {JSON.stringify(testResult, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                🔧 How It Works
              </h2>
              <div className="bg-blue-50 rounded-md p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-blue-900">Topic Selection</p>
                    <p className="text-sm text-blue-700">
                      System automatically rotates through 20+ curated DevOps topics
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-blue-900">AI Generation</p>
                    <p className="text-sm text-blue-700">
                      Creates 2000+ word SEO-optimized content with proper keywords
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-blue-900">Auto Publishing</p>
                    <p className="text-sm text-blue-700">
                      Automatically saves to Supabase and appears on your blog
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                  <div>
                    <p className="font-medium text-blue-900">SEO Optimization</p>
                    <p className="text-sm text-blue-700">
                      Sitemap auto-updates, Google indexes new content automatically
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expected Results */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                📈 Expected Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-md">
                  <p className="text-2xl font-bold text-green-900">30+</p>
                  <p className="text-sm text-green-700">Blog posts per month</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-md">
                  <p className="text-2xl font-bold text-purple-900">10+</p>
                  <p className="text-sm text-purple-700">Case studies per month</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-md">
                  <p className="text-2xl font-bold text-blue-900">5-10x</p>
                  <p className="text-sm text-blue-700">Traffic increase in 3-6 months</p>
                </div>
              </div>
            </div>

            {/* Configuration */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <h3 className="font-semibold text-yellow-900 mb-2">
                ⚙️ Configuration
              </h3>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>
                  ✅ Vercel Cron: Configured in <code>vercel.json</code>
                </li>
                <li>
                  ✅ Schedule: Daily at 9:00 AM UTC (adjust in vercel.json)
                </li>
                <li>
                  ✅ Topics: 20+ rotating topics in{" "}
                  <code>app/api/cron/auto-generate-content/route.ts</code>
                </li>
                <li>
                  ✅ Security: Protected by CRON_SECRET environment variable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
