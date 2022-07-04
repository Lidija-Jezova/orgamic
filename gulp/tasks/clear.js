// plugins
import del from "del";

const clear = (() => {
	return del($.path.destPath);
})

export default clear;