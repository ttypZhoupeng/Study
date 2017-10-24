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


