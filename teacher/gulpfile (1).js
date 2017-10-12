let gulp     = require('gulp'),  //导入模块
	connect  = require('gulp-connect'),  //服务器的预览
	htmlmin  = require('gulp-htmlmin'),  //压缩html
	less     = require('gulp-less'),    //实时编译less
	cssmin   = require('gulp-cssmin'), //压缩css文件
	rename   = require('gulp-rename'), //改名
	del      = require('del'),         //删除多余文件
	concat   = require('gulp-concat')  //合并
	;

//兼容处理
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 10 versions'] });//最新的10个版本
 

//调用task(任务)api，任务名称：default是默认执行的任务，第二参数写回调
gulp.task('default',['clean','study','copy-html','watch','server'], () => console.log("ok"));

gulp.task('eat', () => console.log('eating...'));

gulp.task('sleep', () => console.log('sleeping...'));

gulp.task('study',['eat','sleep'], () => console.log('studying!!!'));


//找到index.html文件然后输出到指定位置
gulp.task('copy-html', () => {
	return gulp.src('index.html')   //找到文件
			.pipe(htmlmin({collapseWhitespace: true}))   //压缩
			.pipe(gulp.dest('dist/'))   //输出到指定位置
			.pipe(connect.reload());    //服务器预览
})	

//监听的中枢
gulp.task('watch',['watch-html','watch-less','watch-js'], () => {
});

//实时监听index.html文件的变化，如果发生变化则让'copy-html'处理
gulp.task('watch-html', () => {
	return gulp.watch('index.html', ['copy-html']);
});

//实时监听./src/styles/下面的所有less文件，如果文件发生改变，则让'less'任务处理
gulp.task('watch-less', () => {
	return gulp.watch('./src/styles/**/*',['less']);
});

gulp.task('watch-js', () => {
	
})

//开启一个服务器，实时加载
gulp.task('server', () => {
	connect.server({
		root: 'dist',  //服务器根目录
		port: 8080,		//端口号
		livereload: true
	});
});

//编辑less文件并压缩，放入生产环境
gulp.task('less', () => {
	return gulp.src('src/styles/*.less')    //找到这个目录下面所有less文件
		.pipe(less({plugins: [autoprefix]}))   //实时编译：并处理兼容
		.pipe(cssmin())                      //压缩
//      .pipe(rename({suffix: '.min'}))     //改名
        .pipe(concat('main.min.css'))		//合并后并指定文件名称
		.pipe(gulp.dest('dist/css'));		//输出到指定文件夹
});

//删除的任务
gulp.task('clean', () => {
	del(['dist/*']);  //删除方法，删除的位置
})
