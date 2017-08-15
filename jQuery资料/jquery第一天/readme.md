>js添加事件，父容器不同，相应的下标不同

>如何将jquery对象转换成原生对象，如何将原生转换成jquery对象
    
<!-- TOC -->

- [1. jQuery第一天笔记](#1-jquery第一天笔记)

<!-- /TOC -->
# 1. jQuery第一天笔记

>1.jQuery对象不是原生js对象

选择出来的东西是jQuery自己的对象，后面不能跟原生js语法
要转为原生js对象，加[0]就行
```
$("#box")[0].style.backgroundColor = "red";
```

>2.在js中只有三个东西不能加引号

1. $(this);
2. $(document);
3. $(window);

>3.筛选器

* $("p")
* $("p:first")
* $("p:last")
* $("p:eq()")
* $("p:le()")
* $("p:ge()")
* $("p:odd")
* $("p:even)

 **其中eq()可以单独提取出来，当函数用** 

>jQueryUI 插件遇到的问题
```
<script type="text/javascript" src="js/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
```