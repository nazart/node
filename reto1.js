var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');
app.get('/', function (req,res){
	res.send('mi primer servidor');
});

var getUsuario = function(){
	var id = faker.random.uuid();
	var contenido = faker.name.title();
	var fecha = faker.date.recent();
	var randonName = faker.name.findName();
	var randonEmail = faker.internet.email();
	var randonImage = faker.image.avatar();
	var usuario = {
		id:id,
		nombre:randonName,
		contenido:contenido,
		fecha:fecha,
		email:randonEmail,
		imagen:randonImage
	};
	return usuario;
}

app.get('/friends',function(reg,res){
	var cantidad = _.random(5,10);
	var usuarios = _.times(cantidad,getUsuario);
	res.json(usuarios);
});
app.get('/amigos',function(reg,res){
	res.send('mis amigos');
});

app.listen(3000);