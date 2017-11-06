const path = require('path'); //第一步引入path模块：路径

//导出一个对象
module.exports = {
	entry: './src/index.js',//指定入口文件
	output: {  //指定的输出文件：文件名称、配置路径
		filename: 'bundle.js',	//输出文件的名称
		path: path.resolve(__dirname, 'dist') 
//__dirname两个下划线加dirname： 当前路径 + /dist
	}
}
