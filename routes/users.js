const express = require("express");
const { get_users } = require("../controllers/users");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await get_users();
  res.send(users);
});

module.exports = router;
