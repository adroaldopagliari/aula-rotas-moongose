var http = require('http');

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

var Controller = {
	create: function(req, res){}
	retrieve: function(req, res){}
	update: function(req, res){}
	remove: function(req, res){}
};


http.createServer(function (req, res) {

console.log('URL: ', req.URL);
var url = req.URL;

res.writeHead(200, {'Content-Type': 'application/json'});
  var dados = {
	name: 'Skol',
	description: 'Mijo de rato',
	alcohol: 4.5,
	price: 3.0,
	category: 'pilsen'
};

var model = new Beer(dados), msg = '';

switch(url){
case '/create':


	model.save(function(err, data) {
	if (err) {
		console.log('Erro: ', err);
		msg = 'Erro: ' + err;
	} else {
	console.log('Cerveja inserida', data);
	msg = 'Cerveja inserida: ' + data;
	}
		});

break;

case '/retrieve':	

Beer.find(query, function(err, data) {
	if (err){
		console.log('Erro: ', err);
	}
	else{
		console.log('Listagem: ', data);
	}
	process.exit(0);
});

break;

	case '/update':
	

 Beer = mongoose.model('Beer', BeerSchema), query = {name: /skol/i};

var mod = {
	name: 'Brahma',
	alcohol: 4,
	price: 6,
	category: 'pilsen'
};

var optional = {
	upsert: false,
	multi: false
};

Beer.update(query, mod,optional, function(err, data) {
	if (err){
		console.log('Erro: ', err);
	}else {
		console.log('Cervejas atualizadas com sucesso', data);
	}
});

break;

	case 'delete':

	

 Beer = mongoose.model('Beer', BeerSchema), query = {name: /skol/i};

Beer.remove(query, function(err, data) {
	if (err){
		console.log(err);
	}else {
		console.log('Cerveja deletada com sucesso, quantidade: ', data.result);
	}
});

break;

	default:
	res.end('Rota não encontrada');
	break;
}
  res.end(msg);
}).listen(3000);
  

console.log('Server running at http://1localhost:3000/');
