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

### 判断是否为数组的方法
* console.log(arr instanceof Array)
* console.log(arr.construct === Array)
* console.log(Array.isArray(arr))

### pop(),push(),unshift(),shift()
* pop()尾部删除
* push()尾部插入
* unshift()头部插入
* shift()头部删除

### DOM0 DOM2
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

