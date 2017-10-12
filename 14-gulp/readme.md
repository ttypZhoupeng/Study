### Gulp
用自动化构建工具增强你的工作流程！

>工作流程
* HTML,CSS,JS
* HTML5,CSS3,ES6,ES7,ES8
* NodeJS,Angular,Less,Sass,Vue,React
* 通过类似webstorm的IDE，实时自动编译
    
>构建工具
* 帮我们把less,sass,stylus实时编译成css
* 帮我们把ES6,ES7,ES8实时编译成ES5,ES3
* 帮我们压缩文件，合并文件，整理文件
* 提供一个实时同步的服务器

>自动化（通过流水线）
* 写入一个gulpfile.js文件
* 通过命令gulp 启动

#### gulp安装

>第一步：全局安装gulp

cnpm i -g gulp

>第二步： 本地安装环境

cnpm i -D gulp

## -S -D区别
-S就是--save的简写，就像npm默认一个start的字段，你可以不必输入npm run start ，而只需输入npm start, 这两个效果是一样 的
-D就是--save-dev这样安装的包的名称及版本号就会存在package.json的devDependencies这个里面，而--save会将包的名称及版本号放在dependenciesl里面

### gulp api

gulp.src 匹配到一个路径下面的一个或多个文件

gulp.dest : 写入文件，输出到哪里，如果输出地址不存在，则自动创建一个

#### 实时监听index.html变化
安装gulp-connect
cnpm i -D gulp-connect
[文档](https://www.npmjs.com/package/gulp-connect)


#### 压缩index.html文件
安装gulp-htmlmin
cnpm i -D gulp-htmlmin
[文档](https://www.npmjs.com/package/gulp-htmlmin)


****
**下面是css部分**


#### less编译
模块安装
cnpm i -D gulp-less
[文档](https://www.npmjs.com/package/gulp-less)

#### css兼容处理
安装less-plugin-autoprefix
cnpm i -D less-plugin-autoprefix

第一个是导入模块，第二个是兼容的版本
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers : ['last 10 versions']});

放入less()
.pipe(less({plugins:[autoprefix]}))

#### css压缩改名
cnpm i -D gulp-cssmin
[文档](https://www.npmjs.com/package/gulp-cssmin)
```
gulp.task('less',()=>{
    return gulp.src('src/styles/*.less')
    .pipe(less({plugins: [autoprefix]}))
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/css'));
});
```

#### 删除多余文件
cnpm i -D del

引入
del = require('del)

```
gulp.task('clear',() => {
    del(['dist/*']);
})
```
放入默认任务之前

#### 合并文件（当文件需要合并的时候使用，有先后顺序）
cnpm i -D gulp-concat
[文档](https://www.npmjs.com/package/gulp-concat)

//编辑less文件并压缩，放入生产环境
```
gulp.task('less', () => {
	return gulp.src('src/styles/*.less')
		.pipe(less({plugins: [autoprefix]}))
		.pipe(cssmin())
//      .pipe(rename({suffix: '.min'}))
        .pipe(concat('main.min.css'))
		.pipe(gulp.dest('dist/css'));
});
```

处理HTML：
    监听对应文件，实时编译
    开始一个服务器，实时预览
    压缩文件
    拷贝文件到指定目录
    
处理CSS：
    less,sass,stylus文件实时编译
    css文件



