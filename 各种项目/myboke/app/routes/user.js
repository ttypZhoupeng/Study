var express = require('express');
var app = express();//定义app
var User = require("../modules/user")

var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
var config = require('../../config');
app.set('superSecret', config.secret); // 设置app 的超级密码--用来生成摘要的密码

var router = express.Router();

router.post('/login',function(req,res){
    User.findOne({
        name:req.body.name //根据用户输入用户名进行匹配
    },function(err,user){   //登录验证
        if(err){
            res.json({success:false,message:"登录失败"});
        };

        if(!user){
            res.json({success:false,message:"认证失败，用户名找不到"});
        }else if(user){
            if(user.password != req.body.password){
                res.json({success:false,message:"认证失败，密码错误"});
            }else{
                var token = jwt.sign({name:'foo'},app.get('superSecret'));//获取token
                res.json({
                    success:true,
                    message:"恭喜，登录成功",
                    token:token
                })
            }
        }
    })
})

module.exports = router;