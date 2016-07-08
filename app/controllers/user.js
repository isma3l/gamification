var passport = require('passport'),
	User = require('mongoose').model('User'),
	config = require('../../config/config');


var user = {
	register: function(req, res) {
		var name = req.body.name,
			email = req.body.email,
			password = req.body.password;						

		if (name && email && password) {
			var user = new User();
			user.name = name;
			user.email = email;
			user.password = password;
			user.admin = req.body.admin;

			user.save(function(err) {
				if (err) {
					res.status(400).json({err});
				} else {
					res.status(200).json({message: "new user created"});
				}
			});

		} else {
			res.status(400).json({error: "All fields required"});
		}
	},

	login: function(req, res) {		

		passport.authenticate('local', function(err, user, info) {
    		var token;

    		// If Passport throws/catches an error
    		if (err) {
      			res.status(404).json(err);
      			return;
    		}
		    
    		if(user){    			
      			token = user.generateJwt();
      			res.status(200).json({ "token" : token });
    		} else {      		
      			res.status(401).json(info);
    		}
  		})(req, res);
	}

};

module.exports = user;


