var oBox = document.getElementById("first_row");
console.log(oBox);
var oBox2 = oBox.getElementsByClassName("box");
console.log(oBox2);
var oBox3 = document.getElementById("second_row");

for( var i = 0;i<oBox2.length;i++){
    oBox2[i].onclick = function(){
        this.style.display = "none";
        var oBox4 = oBox3.getElementsByClassName("box");
        oBox4[i].style.display="block";
    };
}
// function fun(){
//     oBox2[i].style.display = "none";
// }


// var oBox3 = oBox.getElementsByClassName("box3")[0];

// oBox3.onclick = function(){
//     this.style.background="blue";
// }