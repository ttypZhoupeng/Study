$(function () {

    // $.get("http://h6.duchengjiu.top/shop/api_goods.php",function(response){
    //     var obj = response;

    //     for(var i=0;i<obj.data.length;i++){
    //         $("#goodsUl").append('<li><img src="' +obj.data[i].goods_thumb+ '" /><p class="title"><a href="detail.html?goods_id='+obj.data[i].goods_id+'">' +obj.data[i].goods_name+ '</a></p><p class="desc">' +obj.data[i].goods_desc+ '</p><p class="price">￥' +obj.data[i].price+ '</p></li>');
    //     }
    // })



    // 商品数据导入
    $.get("http://h6.duchengjiu.top/shop/api_goods.php", function (response) {
        var obj = response;

        for (var i = 0; i < obj.data.length; i++) {
            $("#goodsUl").append(
                '<div class="hot_item"><img src="' +
                obj.data[i].goods_thumb +
                '"><a href="detail.html?goods_id=' + obj.data[i].goods_id +
                '"><div class="hot_item_cover"><p class="goods_price">￥' +
                response.data[i].price +
                '</p><div class="goods_content"><p class="goods_name">' +
                response.data[i].goods_name +
                '</p><p class="goods_desc">' +
                response.data[i].goods_desc +
                '</p></div></div></a><div class="bottom_bar"><img src="' +
                obj.data[i].goods_thumb +
                '"><span>' +
                obj.data[i].goods_name +
                '</span><div class="thumb_up"><span>' +
                parseInt(obj.data[i].price) +
                '</span><img src="images/heart.png"></div></div></div>');
        }
    })

    var direction = "right";
    $(".our_shop .title").mouseenter(function () {

        (function () {
            var css = {
                "left": "-10px"
            }
            if (direction == "right") {
                direction = "left";
                css.left = "10px";
            } else {
                direction = "right";
            }
            $("em.hand").animate(css, arguments.callee);

        })()

    });

    $(".our_shop .title").mouseout(function () {
        $("em.hand").stop();
        $("em.hand").animate({
            "left": 0
        });
    });

})