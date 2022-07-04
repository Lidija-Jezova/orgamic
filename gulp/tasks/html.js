const html = () => {
	return $.gulp.src($.path.html.src)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(err => ({
				title: "HTML",
				message: err.message
			}))
		}))
		.pipe($.gp.fileInclude())
		.pipe($.gp.webpHtml())
		.pipe($.gp.size())
		.pipe($.gp.htmlmin($.app.htmlmin))
		.pipe($.gp.size())
		.pipe($.gulp.dest($.path.html.dest))
		.pipe($.browserSync.stream());
}

// modele.exports instead of exports for exporting a single function
export default html;