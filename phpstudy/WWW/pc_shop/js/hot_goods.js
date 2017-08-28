$(function(){
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
                '"><a href="detail.html?goods_id='+obj.data[i].goods_id+'"><div class="hot_item_cover"><p class="goods_price">'
                +response.data[i].price+
                '</p><div class="goods_content"><p class="goods_name">'
                +response.data[i].goods_name+
                '</p><p class="goods_desc">'
                +response.data[i].goods_desc+
                '</p></div></div></a><div class="bottom_bar"><img src="'
                +obj.data[i].goods_thumb+
                '"><span>'
                +obj.data[i].goods_name+
                '</span><div class="thumb_up"><span>'
                +parseInt(obj.data[i].price)+
                '</span><img src="images/heart.png"></div></div></div>' );
            }
        }
    
    })
})