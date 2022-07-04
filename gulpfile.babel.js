// plugins
import gulp from "gulp";
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from "browser-sync";
// config files
import app from "./gulp/config/app.js";
import path from "./gulp/config/path.js";

global.$ = {
	gulp: gulp,
	gp: gulpLoadPlugins(),
	browserSync: browserSync,
	app: app,
	path: path
}

import clear from "./gulp/tasks/clear.js";
import html from "./gulp/tasks/html.js";
import scss from "./gulp/tasks/scss.js";
import js from "./gulp/tasks/js.js";
import img from "./gulp/tasks/img.js";
import fonts from "./gulp/tasks/fonts.js";
import server from "./gulp/tasks/server.js";

// watching files
const watcher = () => {
	gulp.watch(path.html.watch, html);
	gulp.watch(path.scss.watch, scss);
	gulp.watch(path.js.watch, js);
	gulp.watch(path.img.watch, img);
	gulp.watch(path.fonts.watch, fonts);
}

const mainTasks = gulp.parallel(html, scss, js, img, fonts);

const build = gulp.series(
	clear,
	mainTasks
);

const dev = gulp.series(
	build,
	gulp.parallel(watcher, server)
);

// assembly
export default app.isProd ? build : dev;