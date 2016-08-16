var express = require('express');
var morgan = require('morgan');
var swig = require('swig');
var bodyParser = require('body-parser');
var routes = require('./routes/');
var fs = require('fs');
var path = require('path');
var app = express();
swig.setDefaults({ cache: false });

app.set('views', __dirname + '/views'); // point res.render to the proper directory (the templates)
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', swig.renderFile); // have res.render work with html files

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, function() {
	console.log('Server running on port 3000');
});