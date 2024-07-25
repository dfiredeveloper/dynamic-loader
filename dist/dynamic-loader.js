/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DynamicLoader", [], factory);
	else if(typeof exports === 'object')
		exports["DynamicLoader"] = factory();
	else
		root["DynamicLoader"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DynamicLoader {\n  constructor(containerId = \"content\") {\n    this.contentContainer = document.getElementById(containerId);\n    this.cache = {};\n    this.initialize();\n  }\n  initialize() {\n    const navLinks = document.querySelectorAll(\".nav-link\");\n\n    // Preload all linked pages\n    navLinks.forEach(link => {\n      const url = link.href;\n      this.preloadContent(url);\n    });\n\n    // Set up click event listeners\n    navLinks.forEach(link => {\n      link.addEventListener(\"click\", event => {\n        event.preventDefault();\n        const url = event.target.href;\n        this.loadContent(url);\n      });\n    });\n\n    // Handle browser back/forward navigation\n    window.addEventListener(\"popstate\", event => {\n      if (event.state && event.state.path) {\n        this.loadContent(event.state.path, false);\n      }\n    });\n  }\n  async preloadContent(url) {\n    if (!this.cache[url]) {\n      try {\n        const response = await fetch(url, {\n          cache: \"force-cache\"\n        });\n        if (!response.ok) throw new Error(`Failed to fetch ${url}`);\n        const data = await response.text();\n        const parser = new DOMParser();\n        const newDocument = parser.parseFromString(data, \"text/html\");\n        const newContent = newDocument.getElementById(\"content\").innerHTML;\n        this.cache[url] = newContent;\n      } catch (error) {\n        console.error('Error preloading page:', error);\n      }\n    }\n  }\n  loadContent(url, pushState = true) {\n    if (this.cache[url]) {\n      this.updateContent(this.cache[url], url, pushState);\n    } else {\n      this.showError(`Content for ${url} is not cached`);\n    }\n  }\n  updateContent(content, url, pushState) {\n    this.contentContainer.innerHTML = content;\n    if (pushState) {\n      try {\n        history.pushState({\n          path: url\n        }, '', url);\n      } catch (error) {\n        console.error('Failed to push state:', error);\n      }\n    }\n  }\n  showError(message) {\n    this.contentContainer.innerHTML = `<div class=\"error\">${message}</div>`;\n  }\n}\n\n// Polyfill for fetch in older browsers\n(function () {\n  if (!window.fetch) {\n    console.log('Fetch API not found, adding polyfill');\n    var script = document.createElement('script');\n    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.4/fetch.min.js';\n    document.head.appendChild(script);\n  }\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicLoader);\n\n//# sourceURL=webpack://DynamicLoader/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});