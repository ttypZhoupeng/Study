# 1.window.onload 与jquery 加载$(document).ready()既(function(){})的区别

>1.执行时间
* ① window.onload必须等到页面中包括图片的所有元素加载完毕才能执行
* ② $(document).ready是DOM绘制完毕后执行，不用等到加载完毕

>2.编写个数不同
* ① window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个
* ② $(document).ready()可以编写多个，并且都可以得到执行

>3.简化写法

* ① window.onload没有简化写法
* ② $(document).ready(function(){})可以简写成$(function(){})

*(function(){}) 是在页面dom加载完就执行，而(function(){})()是在页面加载之前就执行的，比如今天学到的一个模仿jq的一个js代码*

# 2.迭代器到底是什么



# js第三天笔记

