var express = require('express'),
	router = express.Router(),
	ctrlUser = require('../controllers/user');

router.post('/register', ctrlUser.register);
router.post('/login', ctrlUser.login);

module.exports = function(app) {
	app.use('/api', router);
};

