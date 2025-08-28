"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import LoginForm from "./LoginForm";
import BlogUploadForm from "./BlogUploadForm";

export default function AdminPage() {
  const [user, setUser] = useState<{
    id: string;
    email: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user && user.email) {
        setUser({
          id: user.id,
          email: user.email,
        });
      }
      setLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user && session.user.email) {
        setUser({
          id: session.user.id,
          email: session.user.email,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

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

  return <BlogUploadForm user={user} />;
}
