const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

// Task to compile Sass to CSS
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('docs/css'))
        .pipe(browserSync.stream());
});

// Task to compile JavaScript
gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('docs/js'))
        .pipe(browserSync.stream());
});

// Task to compile Pug to HTML
gulp.task('pug', function () {
    return gulp.src('src/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('docs'))
        .pipe(browserSync.stream());
});

// Task to copy images from src to docs
gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('docs/images'));
});

// Task to copy fonts from src to docs
gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('docs/fonts'));
});

// Task to reload the page when HTML files change
gulp.task('html', function (done) {
    browserSync.reload();
    done();
});

// Task to watch for changes in Sass, JavaScript, HTML, images, and fonts
gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './docs'
        }
    });

    gulp.watch('src/**/*.scss', gulp.series('sass'));
    gulp.watch('src/**/*.js', gulp.series('js'));
    gulp.watch('src/**/*.pug', gulp.series('pug', 'html'));
    gulp.watch('src/images/**/*', gulp.series('images'));
    gulp.watch('src/fonts/**/*', gulp.series('fonts'));
});

// Default task
gulp.task('default', gulp.parallel('sass', 'js', 'pug', 'images', 'fonts', 'watch'));
