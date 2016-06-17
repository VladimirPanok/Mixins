var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var less = require('gulp-less')

gulp.task('missionZero', function(){
	connect.server({
		root:'build/',
		livereload: true
	});
});

gulp.task('less',function(){
	gulp.src('dev/less/general.less')
	.pipe(less())
	.pipe(gulp.dest('build/css/'));
})

gulp.task('default', function(){
	gulp.start('less');
})

	gulp.watch('dev/less/**/*.less', function(){
		gulp.start('less');
	})

