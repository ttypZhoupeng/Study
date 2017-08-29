# 1.aruments

* 在JavaScript中，arguments对象是比较特别的一个对象，实际上是当前函数的一个内置属性。arguments非常类似Array，但实际上又不是一个Array实例 /*简而言之就是，只是像数组，但不是数组，像是长度像，其他数组属性如push都没有*

* arguments对象的长度是由实参个数而不是形参个数决定的。




# 2.arguments对象中有一个非常有用的属性：callee

* arguments.callee返回此arguments对象所在的当前函数引用。在使用函数递归调用时推荐使用arguments.callee代替函数名本身。

* 匿名函数没有名字，如果想要递归，调用自己，怎么办呢，这时候就需要用到aruments.callee

*在哪一个函数中运行，它就代表哪一个函数*



# 3.重复运动

>方法一: css3动画

*animation-iteration-count:3;*

1. 存在的问题：兼容性一般
    Internet Explorer 10、Firefox 以及 Opera 支持 animation-iteration-count 属性。
    Safari 和 Chrome 支持替代的 -webkit-animation-iteration-count 属性。
    ie9 以及更早的浏览器不兼容  放到手机上，很多都不兼容，包括uc，qq浏览器，微信自带浏览器

2. 优点：css范畴，不涉及任何语言操作，效率方法二


>方法二: jq 封装的animate()

优点：主要就是兼容性,不用说,绝对棒棒的




