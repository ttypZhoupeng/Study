var MongoClient = require("mongodb").MongoClient;
// 第一步导入：mongodb,里面是一个对象，调用这个对象的方法
var DB_CONN_STR = "mongodb://localhost:27017/people";

var insertData = function(db,cb){//db默认数据库连接对象
    //连接到表student
    var collection = db.collection('student');
    //插入数据
    var data = [{"name":"周鹏","age":22},{"name":"澹台宇鹏","age":22}];

    //添加数据
    collection.insert(data,function(err,result){
         if(err){
            console.log("Error"+err);
            return;
        }
        cb(result);
        //有错误打印错误，并结束，没错误调用回调
    })
}

var selectData = function(db,cb){
    // 连接到student
    var collection = db.collection('student');
    //查询数据
    var whereStr = {"name":"澹台宇鹏"};
    // 通过find方法查询；
    collection.find(whereStr).toArray(function(err,result){
        if(err){
            console.log("Error"+err);
            return;
        }
        cb(result);

    })
}

var removeData = function(db,cb){
    var collection = db.collection('student');

    var removeStr = {"name":"澹台宇鹏"};

    collection.remove(removeStr,function(err,result){
        if(err){
            console.log("Error"+err);
            return;
        }
        cb(result);

    })
}

var upDate = function(db,cb){
    var collection = db.collection('student');
    var whereStr = {"name":"周鹏"};
    var updateStr = {$set:{"sex":"handsomeBoy"}};

    collection.update(whereStr,updateStr,function(err,result){
        if(err){
            console.log("Error"+err);
            return;
        }
        cb(result);
    })
}

// 连接地址
MongoClient.connect(DB_CONN_STR,function(err,db){
    console.log("连接成功！");

    // 添加数据
    // insertData(db,function(result){
    //     console.log(result);
    // })


    // 删除数据
    // removeData(db,function(result){
    //     console.log(result);
    // })

    // 查找数据
    // selectData(db,function(result){
    //     console.log(result);
    // })

    // 更新数据
    upDate(db,function(result){
        console.log(result);
    })

})