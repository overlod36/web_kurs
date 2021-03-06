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
app.get('/goods_show/:name', GoodsController.show_alb);
app.get('/goods_search/:group', GoodsController.search);
app.post('/goods/add', GoodsController.add_alb);
app.delete('/goods/delete/:name', GoodsController.del_alb);
app.put('/goods/update', GoodsController.up_alb);


app.get('/users.json', UsersController.index);
app.get('/users/:login', UsersController.show);
app.get('/users/:login/:page', UsersController.show_page);
app.get('/users/:login/:page/goods.json', UsersController.show_json);
app.post('/users/admin/user/:login', UsersController.create_user);
app.post('/users/admin/mod/:login', UsersController.create_mod);
app.delete('/users/:login', UsersController.remove);
app.put('/users/:login/:new_login', UsersController.edit);

app.get('/categories.json', CategoriesController.categorie_list);
app.get('/categories/:type', CategoriesController.categories_show);
app.get('/categories/cassette/:name', CategoriesController.cas_show);
app.get('/categories/DVD/:name', CategoriesController.cas_show);
