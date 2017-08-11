# float
float 浮动

* 一旦元素浮动，就不会占据默认的margin区域，比如div
* 浮动元素后方，不要直接跟随非浮动元素
* 浮动元素相互之间，才能产生排版影响
* 浮动元素，无法正常的撑开父容器

float left 从左到右排列，类似inline-block
float right 从右到左排列，区别于inline-block，元素顺序会变化

# 清除浮动

只要用到了float，必须清除float

原因：一旦元素float了，就不能占据原来的物理空间，会导致父容器无法正常撑开。但是某些场合，父容器不能给固定高度

    1. 父容器overflow:auto

        因为偶尔需要overflow做其它用途，所以该方法不适用

    2. (2)空div clear:both

        在浮动元素的最后方，增加，并列的空div

    3. (1)利用父容器::after，模仿方法2

        最佳方案

如果不需要兼容IE9以下浏览器，推荐方案3 ::after方法
反之，用空div