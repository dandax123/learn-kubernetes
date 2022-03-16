const express = require("express");
const axios = require("axios");
const { json } = require("express");

// const fs = require("fs");
// const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// const fs = require("fs");
// const directory = path.join("/", "usr", "src", "app", "files");
// const filePath = path.join(directory, "temp.txt");

// const getFile = async () =>
//   new Promise((res) => {
//     fs.readFile(filePath, (err, buffer) => {
//       if (err)
//         return console.log("FAILED TO READ FILE", "----------------", err);
//       res(buffer.toString());
//     });
//   });

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

app.get("/", async (req, res) => {
  const now_string = generateString(40);
  try {
    const contents = await axios.get("http://pingpong-svc/pingpong/getcount");
    console.log(contents);
    res.status(200).send(now_string + `Ping / Pong:  ${contents.data.message}`);
  } catch (err) {
    // console.log(err?.response);
    res.status(200).send(now_string);
  }
});

app.listen(PORT);

// console.log(generateString(40));
// setInterval(() => {
//   console.log(generateString(40));
// }, 5000);
