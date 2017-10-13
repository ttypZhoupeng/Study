var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
var config = require('./config'); //读取配置文件config.js信息

var categoryRoute = require('./app/routes/category');// 导入路由文件
var setupRoute = require('./app/routes/setup');// 导入路由文件
var userRoute = require('./app/routes/user');// 导入路由文件
var blogRoute = require('./app/routes/blog');// 导入路由文件
var commentRoute = require('./app/routes/comment');// 导入路由文件

var port = process.env.PORT || 8080; // 设置启动端口
mongoose.connect(config.database); // 连接数据库
app.set('superSecret', config.secret); // 设置app 的超级密码--用来生成摘要的密码

//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'));

app.use('/category',categoryRoute);
app.use('/setup',setupRoute);
app.use('/user',userRoute);
app.use('/blog',blogRoute);
app.use('/comment',commentRoute);


app.listen(port);
console.log('Magic happens at http://localhost:' + port);
