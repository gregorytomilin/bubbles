'use strict';
const { src, dest, task, series, watch } = require("gulp");
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');
const svgSprite = require('gulp-svg-sprite');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');




task('icons', () => {
    return src('./img/icons/svg/*.svg')
        // minify svg
        .pipe(svgmin({ js2svg: { pretty: true } }))
        // replace spaces with hyphens, get rid of the "-icon" postfix
        .pipe(rename(function (path) {
            path.basename = path.basename
                .replace(/\s/g, '-')
                .replace(/-icon/, '');
        }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    dest: '',
                    example: true,
                    sprite: 'vector-icons.min.svg'
                },
                inline: false
            }
        }))
        .pipe(dest('./img/icons/'))
    // .pipe(browserSync.reload({stream: true}));
});



task('sass', () => {
    return src('css/scss/**/*.scss') // берём все sass-файлы
        .pipe(sass({
            outputStyle: 'expanded',  // вложенный (по умoлчанию)
        }).on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(dest('./css'));      // выгружаем результат
});

task('js', () => {
    return src('js/modules/*.js') // берём все js-файлы
        .pipe(concat('main.js'))
        .pipe(dest('./js'));      // выгружаем результат
});



task('watch', ()=>{
    watch(['css/scss/*.scss'], series('sass'));
    watch(['js/modules/*.js'], series('js'));
})
// task('watch', ()=>{
//     return 
// })
