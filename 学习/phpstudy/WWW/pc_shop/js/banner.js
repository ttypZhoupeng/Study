$(function(){
    
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
})