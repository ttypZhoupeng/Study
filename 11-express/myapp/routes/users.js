var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register',function(req,res){
  console.log(req.query);
  // res.send({
  //   code:0,
  //   message:"注册成功！",
  //   data:{
  //     id:001
  //   }
  // })
  var info = {};

  if(!req.query.username){
    info = {
      code:2001,
      message:"注册失败，未传入用户名"
    }
  }else if(req.query.username == "小明"){
    info = {
      code:2002,
      message:"注册失败，用户名重复"
    }
  }else{
    info = {
      code:0,
      message:"注册成功！",
      data:{
        id:2
      }
    }
  }
  
  res.send(info);
})

module.exports = router;
