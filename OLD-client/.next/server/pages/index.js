"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/models/cache.ts":
/*!*****************************!*\
  !*** ./src/models/cache.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isUserLoggedInVar\": () => (/* binding */ isUserLoggedInVar),\n/* harmony export */   \"notificationsVar\": () => (/* binding */ notificationsVar),\n/* harmony export */   \"cache\": () => (/* binding */ cache)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\nvar _globalThis$localStor;\n\n // Types\n\n\nconst isUserLoggedInVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.makeVar)(!!((_globalThis$localStor = globalThis.localStorage) !== null && _globalThis$localStor !== void 0 && _globalThis$localStor.authToken));\nconst notificationsVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.makeVar)([\n  /*\n  {\n  \tid: 1,\n  \tmessage: 'New record added successfully.',\n  \ttitle: 'Record added',\n  \ttype: 'success',\n  },\n  {\n  \tid: 2,\n  \tmessage: 'Invalid username or password.',\n  \ttitle: 'Authentication error',\n  \ttype: 'error',\n  },\n  {\n  \tid: 3,\n  \tmessage: 'New category added successfully.',\n  \ttitle: 'Category added',\n  \ttype: 'success',\n  },\n  */\n]);\nconst cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({\n  typePolicies: {\n    Query: {\n      fields: {\n        isUserLoggedIn: {\n          read() {\n            var _globalThis$localStor2;\n\n            return !!((_globalThis$localStor2 = globalThis.localStorage) !== null && _globalThis$localStor2 !== void 0 && _globalThis$localStor2.authToken);\n          }\n\n        },\n        notifications: {\n          read() {\n            return notificationsVar();\n          }\n\n        }\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL2NhY2hlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUVPLE1BQU1FLGlCQUFpQixHQUFHRix1REFBTyxDQUFVLENBQUMsMkJBQUNHLFVBQVUsQ0FBQ0MsWUFBWixrREFBQyxzQkFBeUJDLFNBQTFCLENBQVgsQ0FBakM7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBR04sdURBQU8sQ0FBa0I7QUFDeEQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCeUQsQ0FBbEIsQ0FBaEM7QUF1QkEsTUFBTU8sS0FBb0IsR0FBRyxJQUFJTix5REFBSixDQUFrQjtBQUNyRE8sRUFBQUEsWUFBWSxFQUFFO0FBQ2JDLElBQUFBLEtBQUssRUFBRTtBQUNOQyxNQUFBQSxNQUFNLEVBQUU7QUFDUEMsUUFBQUEsY0FBYyxFQUFFO0FBQ2ZDLFVBQUFBLElBQUksR0FBRztBQUFBOztBQUNOLG1CQUFPLENBQUMsNEJBQUNULFVBQVUsQ0FBQ0MsWUFBWixtREFBQyx1QkFBeUJDLFNBQTFCLENBQVI7QUFDQTs7QUFIYyxTQURUO0FBTVBRLFFBQUFBLGFBQWEsRUFBRTtBQUNkRCxVQUFBQSxJQUFJLEdBQUc7QUFDTixtQkFBT04sZ0JBQWdCLEVBQXZCO0FBQ0E7O0FBSGE7QUFOUjtBQURGO0FBRE07QUFEdUMsQ0FBbEIsQ0FBN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvbW9kZWxzL2NhY2hlLnRzP2QwYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVZhciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5leHBvcnQgY29uc3QgaXNVc2VyTG9nZ2VkSW5WYXIgPSBtYWtlVmFyPGJvb2xlYW4+KCEhZ2xvYmFsVGhpcy5sb2NhbFN0b3JhZ2U/LmF1dGhUb2tlbilcblxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbnNWYXIgPSBtYWtlVmFyPElOb3RpZmljYXRpb25bXT4oW1xuXHQvKlxuXHR7XG5cdFx0aWQ6IDEsXG5cdFx0bWVzc2FnZTogJ05ldyByZWNvcmQgYWRkZWQgc3VjY2Vzc2Z1bGx5LicsXG5cdFx0dGl0bGU6ICdSZWNvcmQgYWRkZWQnLFxuXHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0fSxcblx0e1xuXHRcdGlkOiAyLFxuXHRcdG1lc3NhZ2U6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLicsXG5cdFx0dGl0bGU6ICdBdXRoZW50aWNhdGlvbiBlcnJvcicsXG5cdFx0dHlwZTogJ2Vycm9yJyxcblx0fSxcblx0e1xuXHRcdGlkOiAzLFxuXHRcdG1lc3NhZ2U6ICdOZXcgY2F0ZWdvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5LicsXG5cdFx0dGl0bGU6ICdDYXRlZ29yeSBhZGRlZCcsXG5cdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHR9LFxuKi9cbl0pXG5cbmV4cG9ydCBjb25zdCBjYWNoZTogSW5NZW1vcnlDYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKHtcblx0dHlwZVBvbGljaWVzOiB7XG5cdFx0UXVlcnk6IHtcblx0XHRcdGZpZWxkczoge1xuXHRcdFx0XHRpc1VzZXJMb2dnZWRJbjoge1xuXHRcdFx0XHRcdHJlYWQoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gISFnbG9iYWxUaGlzLmxvY2FsU3RvcmFnZT8uYXV0aFRva2VuXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bm90aWZpY2F0aW9uczoge1xuXHRcdFx0XHRcdHJlYWQoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbm90aWZpY2F0aW9uc1ZhcigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvbiB7XG5cdGlkOiBudW1iZXJcblx0bWVzc2FnZTogc3RyaW5nXG5cdHRpdGxlOiBzdHJpbmdcblx0dHlwZTogJ2Vycm9yJyB8ICdzdWNjZXNzJ1xufVxuIl0sIm5hbWVzIjpbIm1ha2VWYXIiLCJJbk1lbW9yeUNhY2hlIiwiaXNVc2VyTG9nZ2VkSW5WYXIiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiYXV0aFRva2VuIiwibm90aWZpY2F0aW9uc1ZhciIsImNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJpc1VzZXJMb2dnZWRJbiIsInJlYWQiLCJub3RpZmljYXRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/models/cache.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _models_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #models/cache */ \"./src/models/cache.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/me/Documents/projects/portal/client/src/pages/index.tsx\";\n\n\nfunction Home() {\n  const addNotification = () => {\n    (0,_models_cache__WEBPACK_IMPORTED_MODULE_0__.notificationsVar)([]);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Home page 8\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, facilis inventore quis odio quibusdam reiciendis laborum dicta quod magni vitae eaque animi quidem nemo quo? Tenetur corrupti quae perspiciatis minima excepturi reprehenderit provident facilis fugiat maiores recusandae commodi, eius, ducimus, velit ea omnis fugit iure voluptatibus vitae? Ab assumenda, eveniet deserunt iure magnam dolorem libero nihil inventore aspernatur est perferendis molestiae error pariatur, ad nisi cupiditate consequatur, fugiat nam. Culpa minus eius optio voluptatem rem quos laboriosam consequuntur facilis, nisi recusandae dignissimos adipisci ut omnis eveniet eligendi? Atque ratione non cumque earum, laborum harum recusandae, porro similique ducimus voluptatum unde.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: addNotification,\n      children: \"hehe\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUM5QixRQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM3QkYsSUFBQUEsK0RBQWdCLENBQUMsRUFBRCxDQUFoQjtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQWFDO0FBQVEsYUFBTyxFQUFFRSxlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBaUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vdGlmaWNhdGlvbnNWYXIgfSBmcm9tICcjbW9kZWxzL2NhY2hlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXHRjb25zdCBhZGROb3RpZmljYXRpb24gPSAoKSA9PiB7XG5cdFx0bm90aWZpY2F0aW9uc1ZhcihbXSlcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5Ib21lIHBhZ2UgODwvaDE+XG5cdFx0XHQ8cD5cblx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1b3MsIGZhY2lsaXMgaW52ZW50b3JlIHF1aXMgb2Rpb1xuXHRcdFx0XHRxdWlidXNkYW0gcmVpY2llbmRpcyBsYWJvcnVtIGRpY3RhIHF1b2QgbWFnbmkgdml0YWUgZWFxdWUgYW5pbWkgcXVpZGVtIG5lbW8gcXVvPyBUZW5ldHVyXG5cdFx0XHRcdGNvcnJ1cHRpIHF1YWUgcGVyc3BpY2lhdGlzIG1pbmltYSBleGNlcHR1cmkgcmVwcmVoZW5kZXJpdCBwcm92aWRlbnQgZmFjaWxpcyBmdWdpYXQgbWFpb3Jlc1xuXHRcdFx0XHRyZWN1c2FuZGFlIGNvbW1vZGksIGVpdXMsIGR1Y2ltdXMsIHZlbGl0IGVhIG9tbmlzIGZ1Z2l0IGl1cmUgdm9sdXB0YXRpYnVzIHZpdGFlPyBBYlxuXHRcdFx0XHRhc3N1bWVuZGEsIGV2ZW5pZXQgZGVzZXJ1bnQgaXVyZSBtYWduYW0gZG9sb3JlbSBsaWJlcm8gbmloaWwgaW52ZW50b3JlIGFzcGVybmF0dXIgZXN0XG5cdFx0XHRcdHBlcmZlcmVuZGlzIG1vbGVzdGlhZSBlcnJvciBwYXJpYXR1ciwgYWQgbmlzaSBjdXBpZGl0YXRlIGNvbnNlcXVhdHVyLCBmdWdpYXQgbmFtLiBDdWxwYVxuXHRcdFx0XHRtaW51cyBlaXVzIG9wdGlvIHZvbHVwdGF0ZW0gcmVtIHF1b3MgbGFib3Jpb3NhbSBjb25zZXF1dW50dXIgZmFjaWxpcywgbmlzaSByZWN1c2FuZGFlXG5cdFx0XHRcdGRpZ25pc3NpbW9zIGFkaXBpc2NpIHV0IG9tbmlzIGV2ZW5pZXQgZWxpZ2VuZGk/IEF0cXVlIHJhdGlvbmUgbm9uIGN1bXF1ZSBlYXJ1bSwgbGFib3J1bVxuXHRcdFx0XHRoYXJ1bSByZWN1c2FuZGFlLCBwb3JybyBzaW1pbGlxdWUgZHVjaW11cyB2b2x1cHRhdHVtIHVuZGUuXG5cdFx0XHQ8L3A+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2FkZE5vdGlmaWNhdGlvbn0+aGVoZTwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iXSwibmFtZXMiOlsibm90aWZpY2F0aW9uc1ZhciIsIkhvbWUiLCJhZGROb3RpZmljYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();