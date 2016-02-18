var gulp = require('gulp');
var plugins = require("gulp-load-plugins")();
var license_opts = {tiny: false, organization: 'Oasiswork'};

gulp.task("minify", function() {
    gulp.src([
        'toothpick.css',
        'toothpick.layout.css',
        'toothpick.typo.css'
    ])
    .pipe(plugins.concat('toothpick.min.css'))
    .pipe(plugins.cssnano())
    .pipe(gulp.dest('./'));
});

gulp.task('default', [
    'minify'
]);
