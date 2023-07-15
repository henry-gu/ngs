const http = require('http');
// import http from 'http';
// import {createServer} from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello Node Getting Started....\n');
});

server.listen(3000, () => {
  console.log('Server is running...');
});
