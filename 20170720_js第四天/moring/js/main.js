// function fun(){
//     alert("王者荣耀");
// }
// fun();


// 输出2-100的质数
function zhishuCount(a){
    var count = 0;
    for(var i = 0;i<=a;i++){
        if(a%i==0){
            count++;
        }
    }
    return count;
}


function zhishuJudge(b){
    if(b==2){
        return true;
    }else{
        return false;
    }
}

// function main(){
//     for(var i=2;i<=100;i++){
//         var m = zhishuCount(i);
//         var n = zhishuJudge(m);  
//         if(n){
//             console.log(i);
//         }
//     }
//     return;
// }

// main();




// var oushu = parseInt(prompt("请输入一个偶 数"));
// for (var i = 1;i<oushu;i++){
//     if(zhishuJudge(i) && zhishuJudge(oushu-i)){
//         console.log(console.log(oushu+"可拆分位"+i+"与" +(uoshu-i)+"的和");
//     }
// }


// 阶乘！
function jiecheng(n){
    var s = 1;
    for(var i = 1;i<=n;i++){
        s*=i;
    }
    return s;
}
var sum = 0;
for(var i=0;i<=10;i++){
    sum += jiecheng(i);

}
console.log(sum);





