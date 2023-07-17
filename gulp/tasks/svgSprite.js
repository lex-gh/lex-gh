import svgSprite from "gulp-svg-sprite";

export const svgIcon = () => {
  return app.gulp
    .src(app.path.src.svgicons, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SVG",
          message: "Error: <%= error.message %>",
        }),
      ),
    )
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite/icon.svg",
          },
        },
      }),
    )
    .pipe(app.gulp.dest(app.path.build.images));
};
