// 案例一 预解析
        // alert(a);
        // a = 1;
        // alert(a);
        // function a(){
        //     alert(2);
        // }
        // alert(a);
        // var a = 3;
        // alert(a);
        // function a(){alert(4);}
        // alert(a);
        //所有的声明提前，例如var function 值留在原地

        // 案例二
        // var a = 1;
        // function fun(){
        //     alert(a);
        //     var a = 2;
        // }
        // fun()
        // alert(a);

        // 案例三 (作用域链)
        // var a = 1;
        // function fun(){
        //     alert(a);
        //     a = 2;
        // }
        // fun();
        // alert(a);

        //案例四  
        // var a = 1;
        // function fun(a){
        //     alert(a);
        //     a = 2;
        // }
        // fun();
        // alert(a);

       //案例五
        //    var a = 1;
        //     function fun(a){//参数a是从全局变量a那里获取的值为1
        //                     //但是这个a是参数，不是全局变量a
        //         alert(a);
        //         a = 2;
        //     }
        //     fun(a);//全局变量a
        //     alert(a);//  1



        // 全局变量和局部变量

        // var b = '';
        // function fun(){
        //     var a = "炸鸡和啤酒";
        //     b = a;
        // }
        // fun();
        // alert(b);

        // function fun1(){
        //     var a = "999克拉钻戒";
        //     console.log(a);
        //     fun2(a);
        // }
        // function fun2(a){
        //     alert(a);
        // }
        // fun1();


        // function fun3(){
        //     var a = 123;
        //     function fun4(){
        //         var b = 456;
        //         alert(a); //123
        //     }
        //     fun4();
        //     alert(b) //报错
        // }
        // fun3();


        // function a(){
        //     console.log(a);
        // }
        // a(); //为什么a()报错
        // var a = 1;
        // console.log(a);


        // 数组
        // 尾插，尾删，头插，头删、
        // var arr = ["东","南","西","北"];
        // arr.push("中","发","白");
        // console.log(arr);
        // arr.pop();//只能操作一个数
        // console.log(arr);
        // arr.unshift("一万","一筒","一条");
        // console.log(arr);
        // arr.shift();//只能操作一个数
        // console.log(arr);

        // 数组的合并与拆分
        // var arr1 = ["I","love","you"];
        // var arr2 = ["me","too"];
        // var arr3 = arr1.concat(arr2);
        // console.log(arr1);
        // console.log(arr3);
        // var arr = ["东","南","西","北","东南","西北"];
        // var arr2 = arr.slice(1,4);
        // console.log(arr2);
        // var arr4 = arr.slice(1);
        // console.log(arr4); 
        

        // arr.splice(3,2,"斑马","骆驼");
        // console.log(arr);
        



        //字符串常见方法和属性
        // console.log(("我爱你，中国").length);//字符串的长度
        // console.log(("abcdef").charAt(0));//指定位置字符

        // var str = "abcdefg";
        // for(var i = 0; i<=str.length;i++){
        //     console.log(str.charAt(i));
        // }//循环输出字符串中各字符

        //concat()//连接字符串

        //indexOf 检索字符串
        // console.log(("我爱你亲爱的人民币").indexOf("的"));
        // console.log(("我爱你亲爱的人民币").indexOf("你"));
        // console.log(("我爱你亲爱的人民币").indexOf("你爱"));
        //indexof没有则返回-1

        // replace 替换
        // console.log("abcdefgaa".replace("a","0"));//把a替换成0，只替换一个
        // var str = "abcadeaf";
        // str = str.replace("a","A");
        // str = str.replace("a","A");
        // console.log(str);

        // slice 提取
        // console.log("我爱你亲爱的祖国的人民币".slice(-3,-1));
        //从后面开始数 包后不包前
        // console.log("我爱你亲爱的祖国的人民币".slice(1,5));
        //从前面开始数 包前不包后

        // split 把字符串变成数组
        // console.log("我爱你亲爱的祖国的人民币".split("的"));

        // substr 截取子串 从下标5开始截取3个字符
        // console.log("我爱你亲爱的祖国的人民币".substr(5,3));

        // substring 截取子串 前包后不包 从下标5开始到下标7之前
        // console.log("我爱你亲爱的祖国的人民币".substring(5,7));

        // .toLowerCase .toUpperCase
        // console.log("abc".toUpperCase());
        // console.log("WHY".toLowerCase());


        // DOM操作
        var oDiv = document.getElementById("oDiv");
        
        oDiv.style.backgroundColor="blue";

        document.title = "DOM操作";



        


        
        