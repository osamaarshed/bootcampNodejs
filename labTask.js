const express = require("express");
const http = require("http");
const app = express();
const port = 8081;
const bodyParser = require("body-parser");
const randomize = require("randomatic");
const fs = require("fs");
let Staffs = [
  {
    id: 1,
    firstname: "Osama",
    lastname: "Arshed",
  },
  {
    id: 2,
    firstname: "Syed",
    lastname: "Osama",
  },
];
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.get("/", (req, res) => {
  res.status(200).send("This is Home Page");
});
app.post("/staffmember", urlencodedParser, (req, res) => {
  Staffs.push(req.body);
  console.log(Staffs);
  res.send(Staffs);
});

//Create Staff using POST method
app.post("/staff", urlencodedParser, (req, res) => {
  let staff = {
    id: randomize("!Aa", 4),
    firstname: req.body.fname,
    lastname: req.body.lname,
  };
  Staffs.push(staff);
  console.log(staff);
  res.send(staff);
});

//Fetching all Staff Members using GET
app.get("/fetchstaff", (req, res) => {
  res.send();
});

const server = http.createServer(app);
server.listen(8081, () => {
  console.log(`The server is running on Port: ${port}`);
});
