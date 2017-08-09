//var name = "小时";
//
//function getAge(){
//	return 18;
//}


//用函数隔开作用域，IIFE立即执行
//(function(){
////	var name = "小时";
//
//	function getAge(){
//		return 18;
//	}
//	
//	window.getAge = getAge;
//
//})();


//也可以扩展:命名空间js没有这个概念,模仿实现
//给这个方法添加一个文件夹的思路
(function(){
	
	window.ucai = window.ucai || {};

	function getAge(){
		return 18;
	}
	
	window.ucai.getAge = getAge;

})();