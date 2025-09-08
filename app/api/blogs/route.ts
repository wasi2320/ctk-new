import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();

    const { data: blogs, error } = await supabase
      .from("blogs")
      .select(
        `
        *,
        categories (
          name
        )
      `
      )
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Also create a map for slug lookups
    const slugMap =
      blogs?.reduce((map: Record<string, string>, blog) => {
        if (blog.slug) {
          map[blog.slug] = blog.id;
        }
        return map;
      }, {}) || {};

    return NextResponse.json({ blogs, slugMap });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient();
    const body = await request.json();

    const { data: blog, error } = await supabase
      .from("blogs")
      .insert([body])
      .select(
        `
        *,
        categories (
          name
        )
      `
      )
      .single();

    if (error) throw error;

    return NextResponse.json({ blog });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = createServerClient();
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const { data: blog, error } = await supabase
      .from("blogs")
      .update(updateData)
      .eq("id", id)
      .select(
        `
        *,
        categories (
          name
        )
      `
      )
      .single();

    if (error) throw error;

    return NextResponse.json({ blog });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = createServerClient();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("blogs").delete().eq("id", id);

    if (error) throw error;

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
