let gulp     = require('gulp'),  //导入模块
	connect  = require('gulp-connect'),
	htmlmin  = require('gulp-htmlmin'),
	less     = require('gulp-less')
	;

//调用task(任务)api，任务名称：default是默认执行的任务，第二参数写回调
gulp.task('default',['study','copy-html','watch','server'], () => console.log("ok"));

gulp.task('eat', () => console.log('eating...'));

gulp.task('sleep', () => console.log('sleeping...'));

gulp.task('study',['eat','sleep'], () => console.log('studying!!!'));


//找到index.html文件然后输出到指定位置
gulp.task('copy-html', () => {
	return gulp.src('index.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('dist/'))
			.pipe(connect.reload());
})	

//实时监听index.html文件的变化，如果发生变化则让'copy-html'处理
gulp.task('watch',['watch-html','watch-less','watch-js'], () => {
});

gulp.task('watch-html', () => {
	return gulp.watch('index.html', ['copy-html']);
});

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
	return gulp.src('src/styles/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/css'));
});
