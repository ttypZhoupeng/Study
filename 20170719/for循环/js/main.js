// 死循环
// for(var i=15; i>2; i-=3){
//     console.log(i);
// }

// 100-999水仙花数
// for(var i=100;i<=999;i++){
//     var a = i%10;
//     var b = (i-a)%100/10;
//     var c = (i-a-b*10)/100;
//     if(a*a*a+b*b*b+c*c*c==i){
//         console.log(i);
//     }
// }

// 100-999水仙花数 老师方法
//     for(var i=100;i<=999;i++){
//     var gewei = i%10;
//     var shiwei = parseInt(i/10)%10;
//     var baiwei = parseInt(i/100);
//     if(baiwei*baiwei*baiwei+gewei*gewei*gewei+shiwei*shiwei*shiwei==i){
//         console.log(i);
//     }
// }