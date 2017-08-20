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
    
    
        // $.get("http://h6.duchengjiu.top/shop/api_goods.php",function(response){
        //     var obj = response;
            
        //     for(var i=0;i<obj.data.length;i++){
        //         $("#goodsUl").append('<li><img src="' +obj.data[i].goods_thumb+ '" /><p class="title"><a href="detail.html?goods_id='+obj.data[i].goods_id+'">' +obj.data[i].goods_name+ '</a></p><p class="desc">' +obj.data[i].goods_desc+ '</p><p class="price">￥' +obj.data[i].price+ '</p></li>');
        //     }
        // })


        var str = location.search;
        
                    var catId = str.split("=");
                    console.log(str);
                    console.log(catId);
                    console.log(catId[1]);
        
                    $.ajax({
                            "url": "http://h6.duchengjiu.top/shop/api_goods.php",
                            "type": "GET",
                            "data": {
                                "cat_id": catId[1]
                            },
                            "dataType": "json",
                            "success": function(response){
                                var obj = response;
                                for(var i=0;i<obj.data.length;i++){
                                    $("#goodsUl").append(
                                    '<div class="hot_item"><img src="'
                                    +obj.data[i].goods_thumb+
                                    '"><div class="hot_item_cover"><p class="goods_price">'
                                    +response.data[i].price+
                                    '</p><div class="goods_content"><p class="goods_name">'
                                    +response.data[i].goods_name+
                                    '</p><p class="goods_desc">'
                                    +response.data[i].goods_desc+
                                    '</p></div></div><div class="bottom_bar"><img src="'
                                    +obj.data[i].goods_thumb+
                                    '"><span>'
                                    +obj.data[i].goods_name+
                                    '</span><div class="thumb_up"><span>'
                                    +parseInt(obj.data[i].price)+
                                    '</span><img src="images/heart.png"></div></div></div>' );
                                }
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
    })