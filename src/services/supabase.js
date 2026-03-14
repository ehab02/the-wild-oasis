import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nhkrvvadtsqqikjmqyaz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oa3J2dmFkdHNxcWlram1xeWF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyODUwNDgsImV4cCI6MjA4Nzg2MTA0OH0.vy_8jMiDuQY9qq4kexnoZwd_hZ2ZMdHdLk-lks0wiKY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
