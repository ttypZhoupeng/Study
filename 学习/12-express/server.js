/**
 * Created by waitfish on 15/5/11.
 */
// =======================
// 声明我们需要的模块 ============
// =======================


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
var config = require('./config'); //读取配置文件config.js信息
var User = require('./app/models/user'); //获取 User model 信息
// =======================
// 配置 =========
// =======================
var port = process.env.PORT || 8080; // 设置启动端口
mongoose.connect(config.database); // 连接数据库
app.set('superSecret', config.secret); // 设置app 的超级密码--用来生成摘要的密码

//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'));

// =======================
// 路由 ================
// =======================
// 基础路由
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.get('/setup',function(req,res){

    //创建一个测试用户
    var nick = new User({
        name: 'zhoupeng',
        password:'12345',
        admin:true
    });

    // 将测试用户保存到数据库
    nick.save(function(err){
        if(err) throw err;

        console.log('User saved successfully');
        res.json({success:true});
    })
})



// API 路由 -------------------
// 获取一个express的路由实例
var apiRoutes = express.Router();

apiRoutes.get('/',function(req,res){
    res.json({message:'欢迎来到王者荣耀!'})
})

//返回所有用户
apiRoutes.get('/users',function(req,res){
    User.find({},function(err,users){
        res.json(users);
    })
})

// 登录后得到token,认证接口
apiRoutes.post()


//应用apiRoutes，并在前面加前缀/api
app.use('/api',apiRoutes);



// =======================
// 启动服务 ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);

