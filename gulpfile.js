var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('jshint', function(){
    gulp.src("./app/**/*.js").pipe(jshint()).pipe(jshint.reporter("default"));
});

gulp.task('compile-dev', function(){
    gulp.src('app/src/main.js').pipe(browserify({
        debug: true,
    })).pipe(rename('app.js'))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('watch', function(){
    gulp.watch('app/**/*.js', ['jshint', 'compile-dev']);
});
