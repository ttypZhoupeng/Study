$(function(){
    // 导航下拉框
    $("#downBtn").click(function(){
        $(".down-nav").slideDown(300);
    })
    $("#upBtn").click(function(){
        $(".down-nav").slideUp(300);
    })


    // nav滑动初始化
    var mySwiper1 = new Swiper('#swiperNav', {
        direction: 'horizontal',
        freeMode : true
    })
})