if(localStorage.getItem("token")){
    console.log(222);
    $(".login_register").html('<span><a href="#">'+localStorage.getItem("username")+'</a></span>');
}
$(function(){


    // 导航栏数据导入
    $.get("http://h6.duchengjiu.top/shop/api_cat.php",function(response){
        var obj = response;
        console.log(obj);
        console.log(obj.data);

        for(var i=0;i<obj.data.length;i++){
            $("#nav").append('<li><a href="list.html?cat_id=' +obj.data[i].cat_id+ '">' + obj.data[i].cat_name +  '</a></li>');
        }
    })



})