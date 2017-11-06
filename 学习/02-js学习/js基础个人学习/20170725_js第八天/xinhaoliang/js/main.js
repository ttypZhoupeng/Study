var btn1 = document.getElementsByTagName("button")[0];
var btn2 = document.getElementsByTagName("button")[1];
var btn3 = document.getElementsByTagName("button")[2];
var btn4 = document.getElementsByTagName("button")[3];

var oBox = document.getElementsByClassName("box")[0];

var font_size = 14;

btn1.onclick = function(){
    font_size += 1;
    oBox.style.fontSize = font_size + "px";
}
btn2.onclick = function(){
    font_size -= 1;
    oBox.style.fontSize = font_size + "px";
}

btn3.onclick = function(){
    oBox.style.background = "red";
}
btn4.onclick = function(){
    oBox.style.background = "yellow";
}