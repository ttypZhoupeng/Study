###Gulp
用自动化构建工具增强你的工作流程！

	工作流程
		HTML,CSS,JS
		HTML5,CSS3,ES6,ES7,ES8
		NODEJS,ANGULAR,Less,Sass,Vue,React
		通过类似HBuilder，webstorm的IDE，实时自动编译
		
	构建工具
		帮我们把less,sass,stylus实时编译成css
		帮我们把ES6，ES7，ES8实时编译成ES5，ES3
		帮我们压缩文件，合并文件，整理文件
		提供一个实时同步的服务器
		
	自动化（通过流水线）
		写入一个  gulpfile.js文件
		通过 命令 gulp 启动
		

第一步： 全局安装gulp
cnpm i -g gulp

第二步： 在当前目录 安装gulp
cnpm i -D gulp

-S -D
-S就是--save的简写，就行npm默认一个start的字段，你可以不必输入npm run start 而只需输入npm start，这两个效果是一样的。
-D就是--save-dev 这样安装的包的名称及版本号就会存在package.json的devDependencies这个里面，而--save会将包的名称及版本号放在dependencies里面。


gulp.src 匹配到一个路径下面的 一个或者多个文件

gulp.dest : 写入文件,输出到哪里,如果输出地址(文件夹)不存在,会创建一个


安装gulp-connect
cnpm i -D gulp-connect

npm地址
https://www.npmjs.com/package/gulp-connect

//实时监听index.html文件的变化，如果发生变化则让'copy-html'处理
gulp.task('watch', () => {
	return gulp.watch('index.html', ['copy-html']);
});


//下一步，压缩html文件
第一步下载 cnpm i -D gulp-htmlmin

npm地址
https://www.npmjs.com/package/gulp-htmlmin

============
下面是css 部分
less
安装
cnpm i -D gulp-less

npm地址
https://www.npmjs.com/package/gulp-less


下面是css兼容处理
安装
cnpm i -D less-plugin-autoprefix

第一个是导入模块，第二个是兼容的版本
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 10 versions'] });

放入less()
 .pipe(less({plugins: [autoprefix]}))


下面 压缩和改名
cnpm i -D gulp-cssmin

https://www.npmjs.com/package/gulp-cssmin

gulp.task('less', () => {
	return gulp.src('src/styles/*.less')
		.pipe(less({plugins: [autoprefix]}))
		.pipe(cssmin())                       //压缩
        .pipe(rename({suffix: '.min'}))      //改名
		.pipe(gulp.dest('dist/css'));
});

下一步  删除多余文件
cnpm i -D del

引入
del  = require('del')

gulp.task('clean', () => {
	del(['dist/*']);
})
放入默认执前面

下一步：合并文件（当文件需要合并的时候使用，有先后顺序问题）

cnpm i -D gulp-concat

https://www.npmjs.com/package/gulp-concat

//编辑less文件并压缩，放入生产环境
gulp.task('less', () => {
	return gulp.src('src/styles/*.less')
		.pipe(less({plugins: [autoprefix]}))
		.pipe(cssmin())
//      .pipe(rename({suffix: '.min'}))
        .pipe(concat('main.min.css'))
		.pipe(gulp.dest('dist/css'));
});

处理HTML:
	监听对应文件，实时编译
	开启一个服务器，实时预览
	压缩文件
	拷贝文件到指定目录

处理CSS:
	less,sass,stylus文件，实时编译
	css文件压缩和改名
	css文件合并
	拷贝到目标位置
	