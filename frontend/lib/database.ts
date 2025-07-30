import { supabase } from "./supabase"
import type { Participant, Mentor, Session, Company } from "./supabase"

// Participants CRUD operations
export const participantsService = {
  async getAll(): Promise<Participant[]> {
    try {
      const { data, error } = await supabase.from("participants").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching participants:", error)
        throw new Error(`Failed to fetch participants: ${error.message}`)
      }

      return data || []
    } catch (error) {
      console.error("Service error fetching participants:", error)
      throw error
    }
  },

  async create(participant: Omit<Participant, "id" | "created_at" | "updated_at">): Promise<Participant> {
    try {
      const { data, error } = await supabase.from("participants").insert([participant]).select().single()

      if (error) {
        console.error("Error creating participant:", error)
        throw new Error(`Failed to create participant: ${error.message}`)
      }

      if (!data) {
        throw new Error("No data returned after creating participant")
      }

      return data
    } catch (error) {
      console.error("Service error creating participant:", error)
      throw error
    }
  },

  async update(id: number, updates: Partial<Participant>): Promise<Participant> {
    try {
      const { data, error } = await supabase
        .from("participants")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single()

      if (error) {
        console.error("Error updating participant:", error)
        throw new Error(`Failed to update participant: ${error.message}`)
      }

      if (!data) {
        throw new Error("No data returned after updating participant")
      }

      return data
    } catch (error) {
      console.error("Service error updating participant:", error)
      throw error
    }
  },

  async delete(id: number): Promise<void> {
    try {
      const { error } = await supabase.from("participants").delete().eq("id", id)

      if (error) {
        console.error("Error deleting participant:", error)
        throw new Error(`Failed to delete participant: ${error.message}`)
      }
    } catch (error) {
      console.error("Service error deleting participant:", error)
      throw error
    }
  },

  async findByQRCode(qrCode: string): Promise<Participant | null> {
    try {
      const { data, error } = await supabase.from("participants").select("*").eq("qr_code", qrCode).single()

      if (error && error.code !== "PGRST116") {
        console.error("Error finding participant by QR code:", error)
        throw new Error(`Failed to find participant by QR code: ${error.message}`)
      }

      return data || null
    } catch (error) {
      console.error("Service error finding participant by QR code:", error)
      throw error
    }
  },
}

// Mentors CRUD operations
export const mentorsService = {
  async getAll(): Promise<Mentor[]> {
    try {
      const { data, error } = await supabase.from("mentors").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching mentors:", error)
        throw new Error(`Failed to fetch mentors: ${error.message}`)
      }

      return data || []
    } catch (error) {
      console.error("Service error fetching mentors:", error)
      throw error
    }
  },

  async create(mentor: Omit<Mentor, "id" | "created_at" | "updated_at">): Promise<Mentor> {
    try {
      const { data, error } = await supabase.from("mentors").insert([mentor]).select().single()

      if (error) {
        console.error("Error creating mentor:", error)
        throw new Error(`Failed to create mentor: ${error.message}`)
      }

      if (!data) {
        throw new Error("No data returned after creating mentor")
      }

      return data
    } catch (error) {
      console.error("Service error creating mentor:", error)
      throw error
    }
  },

  async update(id: number, updates: Partial<Mentor>): Promise<Mentor> {
    try {
      const { data, error } = await supabase
        .from("mentors")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single()

      if (error) {
        console.error("Error updating mentor:", error)
        throw new Error(`Failed to update mentor: ${error.message}`)
      }

      if (!data) {
        throw new Error("No data returned after updating mentor")
      }

      return data
    } catch (error) {
      console.error("Service error updating mentor:", error)
      throw error
    }
  },

  async delete(id: number): Promise<void> {
    try {
      const { error } = await supabase.from("mentors").delete().eq("id", id)

      if (error) {
        console.error("Error deleting mentor:", error)
        throw new Error(`Failed to delete mentor: ${error.message}`)
      }
    } catch (error) {
      console.error("Service error deleting mentor:", error)
      throw error
    }
  },
}

// Sessions CRUD operations
export const sessionsService = {
  async getAll(): Promise<Session[]> {
    try {
      const { data, error } = await supabase.from("sessions").select("*").order("date", { ascending: true })

      if (error) {
        console.error("Error fetching sessions:", error)
        throw new Error(`Failed to fetch sessions: ${error.message}`)
      }

      return data || []
    } catch (error) {
      console.error("Service error fetching sessions:", error)
      throw error
    }
  },

  async create(session: Omit<Session, "id" | "created_at" | "updated_at">): Promise<Session> {
    try {
      const { data, error } = await supabase.from("sessions").insert([session]).select().single()

      if (error) {
        console.error("Error creating session:", error)
        throw new Error(`Failed to create session: ${error.message}`)
      }

      if (!data) {
        throw new Error("No data returned after creating session")
      }

      return data
    } catch (error) {
      console.error("Service error creating session:", error)
      throw error
    }
  },

  async update(id: number, updates: Partial<Session>): Promise<Session> {
    try {
      const { data, error } = await supabase
        .from("sessions")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single()

      if (error) {
        console.error("Error updating session:", error)
        throw new Error(`Failed to update session: ${error.message}`)
      }

      if (!data) {
        throw new Error("No data returned after updating session")
      }

      return data
    } catch (error) {
      console.error("Service error updating session:", error)
      throw error
    }
  },

  async delete(id: number): Promise<void> {
    try {
      const { error } = await supabase.from("sessions").delete().eq("id", id)

      if (error) {
        console.error("Error deleting session:", error)
        throw new Error(`Failed to delete session: ${error.message}`)
      }
    } catch (error) {
      console.error("Service error deleting session:", error)
      throw error
    }
  },
}

// Companies CRUD operations
export const companiesService = {
  async getAll(): Promise<Company[]> {
    try {
      const { data, error } = await supabase.from("companies").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching companies:", error)
        throw new Error(`Failed to fetch companies: ${error.message}`)
      }

      return data || []
    } catch (error) {
      console.error("Service error fetching companies:", error)
      throw error
    }
  },

  async create(company: Omit<Company, "id" | "created_at" | "updated_at">): Promise<Company> {
    try {
      const { data, error } = await supabase.from("companies").insert([company]).select().single()

      if (error) {
        console.error("Error creating company:", error)
        throw new Error(`Failed to create company: ${error.message}`)
      }

      if (!data) {
        throw new Error("No data returned after creating company")
      }

      return data
    } catch (error) {
      console.error("Service error creating company:", error)
      throw error
    }
  },

  async update(id: number, updates: Partial<Company>): Promise<Company> {
    try {
      const { data, error } = await supabase
        .from("companies")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single()

      if (error) {
        console.error("Error updating company:", error)
        throw new Error(`Failed to update company: ${error.message}`)
      }

      if (!data) {
        throw new Error("No data returned after updating company")
      }

      return data
    } catch (error) {
      console.error("Service error updating company:", error)
      throw error
    }
  },

  async delete(id: number): Promise<void> {
    try {
      const { error } = await supabase.from("companies").delete().eq("id", id)

      if (error) {
        console.error("Error deleting company:", error)
        throw new Error(`Failed to delete company: ${error.message}`)
      }
    } catch (error) {
      console.error("Service error deleting company:", error)
      throw error
    }
  },
}

// Test connection function
export const testConnection = async () => {
  try {
    const { data, error, count } = await supabase.from("participants").select("*", { count: "exact", head: true })

    if (error) {
      console.error("Database connection test failed:", error)
      throw new Error(`Connection test failed: ${error.message}`)
    }

    console.log("Database connection successful. Participants count:", count)
    return { success: true, count: count || 0 }
  } catch (error) {
    console.error("Database connection failed:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}
