var express = require('express');
var mongoDB = require("../model/mongo");

var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res) {
	var response={};
	mongoDB.find({},function(err,data){
		if(err){
			response = {"error": ture, "message":"Error fetching data"}
		}else{
			response = {data}
		}
	res.send(response);
	});
});

router.post('/users', function(req, res) {
	var response={};
	var obj = new mongoDB();
	obj.username = req.body.username;
	obj.email = req.body.email
	obj.save(function(err){
		if(err){
			console.log(err);
			response = {"error": ture, "message":"Error creating user"}			
		} else {
	            response = {"Data added"};
           }
          res.send(response);
	});
});


module.exports = router;
