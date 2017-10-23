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

## 4.9.请描述一下cookies，sessionStorage和localStorage的区别？
sessionStorage：会话存储，在同一个会话中，页面才能被访问，并且，关闭浏览器，其保存的数据也会清除
localStorage: 本地存储，其保存的数据除非手动清除，否则永远保存

cookie与web Storage相似，但是其有内存限制，只能存储4k的数据，并且每次打开新的页面都会将cookie传过去，浪费了带宽，但是也不可获取，他是与服务器进行交互的，而web Storage只是单纯的本地存储

