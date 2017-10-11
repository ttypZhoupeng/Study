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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/register',function(req,res){
//   console.log(req.query);

//   var info = {};

//   if(!req.query.username){
//     info = {
//       code:2001,
//       message:"注册失败，未传入用户名"
//     }
//   }else if(req.query.username == "小明"){
//     info = {
//       code:2002,
//       message:"注册失败，用户名重复"
//     }
//   }else{
//     info = {
//       code:0,
//       message:"注册成功！",
//       data:{
//         id:2
//       }
//     }
//   }
  
//   res.send(info);
// })

router.post('/register',function(req,res){
  console.log(req.body);
  connection.query("INSERT INTO 'users'('userid','username','phone','password') VALUES (NULL,'"+req.body.username+"','"+req.body.phone+"','"+req.body.password+"')",function(error){
    connection.query("INSERT INTO 'users'('userid','username','phone','password') VALUES (NULL,'"+req.body.username+"','"+req.body.phone+"','"+req.body.password+"')",function(error){
    error?res.send({
      code:2001,
      message:"注册失败",
      data:error
    }):res.send({
      code:0,
      message:"注册成功"
    })
  })

})

module.exports = router;
