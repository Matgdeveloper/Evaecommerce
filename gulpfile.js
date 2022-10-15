const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function compilaSass(){
    return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoPrefixer({
        overrideBrowsersList: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

gulp.task('sass', compilaSass);

function pluginsCss(){
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
}

gulp.task('plugincss', pluginsCss);

function gulpJs(){
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('alljs', gulpJs);

function pluginsJs(){
    return gulp
    .src(['./js/lib/aos.min.js', './js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('pluginsjs', pluginsJs);

function browser(){
    browserSync.init({
        server : {
            baseDir: './'
        }
    })
}

gulp.task('browser-sync',browser);

function watch(){
    gulp.watch('scss/*.scss', compilaSass);

    gulp.watch('css/lib/*.css', pluginsCss);

    gulp.watch('*.html').on('change', browserSync.reload);

    gulp.watch('js/scripts/*js', gulpJs);

    gulp.watch('js/lib/*.js', pluginsJs);
}

gulp.task('watch', watch );

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'plugincss', 'alljs', 'pluginsjs'));