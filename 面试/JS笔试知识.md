<!-- TOC -->

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

<!-- /TOC -->

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

例如www.123.com/index.html需要调用www.456.com/server.php，可以写一个接口www.123.com/server.php，由这个接口在后端去调用www.456.com/server.php并拿到返回值，然后再返回给index.html，这就是一个代理的模式。相当于绕过了浏览器端，自然就不存在跨域问题。

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