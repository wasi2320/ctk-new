import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://gvboyuegjvcfvuvcdkag.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Ym95dWVnanZjZnZ1dmNka2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MTAxNjYsImV4cCI6MjA3MTk4NjE2Nn0.8XcdKPEF88TBwOwLSWi8hnAhoihmnHGftT_NRpT2NXI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client for admin operations
export const createServerClient = () => {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://gvboyuegjvcfvuvcdkag.supabase.co";
  const supabaseServiceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Ym95dWVnanZjZnZ1dmNka2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjQxMDE2NiwiZXhwIjoyMDcxOTg2MTY2fQ.yDvVRoac2Awu-IKGk_5mQTtqf72q0nAVRu0fiW0peUI";

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};
