# 1.css3选择器

## 1.1属性选择器
    css2:
    [attribute="text1"] text1必须是完整的属性值，就是引号里面所有的东西
    [attribute~="text2"] text2 可以是属性值里，用空格隔开的部分
    [attribute|="text3"] text3 可以是属性值里面的完整单词，或者是“-”前面的单词

    css3:
    :first-of-type
    :last-of-type

    :first-child 一定要指明父元素
    :last-child 一定要指明父元素

    两者的区别:
    :first-of-type 相对于并列元素之间去对比
    :first-child 相对于父容器而言

    :nth-child 是相对于父容器进行排序标号选择的
    .box:nth-child 相当于同时满足两个条件，首先排序标号接着满足class中有box的属性


## 1.2border-radius 
    100% 为90度扇形

## 1.3 background-size
    contain 只要一条边，达到父容器大小，就不再放大


    *cover 永远有一个方向超出
    最少一条边，达到父容器大小，另一条边超出

## 1.4 background-origin / background-clip

    origin:指定从哪开始铺

    默认padding-box 背景图，从padding的左上角开始
    content-box 背景图，从content的左上角开始
    border-box 背景图，从border左上角开始

    clip: 指定从哪开始裁剪

    background-blend-mode 混合模式，

# 2.知识补充

## 2.1标签内title的属性
    鼠标经过有一个提示

## 2.2浮动元素本身不需要清除浮动
