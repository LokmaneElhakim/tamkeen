const pool = require("../db/connection");

const ParticipantModel = {
  create: async (data) => {
    const {
      full_name,
      email,
      phone,
      age,
      university,
      major,
      education,
      current_status,
      track,
      motivation,
      experience,
      has_laptop,
      agree_terms,
    } = data;

    // Validate required fields
    if (!full_name) {
      throw new Error("full_name is required");
    }
    if (!email) {
      throw new Error("email is required");
    }

    try {
      const result = await pool.query(
        `
        INSERT INTO participants (
          full_name, email, phone, age, university, major,
          education, current_status, track, motivation, 
          experience, has_laptop, agree_terms
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        RETURNING *;
        `,
        [
          full_name,
          email,
          phone,
          age,
          university,
          major,
          education,
          current_status,
          track,
          motivation,
          experience,
          has_laptop || false,
          agree_terms || false,
        ]
      );

      return result.rows[0];
    } catch (error) {
      console.error("Database error in ParticipantModel.create:", error);
      throw new Error(`Failed to create participant: ${error.message}`);
    }
  },

  // Bulk create method for multiple participants
  createMany: async (participantsArray) => {
    if (!Array.isArray(participantsArray) || participantsArray.length === 0) {
      throw new Error("Invalid participants array");
    }

    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const createdParticipants = [];

      for (const participantData of participantsArray) {
        const {
          full_name,
          email,
          phone,
          age,
          university,
          major,
          education,
          current_status,
          track,
          motivation,
          experience,
          has_laptop,
          agree_terms,
        } = participantData;

        // Validate required fields
        if (!full_name) {
          throw new Error(
            `full_name is required for participant: ${JSON.stringify(
              participantData
            )}`
          );
        }
        if (!email) {
          throw new Error(
            `email is required for participant: ${JSON.stringify(
              participantData
            )}`
          );
        }

        const result = await client.query(
          `
          INSERT INTO participants (
            full_name, email, phone, age, university, major,
            education, current_status, track, motivation, 
            experience, has_laptop, agree_terms
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
          RETURNING *;
          `,
          [
            full_name,
            email,
            phone,
            age,
            university,
            major,
            education,
            current_status,
            track,
            motivation,
            experience,
            has_laptop || false,
            agree_terms || false,
          ]
        );

        createdParticipants.push(result.rows[0]);
      }

      await client.query("COMMIT");
      return createdParticipants;
    } catch (error) {
      await client.query("ROLLBACK");
      console.error("Database error in ParticipantModel.createMany:", error);
      throw new Error(`Failed to create participants: ${error.message}`);
    } finally {
      client.release();
    }
  },

  findAll: async () => {
    try {
      const result = await pool.query(
        "SELECT * FROM participants ORDER BY created_at DESC;"
      );
      return result.rows;
    } catch (error) {
      console.error("Database error in ParticipantModel.findAll:", error);
      throw new Error(`Failed to fetch participants: ${error.message}`);
    }
  },

  findById: async (id) => {
    try {
      const result = await pool.query(
        "SELECT * FROM participants WHERE id = $1;",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Database error in ParticipantModel.findById:", error);
      throw new Error(`Failed to fetch participant: ${error.message}`);
    }
  },

  update: async (id, data) => {
    const allowedFields = [
      "full_name",
      "email",
      "phone",
      "age",
      "university",
      "major",
      "education",
      "current_status",
      "track",
      "motivation",
      "experience",
      "has_laptop",
      "agree_terms",
    ];

    const fields = [];
    const values = [];
    let index = 1;

    for (const key in data) {
      if (data[key] !== undefined && allowedFields.includes(key)) {
        fields.push(`${key} = $${index}`);
        values.push(data[key]);
        index++;
      }
    }

    if (fields.length === 0) {
      throw new Error("No valid fields provided for update");
    }

    values.push(id); // Last value is ID

    const query = `
      UPDATE participants SET
        ${fields.join(", ")}
      WHERE id = $${index}
      RETURNING *;
    `;

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Database error in ParticipantModel.update:", error);
      throw new Error(`Failed to update participant: ${error.message}`);
    }
  },

  delete: async (id) => {
    try {
      const result = await pool.query(
        "DELETE FROM participants WHERE id = $1 RETURNING *;",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Database error in ParticipantModel.delete:", error);
      throw new Error(`Failed to delete participant: ${error.message}`);
    }
  },

  // Additional utility methods
  findByEmail: async (email) => {
    try {
      const result = await pool.query(
        "SELECT * FROM participants WHERE email = $1;",
        [email]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Database error in ParticipantModel.findByEmail:", error);
      throw new Error(`Failed to fetch participant by email: ${error.message}`);
    }
  },

  findByTrack: async (track) => {
    try {
      const result = await pool.query(
        "SELECT * FROM participants WHERE track = $1 ORDER BY created_at DESC;",
        [track]
      );
      return result.rows;
    } catch (error) {
      console.error("Database error in ParticipantModel.findByTrack:", error);
      throw new Error(
        `Failed to fetch participants by track: ${error.message}`
      );
    }
  },

  getStats: async () => {
    try {
      const result = await pool.query(`
        SELECT 
          COUNT(*) as total_participants,
          COUNT(*) FILTER (WHERE has_laptop = true) as with_laptop,
          COUNT(*) FILTER (WHERE agree_terms = true) as agreed_terms,
          COUNT(DISTINCT track) as total_tracks,
          COUNT(DISTINCT university) as total_universities
        FROM participants;
      `);
      return result.rows[0];
    } catch (error) {
      console.error("Database error in ParticipantModel.getStats:", error);
      throw new Error(`Failed to fetch participant stats: ${error.message}`);
    }
  },
};

module.exports = ParticipantModel;
