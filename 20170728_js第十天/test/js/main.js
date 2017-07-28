var btn1 = document.getElementsByTagName("button")[0];
var btn2 = document.getElementsByTagName("button")[1];
var text = document.getElementsByTagName("input")[0];
var a = text.getAttribute("value");

// btn1.onclick = function(){
//     a--;
//     if(a<=0){
//         a = 0;
//     }
// }
btn2.onclick = function(){
    a++;
    if(a>=9){
        a = 9;
    }
}