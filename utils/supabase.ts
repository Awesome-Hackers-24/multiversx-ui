import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_APP_SUPABASE_URL || "",
  process.env.NEXT_APP_SUPABASE_API_KEY || ""
);