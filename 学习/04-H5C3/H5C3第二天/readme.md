# CSS3学习第一天

## 一、兼容性策略

### 1.平稳退化

平稳退化先以高版本思考问题，低版本用户就不兼容就算了，因为已经足够能使用这个页面了

### 2.渐进增强

渐进渐强是对自己的严格要求，给高级浏览器用户更多的功能

## 二、CSS3概述

### 1.CSS3很炫酷
因为增加了3D、过渡、变形、动画等等新特性

### 2.CSS3的一个非常好的特点
遇见不认识的选择器、属性，会静默，不会报错

### CSS3新增的东西

* 选择器40多种
* 伪元素
* 伪类
* 颜色表示法
* 边框和阴影
* background系列属性改变
* 过渡
* 2D变形
* 3D变形
* 动画
* 响应式的 新属性，比如多列，文字溢出折叠..

## 三、CSS3选择器

### 1.选择src属性为images/2.png的元素

>HTML
```
<img src="images/0.png" alt="">
<img src="images/1.png" alt="">
<img src="images/2.png" alt="">
<img src="images/3.png" alt="">
<img src="images/4.png" alt="">
```
>CSS
```
img[src="images/2.png"]{
	border: 10px solid #000;
}
```


**IE7开始兼容**

### 2.还可以不用写标签名
```
[src="images/2.png"]{
	border: 10px solid #000;
}
```

**不过不能没有引号**
```
[src=images/2.png]{
	border: 10px solid #000;
}
```

**可以有中文**
```
[alt="哈哈"]{
	transform:rotate(30deg);
}
```


### 3.有一些拓展

* =  完全匹配
* ^= 开头匹配
* $= 结尾匹配
* ~= 空格匹配
* |= 短横匹配
* *= 任意匹配

**统统兼容到IE7**

**如果没有运算符，有这个属性就行**

```
a[title]{
	color:red;
}
```

### 4.儿子选择器

#### 4.1选择的是#s1里面的第一个div儿子：
```
#s1 div:first-child{
	background-color: red;
}
```


#### 4.2选择最后一个儿子：
```
#s1 div:last-child{
	background-color: red;
}
```

#### 4.3选择的第二个儿子：
```
#s2 div:nth-child(2){
	background-color: red;
}
```


#### 4.4从第1个开始，每2个选一个：
```
#s2 div:nth-child(2n+1){
	background-color: red;
}
```

#### 4.5从第2个开始，每3个选一个：
```
#s2 div:nth-child(3n+2){
	background-color: red;
}
```

#### 4.6从第b个开始，每a个选一个：
```
#s2 div:nth-child(an+b){
	background-color: red;
}
```

#### 4.7所有单数
```
div:nth-child(2n+1)
```

#### 4.7所有偶数
```
div:nth-child(2n+2)
```













