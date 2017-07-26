var oDiv = document.getElementsByClassName("nav clear_float")[0].getElementsByTagName("div");
console.log(oDiv);
var oContent = document.getElementById("main").getElementsByTagName("div");

for(var i=0;i<=oDiv.length;i++){
    (function(m){
        oDiv[m].onclick = function(){
            for(var j = 0;j<=oDiv.length;j++){
                oDiv[j].className="nav_item";
                oContent[j].className = "content";
            }
            this.className="nav_item current";
            oContent[m].className = "content current2"
        }
    })(i);
}