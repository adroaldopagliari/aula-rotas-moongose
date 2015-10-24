var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err) {
	console.log('Erro de conexão.', err);
});

db.open('open', function(){
	console.log('Conexão aberta.');
});

db.open('connected', function(){
	console.log('Conectado');
});

db.open('disconnected', function(){
	console.log('Desconectado');
});
