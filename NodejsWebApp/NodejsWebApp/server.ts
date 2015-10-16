import http = require('http');
import service = require('./services/service');

let port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    let message = service.doSomething('Hello World\n');

    res.end(message);
}).listen(port);