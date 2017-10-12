var m1 = angular.module('myNav',[]);
m1.controller('Aaa',function($scope){

})
m1.controller('dl',function(){
  // console.log(2);
  var lock = true;
  $(".topnav>.btn").click(function(){

    if(lock){
      $(".sidenav").css("left","0px")
    }else{
      $(".sidenav").css("left","-240px")
    }
    lock = !lock;
  });
});

