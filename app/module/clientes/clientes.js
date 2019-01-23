var express 	= require('express');
var router 		= express.Router();
var db 			= require('./models');
var Customer 	= db.Mongoose.model('customers', db.CustomerSchema, 'customers');


router.get('/', function (req, res, next) {  
    Customer.find({}).lean().exec(function(e,docs){
       res.json(docs);
       res.end();
    });
});

router.get('/:id', function (req, res, next) {
    Customer.find({ _id: req.params.id }).lean().exec(function (e, docs) {
        res.json(docs);
        res.end();
    });
});

router.post('/', function (req, res, next) {
    var newcustomer = new Customer({ name: req.body.name, email: req.body.email });
    newcustomer.save(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(newcustomer);
        res.end();
    });
});

router.put(':id', function (req, res, next) {
    Customer.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, doc) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json(req.body);
        res.end();
    });
});

router.delete(':id', function (req, res, next) {
    Customer.find({ _id: req.params.id }).remove(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json({success: true});
        res.end();
    });
});

module.exports = router;