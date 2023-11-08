/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-dom.js":
/*!***************************!*\
  !*** ./src/create-dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createElement(tag, id, className) {
    const element = document.createElement(tag);
    if (id) {
      element.id = id;
    }
    if (className) {
      element.className = className;
    }
    return element;
  }  

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);

/***/ }),

/***/ "./src/modules/hero/hero.js":
/*!**********************************!*\
  !*** ./src/modules/hero/hero.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../create-dom.js */ "./src/create-dom.js");
/* harmony import */ var _image_restostock_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/restostock.jpg */ "./src/modules/image/restostock.jpg");




// create DOM


const home =  function() {
    
const content = document.getElementById('content')

//header
const header = (0,_create_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('header')
const h1 = (0,_create_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('h1')
const tabContainer = (0,_create_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'tab-container')
const menuTab = (0,_create_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'menu-tab')
const contactTab = (0,_create_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'contact-tab')

//header content
menuTab.innerHTML = 'Menu'
contactTab.innerHTML = 'Contact Us'

//append Header
header.appendChild(h1)
header.appendChild(tabContainer)
tabContainer.appendChild(menuTab)
tabContainer.appendChild(contactTab)


const section = (0,_create_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('section')
const heroImage = (0,_create_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'hero-image')
const copy = (0,_create_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'copy')


//append DOM
section.appendChild(heroImage)
section.appendChild(copy)

content.appendChild(header)
content.appendChild(section);

copy.innerHTML = "La Famiglia: The Italian Restaurant with a Twist At La Famiglia, \n youll enjoy authentic Italian food and a thrilling atmosphere. Our dishes are made with fresh ingredients and love, and our customers are loyal and armed. Don’t worry, \n they won’t hurt you unless you disrespect the family. \n Come dine with us today and join the adventure!"


heroImage.src = _image_restostock_jpg__WEBPACK_IMPORTED_MODULE_1__
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);






/***/ }),

/***/ "./src/modules/image/restostock.jpg":
/*!******************************************!*\
  !*** ./src/modules/image/restostock.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eede0274f00790c7d297.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hero/hero */ "./src/modules/hero/hero.js");
/* harmony import */ var _create_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-dom */ "./src/create-dom.js");




(0,_create_dom__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_modules_hero_hero__WEBPACK_IMPORTED_MODULE_0__["default"])()

const content = document.getElementById('content')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDWGdDOztBQUVDOztBQUVoRDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSwwREFBYTtBQUM1QixXQUFXLDBEQUFhO0FBQ3hCLHFCQUFxQiwwREFBYTtBQUNsQyxnQkFBZ0IsMERBQWE7QUFDN0IsbUJBQW1CLDBEQUFhOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsZ0JBQWdCLDBEQUFhO0FBQzdCLGtCQUFrQiwwREFBYTtBQUMvQixhQUFhLDBEQUFhOzs7QUFHMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBLGdCQUFnQixrREFBVTtBQUMxQjs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ25CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJzQztBQUNFOzs7QUFHeEMsdURBQWE7QUFDYiwrREFBSTs7QUFFSixrRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGUtZG9tLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlcm8vaGVyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBpZCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9ICBcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudCIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi8uLi9jcmVhdGUtZG9tLmpzXCJcblxuaW1wb3J0IHJlc3Rvc3RvY2sgZnJvbSBcIi4uL2ltYWdlL3Jlc3Rvc3RvY2suanBnXCJcblxuLy8gY3JlYXRlIERPTVxuXG5cbmNvbnN0IGhvbWUgPSAgZnVuY3Rpb24oKSB7XG4gICAgXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXG4vL2hlYWRlclxuY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbmNvbnN0IGgxID0gY3JlYXRlRWxlbWVudCgnaDEnKVxuY29uc3QgdGFiQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RhYi1jb250YWluZXInKVxuY29uc3QgbWVudVRhYiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51LXRhYicpXG5jb25zdCBjb250YWN0VGFiID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtdGFiJylcblxuLy9oZWFkZXIgY29udGVudFxubWVudVRhYi5pbm5lckhUTUwgPSAnTWVudSdcbmNvbnRhY3RUYWIuaW5uZXJIVE1MID0gJ0NvbnRhY3QgVXMnXG5cbi8vYXBwZW5kIEhlYWRlclxuaGVhZGVyLmFwcGVuZENoaWxkKGgxKVxuaGVhZGVyLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcilcbnRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGFiKVxudGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpXG5cblxuY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuY29uc3QgaGVyb0ltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJ2hlcm8taW1hZ2UnKVxuY29uc3QgY29weSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb3B5JylcblxuXG4vL2FwcGVuZCBET01cbnNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKVxuc2VjdGlvbi5hcHBlbmRDaGlsZChjb3B5KVxuXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbmNvcHkuaW5uZXJIVE1MID0gXCJMYSBGYW1pZ2xpYTogVGhlIEl0YWxpYW4gUmVzdGF1cmFudCB3aXRoIGEgVHdpc3QgQXQgTGEgRmFtaWdsaWEsIFxcbiB5b3VsbCBlbmpveSBhdXRoZW50aWMgSXRhbGlhbiBmb29kIGFuZCBhIHRocmlsbGluZyBhdG1vc3BoZXJlLiBPdXIgZGlzaGVzIGFyZSBtYWRlIHdpdGggZnJlc2ggaW5ncmVkaWVudHMgYW5kIGxvdmUsIGFuZCBvdXIgY3VzdG9tZXJzIGFyZSBsb3lhbCBhbmQgYXJtZWQuIERvbuKAmXQgd29ycnksIFxcbiB0aGV5IHdvbuKAmXQgaHVydCB5b3UgdW5sZXNzIHlvdSBkaXNyZXNwZWN0IHRoZSBmYW1pbHkuIFxcbiBDb21lIGRpbmUgd2l0aCB1cyB0b2RheSBhbmQgam9pbiB0aGUgYWR2ZW50dXJlIVwiXG5cblxuaGVyb0ltYWdlLnNyYyA9IHJlc3Rvc3RvY2tcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZVxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vbW9kdWxlcy9oZXJvL2hlcm9cIlxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlLWRvbVwiXG5cblxuY3JlYXRlRWxlbWVudCgpXG5ob21lKClcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=