var express = require("express");
var User = require("../modules/user");

var router = express.Router();

router.get('/',function(req,res){

    var admin = new User({
        name:'zhoupeng1',
        password:'12345',
        admin:true
    })      //创建一个管理员

    admin.save(function(err){
        if(err){
            res.json({
                success:false,
                message:'管理员创建失败'
            });
        }
        res.json({success:true,message:"管理员创建成功"})
        
    })          //加入数据库，并判断是否成功
})

module.exports = router;     //导出路由