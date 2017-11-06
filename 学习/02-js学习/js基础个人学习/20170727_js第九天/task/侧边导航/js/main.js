var oLi = document.getElementsByTagName("li");
var oContent = document.getElementsByClassName("content");


for(var i = 0;i<oLi.length;i++){
    (function(m){
        oLi[m].onclick = function(){
            for(var j=0;j<oLi.length;j++){
                oLi[j].className = "";
                oContent[j].style.display = "none";
            }
            this.className = "current";
            oContent[m].style.display = "block";
        }
        
    })(i);
    
}