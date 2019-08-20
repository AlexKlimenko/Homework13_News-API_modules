/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.css":
/*!*****************!*\
  !*** ./app.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app.css?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ \"./app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./config.js\");\n/* harmony import */ var _renderNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderNews */ \"./renderNews.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  M.AutoInit();\n  Object(_config__WEBPACK_IMPORTED_MODULE_1__[\"requestURL\"])();\n});\n_config__WEBPACK_IMPORTED_MODULE_1__[\"form\"].addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n\n  while (_renderNews__WEBPACK_IMPORTED_MODULE_2__[\"newsContainer\"].firstChild) {\n    _renderNews__WEBPACK_IMPORTED_MODULE_2__[\"newsContainer\"].removeChild(_renderNews__WEBPACK_IMPORTED_MODULE_2__[\"newsContainer\"].firstChild);\n  }\n\n  Object(_config__WEBPACK_IMPORTED_MODULE_1__[\"requestURL\"])();\n});\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: requestURL, form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestURL\", function() { return requestURL; });\n/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.service */ \"./news.service.js\");\n/* harmony import */ var _renderNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderNews */ \"./renderNews.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return _renderNews__WEBPACK_IMPORTED_MODULE_1__[\"form\"]; });\n\n\n\n\nfunction requestURL() {\n  var country = _renderNews__WEBPACK_IMPORTED_MODULE_1__[\"form\"].elements[\"country\"].value;\n  var category = _renderNews__WEBPACK_IMPORTED_MODULE_1__[\"form\"].elements[\"category\"].value;\n  var search = _renderNews__WEBPACK_IMPORTED_MODULE_1__[\"form\"].elements[\"autocomplete-input\"].value;\n  var apiKey = \"2c0f1ee00f8f46f5916226f221bf3858\";\n  var apiUrl = \"https://newsapi.org/v2\";\n  var url = search ? \"\".concat(apiUrl, \"/everything?q=\").concat(search, \"&apiKey=\").concat(apiKey) : \"\".concat(apiUrl, \"/top-headlines?country=\").concat(country, \"&category=\").concat(category, \"&apiKey=\").concat(apiKey);\n  console.log(url);\n  Object(_news_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n}\n\n\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./http.js":
/*!*****************!*\
  !*** ./http.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar request =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(url, options) {\n    var response;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url, options).then(function (response) {\n              if (Math.floor(response.status / 100) !== 2) {\n                return Promise.reject(response);\n              }\n\n              return response.json();\n            });\n\n          case 2:\n            response = _context.sent;\n            return _context.abrupt(\"return\", response);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function request(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (request);\n\n//# sourceURL=webpack:///./http.js?");

/***/ }),

/***/ "./news.service.js":
/*!*************************!*\
  !*** ./news.service.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ \"./http.js\");\n/* harmony import */ var _renderNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderNews */ \"./renderNews.js\");\n\n\n\nfunction loadNews(url) {\n  Object(_http__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url).then(function (res) {\n    if (!res.articles.length) {\n      alert(\"Новостей не найдено\");\n      return;\n    }\n\n    Object(_renderNews__WEBPACK_IMPORTED_MODULE_1__[\"renderNews\"])(res.articles);\n  })[\"catch\"](function (err) {\n    return alert(err);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadNews);\n\n//# sourceURL=webpack:///./news.service.js?");

/***/ }),

/***/ "./renderNews.js":
/*!***********************!*\
  !*** ./renderNews.js ***!
  \***********************/
/*! exports provided: renderNews, newsContainer, form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNews\", function() { return renderNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsContainer\", function() { return newsContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\nvar newsContainer = document.querySelector(\".news-container .row\");\nvar form = document.forms[\"newsControls\"];\n\nfunction newsTemplate() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      url = _ref.url,\n      title = _ref.title,\n      description = _ref.description,\n      urlToImage = _ref.urlToImage;\n\n  return \"\\n  <div class=\\\"col s12\\\">\\n      <div class=\\\"card\\\">\\n        <div class=\\\"card-image\\\">\\n          <img src=\\\"\".concat(urlToImage, \"\\\">\\n          <span class=\\\"card-title\\\">\").concat(title || \"\", \"</span>\\n        </div>\\n        <div class=\\\"card-content\\\">\\n          <p>\").concat(description || \"\", \"</p>\\n        </div>\\n        <div class=\\\"card-action\\\">\\n          <a href=\\\"\").concat(url, \"\\\">Read more</a>\\n        </div>\\n      </div>\\n    </div>\\n  \");\n}\n\nfunction renderNews(newsItems) {\n  var fragment = \"\";\n  newsItems.forEach(function (item) {\n    var el = newsTemplate(item);\n    fragment += el;\n  });\n  newsContainer.insertAdjacentHTML(\"afterbegin\", fragment);\n}\n\n\n\n//# sourceURL=webpack:///./renderNews.js?");

/***/ })

/******/ });