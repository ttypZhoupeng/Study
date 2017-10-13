var express = require('express');
var Blog = require('../modules/blog');

var router = express.Router();

router.post('/',function(req,res){
    var {id,body} = req.body;

    console.log(id,body);

    Blog.findById(id,function(err,blog){
        
        if(err){
            return res.json({success:false,message:'发布评论失败，没有找到文章'});
        }

        blog.comment.push({body});

        blog.save(function(err){
            if(err){
                return res.json({success:false,message:"发布评论失败"+err});
            }

            return res.json({success:true,message:"发布评论成功"})
        })


    })
})

module.exports = router;