var express = require("express"),
http = require("http"),
mongoose = require("mongoose"),
app = express();

app.use(express.static(__dirname + "/client"));

http.createServer(app).listen(5000);