var express = require("express"),
http = require("http"),
mongoose = require("mongoose"),
GoodsController = require("./controllers/goods_controller.js"),
UsersController = require("./controllers/users_controller.js"),
CategoriesController = require("./controllers/categories_controller.js")
app = express();

app.use(express.static(__dirname + "/client"));

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/w_kurs', {
		useNewUrlParser: true,
		useUnifiedTopology: true 
	}).then(res => {
		console.log("Включение сервера!")
	}).catch(err => {
		console.log(Error, err.message);
	});


http.createServer(app).listen(5000);

app.get('/goods.json', GoodsController.good_list);
app.get('/goods_search/:group', GoodsController.search);
app.get('/goods_show/:name', GoodsController.show_alb);


app.get('/users.json', UsersController.index);
app.get('/users/:login', UsersController.show);
app.get('/users/:login/:page', UsersController.show_page);
app.get('/users/:login/:page/goods.json', UsersController.show_json)
app.post('/users', UsersController.create_user);
app.post('/users', UsersController.create_mod);
app.delete('/users/:login', UsersController.remove);

app.get('/categories.json', CategoriesController.categorie_list);
app.get('/categories/:type', CategoriesController.categories_show);
app.get('/categories/cassette/:name', CategoriesController.cas_show);
