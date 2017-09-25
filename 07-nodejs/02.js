var http = require('http');//模块化 把http模块导入，http模块是系统模块
var i = 0;

//createServer这个方法可以创建一个web服务器，里面有一个回调函数
//每次请求这个web服务器的时候都会请求里面的代码，回调里面有两个参数（请求,）
var app = http.createServer(function(req,res){

    i++;
    if(i === 9){
        throw new Error("炸了");
    }
    
    console.log("有客到~");
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});  
    res.end("欢迎来到王者荣耀！");//类似php中的echo输出，end结束，到这里该做的
})


app.listen(8080);//端口设置

console.log("server running");