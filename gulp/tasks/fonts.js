const fonts = () => {
	return $.gulp.src($.path.fonts.src)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(err => ({
				title: "FONTS",
				message: err.message
			}))
		}))
		.pipe($.gp.newer($.path.fonts.dest))
		.pipe($.gp.fonter($.app.fonter))
		.pipe($.gulp.dest($.path.fonts.dest))
		.pipe($.gulp.src(`${$.path.fonts.dest}*.ttf`))
		.pipe($.gp.ttf2woff2())
		.pipe($.gulp.dest($.path.fonts.dest));
}

export default fonts;