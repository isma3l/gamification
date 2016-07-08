var port = 5000;

module.exports = {
	port: process.env.PORT || port,	
	db: process.env.MONGODB_URI || 'mongodb://heroku_tqqj0964:pei4vu5ldqqr0a5qo7rvhq9624@ds011775.mlab.com:11775/heroku_tqqj0964',
	TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenultrasecreto"
};