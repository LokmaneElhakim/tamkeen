import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

// Use environment variables for DB connection
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 5432,
});

// Define the schema for validation using Zod
const participantSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  age: z.number().min(18, "Age must be at least 18"),
  track: z.string().min(1, "Track is required"),
  group: z.string().min(1, "Group is required"),
  notes: z.string().optional(),
  attendedSessions: z.array(z.number()).optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("API /api/participants called", req.method);
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      phone,
      age,
      city,
      education,
      currentStatus,
      track,
      motivation,
      hasLaptop,
      agreeTerms,
    } = req.body;

    try {
      // Insert participant data into the database
      const query = `
        INSERT INTO participants (
          first_name, last_name, email, phone, age, city, education, current_status, track, motivation, has_laptop, agree_terms
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *;
      `;

      const values = [
        firstName,
        lastName,
        email,
        phone,
        age,
        city,
        education,
        currentStatus,
        track,
        motivation,
        hasLaptop,
        agreeTerms,
      ];

      console.log("Inserting values:", values);
      const result = await pool.query(query, values);
      console.log("Insert result:", result.rows[0]);

      res
        .status(201)
        .json({
          message: "Participant registered successfully",
          participant: result.rows[0],
        });
    } catch (error) {
      console.error("Error saving participant data:", error);
      res.status(500).json({ error: "Failed to register participant" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
