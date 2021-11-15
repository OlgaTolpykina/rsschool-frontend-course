/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/services/utils.js":
/*!**********************************!*\
  !*** ./src/js/services/utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPage": () => (/* binding */ ErrorPage)
/* harmony export */ });
var ErrorPage = {
  render: function render() {
    return "\n            <section>\n                <p>Page does not exist. Please check the path.</p>\n            </section>   \n        ";
  }
};


/***/ }),

/***/ "./src/js/views/components/BottomBar.js":
/*!**********************************************!*\
  !*** ./src/js/views/components/BottomBar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Bottombar = {
  render: function render() {
    return "\n            <div class=\"footer\">\n                <div class=\"footer-logo\"></div>\n                <div class=\"info\"> \n                    <a href=\"https://github.com/OlgaTolpykina\" target=\"_blank\">OlgaTolpykina</a>\n                    <span>2021</span>\n                </div>\n            </div>\n        ";
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bottombar);

/***/ }),

/***/ "./src/js/views/pages/Categories.js":
/*!******************************************!*\
  !*** ./src/js/views/pages/Categories.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CategoriesPage = {
  render: function render() {
    return "\n            <div>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432</div>\n        ";
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesPage);

/***/ }),

/***/ "./src/js/views/pages/Home.js":
/*!************************************!*\
  !*** ./src/js/views/pages/Home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HomePage = {
  render: function render() {
    return "\n            <div class=\"header\">\n            <div class=\"settings\"></div>\n            </div>\n            <div class=\"content\">\n                <div class=\"logo\"></div>\n                <div class=\"button-wrapper\">\n                    <button class=\"button artists-quiz\">Artist quiz</button>\n                    <button class=\"button picture-quiz\">Pictures quiz</button>\n                </div>\n            </div>\n        ";
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/js/views/pages/Settings.js":
/*!****************************************!*\
  !*** ./src/js/views/pages/Settings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SettingsPage = {
  render: function render() {
    return "";
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_views_pages_Categories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/views/pages/Categories.js */ "./src/js/views/pages/Categories.js");
/* harmony import */ var _js_views_pages_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/views/pages/Home.js */ "./src/js/views/pages/Home.js");
/* harmony import */ var _js_views_pages_Settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/views/pages/Settings.js */ "./src/js/views/pages/Settings.js");
/* harmony import */ var _js_services_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/services/utils.js */ "./src/js/services/utils.js");
/* harmony import */ var _js_views_components_BottomBar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/views/components/BottomBar.js */ "./src/js/views/components/BottomBar.js");





var routes = [{
  path: '/',
  page: _js_views_pages_Home_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/categories',
  page: _js_views_pages_Categories_js__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/settings',
  page: _js_views_pages_Settings_js__WEBPACK_IMPORTED_MODULE_2__["default"]
}];

var router = function router() {
  var path = parseLocation();

  if (path !== '/') {
    document.querySelector('.application').style.backgroundImage = 'none';
  }

  var _ref = findPageByPath(path, routes) || {},
      _ref$page = _ref.page,
      page = _ref$page === void 0 ? _js_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.ErrorPage : _ref$page;

  document.querySelector('.application').innerHTML = page.render();
  document.querySelector('.application').innerHTML += _js_views_components_BottomBar_js__WEBPACK_IMPORTED_MODULE_4__["default"].render();
};

var parseLocation = function parseLocation() {
  return location.hash.slice(1).toLowerCase() || '/';
};

var findPageByPath = function findPageByPath(path, routes) {
  return routes.find(function (r) {
    return r.path.match(new RegExp("^\\".concat(path, "$"), 'gm'));
  }) || undefined;
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map