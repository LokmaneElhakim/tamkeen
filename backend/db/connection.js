const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const pool = new Pool({
  user: "avnadmin",
  host: "",
  database: "defaultdb",
  password: "",
  port: 20650,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(path.join(__dirname, "aiven-ca.crt")).toString(),
  },
});

module.exports = pool;
