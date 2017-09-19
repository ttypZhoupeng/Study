# 怎么判断一个数组

* instanceof(明确某个对象为某个特定类型)
```
var arr = [1,2,3];
console.log(arr instanceof Array);
```

* constructor(判断对象原型是否是数组)
```
console.log(arr.constructor === Array);
```

* toString()
```
var obj = {"name":"xiaoshi"};
console.log(obj);//查看对象原型，对不数组原型都有toString方法
console.log(obj.toString());
console.log(arr.toString());//原型优先用自身的方法

console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(arr) === [object,Array]);
```

* console.log(Array.isArray(arr));



# 分享

## 一道面试题



## css3动画扩展

* 正负旋转相消
* hover取消过渡
* 水波特效


## less sass

* 混合（Mixins）：class中的class;
* 参数混合（Parametric）：可以像函数一样传递参数的class;
* 嵌套规则（Nested Rules）：class中嵌套class，从而减少重复的代码；
* 运算（Operations）：css中的数学计算；
* 颜色功能（Color function）：可以编辑你的颜色；
* 命名空间（Namespaces）：样式分组，从而方便被调用；
* 作用域（Scope）：局部修改样式；
* JavaScript表达式(Javascript evaluation)：在CSS样式中使用Javascript表达式赋值。

###  不同，差异
less在客户端处理，sass在服务器端处理
换句话说，，less基于JavaScript，sass基于Ruby





