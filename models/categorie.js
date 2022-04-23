var mongoose = require("mongoose");

var cat_schema = mongoose.Schema({
	name: String,
	type: String,
	img_path: String
});

var categories = mongoose.model("categorie", cat_schema, "categories");
module.exports = categories;