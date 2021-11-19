/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/services/Router.js":
/*!***********************************!*\
  !*** ./src/js/services/Router.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleOnLoad": () => (/* binding */ handleOnLoad),
/* harmony export */   "handleClickRoute": () => (/* binding */ handleClickRoute),
/* harmony export */   "parseLocation": () => (/* binding */ parseLocation)
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
      window.location.href = "".concat(window.location.href.replace(/#(.*)$/, ''), "#").concat(routes[i].path);
    }
  }
}



/***/ }),

/***/ "./src/js/services/Utils.js":
/*!**********************************!*\
  !*** ./src/js/services/Utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "soundClick": () => (/* binding */ soundClick),
/* harmony export */   "changeVolumeLevel": () => (/* binding */ changeVolumeLevel),
/* harmony export */   "setTimer": () => (/* binding */ setTimer),
/* harmony export */   "setTimeToTimer": () => (/* binding */ setTimeToTimer)
/* harmony export */ });
var audio = document.querySelector('audio');

function soundClick(event) {
  if (event.target.className.split(" ").includes('click')) {
    audio.play();
  }
}

function changeVolumeLevel() {
  var volumeBar = document.querySelector('#volume-bar');

  if (volumeBar) {
    volumeBar.addEventListener('change', function () {
      audio.volume = volumeBar.value;
      volumeBar.style.background = "linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ".concat(volumeBar.value * 100, "%, #A4A4A4 ").concat(volumeBar.value * 100, "%, #A4A4A4 100%)");
      audio.play();
    });
    volumeBar.addEventListener('input', function () {
      volumeBar.style.background = "linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ".concat(volumeBar.value * 100, "%, #A4A4A4 ").concat(volumeBar.value * 100, "%, #A4A4A4 100%)");
    });
  }

  var muteBtn = document.querySelector('.mute');

  if (muteBtn) {
    muteBtn.addEventListener('click', function () {
      audio.volume = 0;
      volumeBar.value = 0;
      volumeBar.style.background = '#A4A4A4';
    });
  }

  var soundBtn = document.querySelector('.sound');

  if (soundBtn) {
    soundBtn.addEventListener('click', function () {
      audio.volume = 0.3;
      volumeBar.value = 0.3;
      volumeBar.style.background = 'linear-gradient(to right, #FFBCA2 0%, #FFBCA2 30%, #A4A4A4 30%, #A4A4A4 100%)';
      audio.play();
    });
  }

  if (localStorage.getItem('volumeLevel') && volumeBar) {
    volumeBar.value = localStorage.getItem('volumeLevel');
    audio.volume = volumeBar.value;
    volumeBar.style.background = "linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ".concat(volumeBar.value * 100, "%, #A4A4A4 ").concat(volumeBar.value * 100, "%, #A4A4A4 100%)");
  }

  var saveBtn = document.querySelector('.save-button');

  if (saveBtn) {
    saveBtn.addEventListener('click', function () {
      localStorage.setItem('volumeLevel', volumeBar.value);
    });
  }
}

function setTimer() {
  var timerBtn = document.querySelector('#timer');
  var timerSwitcher = document.querySelector('.slider');

  if (timerBtn) {
    timerBtn.addEventListener('click', function (event) {
      console.log(event.target);
      console.log(event.target.checked);
      document.querySelector('#on').classList.toggle('hidden');
      document.querySelector('#off').classList.toggle('hidden');
      timerSwitcher.classList.toggle('on');
      timerSwitcher.classList.toggle('off');

      if (event.target.checked) {
        localStorage.setItem('timer', 'off');
      } else {
        localStorage.setItem('timer', 'on');
      }
    });
  }

  if (localStorage.getItem('timer') && timerSwitcher) {
    if (localStorage.getItem('timer') == 'on') {
      timerSwitcher.classList.remove('off');
      timerSwitcher.classList.add('on');
      document.querySelector('#on').classList.remove('hidden');
      document.querySelector('#off').classList.add('hidden');
    } else {
      timerSwitcher.classList.add('off');
      timerSwitcher.classList.remove('on');
      document.querySelector('#on').classList.add('hidden');
      document.querySelector('#off').classList.remove('hidden');
    }
  }
}

function setTimeToTimer() {
  var decreaseTimeBtn = document.querySelector('.less-time');
  var increaseTimeBtn = document.querySelector('.more-time');
  var timeInput = document.querySelector('#time-input');
  var timeInputValue = document.querySelector('.time-input-value');

  if (timeInputValue) {
    timeInputValue.innerHTML = timeInput.value;
  }

  if (decreaseTimeBtn) {
    decreaseTimeBtn.addEventListener('click', function () {
      if (timeInput.value > 5) timeInput.value -= 5;
      timeInputValue.innerHTML = timeInput.value;
    });
  }

  if (increaseTimeBtn) {
    increaseTimeBtn.addEventListener('click', function () {
      if (timeInput.value < 30) timeInput.value = +timeInput.value + 5;
      timeInputValue.innerHTML = timeInput.value;
    });
  }

  var saveBtn = document.querySelector('.save-button');

  if (saveBtn) {
    saveBtn.addEventListener('click', function () {
      localStorage.setItem('timeToAnswer', timeInput.value);
    });
  }

  if (localStorage.getItem('timeToAnswer') && timeInput) {
    timeInputValue.innerHTML = localStorage.getItem('timeToAnswer');
  }
}



/***/ }),

/***/ "./src/js/views/components/Bottombar.js":
/*!**********************************************!*\
  !*** ./src/js/views/components/Bottombar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Bottombar = {
  render: function render() {
    return "\n            <div class=\"footer\">\n                <div class=\"footer-logo\"></div>\n                <div class=\"info\"> \n                    <a class=\"click\" href=\"https://github.com/OlgaTolpykina\" target=\"_blank\">OlgaTolpykina</a>\n                    <span>2021</span>\n                </div>\n            </div>\n        ";
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

/***/ "./src/js/views/pages/ErrorPage.js":
/*!*****************************************!*\
  !*** ./src/js/views/pages/ErrorPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HomePage = {
  render: function render() {
    return "\n        <div class=\"container container-main\">\n            <div class=\"header\">\n                <div class=\"settings settings-route click\"></div>\n            </div>\n            <div class=\"content\">\n                <div class=\"logo\"></div>\n                <div class=\"button-wrapper\">\n                    <button class=\"button artists-quiz categories-route click\">Artist quiz</button>\n                    <button class=\"button picture-quiz categories-route click\">Pictures quiz</button>\n                </div>\n            </div>\n        </div>    \n        ";
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
    return "\n        <div class=\"container\">\n            <div class=\"header\">\n                <p class=\"setting-title home-route click\">Setting</p>\n                <div class=\"exit home-route click\"></div>\n            </div>\n            <div class=\"content content-settings\">\n                <div>\n                    <p class=\"subsetting-title\">Volume</p>\n                    <input type=\"range\" id=\"volume-bar\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0.3\">\n                    <div class=\"setting-volume\">\n                        <button class=\"mute\"></button>\n                        <button class=\"sound click\"></button>\n                    </div> \n                </div>\n                <div>\n                    <p class=\"subsetting-title\">Time game</p>\n                    <div class=\"setting-timer-wrapper\">\n                        <span id=\"on\" class=\"hidden\">On</span>\n                        <label>\n                            <div class=\"setting-timer\">\n                                <input id=\"timer\" type=\"checkbox\" class=\"hidden\">\n                                <span class=\"slider off\"></span>\n                            </div>\n                        </label>        \n                        <span id=\"off\">Off</span>\n                    </div>\n                </div>\n                <div>\n                    <p class=\"subsetting-title\">Time to answer</p>\n                    <div class=\"setting-time\">\n                        <button class=\"click\">\n                            <span class=\"less-time\">-</span>\n                        </button>\n                        <input id=\"time-input\" type=\"number\" min=\"5\" max=\"30\" value=\"20\" readonly>\n                        <span class=\"time-input-value\"></span>\n                        <button class=\"click\">\n                            <span class=\"more-time\">+</span>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"setting-buttons\">\n                    <button class=\"button button_element click\">Default</button>\n                    <button class=\"button button_colored save-button home-route click\">Save</button>\n                </div>\n            </div>\n        </div>";
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
/* harmony import */ var _js_services_Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/services/Router.js */ "./src/js/services/Router.js");
/* harmony import */ var _js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/services/Utils.js */ "./src/js/services/Utils.js");


window.addEventListener('load', function () {
  (0,_js_services_Router_js__WEBPACK_IMPORTED_MODULE_0__.handleOnLoad)();
  (0,_js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__.changeVolumeLevel)();
  (0,_js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__.setTimer)();
  (0,_js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__.setTimeToTimer)();
});
window.addEventListener('hashchange', function () {
  (0,_js_services_Router_js__WEBPACK_IMPORTED_MODULE_0__.handleOnLoad)();
  (0,_js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__.changeVolumeLevel)();
  (0,_js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__.setTimer)();
  (0,_js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__.setTimeToTimer)();
});
window.addEventListener('click', _js_services_Router_js__WEBPACK_IMPORTED_MODULE_0__.handleClickRoute);
window.addEventListener('click', _js_services_Utils_js__WEBPACK_IMPORTED_MODULE_1__.soundClick);
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