### 新的语义元素

> 1.模板
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

>2.主体部分
```
<section>
    <aside></aside>
    <main></main>
</section>
```
> 3.图文
```
<figure>
	<img src="images/0.jpg" alt="">
	<figcaption>这是一只狗</figcaption>
</figure>
```

>4.进度条

\<progress value="60" max="100">60%\</progress>

>5.地址
\<address>杭州西湖\</address>

>6.时间
```
<p>
    注意，周一<time>9:00</time>上课
</p>
```

>7.高亮，标注

```
<p>
	Ajax<mark>一定</mark>要好好复习！
</p>
```

>8.注音
```
<p>
    傻<ruby>屌<rt>diǎo</rt></ruby>
</p>
```

### 新的表单元素

* search&nbsp;&nbsp;&nbsp;搜索框
* tel &nbsp;&nbsp;&nbsp;电话
* url &nbsp;&nbsp;&nbsp;网址
* email&nbsp;&nbsp;&nbsp; 邮箱
* number&nbsp;&nbsp;&nbsp; 数字
* color&nbsp;&nbsp;&nbsp; 颜色
* date &nbsp;&nbsp;&nbsp;日期  time week

### 新的表单属性

> 1.pattern  自定义正则
> 2.required 必填项
> 3.placehoder 提示文本
> 4.autofocus 自动得到焦点

### 表单元素有一些更新

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

