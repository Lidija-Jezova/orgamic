const html = () => {
	return $.gulp.src($.path.html.src)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(err => ({
				title: "HTML",
				message: err.message
			}))
		}))
		.pipe($.gp.fileInclude())
		.pipe($.gp.webpHtmlNosvg())
		.pipe($.gp.size())
		.pipe($.gp.htmlmin($.app.htmlmin))
		.pipe($.gp.size())
		.pipe($.gulp.dest($.path.html.dest))
		.pipe($.browserSync.stream());
}

export default html;