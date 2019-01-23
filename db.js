var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apitest', function(err){
	if(err){
		console.log('Erro ao conectar no banco: ' + err);
	}
});
 
var customerSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'customers' }
);
 
module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }
