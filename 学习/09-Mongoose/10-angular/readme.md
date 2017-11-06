<!-- TOC -->

- [1.Angular -- 4大核心特性](#1angular----4大核心特性)
- [2.MVC](#2mvc)
- [3.模块化](#3模块化)
    - [3.1模块化开发思想](#31模块化开发思想)
    - [3.2如何做到模块化：](#32如何做到模块化)
    - [3.3 开发与上线](#33-开发与上线)
- [4.作用域](#4作用域)
    - [4.1$Scope: 局部作用域](#41scope-局部作用域)
    - [4.2 $rootscope: Angular中全局作用域](#42-rootscope-angular中全局作用域)
- [5.指令系统](#5指令系统)
    - [5.1 ng-开头的就是AngularJS的指令](#51-ng-开头的就是angularjs的指令)
- [6. 双向数据绑定](#6-双向数据绑定)
    - [6.1 MVVM](#61-mvvm)
    - [6.2 延时器](#62-延时器)
    - [6.3 $currency 过滤器](#63-currency-过滤器)
    - [6.4 $watch 监听](#64-watch-监听)
- [7. angularJS的工具方法](#7-angularjs的工具方法)
- [8.扩展知识](#8扩展知识)
    - [8.1 依赖注入](#81-依赖注入)

<!-- /TOC -->

##  1.Angular -- 4大核心特性

* MVC
* 模块化
* 指令系统
* 双向数据绑定

##  2.MVC

* Model:数据模型层，（也就是为html中的变量定义数据）
* View:视图层，负责展示，（也就是html部分）
* Controller: 业务逻辑和控制逻辑，（将数据与视图连接，让数据在页面中显示）

## 3.模块化

### 3.1模块化开发思想
* 1.减少全局的污染、和命名的问题
* 2.可以做到模块之间相互依赖，不用手动的进行依赖

### 3.2如何做到模块化：
```
angular.module("myApp",[]);

```
有两个参数
* 1.一个是模块的名字myApp
* 2.一个是依赖模块的数组[],（如果目前不需要其他模块,那就一个空数组就行）
```
var m1 = angular.module("myApp",[]);
//相应的初始化也需要绑定模块名：ng-app="myApp"
m1.controller("Aaa",function(){
})
```

### 3.3 开发与上线
开发的时候：
```
m1.controller("Aaa",function($scope){
    $scope.name="hello";
})
```
上线的时候，代码需要压缩，
function($scope)经过压缩会变成function($s) angular不会识别$s
写成一个数组的方式，可以解决这个问题
```
m1.controller('Aaa',['$scope',function($scope){
    $scope.name = 'hello';
}])
```

## 4.作用域

### 4.1$Scope: 局部作用域
ng-controller: 是控制器 是有作用域的


### 4.2 $rootscope: Angular中全局作用域

* 当没有局部变量后，才会查找全局变量
* 局部变量优先查找，类似js中的变量作用域

## 5.指令系统

### 5.1 ng-开头的就是AngularJS的指令
* ng-controller:是控制器连接视图和数据的
* ng-app: 初始化指令 从哪里开始执行AngularJS
* ng-click:点击指令

## 6. 双向数据绑定
### 6.1 MVVM
当我们数据发生改变的时候让视图改变
当视图改变数据改变

### 6.2 延时器
延迟2s变化内容

### 6.3 $currency 过滤器

### 6.4 $watch 监听
监听相关数据变化，做出相应处理。
接受第三个参数，前两个是必选的，第三个是可选的。
$scope.$watch("iphone.money","function()")
第一个是监听的对象，第二个是回调函数，第三个是true或false，深度监听，设置为深度监控，只要对象发生变化，那么监听就会触发,监听整体，例如购物车中监听iphone，无论num还是money改变都会触发回调函数


## 7. angularJS的工具方法
angular.bind();-->更改this指向

angular.copy();-->拷贝对象

angular.extend();-->对象继承

angular.isArray();-->判断是否是数组

angular.isDate();-->判断是否是时间

angular.isDefind();-->判断是否存在

angular.isUndefind();-->判断是否是不存在

angular.isFunction();-->判断是否是方法

angular.isObjec();-->判断是否是对象

angular.isString();-->判断是否是字符串

angular.isElement();-->判断是否是元素

angular.version();-->查看当前angular的版本

angular.equals();-->判断连个元素是否相等

angular.forEach();-->遍历
angular.forEach(obj, function(value,index,objs){}, context);
其中obj被调用的数组，value表示当前循环到的key，index表示当前循环到的下标，objs表示被循环的数组本身，context表示可以用this指代的被调用的数组

angular.fromJson/toJson //对字符串格式的json解析和对json字符串的转换

angular.identity/noop 前者是返会传递的变量，后者是undefined

angular.lowercase/uppercase 转换大写小写

angular.element 可以使用jQ中的部分方法
angular.element(oDiv).css('background','red')


## 8.扩展知识

### 8.1 依赖注入







