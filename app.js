const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({
    status: "ok"
  }));
});

server.listen(3000, '0.0.0.0', () => {
  console.log('HTTP server running at http://0.0.0.0:3000');
});