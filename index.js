const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const users = require("./routes/users");

app.use("/users", users);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
