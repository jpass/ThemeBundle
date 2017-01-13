var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
    return sass('Resources/public/assets/sass/**/*.sass')
        .pipe(gulp.dest('Resources/public/assets/css/dist'))
});

gulp.task('watch', function(){
    return gulp.watch('Resources/public/assets/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass']);
