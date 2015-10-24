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

var Beer = mongoose.model('Beer', BeerSchema), query = {name: /skol/i};

Beer.remove(query, function(err, data) {
	if (err){
		console.log(err);
	}else {
		console.log('Cerveja deletada com sucesso, quantidade: ', data.result);
	}
});