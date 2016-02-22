var gulp = require('gulp');
var plugins = require("gulp-load-plugins")();
var license_opts = {tiny: false, organization: 'Oasiswork'};

gulp.task("less", function() {
    gulp.src([
        'less/*.less'
    ])
    .pipe(plugins.less())
    .pipe(plugins.concat('toothpick.commons.css'))
    .pipe(gulp.dest('./dist'));

    gulp.src([
        'less/*.less'
    ])
    .pipe(plugins.concat('toothpick.commons.less'))
    .pipe(gulp.dest('./dist'));
});

gulp.task("minify", function() {
    gulp.src([
        'css/toothpick.global.css',
        'dist/toothpick.commons.css'
    ])
    .pipe(plugins.concat('toothpick.min.css'))
    .pipe(plugins.cssnano())
    .pipe(gulp.dest('./'));
});

gulp.task('default', [
    'less', 'minify'
]);
