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
comments: [{body: String, date: Date}],
date: {type: Date ,default: date.now},
tags: [{title: String}],
hidden: Boolean,
mete: {
	votes: Number,
	favs: Number
}

###API列表有以下部分
注册管理员  y
登录（授权，以下API都需要token才能使用） y
发布博文   
删除博文
修改博文
删除评论


博文分类   （增删改查）y
分页显示
发布评论
点赞功能




创建文件夹
初始化 得到json文件
手动输入依赖环境，或者npm install直接安装
新建各种文件
server.js启动文件
导入。。
modulse模板
引入mongoose
利用模板的方式启动模板，并导出
routes路由
导入模板
利用mongoose的语法进行数据库数据操作
输出路由
server.js导入路由文件，
然后确定外部链接，进行访问


var reg = new RegExp('^'+category+'$')与/^category$/的区别
前者中的category是拼接上的一个变量，是动态的，
后者是静态的只能匹配'category'这个内容

