// Импорт пакетов
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const newer = require('gulp-newer');
const browsersync = require('browser-sync').create();
const del = require('del');
const sitemapGulp = require('gulp-sitemap');

// Пути исходных файлов src и пути к результирующим файлам dest
const paths = {
  html: {
    src: ['src/*.html'],
    dest: 'dist/'
  },
  allHTML: {
    src: ['src/page/**/*.html'],
    dest: 'dist/page/'
  },
  styles: {
    src: ['src/scss/**/*.sass', 'src/scss/**/*.scss', 'src/scss/**/*.css'],
    dest: 'dist/css/'
  },
  scripts: {
    src: ['src/scripts/*.js'],
    dest: 'dist/js/'
  },
  libsScripts: {
    src: ['src/scripts/libs/*.js'],
    dest: 'dist/js/libs'
  },
  mainScripts: {
    src: 'src/scripts/main/*.js',
    dest: 'dist/js/main'
  },
  images: {
    src: 'src/img/**',
    dest: 'dist/img/'
  },
  fonts: {
    src: 'src/fonts/**',
    dest: 'dist/fonts/'
  },
  sitemap: {
    src: 'src/**/*.html',
    dest: 'dist/sitemap/'
  },
  robots: {
    src: 'src/robots.txt',
    dest: 'dist/'
  }
}

// Очистить каталог dist, удалить все кроме изображений
function clean() {
  return del(['dist/*', '!dist/img'])
}

// HTML
function html() {
  return gulp.src(paths.html.src)
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.html.dest))
  .pipe(browsersync.stream())
}

// HTML
function allHTML() {
  return gulp.src(paths.allHTML.src)
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.allHTML.dest))
  .pipe(browsersync.stream())
}

// SCSS
function styles() {
  return gulp.src(paths.styles.src)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(rename({
    basename: 'style',
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.styles.dest))
  .pipe(browsersync.stream())
}

// libs JS
function libsScripts() {
  return gulp.src(paths.libsScripts.src)
  .pipe(gulp.dest(paths.libsScripts.dest))
  .pipe(browsersync.stream())
}

// main JS (главная страница)
function mainScripts() {
  return gulp.src(paths.mainScripts.src)
  .pipe(gulp.dest(paths.mainScripts.dest))
  .pipe(browsersync.stream())
}

// JS
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(size({
      showFiles:true
    }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browsersync.stream())
}

// Сжатие изображений
function img() {
  return gulp.src(paths.images.src)
  .pipe(newer(paths.images.dest))
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.images.dest))
}

// fonts
function fonts() {
  return gulp.src(paths.fonts.src)
  .pipe(newer(paths.fonts.dest))
  .pipe(size({
    showFiles:true
  }))
  .pipe(gulp.dest(paths.fonts.dest))
}

// sitemap
function sitemap() {
  return gulp.src(paths.sitemap.src, {
    read: false
  })
    .pipe(sitemapGulp({
      siteUrl: 'https://db78.ru'
    }))
    .pipe(gulp.dest(paths.sitemap.dest))
}

// robots
function robots() {
  return gulp.src(paths.robots.src)
    .pipe(gulp.dest(paths.robots.dest))
}

// Отслеживание изменений в файлах и запуск лайв сервера
function watch() {
  browsersync.init({
    server: {
        baseDir: "./dist"
    }
  })
  gulp.watch(paths.html.dest).on('change', browsersync.reload)
  gulp.watch(paths.html.src, html)
  gulp.watch(paths.allHTML.src, allHTML)
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.scripts.src, scripts)
  gulp.watch(paths.libsScripts.src, libsScripts)
  gulp.watch(paths.mainScripts.src, mainScripts)
  gulp.watch(paths.images.src, img)
  gulp.watch(paths.fonts.src, fonts)
  gulp.watch(paths.sitemap.src, sitemap)
  gulp.watch(paths.robots.src, robots)
}

// Таски для ручного запуска с помощью gulp clean, gulp html и т.д.
exports.clean = clean
exports.html = html
exports.allHTML = allHTML
exports.styles = styles
exports.scripts = scripts
exports.libsScripts = libsScripts
exports.mainScripts = mainScripts
exports.img = img
exports.fonts = fonts
exports.watch = watch
exports.sitemap = sitemap
exports.robots = robots

// Задачи, которые выполняется по команде gulp
exports.default = gulp.series(clean, html, allHTML, gulp.parallel(styles, scripts, libsScripts, mainScripts, img, fonts), sitemap, robots, watch)
