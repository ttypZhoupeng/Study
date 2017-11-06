
# HTML5第一天笔记

## 1.语义  **能够让你更恰当地描述你的内容是什么**

### 1.1新的骨架结构

* !DOCTYPE html
* meta charset="utf-8"

### 1.2新的规范

#### (1) 标签大小写都行

\<DiV>我是一个盒子\</DiV>

#### (2)自封闭标签不一定有反斜杠

\<img src="images/1.jpg" alt="">

#### (3)引号可以不加

\<img src=images/1.jpg alt=我是一个图图 >

#### (4) type属性都不用写了

\<link rel="stylesheet" href="1.css">

#### (5) 不再区分容器级和文本级
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



### 1.4新的语义元素

#### (1)模板
```
<template>
    <ul>
        <li><%=name%> </li>
        <li><%=name%> </li>
        <li><%=name%> </li>
        <li><%=name%> </li>
    </ul>
</template>
```

#### (2)主体部分
```
<section>
    <aside></aside>
    <main></main>
</section>
```
#### (3).图文
```
<figure>
	<img src="images/0.jpg" alt="">
	<figcaption>这是一只狗</figcaption>
</figure>
```

#### (4).进度条

\<progress value="60" max="100">60%\</progress>

#### (5).地址
\<address>杭州西湖\</address>

#### (6).时间
```
<p>
    注意，周一<time>9:00</time>上课
</p>
```

#### (7).高亮，标注

```
<p>
	Ajax<mark>一定</mark>要好好复习！
</p>
```

#### (8).注音
```
<p>
    傻<ruby>屌<rt>diǎo</rt></ruby>
</p>
```

### 1.5新的表单元素

**表单元素不需要再放在form中**

* search&nbsp;&nbsp;&nbsp;搜索框
* tel &nbsp;&nbsp;&nbsp;电话
* url &nbsp;&nbsp;&nbsp;网址
* email&nbsp;&nbsp;&nbsp; 邮箱
* number&nbsp;&nbsp;&nbsp; 数字
* color&nbsp;&nbsp;&nbsp; 颜色
* date &nbsp;&nbsp;&nbsp;日期  time week

### 1.6新的表单属性

* 1.pattern  自定义正则
* 2.required 必填项
* 3.placehoder 提示文本
* 4.autofocus 自动得到焦点

### 1.7表单元素有一些更新

>1.label标签能直接包裹input
```
<label>
	<input type="radio" name="sex">男
</label>
```
>2.智能感应
```
请输入你的家乡
<input type="text" list="tishi">

<datalist id="tishi">
    <option value="北京">北京</option>
    <option value="上海">上海</option>
    <option value="东莞">东莞</option>
    <option value="东京">东京</option>
</datalist>
```

## 音频、视频

### 1.视频 video

>1.1标准模式
```
<video src="video/1.mp4" width="500" autoplay controls loop>
	很遗憾，你的浏览器不支持video标签
</video>
```

* src 视频地址
* width、height 视频的宽高
* autopay 自动播放
* controls 显示播放按钮的控件
* loop 自动循环

>1.2多视频列表
```
<video width="500" autoplay controls loop>
    很遗憾，你的浏览器不支持video标签
    <source src="video/1.mp4" />
    <source src="video/2.mp4" />
    <source src="video/3.mp4" />
</video>
```

如果有很多视频，就用source一一列出


>1.3需要注意的地方

**支持的视频格式是mp4、ogv，其他都不支持**

>1.4这个控件所持有的事件以及方法

事件：

* onpause 当暂停的时候
* onplay 当播放的时候

方法：

* pause()暂停
* play()播放


### 2.音频 audio
```
<audio src="audio/a.mp3" autoplay controls></audio>
```

>2.1 支持的 格式

**mp3 ogg**

>2.2 IE9开始支持



## 本地存储

### 1.localStorage 本地存储

**API很简单只有3个**
* localStorage.setItem(k,v);  //存储
* localStorage.getItem(k);    //读取
* localStorage.removeItem(k); //删除

### 2.sessionStorage 会话存储

**API和本地存储一样，也是简单的三个**
* sessionStorage.setItem(k,v);  //存储
* sessionStorage.getItem(k);    //读取
* sessionStorage.removeItem(k); //删除
























# 知识扩展


## 1.php MD5加密

## 2.渐进增强 优雅降级

## 3.\<hgroup>
标签组合，当标题中有\<h1>\<h2>或者更多，就可以用这个包裹，可以改变hgroup的样式就能改变里面所\<h>的样式

## 4.:invalid
:invalid 选择器用于在表单元素中的值是非法时设置指定样式。


## 5.querySelectAll与getElementsBy区别

### 5.1前者接收的参数是css选择器，后者是只能是className,tagName,name

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

### 5.2返回值不同，前者返会的是静态节点集合，后者返会的是动态节点集合

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
### 5.3getElementById / querySelector

getElementById / querySelector 这两个获取到的都是dom节点，结果没有区别

来源：知乎&nbsp;&nbsp;&nbsp;&nbsp;作者：简生

https://www.zhihu.com/question/24702250/answer/28695133


### 5.4lable

* <label> 标签为 input 元素定义标签（label）。
* label 元素不会向用户呈现任何特殊的样式。不过，它为鼠标用户改善了可用性，因为如果用户点击 label 元素内的文本，则会切换到控件本身。<br>
* <label> 标签的 for 属性应该等于相关元素的 id 元素，以便将它们捆绑起来。

**也就是说使用label标签，用户点击其中的文本，也能聚焦到input中**


**需要用for绑定input的id**

>不包含input
```
<form>
<label for="male">Male</label>
<input type="radio" name="sex" id="male" />
<br />
<label for="female">Female</label>
<input type="radio" name="sex" id="female" />
</form>
```


>包含input
```
<label for="ye">
    <input id="ye" type="checkbox" />
    文本
</label>
```

点击文本能够实现聚焦，将文本与input绑定在一起












