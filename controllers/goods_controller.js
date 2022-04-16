var goods = require("../models/good.js");
var GoodsController = {};

GoodsController.index = function(req, res) {
	goods.find(query, function(err, list){
		if (err !== null) {
			res.json(500, err);
		} else {
			res.status(200).json(list);
		}
	});
};