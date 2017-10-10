var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send({
		message: "我是一条商品的信息"
	});
})


router.post('/register',function(req,res){
	
	console.log(req.body);
	
	var info = { message: "就看看~"};
	
	res.send(info);
})

module.exports = router;