import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://nrtmmzsdcvnyntttedcz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ydG1tenNkY3ZueW50dHRlZGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzMzg0NDksImV4cCI6MjAzMDkxNDQ0OX0.KkF_Qa2VCcJozmo6-_52ag2z2jQHzcZ9dXi_caxJU_I'
)