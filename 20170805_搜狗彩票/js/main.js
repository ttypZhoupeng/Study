// 主导航部分

// var oNav = document.getElementsByClassName("nav");
// var navItem = oNav[0].getElementsByClassName("nav_item");

// for(i=0;i<navItem.length;i++){
//     console.log(111)
//     navItem.onclick = function(){
//         console.log(222)
//         for(j=0;j<navItem.length;j++){
//             console.log(333)
//             navItem[j].style.background = "red";
//         }
//         this.style.background = "red";
//     }
// }


var fNav = document.getElementsByClassName("f_nav")[0];
var arrow = document.getElementById("arrow");

console.log(arrow);
console.log(fNav);
fNav.onmouseover = function(){
    arrow.style.transform="rotate(180deg)";
}
fNav.onmouseout = function(){
    arrow.style.transform="rotate(0deg)";
}


var aUl = document.getElementById("aUl");
var aLis = aUl.getElementsByTagName("li");
var circlesLis = document.getElementById("circles").getElementsByTagName("li");

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
            
            var Li = document.createElement("Li");
            Li.innerHTML = img_idx;
            oHistory.appendChild(Li);
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