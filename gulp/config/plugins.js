import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // обработка ошибок
import notify from "gulp-notify"; // Сообщения
import browserSync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; //Проверка обновлений
import ifPlugin from "gulp-if";

export const plugins = {
  replace,
  plumber,
  notify,
  browserSync,
  newer,
  if: ifPlugin,
};
