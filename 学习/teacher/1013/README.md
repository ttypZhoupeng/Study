###webpack

文件打包

把很多模块，打包成一个

可以通过入口文件，打包成一个文件.js

第一步：创建一个文件夹 webpack-demo

	进入文件夹
	cnpm init -y
	cnpm i -D webpack
	
第二步
	创建了index.html   index.js在src文件夹里面
	
第三步
	写入内容
	_.join 这个方法的依赖在js中知道么？
	只能从html文件中找到！而且有部分版本可以出现不同
	
	反之，如果我的代码里面_.join 这个语法，没了！那么这个引入的资源浪费了！
	
依赖关系不明了！
我们可以通过webpack去解决问题

首先我们调整目录结构！ 把src里面的开发文件，和 dist里面的项目文件分隔开

--save -S ：项目中必须用到的模块

--save-dev -D	开发时候的模块

第一种方式！
./node_modules/.bin/webpack src/index.js dist/bundle.js
./node_modules/.bin/webpack : 模块文件夹中的webpack，当前安装的webpack路径
src/index.js ： 入口输出文件是谁！
dist/bundle.js ：输出到哪！

第二种方式
./node_modules/.bin/webpack --config webpack.config.js
	--config ：配置config的文件名称
	webpack.config.js ： 文件的名称