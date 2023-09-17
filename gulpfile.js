import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import concat from "gulp-concat";
import minify from "gulp-minify";
import cleanCSS from "gulp-clean-css";
import clean from "gulp-clean";
import browserSync from "browser-sync";
import imagemin from 'gulp-imagemin';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

const html = () => {
  return gulp.src('./src/*html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))

}
gulp.task(`html`, html)


const js = () => {
  return gulp.src(`./src/scripts/**/*.js`)
    .pipe(concat('all.js'))
    .pipe(minify({
      ext: {
        src: '.js',
        min: 'min.js'
      }
    }))
    .pipe(gulp.dest('./dist/scripts'))
}

gulp.task("js", js)

const css = () => {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist/styl'))

}
gulp.task(`css`, css);



const clearDist = () => {
  return gulp.src("./dist", { read: false })
    .pipe(clean())
}

const watch = () => {
  gulp.watch(`./src/*html`, html).on('all', browserSync.reload);
  gulp.watch(`./src/**/*.{scss,css,sass}`, css).on('all', browserSync.reload);
  gulp.watch(`./src/scripts/**/*.js`, js).on('all', browserSync.reload);
}

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    notify: false,
  });
}

const image = () => {
  return gulp.src('src/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}

gulp.task(`clearDist`, clearDist);
gulp.task(`server`, server)
gulp.task(`image`, image)
gulp.task("build", gulp.series(clearDist, gulp.parallel(html, css, js, image)))

gulp.task(`dev`, gulp.series(
  gulp.parallel(html, css, js, image),
  gulp.parallel(server, watch)))