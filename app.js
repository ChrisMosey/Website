const http = require('http');

const code = "<html><h1><h1>(•_•) ( •_•)>⌐■-■ (⌐■_■) (▀̿Ĺ̯▀̿ ̿)</h1></html>";

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
	res.end(code);
});
server.listen(80);
console.log("server listening at localhost:80");
