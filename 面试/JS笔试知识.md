## 1.javascript typeof返会的数据类型有哪些
object,string,undefind,number,function,boolean
基本数据类型，则出去function，function也是object

## 2.列举三种强制类型转换和两种隐式类型转换
parseInt(),parseFloat(),Number()
==,!!

## 3.数组相关集合
### 创建数组方法
```
var array = new Array()
var array = []
```

### 4.判断是否为数组的方法
* console.log(arr instanceof Array)
* console.log(arr.construct === Array)
* console.log(Array.isArray(arr))

### 5.pop(),push(),unshift(),shift()
* pop()尾部删除
* push()尾部插入
* unshift()头部插入
* shift()头部删除

### 6.DOM0 DOM2
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

### 7.IE和DOM事件流的区别
* 执行顺序不一样
* 参数不一样 低版本ie没有回调函数，只能进行冒泡
* 第一个参数是否加"on",低版本IE不支持addEventListener(),支持attachEvent,第一个参数需要加"on"
* this指向问题，IE指向windows,不指向触发的函数

### 8.IE标准下有哪些兼容性写法
```
var ev = ev||window.event

document.documentElement.clientWidth||document.body.clientWidth

var target = ev.srcElement||ev.target
```

### 9.call apply
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


### 10.b继承a的方法（js面向对象复习）

### 11.如何阻止事件冒泡和默认事件
cancelBubble(IE),event.preventDefault,event.stopPropagation()

### 12.添加 删除 替换 插入到某个接点的方法
* obj.appendChild()
* obj.insertBefore()
* obj.replace()
* obj.remove()

### 13.window.onload和$(document).ready的区别
* window.onload只能出现一次，$(document).ready能出现多次
* window.onload需要等所有文件都加载完才开始加载，$(document).ready只需等文档结构加载完了就开始加载

### == 和 === 区别
前者会自动转换类型
后者不会

### javascript的同源策略（跨域问题）

### javascript是一种什么样的语言
* 解释性脚本语言，代码不进行预编译
* 主要用来向HTML页面添加交互行为
* 可以直接嵌入HTML页面，但单独写成js文件有利于结构和行为的分离
* 跨平台性，在绝大多数浏览器支持下，可以在多种平台下运行，linux,windows


### (javascript基本数据类型和引用数据类型)

### js原生不要与jq搞混
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









