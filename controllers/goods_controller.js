var goods = require("../models/good.js");
var GoodsController = {};

GoodsController.good_list = function(req, res){
	goods.find({}, function (err, result) {
		res.json(result);
	});
};

module.exports = GoodsController;