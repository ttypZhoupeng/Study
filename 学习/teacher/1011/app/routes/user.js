var express = require('express');
var app = express();
var User = require('../modules/user');


var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
var config = require('../../config');
app.set('superSecret', config.secret);

var router = express.Router();


router.post('/login',function(req,res){
	User.findOne({
		name: req.body.name
	},function(err,user){
		
		if(err){
			res.json({ success: false, message: "登录失败" });
		};
		
		if(!user){
			res.json({success: false,message: "认证失败，用户名找不到"});
		}else if(user){
			
			//验证密码
			if(user.password != req.body.password){
				res.json({success: false,message: "认证失败，密码错误！"});
			}else {
				
				var token = jwt.sign({name:'foo'},app.get('superSecret'));
				
				res.json({
					success: true,
					massage: "恭喜~登录成功~",
					token: token
				})
			}
		}
		
	})
})



module.exports = router;