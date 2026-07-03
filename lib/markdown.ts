/**
 * Pure markdown helpers, safe to import from both server and client components.
 * Kept separate from lib/blogs.ts so no server-only Supabase code is pulled into
 * client bundles.
 */

/** Strip common markdown syntax so excerpts/descriptions read as plain text. */
export function stripMarkdown(text: string): string {
  if (!text) return "";

  return text
    .replace(/#{1,6}\s+/g, "")
    .replace(/\*\*\*(.*?)\*\*\*/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`(.*?)`/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/>\s*(.*)/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/~~(.*?)~~/g, "$1")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
