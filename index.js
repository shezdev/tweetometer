var express = require('express');
var index = express();
var path = require('path');
var bodyParser = require('body-parser');


index.set('views', path.join(__dirname, 'views'));
index.engine('html', require('ejs').renderFile);
index.set('view engine', 'html');
index.use(express.static('public'));
index.use(bodyParser.urlencoded({
    extended: true
}));

var dataParser = require('./dataParser');

index.get('/', function(req, res) {
  res.render('index.ejs');
});
index.post("/", function (req, res) {
 console.log(req.body.username);
});

index.listen(4000);
console.log('server is running');
