var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/people");

var db = mongoose.connection; //连接
//添加报错试讲 错误的输出
db.on("error",console.error.bind(console,"connection error:"))
//添加打开事件，执行的话表示数据库被打开了
db.once("open",function(callback){
    console.log("success");
    //定义一个样式，里面有一个name属性的配置（数据加上一些设定比如类型）
    var kittySchema = mongoose.Schema({
        name:String
    })

    // var ttyp = mongoose.Schema({
    //     name:String,

    // })
    // 类似在原型中添加方法，用的少，methods里面存储方法
    kittySchema.methods.speak = function(){
        var greeting = this.name ? 
        "Meow name is" + this.name : "I don't hava a name"
        console.log(greeting);
    }

    //将样式放入kitten中
    var Kitten = mongoose.model("Kitten",kittySchema);


    // 实例化
    var silence = new Kitten({"name":"hello"})
    console.log(silence.name);

    silence.save(function(err,silence){
        if(err) return console.error(err);
        silence.speak();
    })

    //查找所有
    Kitten.find(function(err,kittens){
        if(err) return console.error(err);
        console.log(kittens);
    })

    //过滤一下，查找h开头数据
    Kitten.find({name:/^h/},function(err,kittens){
        if(err) return console.error(err);
        console.log(kittens);
    })


    kitten.
})