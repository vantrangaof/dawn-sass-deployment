const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('styles/ako.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets'))
});

gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
})

// const { src, dest, watch } = require('gulp')
// const compileSass = require('gulp-sass');
// const { compile } = require('sass');

// compileSass.compiler = require('node-sass');

// const bundleSass = () => {
//     return src('./styles/*.scss')
//     .pipe(compileSass().toString('error', compileSass.logError))
//     .pipe(dest('./dist/static/css/'))
// }

// const devWatch = () => {
//     watch('./styles/**/*.scss', bundleSass)
// }

// exports.bundleSass = bundleSass
// exports.devWatch = devWatch
