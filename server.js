const connect = require('connect');
const serveStatic = require('serve-static');
connect()
  .use(serveStatic(__dirname + '/src/main/'))
  .listen(8080, function() {
    console.log('App server running on 8080');
  });

const storage = require('./storage');
storage
  .init()
  .then(() => {
    const http = require('http');
    http
      .createServer(function(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        if (req.method == 'GET') {
          storage.getItem('stocks').then(data => {
            res.writeHead(200, { 'Content-Type': 'text/json; charset=utf-8' });
            res.write(JSON.stringify(data));
            res.end();
          });
        } else if (req.method == 'POST') {
          let jsonString = '';
          req.on('data', function(data) {
            jsonString += data;
          });
          req.on('end', function() {
            storage.setItem('stocks', JSON.parse(jsonString)).then(() => {
              res.writeHead(200);
              res.write(JSON.stringify({}));
              res.end();
            });
          });
        } else {
          res.writeHead(200);
          res.end();
        }
      })
      .listen(3000);
    console.log('Storage server running on 3000');
  });
