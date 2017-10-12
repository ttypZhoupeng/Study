(function ($) {
    
        //获取当前url中的cat_id和goods_id
        var str=location.search.substr(1);
        var valueJson={};
        var valueArr=str.match(/\w+=(\w+)/g);
        for(var i=0;i<valueArr.length;i++){
            var temp=valueArr[i].split("=");
            //每一个键名存入json，每一个键值存入键中
            //结果格式：{cat_id:69,goods_id:256718}
            valueJson[temp[0]]=temp[1];
        }
    
        var $dGoods=$('section.d-goods');
        var $goods=$('.goods',$dGoods);
    
        //导入指定的商品详情数据
        $.ajax({
            url:'http://h6.duchengjiu.top/shop/api_goods.php',
            type:'GET',
            data:{
                goods_id:valueJson.goods_id
            },
            success:function (response) {
                if(response.code===0){
                    var data=response.data[0];
                    var html=`<img src="${data.goods_thumb}" alt="">
                            <div class="sm-img">
                                <img src="${data.goods_thumb}" alt="">
                                <img src="${data.goods_thumb}" alt="">
                                
                            </div>`;
                    $('.img-detail',$goods).html(html);
    
                    html=`<h4>${data.goods_name} <br><small>荧光 包邮 运费险 新款</small></h4>
                            <p><span>描述：</span><br>${data.goods_desc}</p>
                            <p><span>价格：</span><em>${data.price}</em></p>
                           
                            <p>
                                <span>数量：</span>
                                <button class="minus">-</button>
                                <input type="text" value="1" id="d-goods-number">
                                <button class="add">+</button>
                                
                            </p>
                            <p>
                                <span></span>
                                <button id="pay-it-rightnow">立即购买</button>
                                <button id="add-to-cart">加入购物车</button>
                            </p>
                           `;
                    //TODO:生成节点，并绑定事件(怎么做到append前绑定事件)
                    var $html=$(html);
    
                    $('.detail-content',$goods).html('').append($html);
    
                    //点击增加减少商品数量
                    var input=$('#d-goods-number');
                    $('.add',$goods).click(function () {
                        //TODO:接口缺陷，暂时不做；此处if用来限制选取商品的数量，不能大于库存数
                        // if(input.val()<data.goods_number){
                            input.val(1*input.val()+1);
                        // }
                    });
                    $('.minus',$goods).click(function () {
                        if(input.val()>1){
                            input.val(1*input.val()-1);
                        }
                    });
    
                    //立即购买
                    $('#pay-it-rightnow').click(function () {
                       console.log($(this));
                    });
                    //加入购物车
                    $('#add-to-cart').click(function () {
                       console.log($(this));
                       
                    });
                }else{
                    alert('跳转出错');
                }
            }
        });
    
    //    导入相关商品数据
    //    TODO：这里可以用搜索功能来模仿“相关”
        var imgList=$('.img-list',$dGoods);
    
        $.ajax({
            url:'http://h6.duchengjiu.top/shop/api_goods.php',
            type:'GET',
            data:{
                goods_id:33710
            },
            success:function (response) {
                console.log(response)
                if(response.code===0){
                    var data=response.data[0];
                    var html=`
                        <div>
                            <a href="./detail.ejs?cat_id=${data.cat_id}&goods_id=${data.goods_id}"><img src="${data.goods_thumb}" alt=""><span>￥${data.price}</span></a>
                        </div>
                        <div>
                            <a href="./detail.ejs?cat_id=${data.cat_id}&goods_id=${data.goods_id}"><img src="${data.goods_thumb}" alt=""><span>￥${data.price}</span></a>
                        </div>
                        <div>
                            <a href="./detail.ejs?cat_id=${data.cat_id}&goods_id=${data.goods_id}"><img src="${data.goods_thumb}" alt=""><span>￥${data.price}</span></a>
                        </div>
                    `;
                    imgList.html('').append(html);
                }else{
                    alert('拉取相关商品错误~');
                }
            }
        });
        //页面导航；分类列表功能
    $.get("http://h6.duchengjiu.top/shop/api_cat.php", function (data) {
    var obj = data;
    //					console.log(obj);

    for (var i = 0; i < obj.data.length; i++) {
        if(i<3){
            $("#shopNav1").append('<li><a href="shop.ejs?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
        }else if(i>=3&&i<6){
            $("#shopNav2").append('<li><a href="shop.ejs?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
        }else{
            $("#shopNav3").append('<li><a href="shop.ejs?cat_id=' + obj.data[i].cat_id + '">' + obj.data[i].cat_name + '</a></li>');
        }
        
       
        
        
    }

});
    }

)(jQuery);