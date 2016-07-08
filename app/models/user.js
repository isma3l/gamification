var mongoose = require( 'mongoose' ),
	Schema = mongoose.Schema,
    crypto = require('crypto'),
    jwt = require('jsonwebtoken'),
    config = require('../../config/config');

var userSchema = new Schema({
	name:         { type: String, required: true },	
  	email:        { type: String, unique: true, required: true },  	
  	creationDate: { type: Date, default: Date.now },
  	admin: 		  { type: Boolean, default: false},
  	password:     String,
  	salt:         String
});

userSchema.pre('save',
	function(next) {
		if(this.password) {
  			this.salt = crypto.randomBytes(16).toString('hex');
  			this.password = crypto.pbkdf2Sync(this.password, this.salt, 1000, 64).toString('hex');
		}
  		next();
	}	
);

userSchema.methods.authenticate = function(password) {
	var password = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
	return this.password === password;
};

userSchema.methods.generateJwt = function() {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);

	return jwt.sign({
		_id: this.id,
		name: this.email,
		email: this.email,
		exp: parseInt(expiry.getTime() / 1000),
		}, config.TOKEN_SECRET);
};

mongoose.model('User', userSchema);
