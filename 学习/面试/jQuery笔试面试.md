## 1.jQuery 库中的 $() 是什么？
$()其实就是jQuery(),只是简化写法。$()函数将任何函数包裹成jQuert对象，这样就可以在这个对象上调用jQuery封装的各种方法

## 2.如何找到所有 HTML select 标签的选中项？
$('[name=NameOfSelectedTag] :selected')

## 3.jQuery 里的 each() 是什么函数？你是如何使用它的？
```
$('[name=NameOfSelectedTag] :selected').each(function(selected) {
    alert($(selected).text());
});
```

## 4.你是如何将一个 HTML 元素添加到 DOM 树中的？
appendTo()

## 5.$(this) 和 this 关键字在 jQuery 中有何不同？
this只是一个关键词，不能对它调用jQuery的方法，而$(this)返回的是一个jQuery对象，可以对其调用多个jQuery方法

##  你如何使用jQuery来提取一个HTML 标记的属性 例如. 链接的href?
```
$('a').each(function(){
   alert($(this).attr('href'));
});
```