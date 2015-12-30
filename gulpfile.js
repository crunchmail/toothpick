var gulp = require('gulp');
var plugins = require("gulp-load-plugins")();
var license_opts = {tiny: false, organization: 'Oasiswork'};

gulp.task("minify", function() {
    gulp.src('toothpick.css')
    .pipe(plugins.cssnano())
    .pipe(plugins.license('MPL', license_opts))
    .pipe(plugins.rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', [
    'minify'
]);
