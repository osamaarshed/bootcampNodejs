const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) {
  //       res.end(err);
  //     } else {
  //       res.end(data);
  //     }
  //   });

  //Streaming
  //   const rstream = fs.createReadStream("input.txt");
  //   rstream.on("data", (chunks) => {
  //     res.write(chunks);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", () => {
  //     res.end("Module not found");
  //   });

  //Pipe
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});
server.listen(8081, () => {
  console.log("The Server is listening on Port: 8081");
});
