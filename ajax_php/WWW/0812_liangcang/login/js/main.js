var phoneNum = document.getElementById("phoneNum");
var checkCode = document.getElementById("checkCode");
var codeBtn = document.getElementById("codeBtn");
var loginBtn = document.getElementById("loginBtn");

// phoneNum.onblur = function(){
//     console.log(this.value);
// }
loginBtn.onclick = function(){
    
    var num = phoneNum.value;

    var reg =  /^1[3578]\d{9}$/;
    if(num == "" || checkCode.value == ""){
        alert("手机号或验证码不能为空");
        return false;
    }else if(!reg.test(num)){
        alert("请输入正确的手机号");
        return false;
    }else{
        console.log(num);
        $.ajax({
            "url":("php/login_check.php?num="+num),//此处URL是index所在的目录下再去找php文件路径，所以没必要写../php....
            "type":"GET",
            "success":function(response){
                console.log(response);
                if(response == "y"){
                    alert("成功登录");
                    return true;
                }else{
                    alert("该用户不存在，请重新登录");
                    return false;
                }
            }

        })         
    }
}