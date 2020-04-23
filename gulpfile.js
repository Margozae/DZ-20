const gulp = require('gulp');
const gulpSass = require('gulp-sass');
var clean = require('gulp-clean');
var webserver = require('gulp-webserver');
const babel = require('gulp-babel');

const cssFile = './style.scss';
const jsFile = './index.js';
const htmlFile = './index.html';

gulp.task('css', (done) => {
    gulp.src(cssFile)
        .pipe(gulpSass({
            "presets": ["@babel/preset-env"]
        }))
        .pipe(gulp.dest('./build/dist'))
    done();
});

gulp.task('html', (done) => {
    gulp.src(htmlFile)
        .pipe(gulp.dest('./build'))
    done();
});

gulp.task('js', (done) => {
    gulp.src(jsFile)
        .pipe(babel())
        .pipe(gulp.dest('./build/dist'))
    done();
});

gulp.task('clean', (done) => {
    gulp.src('./dist/*')
        .pipe(clean());
    done();
});

gulp.task('webserver', () => {
    gulp.src('build')
        .pipe(webserver({
            port: 8000,
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: '../index.html'
        }));
    gulp.watch(htmlFile, gulp.series('html'))
    gulp.watch(cssFile, gulp.series('css'))
    gulp.watch(jsFile, gulp.series('js'))
});

gulp.task('refresh', () => {
    webserver.reload();
})

gulp.task('default', gulp.series('clean', 'html', 'js', 'css', 'webserver'));

