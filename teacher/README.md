##nodejs+mongoDB 单用户博客API

##模型
user模型
name: String,
password: String,
admin: Boolean

分类模型：
title: String

博客类型：
title: String,
body: String,
author: String,
conmments: [{body: String, date: Date}],
date: {type: Date ,default: date.now},
tags: [{title: String}],
hidden: Boolean,
mete: {
	votes: Number,
	favs: Number
}

###API列表有以下部分
注册管理员
登录（授权，以下API都需要token才能使用）
发布博文
删除博文
修改博文
删除评论


博文分类
分页显示
发布评论
点赞功能