(function(){  //IIFE
	
	var kuquery = function(select){   //select选择器
				//new 一个方法fn
		return new kuquery.fn.init(select);
	}
	
	kuquery.fn = {
		init : function(select){
//			console.log(select);  //看看选择器传入的内容
			
			//如果传入的是ID选择器，则根据ID选择元素
			if( select.substr(0,1) === "#"){
				var o = document.getElementById( select.substr(1) );
//				console.log(o);  //可以通过ID得到元素
//				console.log(this);  //init(可以理解为构造函数)
				this[0] = o;
				this.length = 1;
			}else{
				//如果传入的是标签选择器，则用标签找元素
				var os = document.getElementsByTagName(select);
				for(var i=0;i<os.length;i++){
					this[i] = os[i];
				}
				this.length = os.length;
			}
			
		},
		css : function(name,value){
//			console.log(this);  //对象
//			console.log(name,value);  //
			
 			for(var i = 0;i<this.length;i++){
				
				this[i].style[name] = value;
			}
 			return this;  //可以实现连缀,返回this指向
		},
		attr : function(name,value){
			
			for(var i = 0;i<this.length;i++){
				
				this[i].setAttribute(name,value);
			}
			return this;  //可以实现连缀,返回this指向
		},
		html : function(html){
			for(var i = 0;i<this.length;i++){
				
				this[i].innerHTML = html;
			}
			return this;  //可以实现连缀,返回this指向
		},
		eq : function(index){
			//
			this[0] = this[index];
			
			for(var i = 1;i<this.length;i++){
				delete this[i];
			}
			this.length = 1;  //目前只有一个内容
			return this;  //可以实现连缀,返回this指向
			
		}
		
	}
	
	
	//设置init构造函数通过原型链继承kuquery.fn的方法和属性
	//这样我们new init()的对象不仅可以访问init的方法和属性，还能通过 点 方式使用fn的方法和属性
	kuquery.fn.init.prototype = kuquery.fn;
	//在window中添加kq这个方法
	window.kq = kuquery;
	
})();

