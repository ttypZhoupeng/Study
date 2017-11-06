var btn1 = document.getElementsByClassName("left_btn")[0];
var btn2 = document.getElementsByClassName("right_btn")[0];
var oImg = document.getElementsByTagName("img")[0];

var index = 1;
btn1.onclick = function() {
    index--;
    if (index < 1) {
        index = 5;
    }
    go();
}

btn2.onclick = function() {
    index++;
    if (index > 5) {
        index = 1;
    }
    go();
}

function go() {
    oImg.src = "images/banner" + index + ".jpg";
}




// nav
var oNav = document.getElementsByClassName("f_nav");
var oNav2 = document.getElementsByClassName("second");

for(var i = 0;i<oNav.length;i++){
    (function(m){
        oNav[i].onclick = function(){
        for(var j=0;j<oNav.length;j++){
            oNav[j].style.background="skyblue";
            oNav2[j].style.display="none";
        }
        this.style.background = "orange"
        oNav2[m].style.display="block";
    };
    })(i); 
}