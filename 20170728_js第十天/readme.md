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




# 考核
    大坑：<button></button>,在form中没有指定type时，默认是submit，点击会刷新页面，绑定在其上的点击事件无法达到想要的效果。