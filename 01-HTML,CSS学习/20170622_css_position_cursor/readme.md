<!-- TOC -->

- [1. position 定位](#1-position-定位)
    - [1.1. static](#11-static)
    - [1.2. relative](#12-relative)
    - [1.3. absolute](#13-absolute)
    - [1.4. fixed](#14-fixed)
    - [1.5. 左右居中](#15-左右居中)
    - [1.6. 上下居中](#16-上下居中)
- [cursor](#cursor)
- [2. 作业](#2-作业)

<!-- /TOC -->
# 1. position 定位

    position本身是一个css属性
    另外要搭配，四个属性使用

    top right bottom left 是四个css属性
    
    优先级：
    top>bottom
    left>right

## 1.1. static

    静止定位（默认状态），top right bottom left 对元素不会产生作用

## 1.2. relative

    * 相对定位，相对原来的位置进行**偏移**，
    * top right bottom left 四个属性，代表  从这4个方向，向对立方向的偏移量
    * 偏移量可以是负值
    * 元素原来的位置，继续保留

## 1.3. absolute

    * 绝对定位，依次从内往外找，相对外层，第一个有position属性，且属性值不为static的元素定位。如果外层都没有position属性，则相对**浏览器页面窗口**（window）定位,但是，不能像fixed一样固定在窗口上
    * top right bottom left， 代表，距离参照物边界的距离
    * 元素原来的位置，不再保留   

    可以配套使用z-index属性
    使用position:absolute的时候，一定要有一个外层参照物

## 1.4. fixed

    * 固定定位，相对**浏览器页面窗口**（window）定位
    * top right bottom left， 代表，距离body、html边界的距离
    * 元素原来的位置，不再保留  

## 1.5. 左右居中
行内元素左右居中，父容器：text-align:center;
块级元素左右居中，自身: margin: 0 auto;

## 1.6. 上下居中
行内元素  line-height

块级元素怎么办

1. 父容器和子容器，都有固定高宽

    就可以直接设置固定margin值，实现上下左右居中效果

2. 父容器，高宽不知道，子容器高宽固定
```css
.father{
    position:relative;
}
.box{
    width: 100px;
    height: 100px;
    background-color: #f00;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:-50px;
}
```

3. 适用于各种情况(?)
```css
.father{
    position:relative;
}
.box{
    width: 100px;
    height: 100px;
    background-color: #f00;
    position: absolute;
    margin:auto;
    top:0;
    bottom:0;
    right:0;
    left:0;
}

<<<<<<< HEAD
.father{
=======
? 空DIV

body{
>>>>>>> 3c14da56d8f9ef0ee5c297ea4e46fe39ed90386b
    text-align: center;
}
.father::before,.father::after,.son{
    display: inline-block;
    vertical-align: middle;
}
.father::before,.father::after{
    content:"";
    height:100%;
}
```

# cursor
```css
.box{
    cursor:default; 
    /*
    默认鼠标箭头
    */

    cursor:pointer;
    /*
    手势符号
    常见于按钮、超链接
    */

    cursor:auto;
    /*
    自动，例如，放到文字上，会变成竖线符号
    */
}
```


# 2. 作业
1. 熟练掌握三种position，以及三种居中方法，将第三种居中方法整理成一种通用的初始化css
2. 上次页面的继续排版