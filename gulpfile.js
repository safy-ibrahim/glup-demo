const { src, dest } = require("gulp");

const htmlmin = require("gulp-html-minifier-terser");
function htmlTask() {
  return src("project/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

exports.html = htmlTask;

const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
function cssTask() {
  return src("project/**/*.css")
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(dest("dist"));
}

exports.css = cssTask;

const terser = require("gulp-terser");
function jsTask() {
  return src("project/js/**/*.js",)
    .pipe(concat("script.min.js"))
    .pipe(terser())
    .pipe(dest("dist/js"));
}

exports.js = jsTask;
const optimizeImages = require("gulp-optimize-images");
function imgTask() {
  return src("project/pics/*")
    .pipe(
      optimizeImages({
        compressOptions: {
          jpeg: {
            quality: 50,
            progressive: true,
          },
          png: {
            quality: 90,
            progressive: true,
            compressionLevel: 6,
          },
          webp: {
            quality: 80,
          },
        },
      })
    )
    .pipe(dest("dist/assets/images"));
}
exports.img = imgTask;
