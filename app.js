var http = require('http');

var server = http.createServer((req, res, next) => {
  res.writeHead(200, { 'Content-type': 'text/json' });
  res.write('<h1>Hello World!</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('start linstening port 3000');
});
