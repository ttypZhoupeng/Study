
# HTML5第一天笔记

## 1.语义  **能够让你更恰当地描述你的内容是什么**

### 1.1新的骨架结构

* !DOCTYPE html
* meta charset="utf-8"

### 1.2新的规范

* 标签大小写都行

\<DiV>我是一个盒子\</DiV>

* 自封闭标签不一定有反斜杠

\<img src="images/1.jpg" alt="">

* 引号可以不加

\<img src=images/1.jpg alt=我是一个图图 >

* type属性都不用写了

\<link rel="stylesheet" href="1.css">

* 不再区分容器级和文本级
```
<a href="">
	<p>文字文字文字文字</p>
	<p>文字文字文字文字</p>
</a>
```

### 1.3HTML5中的提纲新标签

* 头部 \<header>
* 区域 \<section>
* 脚部 \<footer>
* 文章 \<article>
* 侧边内容 \<aside>
* 导航条 \<nav>















# 知识扩展


## 1.php MD5加密

## 2.渐进增强 优雅降级

## 3.\<hgroup>
标签组合，当标题中有\<h1>\<h2>或者更多，就可以用这个包裹，可以改变hgroup的样式就能改变里面所\<h>的样式

## 4.:invalid
:invalid 选择器用于在表单元素中的值是非法时设置指定样式。


## 5.querySelectAll与getElementsBy区别

> 5.1前者接收的参数是css选择器，后者是只能是className,tagName,name

```
try {
  var e1 = document.getElementsByClassName('1a2b3c');
  var e2 = document.querySelectorAll('.1a2b3c');
} catch (e) {
  console.error(e.message);
}
console.log(e1 && e1[0].className);
console.log(e2 && e2[0].className);
```

> 5.2返回值不同，前者返会的是静态节点集合，后者返会的是动态节点集合

举个栗子：
```
var ul = document.querySelectorAll('ul')[0],
    lis = ul.querySelectorAll("li");
for(var i = 0; i < lis.length ; i++){
    ul.appendChild(document.createElement("li"));
}

// Demo 2
var ul = document.getElementsByTagName('ul')[0], 
    lis = ul.getElementsByTagName("li"); 
for(var i = 0; i < lis.length ; i++){
    ul.appendChild(document.createElement("li")); 
}

```
> 5.3getElementById / querySelector

getElementById / querySelector 这两个获取到的都是dom节点，结果没有区别

来源：知乎&nbsp;&nbsp;&nbsp;&nbsp;作者：简生

https://www.zhihu.com/question/24702250/answer/28695133






