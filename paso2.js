var express = require('express');
var app = express();
var mensajes = [];
var ress = [];

app.get('/', function (req, res) {
	res.send('Hello world');
});

app.get('/mensaje/new/:mensaje', function (req, res){
	mensajes.push(req.params.mensaje);
	
	ress.forEach(function (res){
		res.send(mensajes + '<script>window.location.reload();</script>');
	});
	
	res.send('Tu mensaje es ' + req.params.mensaje);
});

app.get('/mensaje/list', function (req, res){
	ress.push(res);
	//res.send(mensajes + '<script>setTimeout(function(){window.location.reload()},1000);</script>');
});

app.listen(3000);
console.log('Aplicacion Funcional')