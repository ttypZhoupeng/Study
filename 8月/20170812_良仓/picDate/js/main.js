var hot = document.getElementById("hotGoods");

$.ajax({ 
    "url" :"http://h6.duchengjiu.top/shop/api_goods.php",
    "type": "GET",
    "dataType": "json",
    "success":function(response){
        console.log(response);

        var html ="";
        var arr = [];
        for(var i=0;i<response.data.length;i++){
            
            html += "<div class='hot_item'><img src='" 
            + response.data[i].goods_thumb +
            "'><div class='hot_item_cover'><p class='goods_price'>￥"
            +response.data[i].price+
            "</p><div class='goods_content'><p class='goods_name'>"
            +response.data[i].goods_name+
            "</p><p class='goods_desc'>"
            +response.data[i].goods_desc+
            "</p></div></div></div>";
            
        }
        hot.innerHTML = html;     
        var cover = document.getElementsByClassName("hot_item_cover");
        console.log(cover);  

        for(var j=0;j<cover.length;j++){
            cover[j].onmouseover = function(){
                this.style.display = "block";
            }
        }
    }
})




// cover.onmouseover = function(e){
//     var e = e ||window.event;
//     var target = e.target || e.srcElement;
//     console.log(target.nodeName);
//     if(target.nodeName.toLowerCase()=='img'){
//         // this.style.display = "block";
//         var a = this.getElementsByClassName("hot_item_cover");
//     //    this.style.zIndex = -100;
//         // console.log(a);
//     }
// }


