var request = require('request');
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res)
{
    var x = request('https://www.youtube.com/embed/8_hzTS67UnY')
    req.pipe(x)
    x.pipe(res)
}).listen(1337, '127.0.0.1');

        console.log('Server running at http://127.0.0.1:1337/');