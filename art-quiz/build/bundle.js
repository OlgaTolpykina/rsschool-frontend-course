/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/services/Router.js":
/*!***********************************!*\
  !*** ./src/js/services/Router.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleOnLoad": () => (/* binding */ handleOnLoad),
/* harmony export */   "handleClickRoute": () => (/* binding */ handleClickRoute)
/* harmony export */ });
/* harmony import */ var _views_pages_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/Home.js */ "./src/js/views/pages/Home.js");
/* harmony import */ var _views_pages_Categories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pages/Categories.js */ "./src/js/views/pages/Categories.js");
/* harmony import */ var _views_pages_Settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/Settings.js */ "./src/js/views/pages/Settings.js");
/* harmony import */ var _views_pages_ErrorPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/pages/ErrorPage.js */ "./src/js/views/pages/ErrorPage.js");
/* harmony import */ var _views_components_Bottombar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/components/Bottombar.js */ "./src/js/views/components/Bottombar.js");





var routes = [{
  id: 'home-route',
  path: '/',
  page: _views_pages_Home_js__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  id: 'categories-route',
  path: '/categories',
  page: _views_pages_Categories_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  id: 'settings-route',
  path: '/settings',
  page: _views_pages_Settings_js__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  id: 'error',
  path: '/error',
  page: _views_pages_ErrorPage_js__WEBPACK_IMPORTED_MODULE_3__["default"]
}];

var parseLocation = function parseLocation() {
  return location.hash.slice(1).toLowerCase() || '/';
};

var findPageByPath = function findPageByPath(path, routes) {
  return routes.find(function (r) {
    return r.path.match(new RegExp("^\\".concat(path, "$"), 'gm'));
  }) || undefined;
};

var handleOnLoad = function handleOnLoad() {
  var path = parseLocation();

  var _ref = findPageByPath(path, routes) || {},
      _ref$page = _ref.page,
      page = _ref$page === void 0 ? _views_pages_ErrorPage_js__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref$page;

  document.querySelector('.application').innerHTML = page.render();
  document.querySelector('.application').innerHTML += _views_components_Bottombar_js__WEBPACK_IMPORTED_MODULE_4__["default"].render();
};

function handleClickRoute(event) {
  var id = event.target.className.split(" ");

  for (var i = 0; i < routes.length; i++) {
    if (id.includes(routes[i].id)) {
      console.log(i);
      window.location.href = "".concat(window.location.href.replace(/#(.*)$/, ''), "#").concat(routes[i].path);
    }
  } // for (let i = 0; i < routes.length; i++) {
  //   if (routes[i].id === id) {
  //     const template = routes[i].page();
  //     historyMethods.push(routes[i].path);
  //     render(template, document.querySelector(".application"));
  //     return;
  //   }
  // }
  // pageNotFound();

}


/*
import { render, pageNotFound } from './Utils.js';
import HomePage from "../views/pages/Home.js";
import CategoriesPage from "../views/pages/Categories.js";
import SettingsPage from "../views/pages/Settings.js";
import ErrorPage from "../views/pages/ErrorPage.js";

let pathList = [];

const routes = [
    {
      id: 'home',
      path: '/',
      page: HomePage,  
    },
    {
      id: 'categories',
      path: '/categories',
      page: CategoriesPage,  
    },
    {
      id: 'settings',
      path: '/settings',
      page: SettingsPage,  
    },
    {
      id: 'error',
      path: '/error',
      page: ErrorPage,  
    },
];

class createHistory {
    constructor(path) {
        this.path = path;
    }

    push() {
      pathList.push(this.path);
      window.history.pushState(null, "", this.path);
    };
  
    replace() {
      pathList.pop();
      pathList.push(this.path);
      window.history.replaceState(null, "", this.path);
    };
  
    goBack() {
      window.history.pushState(null, "", this.path);
    };
};

// const createHistory = () => {
//     push = (path) => {
//       pathList.push(path);
//       window.history.pushState(null, "", path);
//     };
  
//     replace = (path) => {
//       pathList.pop();
//       pathList.push(path);
//       window.history.replaceState(null, "", path);
//     };
  
//     goBack = (path) => {
//       window.history.pushState(null, "", path);
//     };

//     return { push, replace, goBack };
//   };
  
const handleOnLoad = () => {
  const path = window.location.pathname;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path === path) {
        const template = routes[i].page();
        historyMethods.push(path);
        render(template, document.querySelector('.application'));
        return;
      }
    }
    pageNotFound();
};

function handleClickRoute(event) {
    const id = event.target.id;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].id === id) {
        const template = routes[i].page();
        historyMethods.push(routes[i].path);
        render(template, document.querySelector(".application"));
        return;
      }
    }
    pageNotFound();
  }
  

const prev = () => {
    pathList.pop();
    if (pathList.length === 0) {
      return;
    }
    const path = pathList[pathList.length - 1];
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path === path) {
        const template = routes[i].page();
        historyMethods.goBack(path);
        render(template, document.querySelector(".application"));
        return;
      }
    }
    pageNotFound();
  };

export { routes, createHistory, handleOnLoad, handleClickRoute, prev };
*/

/***/ }),

/***/ "./src/js/services/Utils.js":
/*!**********************************!*\
  !*** ./src/js/services/Utils.js ***!
  \**********************************/
/***/ (() => {

// const audio = document.getElementsByTagName(audio);
// console.log(audio);
// function soundClick() {
//     var audio = new Audio();
//     audio.src = '../../audio/click.wav';
//     // audio.autoplay = true;
// }
// export { soundClick };

/***/ }),

/***/ "./src/js/views/components/Bottombar.js":
/*!**********************************************!*\
  !*** ./src/js/views/components/Bottombar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/js/views/pages/ErrorPage.js":
/*!*****************************************!*\
  !*** ./src/js/views/pages/ErrorPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ErrorPage = {
  render: function render() {
    return "\n            <section>\n                <p>Page does not exist. Please check the path.</p>\n            </section>   \n        ";
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);

/***/ }),

/***/ "./src/js/views/pages/Home.js":
/*!************************************!*\
  !*** ./src/js/views/pages/Home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HomePage = {
  render: function render() {
    return "\n        <div class=\"container container-main\">\n            <div class=\"header\">\n                <div class=\"settings settings-route\"></div>\n            </div>\n            <div class=\"content\">\n                <div class=\"logo\"></div>\n                <div class=\"button-wrapper\">\n                    <button class=\"button artists-quiz categories-route\">Artist quiz</button>\n                    <button class=\"button picture-quiz categories-route\">Pictures quiz</button>\n                </div>\n            </div>\n        </div>    \n        ";
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/js/views/pages/Settings.js":
/*!****************************************!*\
  !*** ./src/js/views/pages/Settings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SettingsPage = {
  render: function render() {
    return "\n        <div class=\"container\">\n            <div class=\"header\">\n                <p class=\"setting-title home-route\">Setting</p>\n                <div class=\"exit home-route\"></div>\n            </div>\n            <div class=\"content content-settings\">\n                <div>\n                    <p class=\"subsetting-title\">Volume</p>\n                    <input type=\"range\" id=\"volume-bar\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0.3\">\n                    <div class=\"setting-volume\">\n                        <button class=\"mute\"></button>\n                        <button class=\"sound\"></button>\n                    </div> \n                </div>\n                <div>\n                    <p class=\"subsetting-title\">Time game</p>\n                    <div class=\"setting-timer-wrapper\">\n                        <span id=\"on\">On</span>\n                        <div class=\"setting-timer\">\n                            <input type=\"checkbox\" class=\"hidden\">\n                            <span class=\"slider\"></span>\n                        </div>    \n                        <span id=\"off\" class=\"hidden\">Off</span>\n                    </div>\n                </div>\n                <div>\n                    <p class=\"subsetting-title\">Time to answer</p>\n                    <div class=\"setting-time\">\n                        <button>\n                            <span>-</span>\n                        </button>\n                        <input id=\"time-input\" type=\"number\" min=\"1\" max=\"30\" value=\"20\" readonly>\n                        <span class=\"time-input-value\">20</span>\n                        <button>\n                            <span>+</span>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"setting-buttons\">\n                    <button class=\"button button_element\">Default</button>\n                    <button class=\"button button_colored home-route\">Save</button>\n                </div>\n            </div>\n        </div>";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_services_Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/services/Router.js */ "./src/js/services/Router.js");
/* harmony import */ var _js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/services/Utils.js */ "./src/js/services/Utils.js");
/* harmony import */ var _js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__);


window.addEventListener('load', _js_services_Router_js__WEBPACK_IMPORTED_MODULE_0__.handleOnLoad);
window.addEventListener('hashchange', _js_services_Router_js__WEBPACK_IMPORTED_MODULE_0__.handleOnLoad);
window.addEventListener('click', _js_services_Router_js__WEBPACK_IMPORTED_MODULE_0__.handleClickRoute); // window.addEventListener('click', soundClick);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map