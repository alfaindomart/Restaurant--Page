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


// create DOM


const home =  function() {
    
const content = document.getElementById('content')

const contentContainer = (0,_create_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'content-container')

contentContainer.innerHTML = `
<header>
            <h1>La Regilia</h1>
            <div id="tabContainer">
                <div id="menu-tab">Menu</div>
                <div id="about-tab">About Us</div>
            </div>
        </header>
        <div id="main-content">
            <div id="hero-copy">
                <div id="big-copy">
                    <p>Best Japanese Bistro in Town, 30 Minutes From Your Place</p>
                </div>
                <div id="small-copy">
                    <p>Join our impact journey to increase coffee farmer income by connecting their
                    sustainability engagement all the way
                     to the coffee in your cup.</p>
                </div>
                <div class="btn-container">
                    <button id="see-offer">See Our Offers</button>
                </div>  
            </div>
            <div id="hero-image">
                <img src="images/stereotypical-italian-man-eating-pizza-and-gesturing-with-hand-B0X2J1.jpg" alt="" srcset="">
            </div>
        </div>
        <div id="bottom-content">
            <h2>Find Your Fate in La Regilia</h2>
            <div id="bottom-copy">
                <p>Enjoy authentic italian bistro experience. Every meal deserve a customary accompainment from a stereotypical italian man</p>
            </div>
            <div id="content-hover-container">
                <div class="content-hover">
                    <img src="images/chef-hands-making-spaghetti-pasta-noodles-fresh-pasta-black-table-flour-chef-hands-making-spaghetti-pasta-noodles-144856209.webp" alt="" srcset="">
                    <div class="hover-text">
                        <p>
                            Making a handmade pasta noodle all-puporse flour. 
                            Image is taken after a 5 minute search in Bing because google is making it harder to save image.</p>
                    </div>
                </div>
                <div class="content-hover">
                    <img src="images/close-up-hands-holding-pasta_23-2148584844.webp" alt="" srcset="">
                    <div class="hover-text">
                        <caption>Size 13 La-Fonte Pasta. This is the only pasta that 95% of indonesian can eat.</caption>
                    </div>
                </div>
                <div class="content-hover">
                    <img src="images/pizza-cut-segments-piece-being-taken-female-hand-98074914.webp" alt="" srcset="">
                    <div class="hover-text">
                        <p>Neapolitan Pizza with extra cheese, the delivery was a bit late but it was still good after a microwave magic</p>
                    </div>
                </div>
                <div class="content-hover">
                    <img src="images/IMG_1603-3.webp" alt="" srcset="">
                    <div class="hover-text">
                        <caption>Frozen al giouli pasta, freshly warmed by the hand of our staff for maximum body salt penetration.</caption>
                    </div>
                </div>
            </div>
        </div>
`

content.appendChild(contentContainer)

console.log(contentContainer)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);






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
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hero/hero */ "./src/modules/hero/hero.js");
/* harmony import */ var _create_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-dom */ "./src/create-dom.js");




(0,_create_dom__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_modules_hero_hero__WEBPACK_IMPORTED_MODULE_0__["default"])()

const content = document.getElementById('content')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNYZ0M7O0FBRS9DOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLDBEQUFhOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7O1VDOUVuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNFOzs7QUFHeEMsdURBQWE7QUFDYiwrREFBSTs7QUFFSixrRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGUtZG9tLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlcm8vaGVyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGlkLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChpZCkge1xuICAgICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gIFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uLy4uL2NyZWF0ZS1kb20uanNcIlxuXG4vLyBjcmVhdGUgRE9NXG5cblxuY29uc3QgaG9tZSA9ICBmdW5jdGlvbigpIHtcbiAgICBcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGVudC1jb250YWluZXInKVxuXG5jb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbjxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+TGEgUmVnaWxpYTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidGFiQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnUtdGFiXCI+TWVudTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhYm91dC10YWJcIj5BYm91dCBVczwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGVyby1jb3B5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJpZy1jb3B5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkJlc3QgSmFwYW5lc2UgQmlzdHJvIGluIFRvd24sIDMwIE1pbnV0ZXMgRnJvbSBZb3VyIFBsYWNlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzbWFsbC1jb3B5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkpvaW4gb3VyIGltcGFjdCBqb3VybmV5IHRvIGluY3JlYXNlIGNvZmZlZSBmYXJtZXIgaW5jb21lIGJ5IGNvbm5lY3RpbmcgdGhlaXJcbiAgICAgICAgICAgICAgICAgICAgc3VzdGFpbmFiaWxpdHkgZW5nYWdlbWVudCBhbGwgdGhlIHdheVxuICAgICAgICAgICAgICAgICAgICAgdG8gdGhlIGNvZmZlZSBpbiB5b3VyIGN1cC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNlZS1vZmZlclwiPlNlZSBPdXIgT2ZmZXJzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImhlcm8taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zdGVyZW90eXBpY2FsLWl0YWxpYW4tbWFuLWVhdGluZy1waXp6YS1hbmQtZ2VzdHVyaW5nLXdpdGgtaGFuZC1CMFgySjEuanBnXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJib3R0b20tY29udGVudFwiPlxuICAgICAgICAgICAgPGgyPkZpbmQgWW91ciBGYXRlIGluIExhIFJlZ2lsaWE8L2gyPlxuICAgICAgICAgICAgPGRpdiBpZD1cImJvdHRvbS1jb3B5XCI+XG4gICAgICAgICAgICAgICAgPHA+RW5qb3kgYXV0aGVudGljIGl0YWxpYW4gYmlzdHJvIGV4cGVyaWVuY2UuIEV2ZXJ5IG1lYWwgZGVzZXJ2ZSBhIGN1c3RvbWFyeSBhY2NvbXBhaW5tZW50IGZyb20gYSBzdGVyZW90eXBpY2FsIGl0YWxpYW4gbWFuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1ob3Zlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jaGVmLWhhbmRzLW1ha2luZy1zcGFnaGV0dGktcGFzdGEtbm9vZGxlcy1mcmVzaC1wYXN0YS1ibGFjay10YWJsZS1mbG91ci1jaGVmLWhhbmRzLW1ha2luZy1zcGFnaGV0dGktcGFzdGEtbm9vZGxlcy0xNDQ4NTYyMDkud2VicFwiIGFsdD1cIlwiIHNyY3NldD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG92ZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFraW5nIGEgaGFuZG1hZGUgcGFzdGEgbm9vZGxlIGFsbC1wdXBvcnNlIGZsb3VyLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZSBpcyB0YWtlbiBhZnRlciBhIDUgbWludXRlIHNlYXJjaCBpbiBCaW5nIGJlY2F1c2UgZ29vZ2xlIGlzIG1ha2luZyBpdCBoYXJkZXIgdG8gc2F2ZSBpbWFnZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Nsb3NlLXVwLWhhbmRzLWhvbGRpbmctcGFzdGFfMjMtMjE0ODU4NDg0NC53ZWJwXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Zlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2FwdGlvbj5TaXplIDEzIExhLUZvbnRlIFBhc3RhLiBUaGlzIGlzIHRoZSBvbmx5IHBhc3RhIHRoYXQgOTUlIG9mIGluZG9uZXNpYW4gY2FuIGVhdC48L2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3BpenphLWN1dC1zZWdtZW50cy1waWVjZS1iZWluZy10YWtlbi1mZW1hbGUtaGFuZC05ODA3NDkxNC53ZWJwXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Zlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5OZWFwb2xpdGFuIFBpenphIHdpdGggZXh0cmEgY2hlZXNlLCB0aGUgZGVsaXZlcnkgd2FzIGEgYml0IGxhdGUgYnV0IGl0IHdhcyBzdGlsbCBnb29kIGFmdGVyIGEgbWljcm93YXZlIG1hZ2ljPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9JTUdfMTYwMy0zLndlYnBcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdmVyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYXB0aW9uPkZyb3plbiBhbCBnaW91bGkgcGFzdGEsIGZyZXNobHkgd2FybWVkIGJ5IHRoZSBoYW5kIG9mIG91ciBzdGFmZiBmb3IgbWF4aW11bSBib2R5IHNhbHQgcGVuZXRyYXRpb24uPC9jYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbmBcblxuY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKVxuXG5jb25zb2xlLmxvZyhjb250ZW50Q29udGFpbmVyKVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vbW9kdWxlcy9oZXJvL2hlcm9cIlxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlLWRvbVwiXG5cblxuY3JlYXRlRWxlbWVudCgpXG5ob21lKClcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=