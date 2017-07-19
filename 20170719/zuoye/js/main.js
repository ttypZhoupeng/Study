// 第一题
// for(var i = 1;i<=1000;i++){
//     if(i%5==0 || i%6==0){
//         console.log(i);
//     }
// }

//第二题
// var n = parseInt(prompt("请输入一个大于0的整数"));
// var sum = 0;
// for(var i = 0;i<=n;i++){
//     sum += i;
// }
// alert(sum);

// 第三题
//  var n = parseInt(prompt("请输入一个大于等于2的整数"));
//  var sum = 0;
//  for(var i = 2; i<=n;i++){
//      sum += 1/i;
//  }
//  sum = sum+n-1;
//  alert(sum);

// 第四题
// var n = parseInt(prompt("请输入一个大于0的整数"));
// for(var i = 0; i<=n;i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }

// 第五题
// for(var i=1;i<=60;i++){
    
//     if(i%7!=0 && i%10!=7){
//         console.log(i);
//     }
// }

// 第六题
// for(var i=100;i<=999;i++){
//     var a = i%10;
//     var b = (i-a)%100/10;
//     var c = (i-a-b*10)/100;
//     if(a*a*a+b*b*b+c*c*c==i){
//         console.log(i);
//     }
// }

// 第七题
// for(var i=1;i<=10000;i++){
//     var sum = 0;
//     for(var j=1;j<=i;j++){
//         if(i%j==0){
//           sum += j;
//         }
//     }
//     var a = i*2;
//     if(sum==a){
//         console.log(i);
//     }
// }



//第八题
// var n = parseInt(prompt("请输入一个大于0的整数"));
// var count=0;
// for(var i = 1;i<=n;i++){
//     if(n%i==0){
//         count++;
//     }
// }
// if(count>2){
//     alert("n不是质数");
// }else{
//     alert("n是质数");
// }

// 第九题
//  for(var i = 1;i<=10000;i++){
//     var count=0;
//     for(var j = 1;j<=i;j++){
//         if(i%j==0){
//             count++;
//         }
//     }
//     if(count==2){
//         console.log(i);
//     }

//  }

//第十题
for(var x = 0;x<=100;x++){
    var a = 100-x;
    for(var y=0;y<=a;y++){
        var b = 100-x-y;
        for(var z=0;z<=b;z++){
            if(3*x+2*y+z==200){
                console.log("苹果"+x+"鸭梨"+y+"桃子"+z);
            }
        }
    }
}