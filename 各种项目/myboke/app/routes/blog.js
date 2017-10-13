var express = require("express");
var Blog = require("../modules/blog");

var router = express.Router();


// 显示所有博客
router.get('/',function(req,res){
    // 根据分类查找
    var {category} = req.query;
    var whereObj = {};
    if(category){
        var reg = new RegExp('^'+category+'$');
        whereObj = {category:reg}
    }

    Blog.find(whereObj,function(err,blogs){
        res.json({
            success:true,
            data:blogs
        })
    })
})

// 发布博客
router.post('/',function(req,res){
    // 结构赋值
    var {title,body,author,tags,hidden,category} = req.body;
    console.log(title);
    if(title.length<3){
        res.json({
            success:false,
            message:"标题长度不能小于3"
        })
    }

    // 标签格式应该是对象数组

    // 把标签分割成数组格式
    var tagsArray = tags.split(",");
    // 新建一个空数组，用来放对象
    var tagsObjArray = [];
    // 通过遍历的方式，把标签内容放入对象里面，通过push方式
    tagsArray.forEach(function(v){
        tagsObjArray.push({title:v});
    })

    var blog = new Blog({
        title,
        body,
        author,
        tags:tagsObjArray,
        hidden,
        category
    });

   blog.save(function(err){
       if(err){
           res.json({success:false,messafe:"博客发布失败"})
       };
       res.json({success:true,message:"博客发布成功"})
   })
})

module.exports = router;