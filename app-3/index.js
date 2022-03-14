const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

let count = 0;

app.get("/", (req, res) => {
  count += 1;
  res.send(`pong ${count}`);
});

app.listen(PORT);
