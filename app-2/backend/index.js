const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let count = 0;

let todos = [];

app.get("/backend", async (req, res) => {
  count += 1;
  res.status(200).send(`pong ${count}`);
});

app.get("backend/getcount", (req, res) => {
  res.status(200).json({ message: count });
});

app.get("/backend/todo", (req, res) => {
  res.status(200).json({ message: todos });
});

app.post("/backend/todo", (req, res) => {
  const { todo } = req.body;
  todos.push(todo);
  res.status(200).json({ message: todos });
});

app.get("backend/todo", (req, res) => {
  res.status(200).json({ message: todos });
});

app.post("backend/todo", (req, res) => {
  const { todo } = req.body;
  todos.push(todo);
  res.status(200).json({ message: todos });
});
app.listen(PORT);
