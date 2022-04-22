var mongoose = require("mongoose");

var user_schema = mongoose.Schema({
	login: String,
	pos: String,
	cart: [String]
});

var users = mongoose.model("user", user_schema, "users");
module.exports = users;