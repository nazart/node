var express = require('express');
var app = express();
var faker = require('faker');

app.get('/', function (req,res){
	res.send('mi primer servidor');
});

app.get('/friends',function(reg,res){
	var randonName = faker.name.findName();
	var randonEmail = faker.internet.email();
	var randonImage = faker.image.avatar();
	var usuario = {
		nombre:randonName,
		email:randonEmail,
		imagen:randonImage
	};
	res.json(usuario);
});
app.get('/amigos',function(reg,res){
	res.send('mis amigos');
});

app.listen(3000);