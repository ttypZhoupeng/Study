var box = document.getElementsByClassName("box");
var btn = document.getElementById("btn");

btn.onclick = function(){
    for(i=0;i<box.length;i++){
        
        for(j=0;j<box.length;j++){
            box[j].className = "box";
        }
        box[i].className = "box current";
    }
}