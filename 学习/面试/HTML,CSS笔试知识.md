<!-- TOC -->

- [1.你做的页面在哪些流览器测试过？这些浏览器的内核分别是什么?](#1你做的页面在哪些流览器测试过这些浏览器的内核分别是什么)
- [2.div+css的布局较table布局有什么优点？  （旧题）](#2divcss的布局较table布局有什么优点--旧题)
- [3.strong与em的异同？](#3strong与em的异同)
- [4.请描述一下cookies，sessionStorage和localStorage的区别？](#4请描述一下cookiessessionstorage和localstorage的区别)
- [src与href的区别](#src与href的区别)
- [5.网页制作会用到的图片格式](#5网页制作会用到的图片格式)
- [在css/js代码上线之后开发人员经常会优化性能，从用户刷新网页开始，一次js请求一般情况下有哪些地方会有缓存处理？](#在cssjs代码上线之后开发人员经常会优化性能从用户刷新网页开始一次js请求一般情况下有哪些地方会有缓存处理)
- [优化图片加载](#优化图片加载)
- [如何理解HTML结构语义化](#如何理解html结构语义化)
    - [为什么要用语义化](#为什么要用语义化)
- [css样式定义方式](#css样式定义方式)
- [css有哪些选择器](#css有哪些选择器)
- [css实现，dom不显示在浏览器可视区域](#css实现dom不显示在浏览器可视区域)
- [什么是Css Hack ie6,7,8 hack分别是什么？](#什么是css-hack-ie678-hack分别是什么)
- [块级元素行内元素](#块级元素行内元素)
- [link和@import的区别](#link和import的区别)
- [有哪些行内元素，块级元素](#有哪些行内元素块级元素)

<!-- /TOC -->

## 1.你做的页面在哪些流览器测试过？这些浏览器的内核分别是什么?
* IE:Trident
* FireFox:Gecko
* Safari:webkit
* Opera: 现为Blink
* Chrome: Blink 基于webkit，与opera共同开发


## 2.div+css的布局较table布局有什么优点？  （旧题）
* 结构与表现分离，更改方便
* 加载速度快，页面显示简洁
* 易于SEO

## 3.strong与em的异同？
前者为粗体强调，后者为斜体强调
同为行内元素

## 4.请描述一下cookies，sessionStorage和localStorage的区别？
sessionStorage：会话存储，在同一个会话中，页面才能被访问，并且，关闭浏览器，其保存的数据也会清除
localStorage: 本地存储，其保存的数据除非手动清除，否则永远保存

cookie与web Storage相似，但是其有内存限制，只能存储4k的数据，并且每次打开新的页面都会将cookie传过去，浪费了带宽，但是也不可获取，他是与服务器进行交互的，而web Storage只是单纯的本地存储

## src与href的区别
具体说，src用于替换当前元素，href用于建立与其他资源的一个联系
接地气的说，src就是引入元素，需要下载和处理，需要加载编译执行完成后才会继续加载其他资源,例如<img src="xx.jpg">
而href是引用资源，知识建立一个与其他资源的连接，例如a标签，在引用加载的同时，还能继续加载其他的页面内容，例如<link href="common.css">


## 5.网页制作会用到的图片格式
除了现在常看到的，jpg，png，gif，svg
还有现在谷歌开发的一种新的图片格式，webp，据说webp格式的图片能够在保证同样质量的情况下，使大小只占jpg的60%，能够节省大量的带宽以及数据空间

## 在css/js代码上线之后开发人员经常会优化性能，从用户刷新网页开始，一次js请求一般情况下有哪些地方会有缓存处理？
dns缓存，cdn缓存，浏览器缓存，服务器缓存


## 优化图片加载
* 图片懒加载，在页面不可视区域添加滚动条事件，判断图片位置与浏览器顶端与页面的距离，如果前者小于后者优先，加载
* 如果图片是css图片，可以通过CSSsprite 或者 SVGsprite等技术


## 如何理解HTML结构语义化
语义化就是，写结构的时候用相对应有一定语义的标签来表示，例如<Strong>等

### 为什么要用语义化
* 去掉或样式丢失的时候能让页面呈现清晰的结构：
* 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
* 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

## css样式定义方式
* 外部样式表
* 内部样式表
* 内联样式

## css有哪些选择器
* 派生选择器
* id选择器
* 类选择器

## css实现，dom不显示在浏览器可视区域
* display:none
* visibility:hidden
* 绝对定位，加上z-index:-1000;

## 什么是Css Hack ie6,7,8 hack分别是什么？
针对于不同浏览器写不同的css code的过程，就是css hack
background-color:yellow;    /*ie8*/
+background-color:pink;        /*ie7*/
_background-color:orange;       /*ie6*/ 

## 块级元素行内元素
块级元素
独占一行，padding.margin都可控制，
行内元素
与相邻元素同在一行，padding,margin只有left，right可控制

## link和@import的区别
link是html中的，@import是css中的

link在加载文档结构的时候同时加载，@import需要文档结构加载完后再加载

link不存在浏览器兼容问题，@import低版本IE不兼容

## 有哪些行内元素，块级元素
行内元素：span,em,img,input,select..
块级元素：div,p,ul,li,ol,dd,dt,dl,h1,h2,h3,..