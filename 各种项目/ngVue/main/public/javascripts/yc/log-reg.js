$(function(){
    if(localStorage.getItem("token")){
    $("body").html("<p class='already'>尊敬的"+localStorage.getItem("username")+"，您已登录,3秒后为你跳回<a href='/'>点此手动跳转</a></p>");
    setTimeout(function() {
        location.href = "/";
    }, 3000);
    }

    var authBlur = document.querySelector(".auth-blur");
    var main = document.querySelector(".main");
    var mainHeight=getComputedStyle(main,null).getPropertyValue('height');
    var mainWidth=getComputedStyle(main,null).getPropertyValue('width');

    authBlur.style.height=mainHeight;
    authBlur.style.width=mainWidth;

    var iEmail = /^(\w)+@(\w)+((\.\w{2,3}))$/;
    var iAcc = /^[\w]{4,20}$/;
    var iPass = /^\S{6,20}$/;

    $(".log.btn").click(function(){
        $("input").parent().find(".error").html("");
        $("input").parent().find("label").css("color","#87909c");

        $("input").each(function(i){
            if( $("input")[i].value == ""){
                $("input").eq(i).parent().find(".error").html("(THIS FIELD IS REQUIRED)");
                $("input").eq(i).parent().find("label").css("color","#f04747");
            }
        })
        console.log($("input").val())

        var username = $("#log-username").val();
        var password = $("#log-password").val();
        
        if(!!username && !!password){

        $.ajax({
            "url": "http://h6.duchengjiu.top/shop/api_user.php",
            "type":"POST",
            "datatype": "json",
            "data": {
                "status": "login",
                "username": username,
                "password": password,
            },
            "success": function(response){
                console.log(response);
                if(response.code == 0){
                    alert(response.message);
                    var data = response.data;
                    for(prop in data){
                        // 判断是否是自身的属性hasOwnProperty
                        if(data.hasOwnProperty(prop)){
                            // 存储到本地仓库
                            localStorage.setItem(prop,data[prop]);
                        }
                    }
                    if(location.hash){
                        location.href = location.hash.substr(10);
                    }else{
                        location.href ="/";
                    }
                }else{
                   alert(response.message);
                }
            }
        })
    }
        
    })

    $(".reg.btn").click(function(){
            
        if(iEmail.test($("#reg-email").val())){
            $("#reg-email").parent().find(".error").html("");
            $("#reg-email").parent().find("label").css("color","#87909c");
        }else{
            $("#reg-email").parent().find(".error").html("(EMAIL IS INVALID)");
            $("#reg-email").parent().find("label").css("color","#f04747");
        }
        if(iAcc.test($("#reg-username").val())){
            $("#reg-username").parent().find(".error").html("");
            $("#reg-username").parent().find("label").css("color","#87909c");
        }else{
            $("#reg-username").parent().find(".error").html("(USERNAME IS INVALID)");
            $("#reg-username").parent().find("label").css("color","#f04747");
        }
        if(iPass.test($("#reg-password").val())){
            $("#reg-password").parent().find(".error").html("");
            $("#reg-password").parent().find("label").css("color","#87909c");
        }else{
            $("#reg-password").parent().find(".error").html("(PASSWORD IS INVALID)");
            $("#reg-password").parent().find("label").css("color","#f04747");
        }

        $("input").each(function(i){
            if($("input")[i].value == ""){
                $("input").eq(i).parent().find(".error").html("(THIS FIELD IS REQUIRED)");
                $("input").eq(i).parent().find("label").css("color","#f04747");
            }
        })


        var username = $("#reg-username").val();
        var password = $("#reg-password").val();

        if(!!username && !!password){
            $.ajax({
                "type": "POST",
                "url": "http://h6.duchengjiu.top/shop/api_user.php",
                "data": {
                    "status": "register",
                    "username": username,
                    "password": password,
                },
                "dataType": "json",
                "success": function(response){
                    console.log(response);                        
                    if(response.code ==0){
                        alert(response.message);
                        window.location.href = "/login";
                    }else{
                        alert(response.message);
                    }
                }
            })
        }
    })
}
)