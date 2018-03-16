let http = require('http');

let myServer = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write('<h1>Pro Meetups</h1>'); 
    res.end();
});

myServer.listen(3000);