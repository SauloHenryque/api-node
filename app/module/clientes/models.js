var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apitest', { useNewUrlParser: true });
 
var customerSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'customers' }
);
 
module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }
