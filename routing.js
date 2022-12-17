const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const apiData = fs.readFileSync(`${__dirname}/Osama/api.json`, "utf-8");
  const objData = JSON.parse(apiData);
  // console.log(objData[0].name);

  if (req.url === "/") {
    res.end("Hello, this is Home Page");
  } else if (req.url === "/about") {
    res.end("Hello, this is About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(objData[0].name);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1> Error 404: Not Found </h1>");
  }
});
server.listen(8081, () => {
  console.log("The server is running on port: 8081");
});
