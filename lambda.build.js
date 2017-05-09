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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Conditional If
 *
 * Human friendly style
 * 
 * function If(t) {
 *   return function(b) {
 *      return function(t) {
 *        return function(f) {
 *          return b(t)(f);
 *        }
 *      }
 *   }   
 * }
 */

const If = b => t => f => b(t)(f);

/* harmony default export */ __webpack_exports__["a"] = (If);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Logical false
 *
 * Human friendly style
 * 
 * function False(t) {
 *   return function(f) {
 *      return f;
 *   }   
 * }
 */

const False = t => f => f;

/* harmony default export */ __webpack_exports__["a"] = (False);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Logical true
 *
 * Human friendly style
 * 
 * function True(t) {
 *   return function(f) {
 *      return t;
 *   }   
 * }
 */

const True = t => f => t;

/* harmony default export */ __webpack_exports__["a"] = (True);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_true__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_false__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conditional_if__ = __webpack_require__(0);
/**
 * Logical Operator ::: Not
 *
 * Human friendly style
 * 
 * function Nor(x) {
 *   return If(x)(False)(True);
 * }
 */







const Not = x => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conditional_if__["a" /* default */])(x)(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Not);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_false__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conditional_if__ = __webpack_require__(0);
/**
 * Logical Operator ::: And
 *
 * Human friendly style
 * 
 * function And(x) {
 *   return function(y) {
 *      return If(x)(y)(False);
 *   }
 * }
 */





const And = x => y => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conditional_if__["a" /* default */])(x)(y)(__WEBPACK_IMPORTED_MODULE_0__constants_false__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (And);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conditional_if__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_true__ = __webpack_require__(2);
/**
 * Logical Operator ::: Or
 *
 * Human friendly style
 * 
 * function Or(x) {
 *   return function(y) {
 *      return If(x)(True)(y);
 *   }
 * }
 */





const Or  = x => y => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__conditional_if__["a" /* default */])(x)(__WEBPACK_IMPORTED_MODULE_1__constants_true__["a" /* default */])(y);

/* harmony default export */ __webpack_exports__["a"] = (Or);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conditional_if__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not__ = __webpack_require__(3);
/**
 * Logical Operator ::: Xor
 *
 * Human friendly style
 * 
 * function Xor(x) {
 *   return function(y) {
 *      return If(x)(Not(y))(y);
 *   }
 * }
 */





const Xor = x => y => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__conditional_if__["a" /* default */])(x)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__not__["a" /* default */])(y))(y);

/* harmony default export */ __webpack_exports__["a"] = (Xor);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_true__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_false__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conditional_if__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logicalOperators_not__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__ = __webpack_require__(6);














console.log('Implementation "True"');
console.log(1 == __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(1)(2));

console.log('Implementation "False"');
console.log(2 == __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(1)(2));

console.log('Implementation "If"');
console.log(1 == __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conditional_if__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(1)(2));
console.log(2 == __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conditional_if__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(1)(2));

console.log('Implementation "Not"');
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logicalOperators_not__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logicalOperators_not__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);

console.log('Implementation "And"');
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);

console.log('Implementation "Or"');
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);

console.log('Implementation "Xor"');
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDI5OGVlZjhlMGNkMmY4YjQyODQiLCJ3ZWJwYWNrOi8vLy4vY29uZGl0aW9uYWwvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2ZhbHNlLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy90cnVlLmpzIiwid2VicGFjazovLy8uL2xvZ2ljYWxPcGVyYXRvcnMvbm90LmpzIiwid2VicGFjazovLy8uL2xvZ2ljYWxPcGVyYXRvcnMvYW5kLmpzIiwid2VicGFjazovLy8uL2xvZ2ljYWxPcGVyYXRvcnMvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbG9naWNhbE9wZXJhdG9ycy94b3IuanMiLCJ3ZWJwYWNrOi8vLy4vaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsNkQ7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw4RDs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxhbWJkYS5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDI5OGVlZjhlMGNkMmY4YjQyODQiLCIvKipcbiAqIENvbmRpdGlvbmFsIElmXG4gKlxuICogSHVtYW4gZnJpZW5kbHkgc3R5bGVcbiAqIFxuICogZnVuY3Rpb24gSWYodCkge1xuICogICByZXR1cm4gZnVuY3Rpb24oYikge1xuICogICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICogICAgICAgIHJldHVybiBmdW5jdGlvbihmKSB7XG4gKiAgICAgICAgICByZXR1cm4gYih0KShmKTtcbiAqICAgICAgICB9XG4gKiAgICAgIH1cbiAqICAgfSAgIFxuICogfVxuICovXG5cbmNvbnN0IElmID0gYiA9PiB0ID0+IGYgPT4gYih0KShmKTtcblxuZXhwb3J0IGRlZmF1bHQgSWY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbmRpdGlvbmFsL2lmLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogTG9naWNhbCBmYWxzZVxuICpcbiAqIEh1bWFuIGZyaWVuZGx5IHN0eWxlXG4gKiBcbiAqIGZ1bmN0aW9uIEZhbHNlKHQpIHtcbiAqICAgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAqICAgICAgcmV0dXJuIGY7XG4gKiAgIH0gICBcbiAqIH1cbiAqL1xuXG5jb25zdCBGYWxzZSA9IHQgPT4gZiA9PiBmO1xuXG5leHBvcnQgZGVmYXVsdCBGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29uc3RhbnRzL2ZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogTG9naWNhbCB0cnVlXG4gKlxuICogSHVtYW4gZnJpZW5kbHkgc3R5bGVcbiAqIFxuICogZnVuY3Rpb24gVHJ1ZSh0KSB7XG4gKiAgIHJldHVybiBmdW5jdGlvbihmKSB7XG4gKiAgICAgIHJldHVybiB0O1xuICogICB9ICAgXG4gKiB9XG4gKi9cblxuY29uc3QgVHJ1ZSA9IHQgPT4gZiA9PiB0O1xuXG5leHBvcnQgZGVmYXVsdCBUcnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb25zdGFudHMvdHJ1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIExvZ2ljYWwgT3BlcmF0b3IgOjo6IE5vdFxuICpcbiAqIEh1bWFuIGZyaWVuZGx5IHN0eWxlXG4gKiBcbiAqIGZ1bmN0aW9uIE5vcih4KSB7XG4gKiAgIHJldHVybiBJZih4KShGYWxzZSkoVHJ1ZSk7XG4gKiB9XG4gKi9cblxuaW1wb3J0IFRydWUgZnJvbSAnLi4vY29uc3RhbnRzL3RydWUnO1xuXG5pbXBvcnQgRmFsc2UgZnJvbSAnLi4vY29uc3RhbnRzL2ZhbHNlJztcblxuaW1wb3J0IElmIGZyb20gJy4uL2NvbmRpdGlvbmFsL2lmJztcblxuY29uc3QgTm90ID0geCA9PiBJZih4KShGYWxzZSkoVHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9naWNhbE9wZXJhdG9ycy9ub3QuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBMb2dpY2FsIE9wZXJhdG9yIDo6OiBBbmRcbiAqXG4gKiBIdW1hbiBmcmllbmRseSBzdHlsZVxuICogXG4gKiBmdW5jdGlvbiBBbmQoeCkge1xuICogICByZXR1cm4gZnVuY3Rpb24oeSkge1xuICogICAgICByZXR1cm4gSWYoeCkoeSkoRmFsc2UpO1xuICogICB9XG4gKiB9XG4gKi9cblxuaW1wb3J0IEZhbHNlIGZyb20gJy4uL2NvbnN0YW50cy9mYWxzZSc7XG5cbmltcG9ydCBJZiBmcm9tICcuLi9jb25kaXRpb25hbC9pZic7XG5cbmNvbnN0IEFuZCA9IHggPT4geSA9PiBJZih4KSh5KShGYWxzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFuZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9naWNhbE9wZXJhdG9ycy9hbmQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBMb2dpY2FsIE9wZXJhdG9yIDo6OiBPclxuICpcbiAqIEh1bWFuIGZyaWVuZGx5IHN0eWxlXG4gKiBcbiAqIGZ1bmN0aW9uIE9yKHgpIHtcbiAqICAgcmV0dXJuIGZ1bmN0aW9uKHkpIHtcbiAqICAgICAgcmV0dXJuIElmKHgpKFRydWUpKHkpO1xuICogICB9XG4gKiB9XG4gKi9cblxuaW1wb3J0IElmIGZyb20gJy4uL2NvbmRpdGlvbmFsL2lmJztcblxuaW1wb3J0IFRydWUgZnJvbSAnLi4vY29uc3RhbnRzL3RydWUnO1xuXG5jb25zdCBPciAgPSB4ID0+IHkgPT4gSWYoeCkoVHJ1ZSkoeSk7XG5cbmV4cG9ydCBkZWZhdWx0IE9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9naWNhbE9wZXJhdG9ycy9vci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIExvZ2ljYWwgT3BlcmF0b3IgOjo6IFhvclxuICpcbiAqIEh1bWFuIGZyaWVuZGx5IHN0eWxlXG4gKiBcbiAqIGZ1bmN0aW9uIFhvcih4KSB7XG4gKiAgIHJldHVybiBmdW5jdGlvbih5KSB7XG4gKiAgICAgIHJldHVybiBJZih4KShOb3QoeSkpKHkpO1xuICogICB9XG4gKiB9XG4gKi9cblxuaW1wb3J0IElmIGZyb20gJy4uL2NvbmRpdGlvbmFsL2lmJztcblxuaW1wb3J0IE5vdCBmcm9tICcuL25vdCc7XG5cbmNvbnN0IFhvciA9IHggPT4geSA9PiBJZih4KShOb3QoeSkpKHkpO1xuXG5leHBvcnQgZGVmYXVsdCBYb3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2dpY2FsT3BlcmF0b3JzL3hvci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVHJ1ZSBmcm9tICcuL2NvbnN0YW50cy90cnVlJztcblxuaW1wb3J0IEZhbHNlIGZyb20gJy4vY29uc3RhbnRzL2ZhbHNlJztcblxuaW1wb3J0IElmIGZyb20gJy4vY29uZGl0aW9uYWwvaWYnO1xuXG5pbXBvcnQgQW5kIGZyb20gJy4vbG9naWNhbE9wZXJhdG9ycy9hbmQnO1xuXG5pbXBvcnQgTm90IGZyb20gJy4vbG9naWNhbE9wZXJhdG9ycy9ub3QnO1xuXG5pbXBvcnQgT3IgZnJvbSAgJy4vbG9naWNhbE9wZXJhdG9ycy9vcic7XG5cbmltcG9ydCBYb3IgZnJvbSAnLi9sb2dpY2FsT3BlcmF0b3JzL3hvcic7XG5cbmNvbnNvbGUubG9nKCdJbXBsZW1lbnRhdGlvbiBcIlRydWVcIicpO1xuY29uc29sZS5sb2coMSA9PSBUcnVlKDEpKDIpKTtcblxuY29uc29sZS5sb2coJ0ltcGxlbWVudGF0aW9uIFwiRmFsc2VcIicpO1xuY29uc29sZS5sb2coMiA9PSBGYWxzZSgxKSgyKSk7XG5cbmNvbnNvbGUubG9nKCdJbXBsZW1lbnRhdGlvbiBcIklmXCInKTtcbmNvbnNvbGUubG9nKDEgPT0gSWYoVHJ1ZSkoMSkoMikpO1xuY29uc29sZS5sb2coMiA9PSBJZihGYWxzZSkoMSkoMikpO1xuXG5jb25zb2xlLmxvZygnSW1wbGVtZW50YXRpb24gXCJOb3RcIicpO1xuY29uc29sZS5sb2coTm90KEZhbHNlKSA9PSBUcnVlKTtcbmNvbnNvbGUubG9nKE5vdChUcnVlKSA9PSBGYWxzZSk7XG5cbmNvbnNvbGUubG9nKCdJbXBsZW1lbnRhdGlvbiBcIkFuZFwiJyk7XG5jb25zb2xlLmxvZyhBbmQoRmFsc2UpKEZhbHNlKSA9PSBGYWxzZSk7XG5jb25zb2xlLmxvZyhBbmQoRmFsc2UpKFRydWUpID09IEZhbHNlKTtcbmNvbnNvbGUubG9nKEFuZChUcnVlKShGYWxzZSkgPT0gRmFsc2UpO1xuY29uc29sZS5sb2coQW5kKFRydWUpKFRydWUpID09IFRydWUpO1xuXG5jb25zb2xlLmxvZygnSW1wbGVtZW50YXRpb24gXCJPclwiJyk7XG5jb25zb2xlLmxvZyhPcihGYWxzZSkoRmFsc2UpID09IEZhbHNlKTtcbmNvbnNvbGUubG9nKE9yKEZhbHNlKShUcnVlKSA9PSBUcnVlKTtcbmNvbnNvbGUubG9nKE9yKFRydWUpKEZhbHNlKSA9PSBUcnVlKTtcbmNvbnNvbGUubG9nKE9yKFRydWUpKFRydWUpID09IFRydWUpO1xuXG5jb25zb2xlLmxvZygnSW1wbGVtZW50YXRpb24gXCJYb3JcIicpO1xuY29uc29sZS5sb2coWG9yKEZhbHNlKShGYWxzZSkgPT0gRmFsc2UpO1xuY29uc29sZS5sb2coWG9yKEZhbHNlKShUcnVlKSA9PSBUcnVlKTtcbmNvbnNvbGUubG9nKFhvcihUcnVlKShGYWxzZSkgPT0gVHJ1ZSk7XG5jb25zb2xlLmxvZyhYb3IoVHJ1ZSkoVHJ1ZSkgPT0gRmFsc2UpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbml0LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=