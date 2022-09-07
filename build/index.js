/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/hub.js":
/*!****************************!*\
  !*** ./src/modules/hub.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sundayMornings": () => (/* binding */ sundayMornings)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");

/**
 * Alters CSS Display property of an HTML Element if day is Sunday
 */

function sundayMornings() {
  const sundays = document.getElementById('sundayMornings'); // If Today is Sunday, quit.

  if (_utilities__WEBPACK_IMPORTED_MODULE_0__.fmcDate.getDay() === 0) return; // Else, set section to "None"

  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.displaySection)(sundays, 'none');
}

/***/ }),

/***/ "./src/modules/jobs.js":
/*!*****************************!*\
  !*** ./src/modules/jobs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jobless": () => (/* binding */ jobless)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");

function jobless() {
  const jobs = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.x-row-inner a.x-col', true);

  if (jobs.length === 0) {
    const site = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.x-container.max.width.offset');
    site.innerHTML = '';
    site.innerHTML = `<div class="x-container max width offset">There are no jobs to display right now. Please check back later.</div>`;
  }
}

/***/ }),

/***/ "./src/modules/mec-events.js":
/*!***********************************!*\
  !*** ./src/modules/mec-events.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "relatedEventsControl": () => (/* binding */ relatedEventsControl)
/* harmony export */ });
function relatedEventsControl() {
  const theEvents = document.querySelector('.the-event__related-events');
  const eventsContainer = document.querySelector('.mec-related-events');
  if (eventsContainer.children.length > 0) return;
  theEvents.style.display = 'none';
}

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyright": () => (/* binding */ copyright),
/* harmony export */   "displaySection": () => (/* binding */ displaySection),
/* harmony export */   "fmcDate": () => (/* binding */ fmcDate),
/* harmony export */   "getElementById": () => (/* binding */ getElementById),
/* harmony export */   "querySelector": () => (/* binding */ querySelector)
/* harmony export */ });
var fmcDate = new Date();
function copyright(brandName) {
  const copyright = document.getElementById('copyright');
  const thisYear = fmcDate.getFullYear();
  copyright.innerHTML = `<p>&copy; ${thisYear} ${brandName} <br/> All Rights Reserved.`;
}
/** Shorthand for Query Selector Function.
 * @param selector {string} CSS Selector. Must include class ('.') marker if needed
 * @param  [all] {boolean} optional to call querySelectorAll.
 * @return {Element} HTML Element
 * */

function querySelector(selector) {
  let all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return all === false ? document.querySelector(selector) : document.querySelectorAll(selector);
}
function getElementById(selector) {
  return document.getElementById(selector);
}
/** Set CSS Display value for a section
 * @param section {HTML} the Element to modify
 * @param displayValue {string} the CSS value to set
 */

function displaySection(section, displayValue) {
  section.style.display = displayValue;
  return section;
}

/***/ }),

/***/ "./src/modules/wednesdayNightMenu.js":
/*!*******************************************!*\
  !*** ./src/modules/wednesdayNightMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuControl": () => (/* binding */ menuControl)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");

function menuControl() {
  const meals = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.meals', true);
  const sides = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.sides', true); // const year = date.getFullYear(),
  // 	month = date.getMonth(),
  // 	day = date.getDay();
  // const today = `${month}/${day}/${year}`;
  // const todayDate = Date.parse(today);
  // console.log(todayDate);

  meals.forEach((el, i, arr) => {
    const mealDateString = el.querySelector('.date');
    const mealDate = Date.parse(mealDateString.innerText);

    if (mealDate < Date.parse(_utilities__WEBPACK_IMPORTED_MODULE_0__.fmcDate)) {
      el.style.display = 'none';
    }
  });
}

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _modules_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hub */ "./src/modules/hub.js");
/* harmony import */ var _modules_jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/jobs */ "./src/modules/jobs.js");
/* harmony import */ var _modules_mec_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mec-events */ "./src/modules/mec-events.js");
/* harmony import */ var _modules_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/utilities */ "./src/modules/utilities.js");
/* harmony import */ var _modules_wednesdayNightMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/wednesdayNightMenu */ "./src/modules/wednesdayNightMenu.js");







function init() {
  (0,_modules_utilities__WEBPACK_IMPORTED_MODULE_4__.copyright)('First Methodist Carrollton');
  if (location.href === 'https://firstchurch.net/hub/') (0,_modules_hub__WEBPACK_IMPORTED_MODULE_1__.sundayMornings)();
  if (location.href === 'https://firstchurch.net/jobs/') (0,_modules_jobs__WEBPACK_IMPORTED_MODULE_2__.jobless)();
  if (location.href === 'http://fmc.local/menu/' || location.href === 'https://firstchurch.net/menu') (0,_modules_wednesdayNightMenu__WEBPACK_IMPORTED_MODULE_5__.menuControl)();
  (0,_modules_mec_events__WEBPACK_IMPORTED_MODULE_3__.relatedEventsControl)();
}

init();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map