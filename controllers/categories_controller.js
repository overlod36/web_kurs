var categories = require("../models/categorie.js"),
	mongoose = require("mongoose"),
	CategoriesController = {};

CategoriesController.categorie_list = function(req, res){
	categories.find({}, function (err, result){
		res.json(result);
	});
};

CategoriesController.categories_show = function(req, res){
	var cat = req.params.type;
	if (cat == "cassette"){
		console.log("Клиент перешел в раздел кассет!");
	}
	else if (cat == "DVD"){
		console.log("Клиент перешел в раздел DVD!");
	}
	categories.find({'type': cat}, function(err, result){
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

CategoriesController.cas_show = function(req, res){
	var name = req.params.name;
	console.log("Переход в кассетную категорию -> " + name);
	categories.find({'type': 'cassette', 'name': name}, function(err, result){
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

CategoriesController.dvd_show = function(req, res){
	var name = req.params.name;
	console.log("Переход в DVD категорию -> " + name);
	categories.find({'type': 'DVD', 'name': name}, function(err, result){
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

module.exports = CategoriesController;