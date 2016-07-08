var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);

	// CONNECTIONS EVENTS
	// If successfully connected
	mongoose.connection.on('connected', function() {
		console.log('Mongoose connection open to: ' + config.db);
	});
	
	// The connection throws an error
	mongoose.connection.on('error', function(error) {
		console.log('Mongoose connection error: ' + error);
	});

	// The connection is disconnected
	mongoose.connection.on('disconnected', function() {
  		console.log('Mongoose connection disconnected');
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose disconnected through app termination');
			process.exit(0);
		});
	});


	require('../app/models/project');
	require('../app/models/client');
	require('../app/models/source');
	require('../app/models/user');
	require('../app/models/projectTransaction');
	require('../app/models/transaction');

	return db;
};

