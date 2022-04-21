var goods = require("../models/good.js");
var GoodsController = {};

GoodsController.good_list = function(req, res){
	goods.find({}, function (err, result) {
		res.json(result);
	});
};

GoodsController.search = function(req, res){
	var group = req.params.group;
	console.log("Клиент ищет альбомы группы -> " + group);
	goods.find({"group": group}, function(err, result) {
		if (err != null){
			console.log("Error! -> " + err);
			res.status(500).json(err);
		} else{
			if (result.length > 0){
				res.status(200).json(result);
			}
			else{
				res.json(result);
			}
		}
	});
}

GoodsController.show_alb = function(req, res){
	var name = req.params.name;
	console.log("Клиент смотрит информацию об альбоме -> " + name);
	goods.find({"name": name}, function(err, result){
		//console.log("-> " + result);
		if (err != null){
			console.log("Error! -> " + err);
			res.status(500).json(err);
		} else {
			if (result.length > 0){
				res.status(200).json(result);
			}
			else{
				res.json(result);
			}
		}
	});

}

module.exports = GoodsController;