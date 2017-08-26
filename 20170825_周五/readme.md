# HTML/CSS/JS编码规范

## 一.HTML编码规范

>1.img标签要写alt属性

>2.但标签不要写闭合标签

>3.自定义属性要以data开头

自己添加的非标准的属性要以data-开头，否则w3c validator会认为是不规范的，例如

```
<div data-count="5"></div>
```


>4.行内元素不可使用块级元素

>5.使用合适的标签
* 如果是粗体就使用b/strong，而不是自己设置font-weight
* form里面不能嵌套form
* a标签里面不能套a标签






