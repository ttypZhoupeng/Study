var oBox1 = document.getElementById("box1");
var oBox2 = document.getElementById("box2");
var oBox3 = document.getElementById("box3");
var oBox = document.getElementsByClassName("box");

oBox1.onmouseover = function(){
    this.className = "rotate";
}
oBox1.onmouseout = function(){
    this.className = "";
}

oBox2.onmouseover = function(){
    this.className = "scale";
}
oBox2.onmouseout = function(){
    this.className = "";
}

oBox3.onmouseover = function(){
    this.className = "rotate2";
}
oBox3.onmouseout = function(){
    this.className = "";
}

for(var i =0;i<=oBox.length;i++){
    oBox[i].onmouseover=function(){
        this.style.transform = "scale(1.5,1.5)";
    }
    // oBox[i].onmouseout=function(){
    //     this.style.transform = "scale(1.0,1.0)";
    // }
}