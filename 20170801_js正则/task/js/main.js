var oName = document.getElementById("name");
var oPw = document.getElementById("password");
var oCpw = document.getElementById("confirm_password");
var oTel = document.getElementById("tel");
var oEmail = document.getElementById("email");
var oBtn = document.getElementById("btn");



console.log(oName);
console.log(oPw);
console.log(oCpw);
console.log(oTel);
console.log(oEmail);
console.log(oBtn);

oBtn.onclick = function(){
    var re = /^[\u4e00-\u9fa5]{0,}$/;
    if(oName.value==""){
        alert("请输入用户名！");
    }else if(!re.test(oName.value)){
        alert("用户名格式不正确,请输入中文！");
    }

    var re2 = /^[a-zA-Z]\w{5,17}$/;
    if(oPw.value==""){
        alert("请输入密码");
    }else if(!re2.test(oPw.value)){
        alert("密码格式不正确,密码需要以字母开头，长度在6~18之间，只能包含字母、数字和下划线");
    }

    
    if(oCpw.value==""){
        alert("请输入确认密码！");
    }else if(oCpw.value != oPw.value){
        alert("两次密码输入不一样！");
    }

    var re3 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if(oTel.value==""){
        alert("请输入手机号码");
    }else if(!re3.test(oTel.value)){
        alert("该手机号不存在");
    }

    var re4 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(oEmail.value==""){
        alert("请输入邮箱");
    }else if(!re4.test(oEmail.value)){
        alert("该邮箱不存在");
    }
}