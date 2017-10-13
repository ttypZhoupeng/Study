## nodejs+mongoDB 单用户博客API

## 模型

user模型 modules/user.js
```
name:String,
password:String,
admin:Boolean
```

分类模型：modules/category.js
```
title:String
```

博客类型：  modules/blog.js
```
title: String
body:String,
antuor:String,
author:String,
conmments:[{body: String,date:Date}],
date:{type:Date,default:date.now},
tags:[{title:String}],
hidden:Boolean,
mete:{
    vores:Number,
    favs:Number
}
```

### API列表有一下部分
管理员部分
* 注册管理员  (<font color="green"><b>√</b></font>)
* 登录（授权，以下API都需要token才能使用）(<font color="green"><b>√</b></font>)
* 发布博文 (<font color="green"><b>√</b></font>)
* 删除博文  
* 修改博文
* 删除评论

用户部分
* 博文分类  增删查改(<font color="green"><b>√</b></font>)
* 分页显示
* 发布评论
* 点赞功能



