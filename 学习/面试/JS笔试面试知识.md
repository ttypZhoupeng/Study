<!-- TOC -->

- [js基础知识](#js基础知识)
    - [1. javascript typeof返会的数据类型有哪些](#1-javascript-typeof返会的数据类型有哪些)
    - [2. 列举三种强制类型转换和两种隐式类型转换](#2-列举三种强制类型转换和两种隐式类型转换)
    - [3. 数组相关集合](#3-数组相关集合)
        - [3.1. 创建数组方法](#31-创建数组方法)
    - [4. 判断是否为数组的方法](#4-判断是否为数组的方法)
    - [5. pop(),push(),unshift(),shift()](#5-poppushunshiftshift)
    - [6. DOM0 DOM2](#6-dom0-dom2)
    - [7. IE和DOM事件流的区别](#7-ie和dom事件流的区别)
    - [8. IE标准下有哪些兼容性写法](#8-ie标准下有哪些兼容性写法)
    - [9. call apply  bind](#9-call-apply--bind)
    - [10. b继承a的方法（js面向对象复习）](#10-b继承a的方法js面向对象复习)
    - [11. 如何阻止事件冒泡和默认事件](#11-如何阻止事件冒泡和默认事件)
    - [12. 添加 删除 替换 插入到某个接点的方法](#12-添加-删除-替换-插入到某个接点的方法)
    - [13. window.onload和$(document).ready的区别](#13-windowonload和documentready的区别)
    - [14. == 和 === 区别](#14--和--区别)
    - [15. javascript的同源策略（跨域问题）](#15-javascript的同源策略跨域问题)
        - [15.1. 解决方法：](#151-解决方法)
    - [16. javascript是一种什么样的语言](#16-javascript是一种什么样的语言)
    - [17. javascript基本数据类型和引用数据类型](#17-javascript基本数据类型和引用数据类型)
    - [18. js原生不要与jq搞混](#18-js原生不要与jq搞混)
    - [19. DOM,BOM](#19-dombom)
    - [20. null和undefind的区别](#20-null和undefind的区别)
    - [21. XML和JSON的区别](#21-xml和json的区别)
    - [22. 实现多个标签之间的通信](#22-实现多个标签之间的通信)
    - [23. 哪些操作会造成内存泄露](#23-哪些操作会造成内存泄露)
    - [24. js垃圾回收方式](#24-js垃圾回收方式)
    - [25. 阻止冒泡事件](#25-阻止冒泡事件)
    - [26. 闭包](#26-闭包)
    - [27. this指向问题](#27-this指向问题)
    - [28. 高阶函数](#28-高阶函数)
    - [29. new操作符到底干了什么](#29-new操作符到底干了什么)
    - [30. js严格模式](#30-js严格模式)
    - [31. 事件代理事件委托](#31-事件代理事件委托)
    - [32. es6](#32-es6)
    - [33.什么是版本控制，](#33什么是版本控制)
    - [34.Bootstrap和Foundation的比较](#34bootstrap和foundation的比较)
    - [35.gulp](#35gulp)
    - [36.http状态码](#36http状态码)
    - [37.ajax请求](#37ajax请求)
    - [在浏览器中输入URL到整个页面显示在用户面前时这个过程中到底发生了什么](#在浏览器中输入url到整个页面显示在用户面前时这个过程中到底发生了什么)
        - [详细：](#详细)
    - [ajax和json](#ajax和json)
- [vue考点](#vue考点)
- [个推笔试准备](#个推笔试准备)
    - [面向对象设计语言的三要素](#面向对象设计语言的三要素)
    - [TCP与UDP的区别](#tcp与udp的区别)
    - [MVC描述](#mvc描述)
    - [css的基本语句构成](#css的基本语句构成)
    - [css导入方式有哪些，link和import的区别](#css导入方式有哪些link和import的区别)
    - [css选择器](#css选择器)
    - [可继承的属性](#可继承的属性)
    - [js typeof返会的数据类型](#js-typeof返会的数据类型)
    - [split()和join()的区别](#split和join的区别)
    - [数据库中索引，主键，唯一索引，联合索引的区别，对数据库性能有什么影响](#数据库中索引主键唯一索引联合索引的区别对数据库性能有什么影响)
    - [进程与线程的联系与区别，什么时候用多线程](#进程与线程的联系与区别什么时候用多线程)
    - [ASCII、Unicode、GBK和UTF-8字符编码的区别联系](#asciiunicodegbk和utf-8字符编码的区别联系)

<!-- /TOC -->
# js基础知识
## 1. javascript typeof返会的数据类型有哪些
object,string,undefind,number,function,boolean
基本数据类型，则出去function，function也是object

## 2. 列举三种强制类型转换和两种隐式类型转换
parseInt(),parseFloat(),Number()
==,!!

## 3. 数组相关集合
### 3.1. 创建数组方法
```
var array = new Array()
var array = []
```

## 4. 判断是否为数组的方法
* console.log(arr instanceof Array)
* console.log(arr.construct === Array)
* console.log(Array.isArray(arr))

## 5. pop(),push(),unshift(),shift()
* pop()尾部删除
* push()尾部插入
* unshift()头部插入
* shift()头部删除

## 6. DOM0 DOM2
dom0级
* 不支持添加多个事件，后面的会覆盖前面的
* 无法取消
```
var btn = document.getElementById("button");
btn.onclick = function(){
    alert(1);
}
btn.onclick = function(){
    alert(2);
}       //只弹出2
```
dom2
* 可以添加多个事件
* 不兼容低版本IE
* 支持事件冒泡，事件捕获
```
var btn = document.getElementById("button");
btn.addEventListener("click",function(){
    alert("1");
})
btn.addEventListener("click",function(){
    alert("2");
})              //先弹出1，再弹出2
```

## 7. IE和DOM事件流的区别
* 执行顺序不一样
* 参数不一样 低版本ie没有回调函数，只能进行冒泡
* 第一个参数是否加"on",低版本IE不支持addEventListener(),支持attachEvent,第一个参数需要加"on"
* this指向问题，IE指向windows,不指向触发的函数

## 8. IE标准下有哪些兼容性写法
```
var ev = ev||window.event

document.documentElement.clientWidth||document.body.clientWidth

var target = ev.srcElement||ev.target
```

## 9. call apply  bind
改变this的指向，
其中call的写法
```
function add(a,b)  
{  
    alert(a+b);  
}  
function sub(a,b)  
{  
    alert(a-b);  
}  
  
add.call(sub,3,1);   
```
这个例子中的意思就是用 add 来替换 sub，add.call(sub,3,1) == add(3,1) ，所以运行结果为：alert(4); // 注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。
apply写法
```
function add(a,b)  
{  
    alert(a+b);  
}  
function sub(a,b)  
{  
    alert(a-b);  
}  
add.apply(sub,[4,2]);　
```
不同就在于第二个参数，apply写成数组

bind写法
function add(a,b)  
{  
    alert(a+b);  
}  
function sub(a,b)  
{  
    alert(a-b);  
}  
add.bind(sub,[4,2])();　

bind是返回了一个改变上下文的一个函数，可以稍后调用，而apply，call是立即执行函数



## 10. b继承a的方法（js面向对象复习）
* 原型链继承
* 构造函数继承
* 实例继承
* 组合继承
* 拷贝继承
* 寄生组合继承

## 11. 如何阻止事件冒泡和默认事件
cancelBubble(IE),event.preventDefault,event.stopPropagation()

## 12. 添加 删除 替换 插入到某个接点的方法
* obj.appendChild()
* obj.insertBefore()
* obj.replace()
* obj.remove()

## 13. window.onload和$(document).ready的区别
* window.onload只能出现一次，$(document).ready能出现多次
* window.onload需要等所有文件都加载完才开始加载，$(document).ready只需等文档结构加载完了就开始加载

## 14. == 和 === 区别
前者会自动转换类型
后者不会

## 15. javascript的同源策略（跨域问题）
跨域是什么：实际上就是一个网站不能执行其他网站上的网址，是由浏览器同源策略造成的，是浏览器对js施加的安全限制
所谓同源，实际上是指域名，协议，端口都相同
也就是说当，域名或者协议，或者端口不同的时候，就是跨域，

### 15.1. 解决方法：
>jsonp

json with padding,是一种json的一种使用模式
产生的原因，ajax不支持跨域，由于浏览器的同源策略，但是script的src支持跨域
主要的原理是动态创建一个script标签的，通过src调用服务器提供的js脚本，该脚本的内容是一个函数调用，该函数在本地js文件中进行定义，其中的参数就是，本地函数请求的数据，也就是服务器所将返回的数据

与ajax的不同，ajax是通过xhr获取非本页面的数据内容，而jsonp获取的是服务器提供js脚本

>代理

* 例如www.123.com/index.html需要调用
* www.456.com/server.php，可以写一个接口
* www.123.com/server.php，由这个接口在后端去调用
* www.456.com/server.php并拿到返回值，然后再返回给 index.html，这就是一个代理的模式。相当于绕过了浏览器端，自然就不存在跨域问题。

>PHP端修改header（XHR2方式）
在php接口脚本中加入以下两句即可：
header('Access-Control-Allow-Origin:*');//允许所有来源访问
header('Access-Control-Allow-Method:POST,GET');//允许访问的方式



## 16. javascript是一种什么样的语言
* 解释性脚本语言，代码不进行预编译
* 主要用来向HTML页面添加交互行为
* 可以直接嵌入HTML页面，但单独写成js文件有利于结构和行为的分离
* 跨平台性，在绝大多数浏览器支持下，可以在多种平台下运行，linux,windows


## 17. javascript基本数据类型和引用数据类型
> 基本类型 undefind null number string boolean
* 基本类型的值是不能改变的
* 基本类型不能添加属性和方法
* 基本类型的比较是值的比较
* 基本类型变量存放在栈区（栈内存）
* 也就是说基本类型在赋值操作后，两个变量是相互不受影响的。
> 引用类型 object Function Array
* 引用类型可以添加属性和方法，属性方法内又可以添加基本类型
* 引用类型的值是可变的
* 引用类型的值时同时保存在栈内存和堆内存里的对象，准确地说，引用类型的存储需要内存的栈区和堆区（堆区是指内存里的堆内存）共同完成，栈区内存保存变量标识符和指向堆内存中该对象的指针，
* 引用类型的比较是引用的比较  引用类型时按引用访问的，换句话说就是比较两个对象的堆内存中的地址是否相同，那很明显，person1和person2在堆内存中地址是不同的
* 引用类型的赋值其实是对象保存在栈区地址指针的赋值，因此两个变量指向同一个对象，任何的操作都会相互影响

## 18. js原生不要与jq搞混
* document.getELementById("ID").value
获取值的时候原生不是方法，不带括号
* 获取所有checkbox
```
var boxs =document.getELementsByTagName("input");
var boxArray = [];
var len = boxs.length;
while(len--){
    if(boxs[len].type == 'checkbox'){
        boxArray.push(boxs[len]);
    }
}
```
* 设置div html内容以及设置样式
```
var dom = document.getElementById("ID");
dom.innerHTML = "xxxx"
dom.style.color="#000"
```

## 19. DOM,BOM
javascript由ECMAScript,DOM,BOM三部分组成，
* ECMAScript也是一种语言，也就是对规定的语法，操作，关键字，语句等的一个描述，javascript实现了ECMAScript
* DOM是文档对象模型，包括了获取元素，修改样式，操作元素三方面内容，也是我们进行最多的操作，有很多兼容性写法
* BOM是浏览器对象模型，包括浏览器的一些操作，window.onload,window.open等还有浏览器事件，监听窗口的改变onresize,监听滚动事件onscroll等

## 20. null和undefind的区别
* null是表示一个空的对象，转为数值为0，undefind表示一个空的原始值，转为数值为NAN
* undefind指本该有一个值，但却并有定义，null表示没有对象，不应该有值

## 21. XML和JSON的区别
* JSON相对于XML来讲传递速度更快，因为光看代码量就能看出
* JSON与js的交互更容易，解析更方便

## 22. 实现多个标签之间的通信
调用localhost,cookies等本地存储进行存储相关信息

## 23. 哪些操作会造成内存泄露
> 内存泄露指任何对象在不再拥有或不再需要它之后依然存在
* setTimeout第一个参数是字符串而不是函数的时候就会造成内存泄露
* 闭包
* 控制台日志
* 循环（两个对象彼此引用且彼此保留）


## 24. js垃圾回收方式
* 标记清除：这是js最常用的垃圾回收方法，当一个变量进入执行环境时，例如函数中声明一个变量，将其标记为进入环境，当变量离开环境时，（函数执行结束），标记为离开环境
* 引用计数: 跟踪记录每个值被引用的次数，声明一个变量，并将引用 类型赋值给这个变量，则这个值的引用次数+1，当变量的值变成了另一个，则这个值的引用次数-1，当值的引用次数为0的时候，就回收

## 25. 阻止冒泡事件
cancelBabble，return false,stopPropagation,preventDefault

## 26. 闭包
* 函数嵌套函数
* 子级函数调用父级函数的参数或变量
**经典闭包**
```
function outer(){
    var a = 1;
    function inner(){
        alert(a);
    }
    return inner
}
var inn = outer();
inn();
```
**点击li返回li下标**
```
<ul id="test">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

<script>
    var oUL = document.getElementById("test");
    var oLi = oUl.getElementByTagName("li");
    for(var i=0;i<oLi.length;i++){
        oLi[i].index = i;
        oLi[i].onclick = function(){
            alert(this.index);
        }
    }

</script>

<!-- 闭包 -->
<script>
    var oUL = document.getElementById("test");
    var oLi = oUl.getElementByTagName("li");
    for(var i=0;i<oLi.length;i++){
        oLi[i].index = i;
        oLi[i].onclick = (function(a){
            return function(){
                alert a;
            }
        })(i)
    }

</script>

```
## 27. this指向问题
> 普通函数调用，指向windows
```
window.value=1;
function getValue(){
 console.log(this.value);
}
getValue();//输出1，此时的this指向window
```
> 对象的方法调用，指向对象
```
var Obj={
  value:2,
  getValue:function(){
       console.log(this.value);//输出2,this指向Obj
  }   
}
```
> 构造器方法调用，指向构造函数实例出来的对象
```
function main(val){
  this.value=val;
}
main.prototype.getValue=function(){
  console.log(this.value);
}

var fun=new main(3);
fun.getValue();
fun.value;//输出3，this指向main的实例对象fun
```
> call,apply,bind可以自定义this指向第一个参数
```
function showValue(){
  console.log(this.value);
}
var obj={
  value:4
}
showValue.call(obj)//输出4，this指向了obj对象
```

```
function showValue(){
  console.log(this.value);
}
var obj={
  value:4
}
var showValue2=showValue.bind(obj);
showValue2()//输出4，this指向了obj对象
```

## 28. 高阶函数
* 函数作为参数传递，
* 函数作为返回值输出

## 29. new操作符到底干了什么
* 创建一个新对象
* 将构造函数的作用域赋值给新对象（所以this指向了这个新对象）
* 执行构造函数的代码（为这个新对象添加属性）
* 返会新对象

## 30. js严格模式
"use  strict"
消除js一些不合理的用法
消除代码运行的一些不安全之处
增加运行速度
为未来新版本js做铺垫

* 变量必须声明
* 对象不能出现重复属性名
* arguments改变，不会影响函数参数
* eval，arguments变为关键字，不能作为变量名
* 不允许使用with
* 不用call，apply，bind改变this指向，一般函数调用指向null

## 31. 事件代理事件委托
* 原理是使用dom的冒泡，将事件绑定到父元素上，让父元素进行监听，提高性能

## 32. es6
> let const
* let相当于给js新增了块级作用域，声明的变量只在let命令所在的代码块内有效
* const也是声明变量，它声明的变量，不能改变，可以用来声明第三方库变量的应用

> class extends super
* class定义一个类，其中有一个construct方法，construct方法中的this代表实例对象，construct以外还有其他的方法，construct内定义的方法属性是实例对象自己的，construct外的方法属性是所有实例对象共享的
* class之间可以通过extends实现继承
* super指代父类的实例，子类construct中必须先调用super()方法，因为子类没有自己的this对象，是继承父类的this对象

>arrow function(箭头函数)

除了书写简洁了很多，最大的优点是this指向，使用箭头函数，函数内部的this就是定义时所在的对象。箭头函数根本没有自己的this，this是继承外面的，它内部的this就是外层代码块的this

>template string(模板字符串)

ajax调用数据库，需要向文档中插入大段html的时候，传统的字符串拼接太麻烦，引入模板工具库会稍微好点，不过还是没有es6的template string简单，可以直接用反单引号包括代码块``,用${}来引用变量，所有的空格缩进都会保留到输出中


>destructuring(解构赋值)

es6按照一定模式，从数组和对象中提取值，对变量进行赋值，这就成为解构，也就是说，运用es5的方法，数组和对象中的变量需要，一个个进行赋值，而es6可以一步到位

>default,rest(默认值，扩展语法)

当函数忘记传参的时候，给它一个默认值，传统方法是在函数中运用||，es6可以直接在参数中写上
```
function animal(type){
    type = type || 'cat'  
    console.log(type)
}
animal()
```
```
function animal(type = 'cat'){
    console.log(type)
}
animal()
```
```
function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]
```

## 33.什么是版本控制，
版本控制是一种记录一个或若干文件内容变化，以便将来查阅修改以及更新。

## 34.Bootstrap和Foundation的比较
> UI元素的不同

* Bootstrap给出了能想到的一切元素，也就是试图提供所有定义好的UI，比如一个导航，给予一个默认导航的样式
* Foundation只给定了限定的几种元素，可以自己自定义，更适合创造
>尺寸单位不一样，

* Bootstrap是px
* Foundation是rem
>网格布局有所不同

* Foundation 的网格可以自动适配当前浏览器的宽度，Foundation 则会灵活适配当前的浏览器宽度, 这是一种新的技术手段, 自动适配的同时, 可以表现的与 Transformer 一样的效果.
* Boostrap 则是预定义了几种网格尺寸来适配主流的设备和屏幕.Bootstrap 会在你改变浏览器宽度的时候突然改变它的网格.
>移动设备

* Foundation移动设备优先
* Bootstrap也支持移动设备

>社区
* Bootstrap有一个完备的社区,有什么问题几乎都可以迅速解决
* Foundation则没有，需要自力更生

## 35.gulp
gulp是一种自动化构建工具，前端工程化开发的一种工具，增强开发流程
使用方便，npm安装，新建gulpfile.js,导入gulp模块，let gulp = require('gulp')
通过default任务去定义工作流
最后在终端执行gulp来进行自动化操作
>api很简单只有四种
* gulp.task 创建任务 ：参数任务名称，前置任务数组，回调函数
* gulp.src  寻找文件：通过路径找到一个或多个文件
* gulp.dest 输出到指定目录：如果没有就新建一个
* gulp.watch 监听文件变化，执行任务
* pipe具体不清楚，总之，除了gulp.src之外，其他执行条件都要放在.pipe()中

## 36.http状态码
* 100-199：成功接收请求，但需要进行下一步请求
* 200-299：成功接收请求，并完成整个处理过程
* 300-399：为完成全部请求，客户需近一步细化需求
* 400-499：客户端请求有错误，包括语法错误或不能正常执行
* 500-599：服务器端出现错误

常用：
* 200 正常，表示一切正常，返会的是正常请求结果
* 302/307 临时重定向，表示请求的文档，已被临时移动到别处
* 304 未修改，调用缓存的数据
* 403 服务器拒绝客户请求
* 404 服务器不存在客户想要找的资源
* 500 服务器内部错误

## 37.ajax请求
ajax请求四步
* 创建一个xhr对象 var xhr = new XmlHttpRequest()
* 判断就绪状态为4时执行代码
```
xhr.onreadystatechange = function(){
    if(xhr.readyChange == 4){
        console.log(responseText);
    }
}
```
* 创建请求 xhr.open('get','url',true)
* 发送请求 xhr.send(null)

## 在浏览器中输入URL到整个页面显示在用户面前时这个过程中到底发生了什么
* DNS解析
* TCP连接
* 发送HTTP请求
* 服务器处理请求并返回HTTP报文
* 浏览器解析渲染页面
* 连接结束

### 详细：
首先根据url中的域名，在远程服务器中查询对应

## ajax和json
>ajax用于web页面中实现异步数据交互，实现页面局部内容刷新
* 优点：能够进行内容局部加载刷新，减少带宽，避免用户不断刷新以及页面跳转，提高用户体验
* 缺点：对搜索引擎不友好；浏览器不支持ajax的后退；
>json是一种请求轻量级的数据交互格式
* 优点：轻量级，编译人的阅读理解，便于机器解析

# vue考点


# 个推笔试准备
## 面向对象设计语言的三要素
封装，继承，多态
* 封装：指将过程和数据包裹起来，可以封装成一个函数，通过函数调用这一段代码，避免重复编写
* 继承：指子类可以继承父类的方法，属性，参数等，免去重定义
* 多态：指的是允许不同类对同一消息做出反应，体现在虚函数，动态联动

## TCP与UDP的区别
* 基于连接与不连接
* UDP程序结构简单
* 对系统资源的要求，TCP多，UDP少
* TCP保证数据正确性，UDP可能丢包，TCP保证数据顺序，UDP不保证
* 流模式，数据报模式

## MVC描述
mvc=model+view+controller 即模型+视图+控制器
* 模型：保存着所有的数据，状态和程序逻辑。独立于视图和控制器
* 视图：用来呈现模型。直接从模型中取得需要显示的状态与数据。同一个模型可以有多个视图呈现
* 控制器：在模型和视图之间，用来接受用户输入，将输入进行解析并反馈给模型
好处：
* 一个模型可以有多个视图进行呈现
* 模型可以复用
* 提高开发效率

## css的基本语句构成
选择器{属性1：属性值；属性2：属性值；...}

## css导入方式有哪些，link和import的区别
导入方式有三种
* 行内样式，直接在元素标签中写属性
* 内部样式，写在head中，用style包裹
* 外部样式
    * 链接样式：通过link
    * 导入样式：通过@import

链接样式与导入样式区别：
* link是html标签，@import是css后期引入的
* link在文档结构加载同时加载，@import要等文档结构加载完再加载

## css选择器
* 全局选择器'*'
* 标签选择器 p
* class选择器 . myclass
* id选择器     # myId
* 子选择器      div>p
* 后代选择器     div p
* 相邻选择器        div+p

## 可继承的属性
font-size,font-family,color,ul,li,dl,dd,dt

## js typeof返会的数据类型
* string
* number
* boolean
* object
* undefind
* function

## split()和join()的区别
前者是将字符串切割成数组，后者是将数组转换成字符串


## 数据库中索引，主键，唯一索引，联合索引的区别，对数据库性能有什么影响
* 索引是一种特殊文件，它包含对数据表里所有记录的引用指针
* 普通索引的唯一作用是加快访问速度
* 普通索引，被索引的数据中可以包含重复的数据，唯一索引就是规定了索引到的值各不相同
* 主键是一种特殊的唯一索引，一个表中只能允许有一个主键，用来唯一标识一条记录
* 联动索引就是索引可以覆盖多个数据列
* 索引加快了查询的速度，但是减慢了添加删除更新的速度，因为在执行这些操作之前需要先索引

## 进程与线程的联系与区别，什么时候用多线程
联系：
* 一个线程只属于一个进程，一个进程可以拥有多个线程，但至少有一个线程，称为主线程
* 资源统一分配给进程，同一进程中的线程共享该进程的所有资源
* 线程在执行过程中，需要协作同步，不同进程之间线程需要通过消息通信来达到同步

区别：
* 线程作为调度和分配的基本单位，进程作为分配资源的基本单位
* 并发性：不仅进程之间可以并发执行，同一进程中的不同线程之间也能进行并发执行
* 拥有资源：进程是拥有资源的独立单位，线程不拥有资源，但可以访问隶属于进程的所有资源

什么时候用多线程：
* 耗时或大量占用处理器阻塞用户界面操作
* 各个任务必须等待外部资源时

## ASCII、Unicode、GBK和UTF-8字符编码的区别联系
ASCII：最早时期的计算机用来保存英文文字
gb2312：对ASCII的中文扩展
GBK:gb2312对中文的扩展还不够，再扩展就成GBK了
unicode：由于一个中国就出现了多种字符编码，为了统一，出现了unicode，国际编码
utf-8: 由于unicode不好推广，为了好在网络上传输，出现了utf-8，就是每次8个为传输
