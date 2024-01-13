import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hpzpeiffnpxpaaxagvcr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwenBlaWZmbnB4cGFheGFndmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5NTk3NzksImV4cCI6MjAxMDUzNTc3OX0.J3ALP7yMGAEhZOrJPV7VjNZnOQTk4qyHtom1SXykN7s'
export const supabase = createClient(supabaseUrl, supabaseKey)
