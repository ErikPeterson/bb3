var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');

gulp.task('jshint', function(){
    gulp.src("./app/**/*.js").pipe(jshint()).pipe(jshint.reporter("default"));
});

gulp.task('compile-dev', function(){
    gulp.src('app/src/main.js').pipe(broswerify({
        debug: true
    }));
});

gulp.task('watch', function(){
    gulp.watch('app/**/*.js', ['jshint']);
});
