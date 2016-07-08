var config = require('./config'),
	express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');
	passport = require('passport');

module.exports = function() {
	var app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));		
	app.use(express.static(path.join(__dirname, '../public')));	
	app.use(passport.initialize());
	app.set('port', config.port);


	require('../app/routes/index')(app);

	app.use(function(req, res) {		
		res.sendFile(path.join(__dirname, '../public', 'index.html'));
	});

	return app;
};