const express = require("express");
const http = require("http");
const app = express();
const data = [];
const port = 8081;

app.get("/", (req, res) => {
  console.log(req.query);
  data.push(req.query);
  res.send("Express Framework");
});
app.get("/all", (req, res) => {
  console.log(req.query);
  //   data.push(req.query);
  res.send(data);
});
const server = http.createServer(app);
server.listen(8081, () => {
  console.log(`The server is running on Port: ${port}`);
});
