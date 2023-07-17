import gulp from "gulp";
import { path } from "./gulp/config/path.js";

import { plugins } from "./gulp/config/plugins.js";
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins,
};

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { svgIcon } from "./gulp/tasks/svgSprite.js";
import { otfToTtf, ttfToWoff, fontsToStyle } from "./gulp/tasks/fonts.js";

import { zip } from "./gulp/tasks/zip.js";
import { server } from "./gulp/tasks/server.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

export { svgIcon };
// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsToStyle);
// Основные задачи
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images, svgIcon),
);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

// Экспорт сценариев

export { dev, build, deployZIP };

gulp.task("default", dev);
