$(function(){
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