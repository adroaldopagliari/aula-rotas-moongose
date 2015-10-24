//Modularizar o código - criar model separadamente
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