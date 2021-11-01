const http = require('http');

const httpServer = http.createServer((req, res) => {
  console.log(req);
  console.log(res);
});

//start listening on port 8080
httpServer.listen(8080, () => console.log("server is listening on port 8080"));
