const server = () => {
	$.browserSync.init({
		server: {
			// in this directory server will be executed
			baseDir: $.path.html.dest
		}
	});
}

export default server;