var express = require('express');
var router = express.Router();


var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'sharetime1'
});

connection.connect();

router.get('/',function(req,res,next){
    console.log(req.query);

    connection.query("SELECT * FROM `liuyan` WHERE 1",function(error,retule){
        res.send({
            message:"留言的所有数据",
            data:retule
        })
    });
    
})

router.get('/add',function(req,res,next){
   console.log(req.query);
    connection.query("INSERT INTO `liuyan`(`liuyanid`, `title`, `content`) VALUES (NULL,'"+req.body.title+"','"+req.body.content+"')",function(error){
        error?res.send({
            code:2001,
            message:"留言失败",
            data:error
        }):res.send({
            code:0,
            message:"留言成功"
        })
    })
})

// 增加留言


module.exports = router;