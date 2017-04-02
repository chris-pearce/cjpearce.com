var gulp = require('gulp');
var gutil = require('gulp-util');
var atImport = require('postcss-import');


// Load plugins
var plugins = require('gulp-load-plugins')({
    pattern: [
        'gulp-*',
        'gulp.*',
        'autoprefixer'
    ]
});


// Source and destination paths for tasks
var path = {
    src: 'src',
    dest: 'dist',
    npm: 'node_modules',
};


// Process CSS
gulp.task('styles', function() {

    var postcssplugins = [
        atImport(),
        //plugins.autoprefixer()
    ];

    return  gulp.src(path.src + '/assets/css/style.css')
            .pipe(plugins.postcss(postcssplugins))
            // Write style.css
            .pipe(gulp.dest(path.dest + '/assets/css'))
            // Report file size
            .pipe(plugins.size({ showFiles: true }));
            // Minify style.css and rename it to 'style.min.css':
            //.pipe(plugins.cssnano())
            //.pipe(plugins.rename({ suffix: '.min' }))
            //.pipe(plugins.size({ showFiles: true }))
            //.pipe(gulp.dest(path.dest + '/assets/css'))
            //.pipe(plugins.gzip())
            //.pipe(plugins.rename('style.min.gz.css'))
            //.pipe(plugins.size({ showFiles: true }))
            //.pipe(gulp.dest(path.dest + '/styles'))
            //.pipe(plugins.browserSync.stream())
            //.on('error', gutil.log);
});
