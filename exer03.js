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

var Schema = mongoose.Schema;

var json_schema = {
	name: {type: String, default: ''}
	, description: {type: String, default: ''}
	, alcohol: {type: Number, min: 0}
	, price: {type: Number, min: 0}
	, category: {type: String, default: ''}
}

var BeerSchema = new Schema(json_schema);

var Beer = mongoose.model('Beer', BeerSchema);

var dados = {
	name: 'Skol',
	description: 'Mijo de rato',
	alcohol: 4.5,
	price: 3.0,
	category: 'pilsen'
};
var model = new Beer(dados);


	model.save(function(err, data) {
	if (err) {
		console.log('Erro: ', err);
	} else {
	console.log('Cerveja inserida', data);
}
});

