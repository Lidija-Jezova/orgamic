// plugins
const gp = require("gulp-load-plugins")();
const sass = require('gulp-sass')(require('sass'));

const scss = () => {
	return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev })
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(err => ({
				title: "SCSS",
				message: err.message
			}))
		}))
		.pipe($.gp.sassGlob())
		.pipe(sass())
		.pipe($.gp.autoprefixer())
		.pipe($.gp.shorthand())
		.pipe($.gp.groupCssMediaQueries())
		.pipe($.gp.webpcss($.app.webpCss))
		.pipe($.gp.size({ title: "main.css" }))
		.pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
		.pipe($.gp.cleanCss())
		.pipe($.gp.rename({
			suffix: ".min"
		}))
		.pipe($.gp.size({ title: "main.min.css" }))
		.pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
		.pipe($.browserSync.stream());
}

export default scss;