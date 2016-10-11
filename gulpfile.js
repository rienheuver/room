var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var gulp_concat = require('gulp-concat');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var folders = {
    jquery: './node_modules/jquery/dist/',
    jqueryui: './node_modules/jquery-ui/',
    bootstrap: './node_modules/bootstrap-sass/assets/javascripts/',
};

gulp.task('sass', function() {
    return sass('scss/main.scss')
        .pipe(gulp.dest('app/css'))
        .pipe(reload({ stream:true }));
});

gulp.task('js', function() {
    return gulp.src(['scripts/*.js'])
        .pipe(gulp_concat('app.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(reload({ stream:true }));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass','js'], function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('scripts/*.js', ['js']);
    gulp.watch("app/*.html").on("change", reload);
});
