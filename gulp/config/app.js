const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
	isProd: isProd,
	isDev: isDev,

	fonter: {
		formats: ["ttf", "woff", "eot"]
	},
	htmlmin: {
		collapseWhitespace: isProd
	},
	imagemin: {
		verbose: true
	},
	webpack: {
		mode: isProd ? "production" : "development",
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ["style-loader", "css-loader"],
				},
			],
		}
	},
	webpCss: {
		webpClass: ".webp",
		noWebpClass: ".no-webp"
	},
}