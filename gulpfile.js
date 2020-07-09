const gulp = require('gulp');
const clean = require('gulp-clean');
const ext_replace = require('gulp-ext-replace');
const sass = require('gulp-sass');
const bump = require('gulp-bump');

const paths = {
  dist: './dist',
  dve: './dev/src/ion2-calendar',
  src: './src',
};

gulp.task('copy-sources', copySources);
gulp.task('copy-scss', copyScss);
gulp.task('clean-scss', cleanScss);
gulp.task('rename-scss', renameCss);
gulp.task('bump', bumpVersions);

function bumpVersions(options) {
  return gulp
    .src(['./package.json'], { base: './' })
    .pipe(bump(options))
    .pipe(gulp.dest('./'));
}

async function copySources() {
  gulp.src(`${paths.dve}/**/*`).pipe(gulp.dest(paths.src));
}

async function copyScss() {
  return gulp
    .src(`${paths.dve}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.src));
}

async function cleanScss() {
  return gulp.src(`${paths.src}/**/*.css`, { read: false }).pipe(clean());
}

async function renameCss() {
  return gulp
    .src(`${paths.src}/**/*.css`)
    .pipe(ext_replace('.scss'))
    .pipe(gulp.dest(paths.src));
}
