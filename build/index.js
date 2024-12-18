/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* wp.blocks.registerBlockType('namespace/custom name that is unique') */
wp.blocks.registerBlockType('ourplugin/custom-block', {
  title: 'Are You Paying Attention?',
  icon: 'smiley',
  category: 'common',
  attributes: {
    skyColor: {
      type: 'string'
    },
    grassColor: {
      type: 'string'
    }
  },
  /* controls what you will see in the admin editor screen */
  edit: function (props) {
    // return wp.element.createElement(type of html element, properties or attributes to this element, children or content for this element);
    /*
     **To create complex html to be interactive in the admin editor screen we would need
     **To use JSX that help us build Complex HTML with attributes properties easily.
     */

    function updateSkyColor(event) {
      props.setAttributes({
        skyColor: event.target.value
      });
    }
    function updateGrassColor(event) {
      props.setAttributes({
        grassColor: event.target.value
      });
    }

    /* We will make the block interactive in the editor screen. */
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        type: "text",
        placeholder: "sky color",
        value: props.attributes.skyColor,
        onChange: updateSkyColor
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        type: "text",
        placeholder: "grass color",
        value: props.attributes.grassColor,
        onChange: updateGrassColor
      })]
    });
  },
  /* controls what  will the public see on  the frontend */
  /**
   * when the function is returning null, it means we're moving the responsibility from javascript
   * to php. this means you don't have to save static text into the database and let php to determine the value on the fly. */
  save: function (props) {
    return null;
  }
  // save: function (props) {
  //   return (
  //     <h3>
  //       Today the sky is {props.attributes.skyColor} and the grass is
  //       {props.attributes.grassColor}
  //     </h3>
  //   ); // wordpress will take the value returned from here and save it in the database
  //   //and on the frontend will load the value of the database and doesn't load the javascript file on the frontend.
  // },
  // deprecated: [{
  //   attributes: {
  //     skyColor: { type: 'string' },
  //     grassColor: { type: 'string' },
  //   },
  //   save: function (props) {
  //     return (
  //       <p>
  //         Today the sky is {props.attributes.skyColor} and the grass is{' '}
  //         {props.attributes.grassColor}
  //       </p>
  //     ); // wordpress will take the value returned from here and save it in the database
  //     //and on the frontend will load the value of the database and doesn't load the javascript file on the frontend.
  //   }
  // }]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map