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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* harmony default export */ __webpack_exports__["a"] = (msg => {
  console.log('%c Log LambdaJs ::: ', 'color: blue', msg);
});

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_true__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_false__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conditional_if__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logicalOperators_not__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log__ = __webpack_require__(4);














// simple logger



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])('Test ::: "True"');
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(1 == __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(1)(2));

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])('Test ::: "False"');
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(2 == __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(1)(2));

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])('Test ::: "If"');
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(1 == __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conditional_if__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(1)(2));
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(2 == __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conditional_if__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(1)(2));

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])('Test ::: "Not"');
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logicalOperators_not__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logicalOperators_not__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])('Test ::: "And"');
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__logicalOperators_and__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])('Test ::: "Or"');
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__logicalOperators_or__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])('Test ::: "Xor"');
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__logicalOperators_xor__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_true__["a" /* default */]) == __WEBPACK_IMPORTED_MODULE_1__constants_false__["a" /* default */]);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzQzOGVkZWYwNmJiM2ExMzQ3YjIiLCJ3ZWJwYWNrOi8vLy4vY29uZGl0aW9uYWwvaWYuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2ZhbHNlLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy90cnVlLmpzIiwid2VicGFjazovLy8uL2xvZ2ljYWxPcGVyYXRvcnMvbm90LmpzIiwid2VicGFjazovLy8uL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9sb2dpY2FsT3BlcmF0b3JzL2FuZC5qcyIsIndlYnBhY2s6Ly8vLi9sb2dpY2FsT3BlcmF0b3JzL29yLmpzIiwid2VicGFjazovLy8uL2xvZ2ljYWxPcGVyYXRvcnMveG9yLmpzIiwid2VicGFjazovLy8uL2luaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUNGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsNkQ7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw4RDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsYW1iZGEuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM0MzhlZGVmMDZiYjNhMTM0N2IyIiwiLyoqXG4gKiBDb25kaXRpb25hbCBJZlxuICpcbiAqIEh1bWFuIGZyaWVuZGx5IHN0eWxlXG4gKiBcbiAqIGZ1bmN0aW9uIElmKHQpIHtcbiAqICAgcmV0dXJuIGZ1bmN0aW9uKGIpIHtcbiAqICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAqICAgICAgICByZXR1cm4gZnVuY3Rpb24oZikge1xuICogICAgICAgICAgcmV0dXJuIGIodCkoZik7XG4gKiAgICAgICAgfVxuICogICAgICB9XG4gKiAgIH0gICBcbiAqIH1cbiAqL1xuXG5jb25zdCBJZiA9IGIgPT4gdCA9PiBmID0+IGIodCkoZik7XG5cbmV4cG9ydCBkZWZhdWx0IElmO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb25kaXRpb25hbC9pZi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIExvZ2ljYWwgZmFsc2VcbiAqXG4gKiBIdW1hbiBmcmllbmRseSBzdHlsZVxuICogXG4gKiBmdW5jdGlvbiBGYWxzZSh0KSB7XG4gKiAgIHJldHVybiBmdW5jdGlvbihmKSB7XG4gKiAgICAgIHJldHVybiBmO1xuICogICB9ICAgXG4gKiB9XG4gKi9cblxuY29uc3QgRmFsc2UgPSB0ID0+IGYgPT4gZjtcblxuZXhwb3J0IGRlZmF1bHQgRmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnN0YW50cy9mYWxzZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIExvZ2ljYWwgdHJ1ZVxuICpcbiAqIEh1bWFuIGZyaWVuZGx5IHN0eWxlXG4gKiBcbiAqIGZ1bmN0aW9uIFRydWUodCkge1xuICogICByZXR1cm4gZnVuY3Rpb24oZikge1xuICogICAgICByZXR1cm4gdDtcbiAqICAgfSAgIFxuICogfVxuICovXG5cbmNvbnN0IFRydWUgPSB0ID0+IGYgPT4gdDtcblxuZXhwb3J0IGRlZmF1bHQgVHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29uc3RhbnRzL3RydWUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBMb2dpY2FsIE9wZXJhdG9yIDo6OiBOb3RcbiAqXG4gKiBIdW1hbiBmcmllbmRseSBzdHlsZVxuICogXG4gKiBmdW5jdGlvbiBOb3IoeCkge1xuICogICByZXR1cm4gSWYoeCkoRmFsc2UpKFRydWUpO1xuICogfVxuICovXG5cbmltcG9ydCBUcnVlIGZyb20gJy4uL2NvbnN0YW50cy90cnVlJztcblxuaW1wb3J0IEZhbHNlIGZyb20gJy4uL2NvbnN0YW50cy9mYWxzZSc7XG5cbmltcG9ydCBJZiBmcm9tICcuLi9jb25kaXRpb25hbC9pZic7XG5cbmNvbnN0IE5vdCA9IHggPT4gSWYoeCkoRmFsc2UpKFRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBOb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xvZ2ljYWxPcGVyYXRvcnMvbm90LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IG1zZyA9PiB7XG4gIGNvbnNvbGUubG9nKCclYyBMb2cgTGFtYmRhSnMgOjo6ICcsICdjb2xvcjogYmx1ZScsIG1zZyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2cuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBMb2dpY2FsIE9wZXJhdG9yIDo6OiBBbmRcbiAqXG4gKiBIdW1hbiBmcmllbmRseSBzdHlsZVxuICogXG4gKiBmdW5jdGlvbiBBbmQoeCkge1xuICogICByZXR1cm4gZnVuY3Rpb24oeSkge1xuICogICAgICByZXR1cm4gSWYoeCkoeSkoRmFsc2UpO1xuICogICB9XG4gKiB9XG4gKi9cblxuaW1wb3J0IEZhbHNlIGZyb20gJy4uL2NvbnN0YW50cy9mYWxzZSc7XG5cbmltcG9ydCBJZiBmcm9tICcuLi9jb25kaXRpb25hbC9pZic7XG5cbmNvbnN0IEFuZCA9IHggPT4geSA9PiBJZih4KSh5KShGYWxzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFuZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9naWNhbE9wZXJhdG9ycy9hbmQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBMb2dpY2FsIE9wZXJhdG9yIDo6OiBPclxuICpcbiAqIEh1bWFuIGZyaWVuZGx5IHN0eWxlXG4gKiBcbiAqIGZ1bmN0aW9uIE9yKHgpIHtcbiAqICAgcmV0dXJuIGZ1bmN0aW9uKHkpIHtcbiAqICAgICAgcmV0dXJuIElmKHgpKFRydWUpKHkpO1xuICogICB9XG4gKiB9XG4gKi9cblxuaW1wb3J0IElmIGZyb20gJy4uL2NvbmRpdGlvbmFsL2lmJztcblxuaW1wb3J0IFRydWUgZnJvbSAnLi4vY29uc3RhbnRzL3RydWUnO1xuXG5jb25zdCBPciAgPSB4ID0+IHkgPT4gSWYoeCkoVHJ1ZSkoeSk7XG5cbmV4cG9ydCBkZWZhdWx0IE9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbG9naWNhbE9wZXJhdG9ycy9vci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIExvZ2ljYWwgT3BlcmF0b3IgOjo6IFhvclxuICpcbiAqIEh1bWFuIGZyaWVuZGx5IHN0eWxlXG4gKiBcbiAqIGZ1bmN0aW9uIFhvcih4KSB7XG4gKiAgIHJldHVybiBmdW5jdGlvbih5KSB7XG4gKiAgICAgIHJldHVybiBJZih4KShOb3QoeSkpKHkpO1xuICogICB9XG4gKiB9XG4gKi9cblxuaW1wb3J0IElmIGZyb20gJy4uL2NvbmRpdGlvbmFsL2lmJztcblxuaW1wb3J0IE5vdCBmcm9tICcuL25vdCc7XG5cbmNvbnN0IFhvciA9IHggPT4geSA9PiBJZih4KShOb3QoeSkpKHkpO1xuXG5leHBvcnQgZGVmYXVsdCBYb3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9sb2dpY2FsT3BlcmF0b3JzL3hvci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVHJ1ZSBmcm9tICcuL2NvbnN0YW50cy90cnVlJztcblxuaW1wb3J0IEZhbHNlIGZyb20gJy4vY29uc3RhbnRzL2ZhbHNlJztcblxuaW1wb3J0IElmIGZyb20gJy4vY29uZGl0aW9uYWwvaWYnO1xuXG5pbXBvcnQgQW5kIGZyb20gJy4vbG9naWNhbE9wZXJhdG9ycy9hbmQnO1xuXG5pbXBvcnQgTm90IGZyb20gJy4vbG9naWNhbE9wZXJhdG9ycy9ub3QnO1xuXG5pbXBvcnQgT3IgZnJvbSAgJy4vbG9naWNhbE9wZXJhdG9ycy9vcic7XG5cbmltcG9ydCBYb3IgZnJvbSAnLi9sb2dpY2FsT3BlcmF0b3JzL3hvcic7XG5cbi8vIHNpbXBsZSBsb2dnZXJcblxuaW1wb3J0IGxvZyBmcm9tICcuL2xvZyc7XG5cbmxvZygnVGVzdCA6OjogXCJUcnVlXCInKTtcbmxvZygxID09IFRydWUoMSkoMikpO1xuXG5sb2coJ1Rlc3QgOjo6IFwiRmFsc2VcIicpO1xubG9nKDIgPT0gRmFsc2UoMSkoMikpO1xuXG5sb2coJ1Rlc3QgOjo6IFwiSWZcIicpO1xubG9nKDEgPT0gSWYoVHJ1ZSkoMSkoMikpO1xubG9nKDIgPT0gSWYoRmFsc2UpKDEpKDIpKTtcblxubG9nKCdUZXN0IDo6OiBcIk5vdFwiJyk7XG5sb2coTm90KEZhbHNlKSA9PSBUcnVlKTtcbmxvZyhOb3QoVHJ1ZSkgPT0gRmFsc2UpO1xuXG5sb2coJ1Rlc3QgOjo6IFwiQW5kXCInKTtcbmxvZyhBbmQoRmFsc2UpKEZhbHNlKSA9PSBGYWxzZSk7XG5sb2coQW5kKEZhbHNlKShUcnVlKSA9PSBGYWxzZSk7XG5sb2coQW5kKFRydWUpKEZhbHNlKSA9PSBGYWxzZSk7XG5sb2coQW5kKFRydWUpKFRydWUpID09IFRydWUpO1xuXG5sb2coJ1Rlc3QgOjo6IFwiT3JcIicpO1xubG9nKE9yKEZhbHNlKShGYWxzZSkgPT0gRmFsc2UpO1xubG9nKE9yKEZhbHNlKShUcnVlKSA9PSBUcnVlKTtcbmxvZyhPcihUcnVlKShGYWxzZSkgPT0gVHJ1ZSk7XG5sb2coT3IoVHJ1ZSkoVHJ1ZSkgPT0gVHJ1ZSk7XG5cbmxvZygnVGVzdCA6OjogXCJYb3JcIicpO1xubG9nKFhvcihGYWxzZSkoRmFsc2UpID09IEZhbHNlKTtcbmxvZyhYb3IoRmFsc2UpKFRydWUpID09IFRydWUpO1xubG9nKFhvcihUcnVlKShGYWxzZSkgPT0gVHJ1ZSk7XG5sb2coWG9yKFRydWUpKFRydWUpID09IEZhbHNlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW5pdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9