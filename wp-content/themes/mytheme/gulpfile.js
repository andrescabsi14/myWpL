var gulp   = require('gulp');
var less = require('gulp-less');
var combineCSS = require('combine-css');
var sourcemaps = require('gulp-sourcemaps');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 5 versions"] });


gulp.task('compile', function(){
	return gulp.src('css/less/*.less')
		.pipe(less({
			plugins: [autoprefix, cleancss]
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css/less'));
});

gulp.task('combine', function() {
	gulp.src('css/less/*.css')
		.pipe(combineCSS())
		.pipe(gulp.dest('css/'));
});


gulp.task('watch', function () {
	gulp.watch('css/less/*.less', ['compile']);
	gulp.watch('css/less/*.css', ['combine']);
});

gulp.task('default');