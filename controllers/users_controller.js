var goods = require("../models/good.js"),
	users = require("../models/user.js"),
	mongoose = require("mongoose"),
	UsersController = {};

UsersController.show = function(req, res){
	console.log('smth');
};

users.find({}, function(err, result){
	if (err !== null){
		console.log("Ошибка! -> " + err);
	} else if (result.length === 0){
		console.log("Добавление администратора!");
		var admin = new users({"login": "admin", "pos":"Администратор"});
		admin.save(function (err, result) {
			if (err != null){
				console.log("Ошибка! -> " + err);
			}
			else{
				console.log("Администратор был добавлен!");
			}
		});
	}
});

UsersController.index = function(req, res){
	users.find(function (err, users){
		if (err != null){
			console.log("Ошибка! -> " + err);
			res.json(500, err);
		} else {
			res.json(200, users);
		}
	});
};

UsersController.show = function(req, res){
	var log = req.params.login;
	console.log("Пользователь " + log + " заходит в систему!");
	users.find({'login': log}, function(err, result){
		if (err) {
			console.log(err);
		} else if (result.length !== 0) {
			res.sendfile('./client/cassettes.html');
		} else {
		  res.send(404);
		}
	});
};

UsersController.show_page = function(req, res){
	var log = req.params.login;
	var page = req.params.page;
	console.log(log + ' ' + page);
	users.find({'login': log}, function(err, result){
		if (err) {
			console.log(err);
		} else if (result.length !== 0) {
			res.sendfile('./client/' + page);
		} else {
		  res.send(404);
		}
	});
}


UsersController.create_user = function(req, res) {
	var login = req.params.login;
	console.log('Администратор добавляет рядового пользователя -> ' + login);
	users.find({"login": login}, function (err, result){
		if (err){
			console.log("Ошибка! -> " + err);
			res.status(500).json(err);
		} else if (result.length !== 0){
			console.log("Пользователь с таким логином уже есть в базе!");
			res.status(501).send("Уже есть такой пользователь!");
		} else {
			var user = new users({"login" : login, "pos": "Пользователь"});
			user.save(function(err, result) {
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

UsersController.create_mod = function(req, res) {
	var login = req.params.login;
	console.log('Администратор добавляет модератора -> ' + login);
	users.find({"login": login}, function (err, result){
		if (err){
			console.log("Ошибка! -> " + err);
			res.status(500).json(err);
		} else if (result.length !== 0){
			console.log("Пользователь с таким логином уже есть в базе!");
			res.status(501).send("Уже есть такой пользователь!");
		} else {
			var user = new users({"login" : login, "pos": "Модератор"});
			user.save(function(err, result) {
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
}

UsersController.remove = function(req, res) {
	var login = req.params.login;
	console.log('Администратор удаляет пользователя -> ' + login);
	users.find({"login": login}, function(err, result){
		if (err){
			console.log("Ошибка! -> " + err);
			res.status(500).json(err);
		} else if (result.length !== 0) {
			users.deleteOne({"login": login}, function(err, user){
				if (err !== null){
					console.log("Ошибка! -> " + err);
					res.json(500, err);
				}
				else{
					res.json(200, user);
				}
			});
		} else {
			console.log("Ошибка! -> " + err);
			res.status(404).send("Пользователя не существует!");
		}

	});
}

module.exports = UsersController;