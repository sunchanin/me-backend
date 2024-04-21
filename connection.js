const mysql = require("mysql2/promise");
require("dotenv").config();

async function create_connection() {
  try {
    const db_host = process.env.DB_HOST;
    const db_user = process.env.DB_USER;
    const db_pass = process.env.DB_PASSWORD;
    const db_database = process.env.DB_DATABASE;

    const connection = await mysql.createConnection({
      host: db_host,
      user: db_user,
      password: db_pass,
      database: db_database,
    });

    return connection;
  } catch (error) {
    console.error("Error creating connection:", error);
    throw error; // Rethrow the error to handle it elsewhere
  }
}

module.exports = { create_connection };
