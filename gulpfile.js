var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css');

// gulp.task('default', function() {
// 	console.log("I'm running Gulp!")
// });
//TASK WILL USE TO RUN ANY SORT OF SCRIPT METHODS
gulp.task('scripts', function () {
	//SPECIFY FILE TO ACT ON USING SRC METHOD

	gulp.src('js/*.js')
	//WHATEVER OUTPUTTED FROM SRC METHOD WILL BE PUT INTO THE PIPE METHOD		
		.pipe(uglify())
	//WHATEVER OUTPUTTED FROM UGLIFY WILL BE PUT INTO THE PIPE-RENAME METHOD
		.pipe(rename('app.min.js'))
	//WHATEVER OUTPUTTED FROM THE RENAME FILE WILL HAVE A DESTINATION OF THE JS FOLDER
		.pipe(gulp.dest('dist/js/'));
})

gulp.task('styles', function() {
	//SPECIFY A SOURCE
	gulp.src('css/*.css')
	//WHATEVER OUTPUTTED FROM SRC METHOD WILL BE PIPED INTO THE CLEANCSS PLUGIN METHOD
	//CLEAN CSS HAS REPLACED MINIFY CSS PLUGIN
		.pipe(cleanCSS())
	//WHATEVER OUTPUTTED FROM CLEANCSS PLUGIN NEEDS A DESTINATION, PUT IT IN A MINCSS FOLDER
		.pipe(gulp.dest('dist/css/'));

})

gulp.task('watch', function () {
	//GULP WATCH: MUST LIST WHAT FILES YOU WANT TO WATCH & WHAT TASKS YOU WANT TO EXECUTE WHEN THAT FILE CHANGES
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.css', ['styles']);
})

//WHEN RUN 'GULP' IN COMMAND LINE, IT WILL RUN ALL THREE GULP TASKS, AND THEN WILL IDLE, WAITING (OR WATCHING)
//FOR THE NEXT THING TO HAPPEN
//USE PLUG-IN CALLED GULP-PLUMBER SO THAT PIPE DOESN'T BREAK WHEN THERE'S AN ERROR
gulp.task('default', ['scripts', 'styles', 'watch']);


