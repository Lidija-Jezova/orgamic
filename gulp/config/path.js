const srcPath = "./src";
const destPath = "./public";

export default {
	destPath: destPath,
	srcPath: srcPath,
	html: {
		src: `${srcPath}/html/*.html`,
		dest: `${destPath}/`,
		watch: `${srcPath}/**/*.html`,
	},
	scss: {
		src: `${srcPath}/scss/style.scss`,
		dest: `${destPath}/css/`,
		watch: `${srcPath}/scss/**/*.scss`,
	},
	js: {
		src: `${srcPath}/js/*.js`,
		dest: `${destPath}/js/`,
		watch: `${srcPath}/js/**/*.js`,
	},
	img: {
		src: `${srcPath}/img/**/*.{jpg,jpeg,png,gif,svg}`,
		dest: `${destPath}/img/`,
		watch: `${srcPath}/img/**/*.{jpg,jpeg,png,gif,svg}`,
	},
	fonts: {
		src: `${srcPath}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
		dest: `${destPath}/fonts/`,
		watch: `${srcPath}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
	}
}