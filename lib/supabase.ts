import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Participant {
  id: number
  name: string
  email: string
  phone: string
  age: number
  track: string
  group: string
  qr_code: string
  attended_sessions: number[]
  created_at: string
  updated_at: string
}

export interface Mentor {
  id: number
  name: string
  email: string
  phone: string
  specialties: string[]
  availability: string[]
  bio: string
  created_at: string
  updated_at: string
}

export interface Session {
  id: number
  title: string
  date: string
  start_time: string
  end_time: string
  mentor_id: number
  course_id: string
  group: string
  location: string
  created_at: string
  updated_at: string
}

export interface Company {
  id: number
  name: string
  contact: string
  email: string
  type: string
  status: string
  created_at: string
  updated_at: string
}
