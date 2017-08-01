# 学习知识补充

## 1.indexOf与search的区别
     （1）indexOf可以填写普通的字符或者数字，相对于search更省资源，一般是查看某个元素是否存在
     （2）search只能填写正则表达式，一般可以查找一些具有特征的字符串（比如查找以a开头的字符串），则indexOf无能为力    
## 2.match与exec的区别
    当没有g修饰时，他们两个是一样的
    (1)match 没有g，获取第一个符合表达式的值，有g，将符合表达式的值，依次放入数组中，输出数组
    (2)exec 没有g，和match一样，也是获取第一个符合表达式的值，有g，是循环输出符合表达式的值，但调用一次只输出一个符合的值，再调用输出下一个

    var str = "ABCDEFG";
    var re = /[A-Z]/g;

    console.log(str.match(re));
    console.log(re.exec(str));
    console.log(re.exec(str));
    console.log(re.exec(str));
