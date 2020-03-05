var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('./public/index.html', 'utf-8');
var style = fs.readFileSync('./public/style.css', 'utf-8');
