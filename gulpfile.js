var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect-multi')();

//templates
gulp.task('templates', function(){
    gulp.src('./dev/*.html')
        //.pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./site'))
});

//styles
gulp.task('styles', function(){
    gulp.src('./dev/sass/style.sass')
        .pipe(sass({
            outputStyle: 'compressed'
            }))
    .pipe(prefix('last 12 version'))
    .pipe(gulp.dest('./site'))
});

//scripts
gulp.task('scripts', function(){
    return gulp.src(['./node_modules/jquery/dist/jquery.js', './dev/js/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./site'))
});

//images
gulp.task('images', function(){
    gulp.src('./dev/images/*/*')
        .pipe(gulp.dest('./site/images'))
});

//watch
gulp.task('watch', function () {
    gulp.watch('./dev/*.html', ['templates']);
    gulp.watch('./dev/sass/style.sass', ['styles']);
    gulp.watch('./dev/js/*.js', ['scripts']);
    gulp.watch('images/*.{jpg, png, svg}', ['images']);
});

gulp.task('default', ['templates','styles', 'scripts', 'images']);

gulp.task('dev', ['default', 'watch']);
