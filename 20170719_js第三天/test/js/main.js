// for(var i=0;i<=1000;i++){
//     if(i%5==0 && i%6==0){
//         console.log(i);
//     }
// }

// for(var i=0;i<=1000;i++){
//     if(i%5==0 || i%6==0){
//         console.log(i);
//     }
// }

// var str = prompt("请输入一个数");
// for( var i=0;i<=str;i++){
//     if(str%i==0){
//         console.log(i);
//     }
// }

var a = parseInt(Math.random()*100)+1;
var b = parseInt(prompt("请输入一个1-100的随机数"));
if(b!=a){
    alert("恭喜你，你没有踩到地雷");
    if(b<a){
        b=parseInt(prompt("请输入一个"+b+"-100的随机数"));
        alert("恭喜你，你没有踩到地雷");
    }else{
        b = parseInt(prompt("请输入一个1-"+b+"的随机数"));
        alert("恭喜你，你没有踩到地雷");
    }
}else{
    alert("恭喜你，中奖了")
}