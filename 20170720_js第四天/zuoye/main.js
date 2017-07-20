// 题目一
function jiecheng(n){
    var s = 1;
    for(var i=1;i<=n;i++){
        s *= i;
    }
    return s;
}

function jiechengAdd(m){
    var sum = 0;
    for(var i = 1;i<=m;i++){
        sum += jiecheng(i);
    }
    return sum;
}

console.log(jiechengAdd(10));


// 题目二
// function jiecheng(n){
//     var s = 1;
//     for(var i=1;i<=n;i++){
//         s *= i;
//     }
//     return s;
// }

// for(var i=100;i<=999;i++){
//     var gewei = parseInt(i%10);
//     var shiwei = parseInt(i/10)%10;
//     var baiwei = parseInt(i/100);
//     if(jiecheng(gewei)+jiecheng(shiwei)+jiecheng(baiwei)==i){
//         console.log(i);
//     }
// }

// 题目三
// function rev(n){
//     var a = 0;
//     var l = (n+'').length;
//     for(var i = 1;i<=l;i++){
//         var gewei = n%10;
//         n = (n-gewei)/10;
//         a = a*10+gewei;
//     }
//     return a;
// }
// console.log(rev(123));
// console.log(rev(123456789));



// 题目四
// function yueshu(a){
//     var sum = 0;
//     for(var i=0;i<a;i++){
//         if(a%i==0){
//           sum += i;  
//         }
//     }
//     return sum;
// }

// for(var i = 1;i<=3000;i++){
//     var b = yueshu(i);
//     if(yueshu(b)==i){
//         console.log(i);
//     }
// }