import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { createServerClient } from "@/lib/supabase";
import type { Components } from "react-markdown";

export const dynamic = "force-dynamic";

type Role = {
  id: string;
  title: string;
  employment_type: string;
  location: string;
  summary?: string | null;
  description?: string | null;
  apply_url?: string | null;
  due_date?: string | null;
  created_at?: string;
};

async function getRole(id: string): Promise<Role | null> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("roles")
      .select(
        "id, title, employment_type, location, summary, description, apply_url, due_date, created_at"
      )
      .eq("id", id)
      .eq("is_active", true)
      .maybeSingle();

    if (error) throw error;
    return data || null;
  } catch (error) {
    console.error("Error fetching role detail:", error);
    return null;
  }
}

const formatDate = (dateString?: string | null) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const markdownComponents: Components = {
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#0f241f] font-semibold underline underline-offset-4 hover:text-[#0a1613]"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 space-y-1 text-gray-800">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 space-y-1 text-gray-800">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  p: ({ children }) => (
    <p className="text-gray-800 leading-relaxed mb-3 last:mb-0">{children}</p>
  ),
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  h1: ({ children }) => (
    <h1 className="text-3xl font-semibold text-[#0a0f13] mb-3 mt-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-[#0a0f13] mb-3 mt-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-[#0a0f13] mb-2 mt-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-[#0a0f13] mb-2 mt-3">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-base font-semibold text-[#0a0f13] mb-2 mt-2">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-sm font-semibold text-[#0a0f13] uppercase tracking-wide mb-2 mt-2">
      {children}
    </h6>
  ),
};

export default async function RoleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const role = await getRole(resolvedParams.id);

  if (!role) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="md:px-28 px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Role detail
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-[#0a0f13] mt-2">
                {role.title}
              </h1>
            </div>
            <Link
              href="/careers#open-roles"
              className="hidden md:inline-flex text-sm text-[#0f241f] font-semibold hover:underline"
            >
              Back to roles
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e8f2ef] text-[#0f241f] font-semibold">
              {role.employment_type}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800">
              {role.location}
            </span>
            {role.due_date && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-700">
                Apply by {formatDate(role.due_date)}
              </span>
            )}
            {role.created_at && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-600">
                Posted {formatDate(role.created_at)}
              </span>
            )}
          </div>

          <div className="space-y-4">
            {role.description ? (
              <div className="max-w-none">
                <ReactMarkdown components={markdownComponents}>
                  {role.description}
                </ReactMarkdown>
              </div>
            ) : (
              <p className="text-gray-600">
                Additional details will be added soon.
              </p>
            )}
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            {role.apply_url ? (
              <Link
                href={role.apply_url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 bg-[#0f241f] text-white font-semibold hover:bg-[#0a1613] transition-colors"
              >
                Apply now
              </Link>
            ) : null}
            <Link
              href="/careers#open-roles"
              className="rounded-full px-6 py-3 border border-gray-300 text-[#0a0f13] font-semibold hover:border-[#081617] transition-colors"
            >
              Back to roles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
