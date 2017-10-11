var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host    : 'localhost',
	user    : 'root',
	password: 'root',
	database: 'sharetime1'
});

connection.connect();

router.get('/', function(req, res, next) {
	console.log(req.query);
	
	connection.query("SELECT * FROM  `liuyan`",function(error,retule){
			res.send({
				message: "留言所有的数据！",
				data: retule
			});
		
		
	})
});

router.get('/add', function(req, res, next) {
	console.log(req.query);
  connection.query("INSERT INTO `liuyan`(`liuyanid`, `titile`, `content`) VALUES (NULL,'" +req.query.titile+ "','" +req.query.content+ "')",function(error,retule){
		
		res.send({
			code: 0,
			message: "留言成功"
		});
		
	})
});

module.exports = router;