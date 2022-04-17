var express = require("express"),
http = require("http"),
mongoose = require("mongoose"),
GoodsController = require("./controllers/goods_controller.js"),
app = express();

app.use(express.static(__dirname + "/client"));

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/w_kurs', {
		useNewUrlParser: true,
		useUnifiedTopology: true 
	}).then(res => {
		console.log("DB Connected!")
	}).catch(err => {
		console.log(Error, err.message);
	});


http.createServer(app).listen(5000);

app.get('/goods.json', GoodsController.good_list);
