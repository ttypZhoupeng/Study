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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('今天又降温了~好冷~');
});

//router.get('/register', function(req, res, next) {
//	console.log(req.query);
//	
//	var info = {};
//	
//	if(!req.query.username){
//		info = {
//			code: 2001,
//		message: "请输入用户名"
//		}
//	}else if(req.query.username == "小张"){
//		info = {
//			code: 2002,
//		message: "用户名重复了！"
//		}
//	}else{
//		info= {
//			code: 0,
//			message: "数据请求成功",
//			data: {
//				id: 100,
//				name: "小明"
//			}
//		}
//	}
//	
//	
//res.send(info);
//});

router.post('/register', function(req, res) {
	console.log(req.body);
	
	connection.query("INSERT INTO `users`(`userid`, `username`, `phone`, `password`) VALUES (NULL,'" +req.body.username+ "','" +req.body.phone+ "','" +req.body.password+ "')",function(error,retule){
		
		error?res.send({
			code: 2001,
			message: "注册失败",
			data: error
		}):res.send({
			code: 0,
			message: "注册成功"
		});
		
	})
	})
//用户名验证
	router.post('/login', function(req, res) {
	console.log(req.body);
	
	connection.query("SELECT * FROM  `users` WHERE `username`= '" +req.body.username+ "'",function(error,retule){
			res.send({
				data: retule
			});
		
		
	})	
});

module.exports = router;
