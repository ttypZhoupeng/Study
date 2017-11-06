## 客户端，服务端以及数据库
客户端：是直接让客户使用的窗口 =》特征：用来展示数据（间接操作服务端（数据））

服务端： 提供数据、服务的端口 =》特征：直接操作数据
1.逻辑（服务）
2.数据 =》 存储到数据库中的内容
		
数据库：
mySQL
mongoDB

## 跨域

如果一个前端页面请求这个注册的端口，那么就会发送跨域注意
只要是不同端口，不同的主机地址，互相访问数据，就会出现问题！
解决方式：Corse(设置允许的主机地址origin) jsonP(json的数据交换格式)


下面内容，放在app.js文件中，var app = express();下面
app.all("*",function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");//设置允许的主机地址是：任意的
  res.header("Content-Type","application/json;charset=utf-8");//数据格式是json,语言
  next(); //执行完all之后继续执行下面的接口
})