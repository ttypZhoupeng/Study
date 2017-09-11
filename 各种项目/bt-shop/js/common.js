// 分类商品
$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(response){
    if(response.code === 0){
        console.log(response);
        var  html = '';
        for(var i=0;i<response.data.length;i++){
            var obj = response.data[i];

            html+=`<li><a href="list.html?cat_id = ${obj.cat_name}">${obj.cat_name}</a></li>`;
        }
        $("#listNav").html(html);
    }
})