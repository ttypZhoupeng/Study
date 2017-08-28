var oDiv = document.getElementsByClassName("nav")[0].getElementsByTagName("div");
console.log(oDiv);
var oContent = document.getElementById("main").getElementsByTagName("div");

for(var i=0;i<oDiv.length;i++){
    (function(m){
        // console.oDiv[m];
        oDiv[m].onclick = function(){
            for(var j = 0;j<oDiv.length;j++){
                oDiv[j].className="nav_item";
                oContent[j].style.display = "none";
            }
            this.className="nav_item current";
            oContent[m].style.display = "block"
        }
    })(i);
}