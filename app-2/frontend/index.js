const express = require("express");
const axios = require("axios");
const app = express();

const expressHbs = require("express-handlebars");
const path = require("path");
const handlebars = require("handlebars");
app.engine(
  ".hbs",
  expressHbs.engine({
    extname: ".hbs",
    handlebars,
  })
);

app.set("view engine", ".hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 3000;

const backend_url = "http://backend-service";
// const backend_url = "http://127.0.0.1:4000";
app.post("/todo", async (req, res) => {
  try {
    const { todo } = req.body;
    await axios.post(`${backend_url}/backend/todo`, {
      todo: {
        done: false,
        todo,
      },
    });
    res.redirect("/");
  } catch (err) {
    console.log(err?.response);
    res.redirect("/");
  }
});

app.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(`${backend_url}/backend/todo`);
    res.render("home/main", { todos: data?.message ?? [] });
  } catch (err) {
    res.render("home/main", {
      todos: [{ done: true, todo: "we have work to do" }],
    });

    // console.log(err);
    console.log(err?.response);
  }
});

app.listen(PORT);
