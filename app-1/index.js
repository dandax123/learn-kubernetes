const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return new Date().toUTCString() + ":  " + result;
}

app.get("/now", (req, res) => {
  const now_string = generateString(40);
  res.status(200).send(now_string);
});

app.listen(PORT);

console.log(generateString(40));
setInterval(() => {
  console.log(generateString(40));
}, 5000);
