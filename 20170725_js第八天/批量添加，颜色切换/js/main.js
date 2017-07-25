var box = document.getElementById("box");

//信号量
// var state = "blue";

// box.onclick = function() {
//     if (state == "blue") {
//         state = "red";
//     } else {
//         state = "blue";
//     }

//     this.style.backgroundColor = state;
// }

//方法2
//信号量
var state = 0; //0蓝色 1红色

box.onclick = function() {
    if (state == 0) {
        state = 1;
        this.style.backgroundColor = "red";
    } else {
        state = 0;
        this.style.backgroundColor = "blue";
    }
}