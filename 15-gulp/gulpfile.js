let gulp     = require('gulp'),
    imagemin = require('gulp-imagemin')

gulp.task('default', () =>{
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'))
})