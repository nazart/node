var express = require('express');
var app = express();

app.get('/', function (req,res){
	res.send('mi primer servidor');
});

app.get('/perfil',function(reg,res){
	res.send('mi perfil');
});
app.get('/amigos',function(reg,res){
	res.send('mis amigos');
});

app.listen(3000);