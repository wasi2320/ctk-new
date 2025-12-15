import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const supabase = createServerClient();
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const { data: blog, error } = await supabase
      .from("blogs")
      .select(
        `
        *,
        categories (
          name
        )
      `
      )
      .eq("slug", slug)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        // No rows returned
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }
      throw error;
    }

    return NextResponse.json({ blog });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
