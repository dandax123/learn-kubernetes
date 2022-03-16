const express = require("express");
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
app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 3000;
// app.use((req, res, next) => {
//   const string_now = createRandomString();
//   res
//     .status(200)
//     .json({ message: `startingString: ${startingString}, now: ${string_now}` });
// });

app.get("/", (req, res) => {
  res.render("home/main");
});

const createRandomString = () => Math.random().toString(36).substr(2, 6);

const startingString = createRandomString();

console.log(`Started with ${startingString}`);

app.listen(PORT);
