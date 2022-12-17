const express = require("express");
const app = express();
const port = 8081;
const logger = require("morgan");
const bodyParser = require("body-parser");
const router = express.Router();
// const { urlencoded } = require("body-parser");

app.use((req, res, next) => {
  console.log("This function in run everytime on request");
  console.log(req.url);
  next();
});
app.use((req, res, next) => {
  console.log("Second Middleware");
  //   console.log(req.url);
  next();
});

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", (req, res, next) => {
//   res.send("Home");
// });

// app.get("/user", (req, res, next) => {
//   res.send("User");
// });

// app.get("/user/list", (req, res, next) => {
//   const list = [
//     {
//       id: 1,
//       firstname: "Osama",
//       lastname: "Arshed",
//       email: "osamaarshed11@gmail.com",
//     },
//     {
//       id: 2,
//       firstname: "Syed",
//       lastname: "Osama",
//       email: "osamaarshed11@gmail.com",
//     },
//   ];
//   res.send({
//     message: "user list has been successfully fetched!",
//     status: true,
//     data: list,
//   });
// });

router.route("list").get((req, res, next) => {
  const list = [
    {
      id: 1,
      firstname: "Osama",
      lastname: "Arshed",
      email: "osamaarshed11@gmail.com",
    },
    {
      id: 2,
      firstname: "Syed",
      lastname: "Osama",
      email: "osamaarshed11@gmail.com",
    },
  ];
  res.send({
    message: "user list has been successfully fetched!",
    status: true,
    data: list,
  });
});

// __Router Level Middleware __//
// const routerLevelMiddleware = (req, res, next) => {
//   console.log("Router level middleware");
//   next();
// };

// app.post("user/add", routerLevelMiddleware, (req, res, next) => {
//   console.log(req);
//   console.log("req.body", req.body);
//   const payload = req.body;
//   res.send({
//     message: "User Created ",
//     status: false,
//     payload,
//   });
// });

router.route("add").post((req, res, next) => {
  console.log(req);
  console.log("req.body", req.body);
  const payload = req.body;
  res.send({
    message: "User Created ",
    status: false,
    payload,
  });
});
app.use("/user", router);

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
