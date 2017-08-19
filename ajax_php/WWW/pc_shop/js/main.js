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



    // 商品数据导入
    $.get("http://h6.duchengjiu.top/shop/api_goods.php",function(response){
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
    })


    // 轮播图

})