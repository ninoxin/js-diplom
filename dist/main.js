/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_sert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sert */ \"./src/modules/sert.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_sert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('15 February 2022 21:00')\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const doc = document.querySelector('body')\r\n    const modalTel = document.querySelector('.header-modal--opened')\r\n    const modalMan = document.querySelector('.services-modal--opened')\r\n    \r\n    const overlay = document.querySelector('.overlay')\r\n    \r\n    const openModal = (elem) => {\r\n        elem.style.display = 'block'\r\n        overlay.style.display = 'block' \r\n    }\r\n    const closeModal = (elem) =>{\r\n        elem.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    }\r\n\r\n    doc.addEventListener('click', (e) =>{\r\n        if(e.target.closest('a[href=\"#callback\"]')){\r\n            openModal(modalTel)\r\n        } else if(e.target.closest('a[href=\"#application\"]')){\r\n            openModal(modalMan)\r\n        } else if(e.target.closest('.header-modal__close')){\r\n            closeModal(modalTel)\r\n        } else if(e.target.closest('.services-modal__close')){\r\n            closeModal(modalMan)\r\n        }\r\n    })\r\n}\r\n    \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const scroll = document.querySelector('.smooth-scroll__img')\r\n\r\n    const heightScroll = () => {\r\n        let scrolled = window.pageYOffset;\r\n        \r\n        if (scrolled > 2) {\r\n            scroll.style.display = 'block'\r\n        }\r\n        if (!scrolled) {\r\n            scroll.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    const scrollTo = () => {\r\n        if (window.pageYOffset > 0) {\r\n            window.scrollBy(0, -10);\r\n            setTimeout(scrollTo, 0);\r\n          }\r\n    }\r\n\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n        if (window.pageYOffset < 400) {\r\n            window.addEventListener('scroll', heightScroll);\r\n        }\r\n    })\r\n    \r\n    scroll.addEventListener('click', scrollTo);\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sert.js":
/*!*****************************!*\
  !*** ./src/modules/sert.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sert = () => {\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sert);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sert.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.benefits-wrap')\r\n    const slides = document.querySelectorAll('.benefits__item')\r\n    \r\n    const prevSlide = (slides, index, strClass) => {\r\n        slides[index].forEach(slide => {\r\n            slide.classList.add(strClass)\r\n        })\r\n    }\r\n\r\n    const nextSlide = (slides, index, strClass) => {\r\n        slides[index].forEach(slide => {\r\n            slide.classList.remove(strClass)\r\n        })\r\n    }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelector('.count_1 > span')\r\n    const timerHours = document.querySelector('.count_2 > span')\r\n    const timerMinutes = document.querySelector('.count_3 > span')\r\n    const timerSeconds = document.querySelector('.count_4 > span')\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n        return {\r\n            timeRemaining, days, hours, minutes, seconds\r\n        }\r\n\r\n    }\r\n    \r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n        timerDays.textContent =  (\"0\" + getTime.days).slice(-2);\r\n        timerHours.textContent = (\"0\" + getTime.hours).slice(-2);\r\n        timerMinutes.textContent = (\"0\" + getTime.minutes).slice(-2);\r\n        timerSeconds.textContent = (\"0\" + getTime.seconds).slice(-2);\r\n \r\n    }          \r\n\r\n    let idInterval  = setInterval(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            updateClock()\r\n        } else if (getTime.timeRemaining <= 0) {\r\n            clearInterval(idInterval);\r\n          }\r\n\r\n    }, 1000)\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;