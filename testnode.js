var http = require("http");
const data = { name: "Osama", email: "osamaarshed11@gmail.com", age: "24" };
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    var url = req.url;
    if (url === "/about") {
      if (req.method === "GET") {
        res.write(JSON.stringify(data));
        res.end();
      } else if (req.method === "POST") {
        res.write("Via Post Method");
        res.end();
      }
    } else if (url === "/contact") {
      res.write(" Welcome to contact us page");
      res.end();
    } else {
      res.write("Hello World!");
      res.end();
    }
  })
  .listen(3000, function () {
    console.log("Server start at port 3000");
  });
