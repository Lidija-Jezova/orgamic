// plugins
import webpack from "webpack-stream";

const js = () => {
	return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(err => ({
				title: "JS",
				message: err.message
			}))
		}))
		.pipe($.gp.babel())
		.pipe(webpack($.app.webpack))
		.pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
		.pipe($.browserSync.stream());
}
export default js;