var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;


module.exports = function() {
	var	User = require('mongoose').model('User');
	
	passport.use(new LocalStrategy(
		{ usernameField: 'email' },
		function(username, password, done) {
			User.findOne(
				{ email: username }, 
				function(err, user) {
					if (err) return done(err);

					if(!user) {
						return done(null, false, {message: 'User not found'});
					}

					if(!user.authenticate(password)) {
						return done(null, false, {message: 'Password is wrong'});
					}

					return done(null, user);
				});
		}
	));
};