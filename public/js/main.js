/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const isWebp = __webpack_require__(/*! ./modules/isWebp */ \"./src/js/modules/isWebp.js\");\r\n\n\n//# sourceURL=webpack://gulp_starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/isWebp.js":
/*!**********************************!*\
  !*** ./src/js/modules/isWebp.js ***!
  \**********************************/
/***/ (function(module) {

eval("// Проверка поддержки webp, добавление класса webp или no-webp для HTML\r\nconst isWebp = () => {\r\n\t// Проверка поддержки webp\r\n\tfunction testWebP(callback) {\r\n\r\n\t\tvar webP = new Image();\r\n\t\twebP.onload = webP.onerror = function () {\r\n\t\t\tcallback(webP.height == 2);\r\n\t\t};\r\n\t\twebP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n\t}\r\n\r\n\ttestWebP(function (support) {\r\n\r\n\t\tif (support == true) {\r\n\t\t\tdocument.querySelector('html').classList.add('webp');\r\n\t\t} else {\r\n\t\t\tdocument.querySelector('html').classList.add('no-webp');\r\n\t\t}\r\n\t});\r\n\r\n\tconsole.log(\"webppp\");\r\n}\r\n\r\nmodule.exports = isWebp;\n\n//# sourceURL=webpack://gulp_starter/./src/js/modules/isWebp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;