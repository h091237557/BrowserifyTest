var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpFilter = require('gulp-filter');
var rimraf = require('rimraf');
var mainBowerFiles = require('main-bower-files');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var js_dest_path = 'assets/lib/js';

var jsFilter = gulpFilter('*.js');

gulp.task('clean',function(){
	rimraf('./dist/lib',function(){});
});

gulp.task('bower',function(){
	var mainFiles = mainBowerFiles();
	gutil.log(mainFiles);
	return gulp.src(mainFiles,{base:'./bower_components'})
		.pipe(gulp.dest('./dist/lib'));
});

gulp.task('browserify',function(){
	return browserify('src/app.js')
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('public/'));

});
