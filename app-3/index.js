const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const directory = path.join("/", "usr", "src", "app", "files");
// const filePath = path.join(directory, "temp.txt");

// const fileAlreadyExists = async () =>
//   new Promise((res) => {
//     fs.stat(filePath, (err, stats) => {
//       if (err || !stats) return res(false);
//       return res(true);
//     });
//   });

// const getFile = async () =>
//   new Promise((res) => {
//     fs.readFile(filePath, (err, buffer) => {
//       if (err)
//         return console.log("FAILED TO READ FILE", "----------------", err);
//       res(buffer.toString());
//     });
//   });

const PORT = process.env.PORT || 3000;
const app = express();
let count = 0;

// const writeTofile = async (data) => {
//   if (!(await fileAlreadyExists())) {
//     await new Promise((res) => fs.mkdir(directory, (err) => res()));
//   }
//   fs.writeFile(filePath, data, (err) => {
//     if (err) console.log(err);
//     console.log("Successfully Written to File.");
//   });
// };

app.get("/pingpong", async (req, res) => {
  count += 1;
  // await writeTofile(`Ping / Pong ${count}`);
  res.status(200).send(`pong ${count}`);
});

app.get("pingpong/getcount", (req, res) => {
  res.status(200).json({ message: count });
});

app.get("/pingpong/getcount", (req, res) => {
  res.status(200).json({ message: count });
});
// app.get("/test", async (req, res) => {
//   // const contents = await getFile();
//   res.status(200).send(contents);
// });

app.listen(PORT);
