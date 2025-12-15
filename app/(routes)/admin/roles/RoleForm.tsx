"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Save, Plus, RefreshCcw } from "lucide-react";
import Toast from "../../../components/ui/Toast";
import MDEditor from "@uiw/react-md-editor";

export interface Role {
  id: string;
  title: string;
  employment_type: string;
  location: string;
  summary?: string | null;
  description?: string | null;
  apply_url?: string | null;
  due_date?: string | null;
  is_active: boolean;
  created_by?: string | null;
  created_at?: string;
  updated_at?: string;
}

interface RoleFormProps {
  user: { id: string; email: string };
  editingRole?: Role | null;
  onEditComplete?: () => void;
  onCancelEdit?: () => void;
}

const employmentTypeOptions = [
  "Full-time",
  "Contract",
  "Part-time",
  "Internship",
  "Contract-to-hire",
];

const locationOptions = ["Remote", "On-site", "Hybrid", "Custom"];

export default function RoleForm({
  user,
  editingRole,
  onEditComplete,
  onCancelEdit,
}: RoleFormProps) {
  const [title, setTitle] = useState("");
  const [employmentType, setEmploymentType] = useState("Full-time");
  const [locationType, setLocationType] = useState("Remote");
  const [customLocation, setCustomLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [applyUrl, setApplyUrl] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    isVisible: boolean;
  }>({ message: "", type: "success", isVisible: false });

  useEffect(() => {
    if (editingRole) {
      setTitle(editingRole.title);
      setEmploymentType(editingRole.employment_type || "Full-time");
      const presetLocations = ["Remote", "On-site", "Hybrid"];
      if (presetLocations.includes(editingRole.location)) {
        setLocationType(editingRole.location);
        setCustomLocation("");
      } else {
        setLocationType("Custom");
        setCustomLocation(editingRole.location || "");
      }
      setSummary(editingRole.summary || "");
      setDescription(editingRole.description || "");
      setApplyUrl(editingRole.apply_url || "");
      setDueDate(editingRole.due_date || "");
      setIsActive(editingRole.is_active ?? true);
    } else {
      resetForm();
    }
  }, [editingRole]);

  const resetForm = () => {
    setTitle("");
    setEmploymentType("Full-time");
    setLocationType("Remote");
    setCustomLocation("");
    setSummary("");
    setDescription("");
    setApplyUrl("");
    setDueDate("");
    setIsActive(true);
    setMessage("");
  };

  const showToast = (text: string, type: "success" | "error") => {
    setToast({ message: text, type, isVisible: true });
  };

  const hideToast = () => setToast({ ...toast, isVisible: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title.trim()) {
      setMessage("Role title is required.");
      setLoading(false);
      return;
    }

    if (!summary.trim()) {
      setMessage("Short summary is required.");
      setLoading(false);
      return;
    }

    if (!description.trim()) {
      setMessage("Please add a detailed description.");
      setLoading(false);
      return;
    }

    if (!dueDate) {
      setMessage("Please provide an application due date.");
      setLoading(false);
      return;
    }

    const resolvedLocation =
      locationType === "Custom"
        ? customLocation.trim()
        : locationType.trim() || "Remote";

    if (!resolvedLocation) {
      setMessage("Please provide a location.");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        title: title.trim(),
        employment_type: employmentType.trim(),
        location: resolvedLocation,
        summary: summary.trim(),
        description: description.trim(),
        apply_url: applyUrl.trim() || null,
        due_date: dueDate,
        is_active: isActive,
        created_by: user.id,
      };

      if (editingRole) {
        const { error } = await supabase
          .from("roles")
          .update(payload)
          .eq("id", editingRole.id);

        if (error) throw error;
        showToast("Role updated successfully", "success");
      } else {
        const { error } = await supabase.from("roles").insert(payload);
        if (error) throw error;
        showToast("Role created successfully", "success");
        resetForm();
      }

      if (onEditComplete) {
        onEditComplete();
      }
    } catch (error) {
      console.error("Error saving role:", error);
      setMessage("Error saving role. Please try again.");
      showToast("Error saving role", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {editingRole ? "Edit Role" : "Create a New Role"}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Add roles for the Careers page. Active roles are visible publicly.
          </p>
        </div>
        {editingRole && (
          <button
            onClick={() => {
              resetForm();
              onCancelEdit?.();
            }}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209]"
          >
            <RefreshCcw className="h-4 w-4 mr-2" />
            Reset
          </button>
        )}
      </div>

      {message && (
        <div className="mx-6 mt-4 p-3 rounded-md bg-red-50 text-red-700 border border-red-200">
          {message}
        </div>
      )}

      <form className="px-6 py-6 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
          <label className="block text-sm font-medium text-gray-700">
            Role title *
          </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-[#000209] focus:ring-[#000209]"
              placeholder="e.g., Senior DevOps Engineer"
              required
            />
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700">
            Employment type *
          </label>
          <select
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-[#000209] focus:ring-[#000209]"
            required
          >
            {employmentTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
              ))}
            </select>
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700">
            Location *
          </label>
            <select
              value={locationType}
              onChange={(e) => {
                const value = e.target.value;
                setLocationType(value);
                if (value !== "Custom") {
                  setCustomLocation("");
                }
              }}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-[#000209] focus:ring-[#000209]"
              required
            >
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {locationType === "Custom" && (
              <input
                type="text"
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
                className="mt-2 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-[#000209] focus:ring-[#000209]"
                placeholder="Enter a custom location"
                required
              />
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Short summary *
          </label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-[#000209] focus:ring-[#000209]"
            placeholder="Brief description shown on the Careers page"
            rows={3}
            maxLength={260}
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Keep this concise (260 characters max).
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Long description *
          </label>
          <div
            className="mt-1 rounded-md border border-gray-200 bg-white"
            data-color-mode="light"
          >
            <MDEditor
              value={description}
              onChange={(val) => setDescription(val || "")}
              height={400}
              preview="edit"
              textareaProps={{
                placeholder:
                  "Add more context, requirements, or benefits. Supports Markdown formatting like bold, italics, and lists.",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Apply URL (optional)
            </label>
            <input
              type="url"
              value={applyUrl}
              onChange={(e) => setApplyUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-[#000209] focus:ring-[#000209]"
              placeholder="https://example.com/apply"
            />
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700">
            Application due date *
          </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-[#000209] focus:ring-[#000209]"
              required
            />
          </div>
          <div className="flex items-center space-x-3 pt-6">
            <input
              id="is-active"
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="h-4 w-4 text-[#000209] focus:ring-[#000209] border-gray-300 rounded"
            />
            <label htmlFor="is-active" className="text-sm text-gray-700">
              Active (visible on Careers page)
            </label>
          </div>
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#000209] hover:bg-[#000209]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <RefreshCcw className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : editingRole ? (
              <>
                <Save className="h-4 w-4 mr-2" />
                Update role
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Create role
              </>
            )}
          </button>
          {editingRole && (
            <button
              type="button"
              onClick={() => {
                resetForm();
                onCancelEdit?.();
              }}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209]"
            >
              Cancel edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
