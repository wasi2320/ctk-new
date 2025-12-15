"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import LoginForm from "../LoginForm";
import RoleForm, { Role } from "./RoleForm";
import RoleList from "./RoleList";
import Link from "next/link";

export default function RolesAdminPage() {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"create" | "manage">("create");
  const [editingRole, setEditingRole] = useState<Role | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user && user.email) {
        setUser({ id: user.id, email: user.email });
      }
      setLoading(false);
    };

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user && session.user.email) {
        setUser({ id: session.user.id, email: session.user.email });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleEditRole = (role: Role) => {
    setEditingRole(role);
    setActiveTab("create");
  };

  const handleEditComplete = () => {
    setEditingRole(null);
    setActiveTab("manage");
  };

  const handleCancelEdit = () => {
    setEditingRole(null);
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-gray-900">
                Roles Admin Panel
              </h1>
              <p className="text-gray-600">
                Manage open positions shown on the Careers page
              </p>
            </div>
            <div className="flex w-full md:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <Link
                href="/admin"
                className="px-4 py-2 text-sm font-semibold text-white bg-[#0f241f] rounded-md shadow-sm hover:bg-[#0a1613] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f241f] text-center"
              >
                Switch to Blog Admin
              </Link>
              <button
                onClick={() => supabase.auth.signOut()}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-8">
            <button
              onClick={() => {
                setActiveTab("create");
                setEditingRole(null);
              }}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "create"
                  ? "border-[#000209] text-[#000209]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {editingRole ? "Edit Role" : "Create New Role"}
            </button>
            <button
              onClick={() => setActiveTab("manage")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "manage"
                  ? "border-[#000209] text-[#000209]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Manage Roles
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "create" ? (
          <RoleForm
            user={user}
            editingRole={editingRole}
            onEditComplete={handleEditComplete}
            onCancelEdit={handleCancelEdit}
          />
        ) : (
          <RoleList onEditRole={handleEditRole} />
        )}
      </div>
    </div>
  );
}
