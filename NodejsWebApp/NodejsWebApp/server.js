var http = require('http');
var service = require('./services/service');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var message = service.doSomething('Hello World\n');
    res.end(message);
}).listen(port);
//# sourceMappingURL=server.js.map