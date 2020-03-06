var http = require('http');
var path = require('path');
var fs = require ('fs');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var express = require('express');
const port = process.env.PORT||3000;
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var postData = require('./posts');

app.get('', function (req, res, next) {
	res.status(200).render('index', {
		postData: postData
	});
});



app.post('/add', function (req, res, next) {
	console.log(req.body);
  
	reviewData.push({
		title: req.body.title,
		bodytext: req.body.bodytext,
		url: req.body.url,
	  });
	fs.writeFile(
		__dirname + '/posts.json',
		JSON.stringify(postData, 2, null),
		function (err) {
			if (!err) {
			res.status(200).send();
			} else {
			res.status(500).send("Failed to write data on server side.");
			}
		}
	);
});

app.listen(port, function(){
	console.log("listening to requests on port: ", port);
});