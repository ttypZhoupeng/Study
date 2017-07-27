var oNav = document.getElementsByClassName("nav")[0];
var oNavItem = document.getElementsByClassName("nav_item");
var oSecond = document.getElementsByClassName("second_nav")[0];

oNav.onclick = function(){
    oSecond.style.display = "block";
    this.className = "nav current";
}

for(var i=0;i<oNavItem.length;i++){
    (function(m){
        oNavItem[m].onclick = function(){
           var text = oNav.innerHTML;
           var newText =  this.innerHTML;
           console.log(newText);
           this.innerHTML = text;
           oNav.innerHTML = newText;
           oSecond.style.display = "none";
        }
    })(i);
    
}