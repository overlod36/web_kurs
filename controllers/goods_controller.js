var goods = require("../models/good.js");
var GoodsController = {};

GoodsController.good_list = function(req, res){
	goods.find({}, function (err, result) {
		res.json(result);
	});
};


GoodsController.show_alb = function(req, res){
	var name = req.params.name;
	console.log("Клиент смотрит информацию об альбоме -> " + name);
	goods.find({"name": name}, function(err, result){
		//console.log("-> " + result);
		if (err != null){
			console.log("Ошибка! -> " + err);
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

GoodsController.search = function(req, res){
	var group = req.params.group;
	console.log("Клиент ищет альбомы группы -> " + group);
	goods.find({"group": group}, function(err, result) {
		if (err != null){
			console.log("Ошибка! -> " + err);
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
};

GoodsController.add_alb = function(req, res){
	var name = req.body.name;
	console.log("Модератор добавляет альбом -> " + name);
	goods.find({"name": name}, function (err, result){
		if (err){
			console.log("Ошибка! -> " + err);
			res.status(500).json(err);
		} else if (result.length !== 0){
			console.log("Такой альбом уже есть!");
			res.status(501).send("Уже есть такой альбом!");
		} else {
			var alb = new goods({"name":req.body.name, "type":req.body.type, "genre":req.body.genre, "group":req.body.group, "img_path":req.body.img1, "price":req.body.price, "track_list":req.body.tracks, "img_list":req.body.img2});
			alb.save(function(err, result) {
				if (err != null){
					console.log("Ошибка! -> " + err);
					res.json(500, err);
				} else {
					res.json(200, result);
					console.log("Добавление произошло успешно!");
				}
			});
		}

	});
};

module.exports = GoodsController;