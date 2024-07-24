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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DynamicLoader {\n  constructor(containerId = \"content\") {\n    this.contentContainer = document.getElementById(containerId);\n    this.cache = {};\n    this.initialize();\n  }\n  initialize() {\n    const navLinks = document.querySelectorAll(\".nav-link\");\n    navLinks.forEach(link => {\n      const url = link.href;\n      this.fetchContent(url);\n    });\n    navLinks.forEach(link => {\n      link.addEventListener(\"click\", event => {\n        event.preventDefault();\n        const url = event.target.href;\n        this.loadContent(url);\n      });\n    });\n    window.addEventListener(\"popstate\", event => {\n      if (event.state && event.state.path) {\n        this.loadContent(event.state.path, false);\n      }\n    });\n  }\n  async fetchContent(url) {\n    if (!this.cache[url]) {\n      try {\n        const response = await fetch(url);\n        if (!response.ok) throw new Error(`Failed to fetch ${url}`);\n        const data = await response.text();\n        const parser = new DOMParser();\n        const newDocument = parser.parseFromString(data, \"text/html\");\n        const newContent = newDocument.getElementById(\"content\").innerHTML;\n        this.cache[url] = newContent;\n      } catch (error) {\n        console.error('Error preloading page:', error);\n      }\n    }\n  }\n  async loadContent(url, pushState = true) {\n    if (this.cache[url]) {\n      this.updateContent(this.cache[url], url, pushState);\n    } else {\n      try {\n        await this.fetchContent(url);\n        this.updateContent(this.cache[url], url, pushState);\n      } catch (error) {\n        this.showError(`Failed to load content: ${error.message}`);\n      }\n    }\n  }\n  updateContent(content, url, pushState) {\n    this.contentContainer.style.opacity = 0;\n    setTimeout(() => {\n      this.contentContainer.innerHTML = content;\n      this.contentContainer.style.opacity = 1;\n    }, 300);\n    if (pushState) {\n      history.pushState({\n        path: url\n      }, '', url);\n    }\n  }\n  showError(message) {\n    this.contentContainer.innerHTML = `<div class=\"error\">${message}</div>`;\n    this.contentContainer.style.opacity = 1;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicLoader);\n\n//# sourceURL=webpack://DynamicLoader/./src/index.js?");

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