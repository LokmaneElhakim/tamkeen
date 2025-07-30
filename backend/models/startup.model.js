const pool = require('../db/connection');

const StartupModel = {
  create: async (data) => {
    const {
      startup_name, founder_name, email, phone,
      team_members, idea_description, bmc_drive_link,
      mvp_drive_link, website, industry, stage
    } = data;

    const result = await pool.query(`
      INSERT INTO startups (
        startup_name, founder_name, email, phone,
        team_members, idea_description, bmc_drive_link,
        mvp_drive_link, website, industry, stage
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
      RETURNING *;
    `, [
      startup_name, founder_name, email, phone,
      team_members, idea_description, bmc_drive_link,
      mvp_drive_link, website, industry, stage
    ]);

    return result.rows[0];
  },

  findAll: async () => {
    const result = await pool.query('SELECT * FROM startups ORDER BY id DESC;');
    return result.rows;
  },

  findById: async (id) => {
    const result = await pool.query('SELECT * FROM startups WHERE id = $1;', [id]);
    return result.rows[0];
  },

  update: async (id, data) => {
    const fields = [];
    const values = [];
    let index = 1;

    for (const key in data) {
      if (data[key] !== undefined) {
        fields.push(`${key} = $${index}`);
        values.push(data[key]);
        index++;
      }
    }

    if (fields.length === 0) {
      throw new Error("No fields provided for update");
    }

    values.push(id);

    const query = `
      UPDATE startups SET
        ${fields.join(', ')}
      WHERE id = $${index}
      RETURNING *;
    `;

    const result = await pool.query(query, values);
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query('DELETE FROM startups WHERE id = $1 RETURNING *;', [id]);
    return result.rows[0];
  }
};

module.exports = StartupModel;
