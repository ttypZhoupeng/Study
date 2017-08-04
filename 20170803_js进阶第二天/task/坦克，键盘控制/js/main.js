var tank = document.getElementById("tank");

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
 
document.onkeydown = function(event){
    event = event || window.enent;

    var direction = tank.style.transform;

    if(event && event.keyCode==38){
        count1 -= 10;
        // if(direction!="rotate(0deg)"){
        //     direction = "rotate(-90deg)";
        // }
        tank.style.transform = "rotate(0deg)";
        tank.style.top = count1 + "px";
    }//up
    if(event && event.keyCode==39){
        count2 += 10;
        tank.style.transform = "rotate(90deg)";
        tank.style.left = count2 + "px";
    
    }//right
    if(event && event.keyCode==40){
        count1 += 10;
        tank.style.transform = "rotate(180deg)";
        tank.style.top = count1 + "px";
    }//down
    if(event && event.keyCode==37){
        count2-= 10;
        tank.style.transform = "rotate(-90deg)";
        tank.style.left = count2 + "px";
    }//left
}