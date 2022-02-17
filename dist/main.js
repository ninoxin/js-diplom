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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_sert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sert */ \"./src/modules/sert.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_valid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/valid */ \"./src/modules/valid.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_sert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('21 February 2022 21:00')\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_valid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n\r\n    if (document.body.className == 'balkony'){\r\n        const calcBlock = document.getElementById('calc')\r\n        const calcType = document.getElementById('calc-type')\r\n        const calcTypeMaterial = document.getElementById('calc-type-material')\r\n        const calcInput = document.getElementById('calc-input')\r\n        const calcTotal = document.getElementById('calc-total')\r\n\r\n        const countCalc = () => {\r\n            const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n            const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value\r\n            const calcInputValue = +calcInput.value\r\n\r\n            let totalValue = 0\r\n\r\n\r\n            if (calcType.value && calcTypeMaterial.value && calcInput.value) {\r\n\r\n                totalValue = calcTypeValue * calcTypeMaterialValue * calcInputValue\r\n\r\n            } else {\r\n                totalValue = 0\r\n            }\r\n\r\n            calcTotal.value = Math.round(totalValue)\r\n\r\n        }\r\n\r\n        calcBlock.addEventListener('input', (e) => {\r\n            if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcInput) {\r\n                countCalc()\r\n            }\r\n        })\r\n    }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) {\r\n            timeFraction = 1;\r\n        }\r\n        let progress = timing(timeFraction);\r\n        draw(progress);\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\r\n\r\nconst modal = () => {\r\n    const doc = document.querySelector('body')\r\n    const modalTel = document.querySelector('.header-modal--opened')\r\n    const modalMan = document.querySelector('.services-modal--opened')\r\n    \r\n    const overlay = document.querySelector('.overlay')\r\n    \r\n    const openModal = (elem) => {\r\n        elem.style.display = 'block';\r\n        overlay.style.display = 'block';\r\n        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 600,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                elem.style.opacity = progress;\r\n                elem.style.top = 50 * progress + \"%\";\r\n            },\r\n        })\r\n    }\r\n    const closeModal = (elem) =>{\r\n        overlay.style.display = 'none';\r\n        elem.style.display = 'none';\r\n    }\r\n\r\n\r\n\r\n    doc.addEventListener('click', (e) =>{\r\n        if(e.target.closest('a[href=\"#callback\"]')){\r\n            openModal(modalTel)\r\n        } else if(e.target.closest('a[href=\"#application\"]')){\r\n            openModal(modalMan)\r\n        } else if(e.target.closest('.header-modal__close')){\r\n            closeModal(modalTel)\r\n        } else if(e.target.closest('.services-modal__close')){\r\n            closeModal(modalMan)\r\n        }\r\n    })\r\n}\r\n    \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const scroll = document.querySelector('.smooth-scroll__img')\r\n\r\n    const heightScroll = () => {\r\n        let scrolled = window.pageYOffset;\r\n        \r\n        if (scrolled > 2) {\r\n            scroll.style.display = 'block'\r\n        }\r\n        if (!scrolled) {\r\n            scroll.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    const scrollTo = () => {\r\n        if (window.pageYOffset > 0) {\r\n            window.scrollBy(0, -10);\r\n            setTimeout(scrollTo, 0);\r\n          }\r\n    }\r\n\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n        if (window.pageYOffset < 400) {\r\n            window.addEventListener('scroll', heightScroll);\r\n        }\r\n    })\r\n    \r\n\r\n    scroll.addEventListener('click', scrollTo);\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sert.js":
/*!*****************************!*\
  !*** ./src/modules/sert.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\r\n\r\nconst sert = () => {\r\n    const sectionDoc = document.getElementById('documents')\r\n    const sertBlocks = sectionDoc.querySelectorAll('.text-center > div')\r\n    const sertModal = document.querySelector('.sert-modal--opened')\r\n    const sertClose = document.querySelector('.sert-close')\r\n\r\n\r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    \r\n\r\n    sertBlocks.forEach((sertBlock) => {\r\n       let sertLink = sertBlock.querySelector('a')\r\n\r\n        sertLink.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            sertModal.style.display = 'block'\r\n            overlay.style.display = 'block'\r\n            ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 600,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    sertModal.style.opacity = progress;\r\n                    sertModal.style.top = 50 * progress + \"%\";\r\n                },\r\n            })\r\n        })\r\n    })\r\n    sertClose.addEventListener('click', () =>{\r\n        sertModal.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sert);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/sert.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    \r\n    const sliderBlocks = document.querySelectorAll('.slider')\r\n    \r\n    \r\n    const getToSlide = (sliderBlock) => {\r\n        const sliderAll = document.querySelectorAll(`.${sliderBlock.id}__item`);\r\n            let slides = []\r\n            let slide1 = []\r\n            let slide2 = []\r\n\r\n            sliderAll.forEach(slide => {\r\n                if (slide.classList.contains('no-active')) {\r\n                    slide2.push(slide)\r\n                } else slide1.push(slide)\r\n            })\r\n            slides.push(slide1)\r\n            slides.push(slide2)\r\n            return {slides}\r\n    }\r\n\r\n    const prevSlide = (slides, index, strClass) => {\r\n        slides[index].forEach(slide => {\r\n            slide.classList.add(strClass)\r\n        })\r\n    }\r\n\r\n    const nextSlide = (slides, index, strClass) => {\r\n        slides[index].forEach(slide => {\r\n            slide.classList.remove(strClass)\r\n        })\r\n    }\r\n\r\n\r\n    sliderBlocks.forEach((sliderBlock) => {\r\n        sliderBlock.addEventListener('click', (e) => {\r\n\r\n\r\n            let slides = getToSlide(sliderBlock).slides\r\n            let currentSlide = 0\r\n\r\n            if (!e.target.closest('.arrows')) {\r\n                return\r\n            }\r\n            \r\n            prevSlide(slides, currentSlide, 'no-active')\r\n\r\n            if (e.target.closest('.benefits__arrow--right') || e.target.closest('.services__arrow--right')) {\r\n                currentSlide++;\r\n            } else if (e.target.closest('.benefits__arrow--left') || e.target.closest('.services__arrow--left')) {\r\n                currentSlide--;\r\n            }\r\n            if (currentSlide >= slides.length) {\r\n                currentSlide = 0\r\n            }\r\n            if (currentSlide < 0) {\r\n                currentSlide = slides.length - 1\r\n            }\r\n            \r\n            nextSlide(slides, currentSlide, 'no-active')\r\n        })\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timers = document.querySelectorAll('.order')\r\n\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n        return {\r\n            timeRemaining, days, hours, minutes, seconds\r\n        }\r\n\r\n    }\r\n    \r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n        timers.forEach(timer => {\r\n            const timerDays = timer.querySelector('.count_1 > span')\r\n            const timerHours = timer.querySelector('.count_2 > span')\r\n            const timerMinutes = timer.querySelector('.count_3 > span')\r\n            const timerSeconds = timer.querySelector('.count_4 > span')\r\n\r\n            timerDays.textContent =  (\"0\" + getTime.days).slice(-2);\r\n            timerHours.textContent = (\"0\" + getTime.hours).slice(-2);\r\n            timerMinutes.textContent = (\"0\" + getTime.minutes).slice(-2);\r\n            timerSeconds.textContent = (\"0\" + getTime.seconds).slice(-2);\r\n        })\r\n \r\n    }          \r\n\r\n    let idInterval  = setInterval(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            updateClock()\r\n        } else if (getTime.timeRemaining <= 0) {\r\n            clearInterval(idInterval);\r\n          }\r\n\r\n    }, 1000)\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/valid.js":
/*!******************************!*\
  !*** ./src/modules/valid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst valid = () => {\r\n\r\n    const phones = document.querySelectorAll('[name=\"phone\"]')\r\n    const nameUsers = document.querySelectorAll('[name=\"fio\"]')\r\n\r\n    const re = /([^0-9\\+])/\r\n    const re1 = /[^A-Z-a-z-А-Я-а-я\\s]+$/i\r\n\r\n\r\n    nameUsers.forEach(nameUser => {\r\n        nameUser.addEventListener('input', (e => {\r\n            e.target.value = e.target.value.replace(re1, \"\")\r\n        }))\r\n    })\r\n    phones.forEach(phone => {\r\n        phone.addEventListener('input', (e => {\r\n            e.target.value = e.target.value.replace(re, \"\")\r\n        }))\r\n    })\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/valid.js?");

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