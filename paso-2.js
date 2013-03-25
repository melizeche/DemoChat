var express = require('express'),
	swig	= require('swig'),
	cons 	= require('consolidate');
var app = express();

swig.init({
	cache : false
});

app.engine('.html', cons.swig);
app.set('view engine', 'html');
add.set('views', './views');

var mensajes = [];
var ress = [];

app.get('/', function (req, res) {
	res.render('home');
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