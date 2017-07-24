var btn1 = document.getElementsByClassName("btn1")[0];
var btn2 = document.getElementsByClassName("btn2")[0];
var btn3 = document.getElementsByClassName("btn3")[0];
var btn4 = document.getElementsByClassName("btn4")[0];
var btn5 = document.getElementsByClassName("btn5")[0];
var btn6 = document.getElementsByClassName("btn6")[0];
var btn7 = document.getElementsByClassName("btn7")[0];
var btn8 = document.getElementsByClassName("btn8")[0];
var btn9 = document.getElementsByClassName("btn9")[0];
var btn10 = document.getElementsByClassName("btn10")[0];
console.log(btn7);
var box = document.getElementById("test_box");
btn1.onclick = function(){
    box.style.background = "#9F79EE";
}
btn2.onclick = function(){
    box.style.width = "800px";
}
btn3.onclick = function(){
    box.style.borderRadius = "50%";
}
btn4.onclick = function(){
    box.style.border = "5px solid red";
}
btn5.onclick = function(){
    box.style.border = "none";
    box.style.background="skyblue";
    box.style.width = "400px";
    box.style.borderRadius = "0";
}
btn6.onclick = function(){
    box.style.opacity = "1";
    box.style.transform="rotate(-180deg)";
    box.style.transform="scale(1,1)"
}
btn7.onclick = function(){
    box.style.opacity = "0.2";
}
btn8.onclick = function(){
    box.style.transform = "rotate(180deg)";
}
btn9.onclick = function(){
    box.style.transform = "rotateX(-180deg)";
}
btn10.onclick = function(){
    box.style.transform = "scale(0.5,0.5)";
}