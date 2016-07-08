var port = 5000;

module.exports = {
	port: port,
	db: "mongodb://localhost/gamificationV2",
	TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenultrasecreto"
};