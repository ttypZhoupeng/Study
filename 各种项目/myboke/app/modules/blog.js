var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Blog',new Schema({
    title: String,
    body:String,
    antuor:String,
    category:String,
    comment:[{body: String,date:Date}],
    tags:[{title:String}],
    date:{type:Date,default:Date.now},
    hidden:Boolean,
    mete:{
        vores:Number,
        favs:Number
    }
}))