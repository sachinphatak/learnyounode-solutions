var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var parsedUrl = url.parse(req.url, true);
    var jsonObj;
    var date = new Date(parsedUrl.query.iso);
    
    switch (parsedUrl.pathname) {
        case '/api/parsetime':
            jsonObj = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
            break;
        case '/api/unixtime':
            jsonObj = {
                unixtime: new Date(parsedUrl.query.iso).getTime()
            };
    }
    res.end(JSON.stringify(jsonObj));
}).listen(process.argv[2]);