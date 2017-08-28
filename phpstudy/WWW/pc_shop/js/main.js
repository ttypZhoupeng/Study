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



    // 轮播图
    var $banner = $("#banner");
    var $m_unit = $(".m_unit");
    var $imageLis = $(".m_unit li");
    var $focus = $(".focus ol li");
    
    var idx = 0;

    $m_unit.append($imageLis.eq(0).clone());

    var timer = setInterval(rightBtnHandler,3000);

    $banner.mouseenter(function(){
        clearInterval(timer);
        $(".leftBtn").css("display","block");
        $(".rightBtn").css("display","block");
    })
    $banner.mouseleave(function(){
        timer = setInterval(rightBtnHandler,3000);
        $(".leftBtn").css("display","none");
        $(".rightBtn").css("display","none");
    })
    
    $(".rightBtn").click(rightBtnHandler);
    

    function rightBtnHandler(){
        if($m_unit.is(":animated")) return;

        idx++;
        $m_unit.animate({"left":-1000*idx},500,function(){
            if(idx>4){
                idx = 0;
                $m_unit.css("left",0);
            }
        });
        changeFocus();
    }

    $(".leftBtn").click(function(){
        if($m_unit.is(":animated")) return;

        idx--;
        if(idx<0){
            idx=4;
            $m_unit.css("left",-5*1000);
        }
        $m_unit.animate({"left":-1000*idx},300);
        changeFocus();
    });


    $focus.click(function(){
        idx = $(this).index();
        $m_unit.animate({"left":-1000*idx},300);
        changeFocus();
    })


    function changeFocus(){
        var n = idx <= 4? idx : 0;

        $focus.eq(n).addClass("cur").siblings().removeClass("cur");
    }

    //搜索功能
    $(".search_btn").click(function(){
        var search = $("#search").val();
        console.log(search);
        $.ajax({
            "url":"http://h6.duchengjiu.top/shop/api_goods.php",
            "type":"get",
            "dataType":"json",
            "data":{
                "search_text":search,
            },
            "success":function(response){
                console.log(search);
                // console.log(response);
                var goodsId = response.data[0].goods_id;
                console.log(goodsId);
                window.location.href = "detail.html?goods_id="+goodsId;
            }
        })
    })
})