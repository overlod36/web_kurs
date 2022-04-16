var express = require("express"),
http = require("http"),
mongoose = require("mongoose"),
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

var good_schema = mongoose.Schema({
	type: String,
	genre: String,
	group: String,
	img_path: String,
	price: String,
	track_list: [String]
});

var goods = mongoose.model("good", good_schema, "goods");

http.createServer(app).listen(5000);

app.get("/goods.json", function (req, res) {
	goods.find({}, function (err, toDos) {
		console.log(toDos);
		res.json(toDos);
	});
});
