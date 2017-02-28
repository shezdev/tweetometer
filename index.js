var express = require('express');
var index = express();
var path = require('path');


index.set('views', path.join(__dirname, 'views'));
index.engine('html', require('ejs').renderFile);
index.set('view engine', 'html');
index.use(express.static('public'));

var dataParser = require('./dataParser');

index.get('/', function(req, res) {
  res.render('index.ejs');
});


index.listen(4000);
console.log('server is running');
