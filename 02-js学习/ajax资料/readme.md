<!-- TOC -->

- [1. ajax笔记总结](#1-ajax笔记总结)
    - [1 ajax第一天笔记总结](#1-ajax第一天笔记总结)

<!-- /TOC -->

# 1. ajax笔记总结

## 1 ajax第一天笔记总结

>1.1 ajax重要四步骤

1. 创建一个xhr变量
2. 验证状态
3. 创建请求
4. 发送请求

```
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        当状态为4时需要执行的代码
    }
}

xhr.open("GET/POST","URL",ture);
//一般最后都写true

xhr.send(null);  
//填写请求头内容，get里没有报文头填写null
 ```

>1.2 xhr对象

1. ajax完全依赖于XMLHttpRequest对象，字面意思是"XML文件的Http请求"对象
2. * X: XML 就是一个文件格式
   * H: HTTP 传输协议
   * R: request 请求
**小黄人xhr，面试可能考到**

>1.3 目前学到的异步

1. setInterval、setTimeout
2. 所有的事件监听
3. Ajax

>1.4 encodeURIComponent()

一般前端用这个将中文转为URI标准字符

>1.5 post请求

send前面需要加
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send("xingming="+encodeURIComponent("考拉")+"&age=18");

>1.6 字符串转为json

1. eval("("+data+")");
2. new Function("return" + data)();
3. JSON.parse(data)

# 2.ajax第二天笔记


    