const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
app.use((req, res) => {
  const string_now = createRandomString();
  res
    .status(200)
    .json({ message: `startingString: ${startingString}, now: ${string_now}` });
});

const createRandomString = () => Math.random().toString(36).substr(2, 6);

const startingString = createRandomString();

console.log(`Started with ${startingString}`);

app.listen(PORT);
