<!-- TOC -->

- [第一天js内容复习](#第一天js内容复习)
    - [1.js的五种基本类型](#1js的五种基本类型)
    - [2.类型的转换](#2类型的转换)
    - [3.数学运算符](#3数学运算符)
- [第二天js内容复习](#第二天js内容复习)
    - [1.两种常见的错误](#1两种常见的错误)
    - [2.运算符隐式转换](#2运算符隐式转换)
    - [3.关系运算符](#3关系运算符)
    - [4.负性值](#4负性值)
- [第三天js内容复习](#第三天js内容复习)
    - [1.循环，穷举思想](#1循环穷举思想)
- [第四天js内容复习](#第四天js内容复习)
    - [2.IIFE](#2iife)
- [第七天js内容复习](#第七天js内容复习)
    - [1.创建元素，添加元素，删除元素，替换元素，克隆元素](#1创建元素添加元素删除元素替换元素克隆元素)
    - [2.点语法以及setAttribute getAttribute的一点点区别](#2点语法以及setattribute-getattribute的一点点区别)
- [第八天js内容复习](#第八天js内容复习)
    - [1.绑定事件监听，有哪些事件](#1绑定事件监听有哪些事件)
    - [2.for循环中，匿名函数执行时其中的i已经是最后一个数了解决方法](#2for循环中匿名函数执行时其中的i已经是最后一个数了解决方法)
    - [3.对应和排他思想](#3对应和排他思想)
- [第九天js复习](#第九天js复习)
    - [1.快捷位置和尺寸](#1快捷位置和尺寸)
- [考核](#考核)

<!-- /TOC -->
# 第一天js内容复习

## 1.js的五种基本类型
    number string Boolean undefined null

## 2.类型的转换
    (1)string ->number
    parseInt：将一个string转换成一个整数，不四舍五入，直接截取整数部分，如果整数后面有别的乱七八糟的东西，直接截取前面的整数部分。
    它还能将任何进制的数字转换成10进制
    parseFloat：尽可能的将一个string转换成一个浮点数，浮点数后面有其他乱七八糟的东西，直接舍弃

    也就是说任何数字的类型都是number，只有当转换的时候才分整数和浮点数

    (2)number -> string
    
## 3.数学运算符
    Math.pow(3,4)：三的四次方
    Math.pow(3,1/3)：开三次方
    Math.sqrt(2):开平方


# 第二天js内容复习

## 1.两种常见的错误
    (1).SyntaxError 语法错误：比如符号是中文的
    (2).ReferenceError 引用错误：比如变量没有声明

## 2.运算符隐式转换
    (1)无论哪种运算只要出现了undefined就是NaN
    (2)"4",false,true,null都能进行隐式转换
    (3)加号比较特殊，面对"4"没有隐式转换

## 3.关系运算符
    (1)string和string比，比较的是字符编码顺序 数字->大写字母->小写字母
    (2)与数字进行关系运算时，纯数字字符串被转换为数字，null转换为0，true转换为1，false转换为0，null不能进行和0的相等判断
    (3)NaN不等于自己，NaN不全等于自己
    (4)string和number比，前者会被隐式转换为number
    (5)不能连续关系运算，例如3>2>1

## 4.负性值
    false null 0 NaN 空字符串("") undefined infinity


# 第三天js内容复习

## 1.循环，穷举思想

# 第四天js内容复习

## 2.IIFE
    最常用的
    (function(){
        alert("哈哈")
    })();
    由于这种方法定义的函数，名字是无效的，定义的时候就直接调用，其他地方想调用就会报错，所以一般是匿名函数。



# 第七天js内容复习

## 1.创建元素，添加元素，删除元素，替换元素，克隆元素
    createChild,appendChild,insertBefore,removeChild,replaceChild,cloneNode

## 2.点语法以及setAttribute getAttribute的一点点区别
    (1)点语法获取不了自定义属性，后者可以
    (2)点语法需要避讳，class需要写成className，后者不需要避讳
    (3)点语法.style得到的是样式对象，可以继续.style.border,后者得到的是字符串

# 第八天js内容复习

## 1.绑定事件监听，有哪些事件
    onmouseover,onmouseout,onmousedown,onmouseup,onclick,ondblclick,onfocus,onblur,onload

## 2.for循环中，匿名函数执行时其中的i已经是最后一个数了解决方法
    闭包：
    for(var i = 0 ; i < ps.length ; i++){
        (function(m){
            ps[m].onclick = function(){
                alert("我是老" + m + "点我干嘛？！！");
            }
        })(i);
    }

## 3.对应和排他思想
    主要用在导航以及表单切换中，当点击其中一个单行以及表单项时，消除其他各项包括自己的一些点击后的样式，接着再给自己添加点击后样式

    for(var i = 0 ; i < ps.length ; i++){
        ps[i].onmouseover = function(){
            //让所有的p都是灰色
            for(var j = 0 ; j < ps.length ; j++){
                ps[j].style.backgroundColor = "#ccc";
            }
            //让自己变红
            this.style.backgroundColor = "red";
        }
    }

# 第九天js复习

## 1.快捷位置和尺寸
    offsetParent 自己祖先元素中，离自己最近的已经定位的元素
    offsetLeft offsetTop 自己border外到offsetParentd border外
    offsetWidth offsetHeight 包括自己的宽高，padding border
    clientWidth clientHeight 包括自己的宽高，padding 不包括border



# 考核
    大坑：<button></button>,在form中没有指定type时，默认是submit，点击会刷新页面，绑定在其上的点击事件无法达到想要的效果。