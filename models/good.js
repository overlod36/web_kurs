var mongoose = require("mongoose");

var good_schema = mongoose.Schema({
	name: String,
	type: String,
	genre: String,
	group: String,
	img_path: String,
	price: String,
	track_list: [String],
	img_list: [String]
});

var goods = mongoose.model("good", good_schema, "goods");
module.exports = goods;