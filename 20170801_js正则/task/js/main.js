var oName = document.getElementById("name");
var oPw = document.getElementById("password");
var oCpw = document.getElementById("confirm_password");
var oTel = document.getElementById("tel");
var oEmail = document.getElementById("email");
var oBtn = document.getElementById("btn");
var oIdc = document.getElementById("id_card");
var oCt = document.getElementById("Chine_tel");
var otel2 = document.getElementById("tel2");
var oUrl = document.getElementById("url");
var oBirth = document.getElementById("birthday");


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

    var re5 = /^\d{15}|\d{18}$/;
    if(oIdc.value==""){
        alert("请输入身份证号");
    }else if(!re5.test(oIdc.value)){
        alert("该身份证号不存在");
    }

    var re6 = /\d{3}-\d{8}|\d{4}-\d{7}/;
    if(oCt.value==""){
        alert("请输入国内电话号码");
    }else if(!re6.test(oCt.value)){
        alert("该国内电话号码不存在");
    }


    var re7 = /^($$\d{3,4}-)|\d{3.4}-)?\d{7,8}$/;
    if(otel2.value==""){
        alert("请输入电话号码");
    }else if(!re7.test(otel2.value)){
        alert("该电话号码不存在");
    }

    

    var re8 = /[a-zA-z]+:\/\/[^\s]*/;
    if(oUrl.value==""){
        alert("请输入InternetUrl");
    }else if(!re8.test(oUrl.value)){
        alert("该InternetUrl不存在");
    }


    var re9 = /^\d{4}-\d{1,2}-\d{1,2}/;
    if(oBirth.value==""){
        alert("请输入生日");
    }else if(!re9.test(oBirth.value)){
        alert("该生日格式不对，例如1999-10-10");
    }
}