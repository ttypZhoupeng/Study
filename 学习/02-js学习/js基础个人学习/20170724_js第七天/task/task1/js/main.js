var oBox = document.getElementById("first_row");
console.log(oBox);
var oBox2 = oBox.getElementsByClassName("box");
console.log(oBox2);
var oBox3 = document.getElementById("second_row");
var oBox4 = oBox3.getElementsByClassName("box");

for (var i = 0; i < oBox2.length; i++) {
    (function(m) {
        oBox2[m].onclick = function() {
            this.style.display = "none";
            oBox4[m].style.display = "block";
        };
        // 给第一行每个div循环添加点击事件，点击后自身消失，下一栏对应div显示
    })(i);
    // 假设不加上这一层function表达式，则在oBox4[m]部分会报错
}
