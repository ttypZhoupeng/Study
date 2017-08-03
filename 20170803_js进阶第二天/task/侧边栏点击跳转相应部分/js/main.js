var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");

btn1.onclick = function(){
    // document.body.scrollTop = 0;
    srcollAnimate(0,1000);
}
btn2.onclick = function(){
    // document.body.scrollTop = 710;
    srcollAnimate(710,1000);
}
btn3.onclick = function(){
    // document.body.scrollTop = 1420;
    srcollAnimate(1420,1000);
}
btn4.onclick = function(){
    // document.body.scrollTop = 2130;
    srcollAnimate(2130,1000);
}
btn5.onclick = function(){
    // document.body.scrollTop = 2840;
    srcollAnimate(2840,1000);
}
btn6.onclick = function(){
    srcollAnimate(0,1000);
}

// var barItem  = document.getElementsByClassName("bar_item");

// for(var i=0;i<barItem.length;i++){
//     (function(m){
//         barItem[m].onlclick = function(){
//             srcollAnimate(m*710,1000);
//         }
//     })(i);   
// }

function srcollAnimate(target,time){
    var frameNumber = 0; //帧编号
    var start = document.body.scrollTop || document.documentElement.scrollTop; //当前卷动值
    var distance = target -start;//变化量
    var interval = 10; //毫秒
    var maxFrame = time / interval;  //总帧数

    clearInterval(timer);  //设表先停

    var timer = setInterval(function(){
        frameNumber++;
        if(frameNumber == maxFrame){
                clearInterval(timer);
        }

        // 第一个参数t 当前帧编号
        // 第二个参数b 表示起始位置
        // 第三个参数c  表示变化量
        // 第四个参数d 表示总帧数
        document.body.scrollTop=document.documentElement.scrollTop = fun(frameNumber,start,distance,maxFrame);

    },10);


    function fun(t,b,c,d){
        if((t /=d / 2) < 1) return c / 2 * t * t * t +b;
        return c / 2 * ((t -=2 ) * t * t +2) +b;
    }
}