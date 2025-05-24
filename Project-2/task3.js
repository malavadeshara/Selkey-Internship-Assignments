const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello! This is a simple HTTP server in Node.js.\n');
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});