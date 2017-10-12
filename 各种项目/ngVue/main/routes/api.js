var express=require('express');
var router=express.Router();
var customer=require('../db/customer');
var document=require('../db/simple_doc');

//用户登录注册模块
router.get('/usr',function (req,res) {
  var query=req.query;
  customer.open(function (con) {
    customer.login(query.name,query.password,function (loginCode) {
      customer.close(con);
      if(loginCode===0){
        res.json({code:0,msg:'登录成功'});
        res.end();
      }else if(loginCode===1){
        res.json({code:1,msg:'用户名或密码错误'});
        res.end();
      }
    });
  });
});

router.post('/usr',function (req,res) {
  var body=req.body;
  customer.open(function (con) {
    customer.register(body.name,body.password,body.info,function (code) {
      customer.close(con);
      if(code===0){
        res.json({code:0,msg:'注册成功'});
        res.end();
      }else if(code===1){
        res.json({code:1,msg:'用户名被占用'});
        res.end();
      }
    });
  });
});

//(不适用)调用接口模块
router.get('/docs',function (req,res) {
  var query=req.query;
  document.open(query.name,function (con) {
    if(query.title){
      document.getDoc(query.title,function (result) {
        document.close(con);
        res.json(result[0]);
        res.end();
      });
    }else{
      document.getAllDoc(function (result) {
        document.close(con);
        res.end();
      });
    }
  });
});

//（不适用）存数据
router.post('/docs',function (req,res) {
  var body=req.body;
  if(req.body.status==='add'){
    document.open(body.name,function (con) {
      document.addDoc(body.title,function (result) {
        document.close(con);
        if(result===1){
          res.json({code:1,msg:'该标题已存在'});
          return res.end();
        }
        res.json({code:0,msg:'保存成功'});
        res.end();
      });
    });
  }else if(req.body.status==='addit'){
    document.open(body.name,function (con) {
      document.addPara(body.title,body.content,function (result) {
        document.close(con);
        if(result===1){
          res.json({code:1,msg:'添加条目失败'});
          res.end();
        }else {
          res.json({code:0,msg:'添加条目成功'});
          res.end();
        }
      })
    });
  }else {
    res.end(JSON.stringify(req.body.status)+'操作错误，请联系API开发人员');
  }
});

//字符串版：获取数据
router.get('/docs/simple',function (req,res) {
  var query=req.query;
  document.open(query.name,function (con) {
    if(query.title){
      document.getDoc(query.title,function (result) {
        document.close(con);
        res.json(result[0]);
        res.end();
      });
    }else{
      document.getAllDoc(function (result) {
        document.close(con);
        res.json(result);
        res.end();
      })
    }
  })
});

//字符串版：上传数据
router.post('/docs/simple',function (req,res) {
  var body=req.body;
  if(req.body.status==='add'){
    document.open(body.name,function (con) {
      document.addDoc(body.title,body.content,function (result) {
        document.close(con);
        if(result===1){
          res.json({code:1,msg:'添加失败'});
          res.end();
        }else{
          res.json({code:0,msg:'添加成功'});
          res.end();
        }
      })
    })
  }else if(req.body.status==='delete'){
    document.open(body.name,function (con) {
      document.removeDoc(body.title,function (result) {
        document.close(con);
        if(result===0){
          res.json({code:0,msg:'删除成功'});
          res.end();
        }else{
          res.json({code:1,msg:'删除失败'});
          res.end();
        }
      })
    })
  }
});

module.exports=router;