var app = require('express')();
var http = require('http').Server(app);
var fs = require("fs");

app.get(/^(.+)$/, function(req, res){
	var ip = req.ip;
	res.sendFile( __dirname + "/public" + req.params[0]);
});

http.listen(process.env.PORT || 3000);
console.log("STARTED @ PORT 3000");