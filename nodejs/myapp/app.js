var express = require('express');//导入模块
var app = express();//执行模块

app.get('/', function (req, res) {
  res.send('What fuck!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});