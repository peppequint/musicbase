const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

sass.compiler = require("node-sass");

return gulp.src("./src/scss/*.scss").pipe(concat("index.scss")).pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./static/"));
