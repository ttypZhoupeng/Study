var express = require('express');
var Category = require('../modules/category');
var router = express.Router();


//添加分类
router.post('/',function(req,res){
//	console.log('post category');
//	console.log(req.body.title);
	
	var title = req.body.title;
	var category = new Category({
		title: title
	});
	category.save(function(err){
		//如果有报错
		if(err){
			res.json({
				success: false,
				message: "添加分类失败~"
			})
		}
		
		res.json({
				success: true,
				message: "添加分类成功！"
			})
	})
	
})
//查看所有分类
router.get('/',function(req,res){
	
	Category.find({},function(err,categoryies){
		res.json({
			success: true,
			data: categoryies
		})
	})
	
})
//更新分类
router.put('/',function(req,res){
	
	//解构赋值
	var {title, newTitle} = req.body;
//	console.log(title, newTitle);
//	
//	console.log('put category');

	Category.findOneAndUpdate({title: title},{title: newTitle}
	,function(err, category){
		if(err){
			res.json({
				success: false,message: "更新分类失败~"
			});
		}
		
		res.json({success: true, message: "更新分类成功！"});
	})
	
})
//删除分类
router.delete('/',function(req,res){
	//解构赋值
	var {title} = req.body;
	
	Category.remove({title: title},function(err){
		if(err){
			res.json({
				success: false,message: "删除分类失败~"
			});
		}
		res.json({success: true, message: "删除分类成功！"});
	})
	
	
})

module.exports = router;