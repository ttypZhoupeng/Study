var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");
var pic = document.getElementById("pic");
var numTxt = document.getElementById("numTxt");
var goBtn = document.getElementById("goBtn");

var index = 1;  //图片编号 1-5

leftBtn.onclick = function(){
    //先改变信号量
    index--;
    if(index<1 ){
        index = 5;
    }

    //调用业务函数
    go();
}
rightBtn.onclick = function(){
    //先改变信号量
    index++;
    if(index>5 ){
        index = 1;
    }

    //调用业务函数
    go();
}
goBtn.onclick=function(){
    // alert(numTxt.value);
    index = numTxt.value;

    //调用业务函数
    go();
}

// 业务函数
function go(){
    // pic.src = "img/1.jpeg";
    pic.src = "images/" + index +  ".jpeg";
}