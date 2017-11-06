# 思维导图XMind

# less sass

# bootstrap

# 双飞翼布局 各种布局


>1. 父级相对定位，两边绝对定位，中间width：100%，margin：0 200px
```
    <style>
        *{
            padding:0;
            margin:0;
        }
        div{
            position:relative;
        }
        p:nth-child(1){
            position:absolute;
            top:0;
            nav-left:0;
            width:200px;
            height:100px;

            background:skyblue;
        }
        p:nth-child(2){
            width:100%;
            height:100px;
            margin:0 200px;
            background:yellow;
        }
        p:nth-child(3){
            position:absolute;
            top:0;
            right:0;
            width:200px;
            height:100px;
            background:red;
        }

<body>
    <div id="content">
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </div>
</body>
```

>2.display新属性-webkit-box



# 布局
第一：固定布局
二 流式布局
三 弹性布局
四 浮动布局
五 定位布局
