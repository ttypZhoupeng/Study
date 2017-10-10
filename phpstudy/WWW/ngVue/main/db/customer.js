var mongoose=require('mongoose');
var customerSchema = mongoose.Schema({
    name: String,
    password: String,
    info: mongoose.Schema.Types.Mixed
});

customerSchema.methods.say=function (msg = '没有消息') {
    var usr=this.name
        ?"用户名 ： "+this.name
        :"没有设置用户名";
    var pwd=this.password
        ?"密码 ： "+this.password
        :"没有设置密码";
    console.log(usr);
    console.log(pwd);
    console.log(this.info.msg?this.info.msg:msg);
};

//定义collection
var Customer = mongoose.model('customer',customerSchema);

var user={
    msg:'这是用于导出的一个对象'
};
user.open=function (cb) {
    mongoose.connect('mongodb://wph:123@wphkj.cn:27017/ngVue');
    var db=mongoose.connection;
    db.on('error',console.error.bind(console,'connection error 连接错误:'));
    //TODO: 这里一个问题，就是为什么用on,不用once的话，会叠加输出？
    db.once('open',function () {
        console.log('连接成功');
    });
    user.con=true;
    cb(mongoose);
};

user.close=function (connect) {
    connect.disconnect(function () {
        user.con=false;
        console.log('断开连接');
    });
};

user.register=function (usr,pwd,info='没有写',cb) {
    var tmp = new Customer({
        name: usr,
        password: pwd,
        info: info
    });
    Customer.find({name:usr},function (err,result) {
      if(result.length===0){
        if(user.con){
          tmp.save(function (err,self) {
            self.say('保存成功');
            cb(0);
          })
        }
      }else{
        cb(1);
      }
    });

};

user.login=function (usr,pwd,cb) {
    if(user.con){
        Customer.find({
            name: usr,
            password: pwd
        },function (err,result) {
            if(err || result.length === 0){
                cb && cb(1);
                return;
            }else {
                cb && cb(0);
            }
        });
    }
};

module.exports=user;