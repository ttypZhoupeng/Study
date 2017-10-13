let gulp    = require('gulp'),         //导入模块
    connect = require('gulp-connect'), //服务器的预览
    htmlmin = require('gulp-htmlmin'), //压缩html

    less    = require('gulp-less'),    //实时编译less
    cssmin  = require('gulp-cssmin'),  //压缩css文件
    rename  = require('gulp-rename'),  //改名
    del     = require('del'),          //删除多余文件
    concat  = require('gulp-concat'),   //合并
    sass    = require('gulp-sass'),    //实时编译sass
    stylus  = require('gulp-stylus'),  //实时编译stylus

    babel   = require('gulp-babel'),    //es6编译为es5
    uglify  = require('gulp-uglify'),   //js压缩
    eslint  = require('gulp-eslint')    //js校正
    ;

// 兼容处理
let LessAutoprefix = require('less-plugin-autoprefix');
let autoprefix = new LessAutoprefix({ browsers : ['last 10 versions']});

// 调用task(任务)api,任务名称：default是默认的执行任务，function回调
gulp.task('default',['clear','copy-html','watch','server','less','sass','stylus'],() => console.log("ok"));

// 找到index.html,然后输出到指定位置
gulp.task('copy-html',() =>{
    return gulp.src('index.html')     //找到文件
    .pipe(htmlmin({collapseWhitespace:true})) 
    .pipe(gulp.dest('dist/'))         //输出到指定位置
    .pipe(connect.reload());          //服务器预览
})

// 监听的中枢
gulp.task('watch',['watch-html','watch-less','watch-sass','watch-stylus','watch-js'],() => {
})

// 实时监听index.html文件的变化，如果发生变化则让'copy-html'执行
gulp.task('watch-html',() => {
    return gulp.watch('index.html',['copy-html']);
})

//实时监听./src/styles/下面的所有less文件，如果文件发生改变，则让'less'任务处理
gulp.task('watch-less',() => {
    return gulp.watch('./src/styles/*.less',['less']);
})

//实时监听sass文件更改
gulp.task('watch-sass',() => {
    return gulp.watch('./src/styles/*.sass',['sass']);
})

// 实时监听stylus
gulp.task('watch-stylus',() => {
    return gulp.watch('./src/styles/*.styl',['stylus']);
})

gulp.task('watch-js',() => {
    return gulp.watch('./src/**/*.js',['compile-js']);
})

// 开启一个服务器，实时加载
gulp.task('server',()=>{
    connect.server({
        root:'dist',    //服务器根目录
        port:8080,      //指定端口号
        livereload:true 
    });
});

// -----------------------CSS--------------------------

// 编辑less文件并压缩，放入生产环境
gulp.task('less',()=>{
    return gulp.src('src/styles/*.less')    //找到这个目录下面所有less文件
    .pipe(less({plugins: [autoprefix]}))    //实时编译：并处理兼容
    .pipe(cssmin())                         //压缩
    // .pipe(rename({suffix:'.min'}))       //改名
    .pipe(concat('main.min.css'))           //合并后并指定文件名称
    .pipe(gulp.dest('dist/css'));           //输出到指定文件夹
});

gulp.task('clear',() => {
    del(['dist/*']);                        //删除方法，删除的位置
})


//sass
gulp.task('sass', () => {
    return gulp.src([
        'src/styles/index.scss'
    ])
    .pipe(sass())
    .pipe(concat('main-sass.css'))
    .pipe(rename({suffix:'.min'})) 
    .pipe(gulp.dest('dist/css'));    
})

gulp.task('stylus', () => {
    return gulp.src([
        'src/styles/demo.styl',
        'src/styles/demo1.styl'
    ])
    .pipe(stylus())
    .pipe(concat('main-stylus.css'))
    .pipe(rename({suffix:'.min'})) 
    .pipe(gulp.dest('dist/css'));    
})

//es6编译为es5
gulp.task('compile-js',() => {
    return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/js'))
})


