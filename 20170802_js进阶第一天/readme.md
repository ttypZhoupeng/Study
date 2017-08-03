# 耦合性？

# DOM 事件绑定，面试题

# 低版本IE事件绑定


# 1.事件深入
> 1.事件流

    认为规定了两个阶段：捕获阶段，冒泡阶段

> 2.DOM 0级事件绑定
    
    1.这种事件添加方法，只能监听冒泡过程
    2.在IE9，chrome中，事件冒泡到window，
    在IE6,7,8,中只冒泡到document
    3.用这种方法绑定的监听，this指的是触发这个事件的元素，没有任何浏览器兼容问题
    4.DOM0级还有一种写法，是直接将监听写在标签里面，工作中不许用

    <div id="box1" onclick="alert('我是box1');">
            <div id="box2" onclick="alert('我是box2');">
                <div id="box3" onclick="alert('我是box3');">	
                </div>
            </div>
    </div>

    5.同一个元素不能有两个同样的事件监听，后者会覆盖前者
    box1.onclick = function(){
        alert("哈哈");
    }
    box1.onclick = function(){
        alert("嘻嘻");
    }

> 3.DOM 2级事件绑定
    
    1.接受三个参数
    oBox.addEventListener("click",function(){
    	
    },false);
    
    第一个参数，事件名，不写on， click,mouseover..
    第二个参数：匿名或有名函数
    第三个参数：布尔值，true表示监听捕获，false表示监听冒泡阶段

    2.这种方法可以重复添加相同事件名的事件，不会覆盖，按先后顺序执行
    box1.addEventListener("click", function(){
     	alert("嘻嘻");
     }, false);
    
     box1.addEventListener("click", function(){
     	alert("哈哈");
    }, false);

    3.this就是指触发这函数的元素

> 4.低版本IE事件绑定

    1.IE6,7,8不支持addEventListener()方法，支持attachEvent("onclick",函数),没有第三个参数，只能监听冒泡

    2.事件处理函数里面的this，不是触发事件的这个元素，而是window对象

    
> 5.经典轮子 

    function addEvent(obj,eventtype,fn){
    	if(obj.addEventListener){
    		obj.addEventListener(eventtype,fn,false);
    	}else if(obj.attachEvent){
    		obj.attachEvent("on" + eventtype,function(){
    			fn.call(obj);
    		});
    	}else{
    		obj["on" + eventtype] = fn;
    	}
    }

***

# 几个经典轮子需要总结
    得到计算后样式fetchComputedStyle、运动框架animate、addEvent绑定监听、getElementsByClassName得到元素。

# 2.事件对象

> 1.通用事件对象属性和方法

    event.type:返会事件的类型，没有on,比如"click"
    event.target 返会点击的最小元素
    event.currentTarget:返会自己 (冒泡事件中能体现具体区别)
    event.bubbles 返会布尔值，表示事件是否冒泡

> 2.onmouseover onmouseenter 

    IE6,7,8,9,10全面兼容，

> 3.stopPropagation()

    event.stopPropapation();
    停止传播事件流

> 4.preventDefault()

    event.preventDefault();
    阻止默认事件


# 3.细节知识

>span

    加上float属性，自动从inline变成block；

    


#  作业 

    1.拖拽封装
    2.焦点轮播图效果

# 分享

    1.transform
    2.表单分号对齐
    (1)$nbsp;
    (2)text-align:right;
    (3)设宽
    (4)text-align:justify?
    (5)justify-content:space-between?

    3.插件

    4.轮播图插件myfocus
