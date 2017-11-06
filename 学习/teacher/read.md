###Welcome to use MarkDown

1.mongo 进入数据库 需要配置环境变量

2.显示所有库  show dbs

3.选择集合 use people  如果没有这个people相当于新建

4.在集合中创建表 db.createCollection('表名')

5.添加数据 db.user.insert( {"name":"ucai.com","age":51} ) 

6.查询数据  db.user.find(); 带条件查询  db.students.find({"age":22})

7.修改数据  db.students.update({"name":"111"},{$set:{"age":22}})

8.删除数据  db.students.remove({"age":22})
