import fileinclude from "gulp-file-include";
// import pug from "gulp-pug";
import webpHtmlNoSvg from "gulp-webp-html-nosvg";

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          }),
        ),
      )
      .pipe(fileinclude())
      // .pipe(
      //   pug({
      //     // сжатие файла
      //     pretty: true,
      //     verbode: true, // показ какой файл обработан
      //   }),
      // )
      .pipe(app.plugins.replace(/@img\//g, "img/"))
      .pipe(app.plugins.if(app.isBuild, webpHtmlNoSvg()))
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream())
  );
};
