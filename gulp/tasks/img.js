const img = () => {
	return $.gulp.src($.path.img.src)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(err => ({
				title: "IMAGES",
				message: err.message
			}))
		}))
		.pipe($.gp.newer($.path.img.dest))
		.pipe($.gp.webp())
		.pipe($.gulp.dest($.path.img.dest))
		.pipe($.gulp.src($.path.img.src))
		.pipe($.gp.if($.app.isProd, $.gp.imagemin($.app.imagemin)))
		.pipe($.gulp.dest($.path.img.dest))
}

export default img;