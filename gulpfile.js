var gulp = require('gulp');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

gulp.task('default', function(){
	return gulp.src(['./css/normalize.css', './css/maingreen.css'])
		.pipe(concat('bundle.css'))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(cssnano())
		.pipe(gulp.dest('./builds/'));
});
