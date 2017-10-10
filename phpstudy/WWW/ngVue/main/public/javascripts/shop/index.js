//页面导航；分类列表功能
$.get("http://h6.duchengjiu.top/shop/api_cat.php", function (data) {
    var obj = data;
    //					console.log(obj);

    for (var i = 0; i < obj.data.length; i++) {

        $("#shopNav1").append('<li><a href="shop.ejs?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
        $("#shopNav2").append('<li><a href="shop.ejs?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
        $("#shopNav3").append('<li><a href="shop.ejs?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
        
    
    }

});
//通过location.search获取get传参的数据 截取？后面的内容
var str = location.search.substr(1);
//用分割方法得到 = 号两边内容
var catId = str.split("=")
//用下标找到id的值
var madd =function(page=1){
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_goods.php",
        "type": "GET",
        "data": {
            "cat_id": catId[1],
            "page":page,
            "pagesize":24
        },
        "dataType": "json",
        "success": function (response) {
            //    console.log(response);
            var obj = response.data;
            for (var i = 0; i < obj.length; i++) {
                var data = obj[i];
                var html = `
                        <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="${data.goods_thumb}" alt="...">
                    <div class="caption">
                        <a href="detail.html?cat_id=${data.cat_id}&goods_id=${data.goods_id}"><h5>商品名称:${data.goods_name}</h5></a>
                        <h6>商品详情:${data.goods_desc}</h6>
                        <p>价格:${data.price}</p>
                        <p><a href="#" class="btn btn-primary" role="button">加入购物车</a></p>
                    </div>
                </div>
            </div>
                    `;
    
                $("#goodsList").append(html);
            }
        }
    });
}
madd();
// 分页
$(".mdda").click(function () {
    // console.log(1111);
    // console.log(this.innerHTML);
    $(this).parent().addClass('active').siblings().removeClass('active');
    $('#goodsList').html('');
    madd($(this).html());
});