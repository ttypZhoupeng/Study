 //得到所有元素，左右按钮，焦点，每个图片的li
var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");
var aUl = document.getElementById("aUl");
var aLis = aUl.getElementsByTagName("li");
var circlesLis = document.getElementById("circles").getElementsByTagName("li");

var numTxt = document.getElementById("numTxt");
var goBtn = document.getElementById("goBtn");


var oHistory = document.getElementById("his_ul");


        //信号量
       var img_idx = 0;  //取值范围 0,1,2,3,4

       leftBtn.onclick=function(){
            img_idx--;
            if( img_idx < 0){
                img_idx = 4;
            }

            //调用函数
            chengPic();
       }
       rightBtn.onclick=function(){
            img_idx++;
            if( img_idx > 4){
                img_idx = 0;
            }

            //调用函数
            chengPic();
       }

       //小圆点的监听，要批量添加
       //方法1 IIFE
       // for(var i = 0;i<circlesLis.length;i++){
       //      (function(a){

       //          //监听
       //          circlesLis[a].onmouseover = function(){

       //              img_idx = a;

       //              //调用业务函数
       //              chengPic();  //这个函数帮你换图，帮你换小圆点是橙色还是紫色
       //          }

       //      })(i);
       // }

       // 方法2  编号
       for(var i = 0;i<circlesLis.length;i++){
            // 先编号
            circlesLis[i].index = i;

                //监听
                circlesLis[i].onmouseover = function(){

                    img_idx = this.index;

                    //调用业务函数
                    chengPic();  //这个函数帮你换图，帮你换小圆点是橙色还是紫色
                }


       }

       goBtn.onclick=function(){
            // alert(numTxt.value);
            img_idx = numTxt.value;

            //调用业务函数
            chengPic();
            
            oHistory.appendChild("<li>"+img_idx+"</li>");
        }

       //业务函数
       function chengPic(){

            //去掉所有li的current类名
            for(var i=0;i<aLis.length;i++){
                aLis[i].className="";
            }

            //把当前信号量的图片li加上current类名
            aLis[img_idx].className="current";

            //去掉所有小圆点current
            for(var i=0;i<circlesLis.length;i++){
                circlesLis[i].className="";
            }

            //把当前信号量的小圆点li加上current类名
            circlesLis[img_idx].className="current";
       }

       function addHistory(){
           
           var oLi = "<li>"+img_idx+"</li>";
           arr.push(oLi);
           return arr;
       }