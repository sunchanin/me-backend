const { create_connection } = require("../connection");

const get_users = async () => {
  const connection = await create_connection();
  const [rows] = await connection.query("SELECT * FROM users");
  return rows;
};

module.exports = {
  get_users,
};
