"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Edit,
  Trash2,
  RefreshCw,
  MapPin,
  Briefcase,
  Eye,
  ToggleLeft,
  ToggleRight,
  ExternalLink,
} from "lucide-react";
import { Role } from "./RoleForm";

interface RoleListProps {
  onEditRole: (role: Role) => void;
}

export default function RoleList({ onEditRole }: RoleListProps) {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [roleToDelete, setRoleToDelete] = useState<Role | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      setLoading(true);
      setMessage("");
      const { data, error } = await supabase
        .from("roles")
        .select("*")
        .order("is_active", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRoles(data || []);
    } catch (error) {
      console.error("Error fetching roles:", error);
      setMessage("Error fetching roles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchRoles();
  };

  const handleDeleteRole = async () => {
    if (!roleToDelete) return;

    try {
      setLoading(true);
      setDeleteLoading(true);
      const { error } = await supabase
        .from("roles")
        .delete()
        .eq("id", roleToDelete.id);
      if (error) throw error;
      setRoleToDelete(null);
      await fetchRoles();
      setMessage("Role deleted successfully.");
    } catch (error) {
      console.error("Error deleting role:", error);
      setMessage("Error deleting role.");
    } finally {
      setDeleteLoading(false);
      setLoading(false);
    }
  };

  const handleToggleActive = async (role: Role) => {
    try {
      const { error } = await supabase
        .from("roles")
        .update({ is_active: !role.is_active })
        .eq("id", role.id);
      if (error) throw error;
      fetchRoles();
    } catch (error) {
      console.error("Error toggling role:", error);
      setMessage("Error updating role visibility.");
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncate = (text: string, max = 160) => {
    if (!text) return "";
    return text.length > max ? `${text.slice(0, max)}...` : text;
  };

  if (loading && roles.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#000209]"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Manage Open Roles ({roles.length})
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              View, edit, publish/unpublish, or delete positions.
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

      {message && (
        <div className="mx-6 mt-4 p-3 rounded-md bg-green-50 text-green-700 border border-green-200">
          {message}
        </div>
      )}

      <div className="divide-y divide-gray-200">
        {roles.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-500">
            <p>No roles found. Create your first role above.</p>
          </div>
        ) : (
          roles.map((role) => (
            <div key={role.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      role.is_active
                        ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-gray-100 text-gray-600 border border-gray-200"
                      }`}
                    >
                      {role.is_active ? "Active" : "Hidden"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {role.employment_type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {role.location}
                    </span>
                    {role.due_date && (
                      <span className="flex items-center gap-1 text-red-700">
                        Apply by {formatDate(role.due_date)}
                      </span>
                    )}
                    {role.created_at && (
                      <span className="text-xs text-gray-500">
                        Created {formatDate(role.created_at)}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 mt-3">
                    {truncate(role.summary || "")}
                  </p>
                  {role.description && (
                    <details className="mt-3 text-sm text-gray-600">
                      <summary className="cursor-pointer text-gray-700">
                        View long description
                      </summary>
                      <div className="mt-2 whitespace-pre-wrap">
                        {role.description}
                      </div>
                    </details>
                  )}
                  {role.apply_url && (
                    <a
                      href={role.apply_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm text-[#000209] font-semibold mt-3 hover:underline"
                    >
                      Apply link
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleActive(role)}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border text-sm font-semibold transition-colors ${
                      role.is_active
                        ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                        : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                    }`}
                    title={role.is_active ? "Hide role" : "Publish role"}
                  >
                    {role.is_active ? (
                      <ToggleRight className="h-5 w-5" />
                    ) : (
                      <ToggleLeft className="h-5 w-5" />
                    )}
                    <span>{role.is_active ? "On" : "Off"}</span>
                  </button>
                  <button
                    onClick={() => setSelectedRole(role)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                    title="Preview Role"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onEditRole(role)}
                    className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                    title="Edit Role"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setRoleToDelete(role)}
                    className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                    title="Delete Role"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedRole && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Preview
              </p>
              <h4 className="text-lg font-semibold text-gray-900">
                {selectedRole.title}
              </h4>
            </div>
            <button
              onClick={() => setSelectedRole(null)}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
          <p className="text-sm text-gray-700">{selectedRole.summary}</p>
          {selectedRole.description && (
            <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap">
              {selectedRole.description}
            </p>
          )}
        </div>
      )}

      {roleToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                  <Trash2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Delete role?
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    This action will permanently remove{" "}
                    <span className="font-semibold text-gray-900">
                      {roleToDelete.title}
                    </span>{" "}
                    from the careers page. You can create it again later if
                    needed.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setRoleToDelete(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000209]"
                  disabled={deleteLoading}
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteRole}
                  disabled={deleteLoading}
                  className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-75"
                >
                  {deleteLoading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
