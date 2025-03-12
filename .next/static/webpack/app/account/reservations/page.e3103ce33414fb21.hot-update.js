"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/account/reservations/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("// This file must be bundled in the app's client layer, it shouldn't be directly\n// imported by the server.\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"createServerReference\", ({\n    enumerable: true,\n    get: function() {\n        return createServerReference;\n    }\n}));\nconst _appcallserver = __webpack_require__(/*! next/dist/client/app-call-server */ \"(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js\");\nfunction createServerReference(id) {\n    // Since we're using the Edge build of Flight client for SSR [1], here we need to\n    // also use the same Edge build to create the reference. For the client bundle,\n    // we use the default and let Webpack to resolve it to the correct version.\n    // 1: https://github.com/vercel/next.js/blob/16eb80b0b0be13f04a6407943664b5efd8f3d7d0/packages/next/src/server/app-render/use-flight-response.tsx#L24-L26\n    const { createServerReference: createServerReferenceImpl } =  false ? 0 : __webpack_require__(/*! react-server-dom-webpack/client */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-server-dom-webpack/client.js\");\n    return createServerReferenceImpl(id, _appcallserver.callServer);\n}\n\n//# sourceMappingURL=action-client-wrapper.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseURBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdUJBQXVCLG1CQUFPLENBQUMsZ0hBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFtRCxFQUFFLE1BQTBCLEdBQUcsQ0FBK0MsR0FBRyxtQkFBTyxDQUFDLGlJQUFpQztBQUN6TDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanM/MTYwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgbXVzdCBiZSBidW5kbGVkIGluIHRoZSBhcHAncyBjbGllbnQgbGF5ZXIsIGl0IHNob3VsZG4ndCBiZSBkaXJlY3RseVxuLy8gaW1wb3J0ZWQgYnkgdGhlIHNlcnZlci5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlU2VydmVyUmVmZXJlbmNlXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTZXJ2ZXJSZWZlcmVuY2U7XG4gICAgfVxufSk7XG5jb25zdCBfYXBwY2FsbHNlcnZlciA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvY2xpZW50L2FwcC1jYWxsLXNlcnZlclwiKTtcbmZ1bmN0aW9uIGNyZWF0ZVNlcnZlclJlZmVyZW5jZShpZCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIHVzaW5nIHRoZSBFZGdlIGJ1aWxkIG9mIEZsaWdodCBjbGllbnQgZm9yIFNTUiBbMV0sIGhlcmUgd2UgbmVlZCB0b1xuICAgIC8vIGFsc28gdXNlIHRoZSBzYW1lIEVkZ2UgYnVpbGQgdG8gY3JlYXRlIHRoZSByZWZlcmVuY2UuIEZvciB0aGUgY2xpZW50IGJ1bmRsZSxcbiAgICAvLyB3ZSB1c2UgdGhlIGRlZmF1bHQgYW5kIGxldCBXZWJwYWNrIHRvIHJlc29sdmUgaXQgdG8gdGhlIGNvcnJlY3QgdmVyc2lvbi5cbiAgICAvLyAxOiBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvYmxvYi8xNmViODBiMGIwYmUxM2YwNGE2NDA3OTQzNjY0YjVlZmQ4ZjNkN2QwL3BhY2thZ2VzL25leHQvc3JjL3NlcnZlci9hcHAtcmVuZGVyL3VzZS1mbGlnaHQtcmVzcG9uc2UudHN4I0wyNC1MMjZcbiAgICBjb25zdCB7IGNyZWF0ZVNlcnZlclJlZmVyZW5jZTogY3JlYXRlU2VydmVyUmVmZXJlbmNlSW1wbCB9ID0gISFwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPyByZXF1aXJlKFwicmVhY3Qtc2VydmVyLWRvbS13ZWJwYWNrL2NsaWVudC5lZGdlXCIpIDogcmVxdWlyZShcInJlYWN0LXNlcnZlci1kb20td2VicGFjay9jbGllbnRcIik7XG4gICAgcmV0dXJuIGNyZWF0ZVNlcnZlclJlZmVyZW5jZUltcGwoaWQsIF9hcHBjYWxsc2VydmVyLmNhbGxTZXJ2ZXIpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/_components/DeleteReservation.js":
/*!**********************************************!*\
  !*** ./app/_components/DeleteReservation.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_TrashIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=TrashIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/TrashIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/actions */ \"(app-pages-browser)/./app/_lib/actions.js\");\n/* harmony import */ var _SpinnerMini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpinnerMini */ \"(app-pages-browser)/./app/_components/SpinnerMini.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction DeleteReservation(param) {\n    let { bookingId } = param;\n    _s();\n    const [isPending, startTransition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useTransition)();\n    function handleDelete() {\n        if (confirm(\"Are you sure you want to delete this reservation?\")) startTransition(()=>(0,_lib_actions__WEBPACK_IMPORTED_MODULE_2__.deleteBooking)(bookingId));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleDelete,\n        className: \"group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900\",\n        children: !isPending ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TrashIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors\"\n                }, void 0, false, {\n                    fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/DeleteReservation.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"mt-1\",\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/DeleteReservation.js\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpinnerMini__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/DeleteReservation.js\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/DeleteReservation.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/DeleteReservation.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(DeleteReservation, \"F6rOvlKxJWx0auMIl1x3Vgc91fQ=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_1__.useTransition\n    ];\n});\n_c = DeleteReservation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteReservation);\nvar _c;\n$RefreshReg$(_c, \"DeleteReservation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9EZWxldGVSZXNlcnZhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDc0Q7QUFDaEI7QUFDVTtBQUNSO0FBRXhDLFNBQVNJLGtCQUFrQixLQUFhO1FBQWIsRUFBRUMsU0FBUyxFQUFFLEdBQWI7O0lBQ3pCLE1BQU0sQ0FBQ0MsV0FBV0MsZ0JBQWdCLEdBQUdOLG9EQUFhQTtJQUNsRCxTQUFTTztRQUNQLElBQUlDLFFBQVEsc0RBQ1ZGLGdCQUFnQixJQUFNTCwyREFBYUEsQ0FBQ0c7SUFDeEM7SUFDQSxxQkFDRSw4REFBQ0s7UUFDQ0MsU0FBU0g7UUFDVEksV0FBVTtrQkFFVCxDQUFDTiwwQkFDQTs7OEJBQ0UsOERBQUNOLGlHQUFTQTtvQkFBQ1ksV0FBVTs7Ozs7OzhCQUNyQiw4REFBQ0M7b0JBQUtELFdBQVU7OEJBQU87Ozs7Ozs7eUNBR3pCLDhEQUFDQztZQUFLRCxXQUFVO3NCQUNkLDRFQUFDVCxvREFBV0E7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQXZCU0M7O1FBQzhCSCxnREFBYUE7OztLQUQzQ0c7QUF5QlQsK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2NvbXBvbmVudHMvRGVsZXRlUmVzZXJ2YXRpb24uanM/NWYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IFRyYXNoSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkZWxldGVCb29raW5nIH0gZnJvbSBcIi4uL19saWIvYWN0aW9uc1wiO1xuaW1wb3J0IFNwaW5uZXJNaW5pIGZyb20gXCIuL1NwaW5uZXJNaW5pXCI7XG5cbmZ1bmN0aW9uIERlbGV0ZVJlc2VydmF0aW9uKHsgYm9va2luZ0lkIH0pIHtcbiAgY29uc3QgW2lzUGVuZGluZywgc3RhcnRUcmFuc2l0aW9uXSA9IHVzZVRyYW5zaXRpb24oKTtcbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKCkge1xuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlc2VydmF0aW9uP1wiKSlcbiAgICAgIHN0YXJ0VHJhbnNpdGlvbigoKSA9PiBkZWxldGVCb29raW5nKGJvb2tpbmdJZCkpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdXBwZXJjYXNlIHRleHQteHMgZm9udC1ib2xkIHRleHQtcHJpbWFyeS0zMDAgZmxleC1ncm93IHB4LTMgaG92ZXI6YmctYWNjZW50LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjp0ZXh0LXByaW1hcnktOTAwXCJcbiAgICA+XG4gICAgICB7IWlzUGVuZGluZyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8VHJhc2hJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1wcmltYXJ5LTYwMCBncm91cC1ob3Zlcjp0ZXh0LXByaW1hcnktODAwIHRyYW5zaXRpb24tY29sb3JzXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0xXCI+RGVsZXRlPC9zcGFuPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cbiAgICAgICAgICA8U3Bpbm5lck1pbmkgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKX1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlUmVzZXJ2YXRpb247XG4iXSwibmFtZXMiOlsiVHJhc2hJY29uIiwidXNlVHJhbnNpdGlvbiIsImRlbGV0ZUJvb2tpbmciLCJTcGlubmVyTWluaSIsIkRlbGV0ZVJlc2VydmF0aW9uIiwiYm9va2luZ0lkIiwiaXNQZW5kaW5nIiwic3RhcnRUcmFuc2l0aW9uIiwiaGFuZGxlRGVsZXRlIiwiY29uZmlybSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/DeleteReservation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/_lib/actions.js":
/*!*****************************!*\
  !*** ./app/_lib/actions.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBooking: function() { return /* binding */ createBooking; },
/* harmony export */   deleteBooking: function() { return /* binding */ deleteBooking; },
/* harmony export */   signInAction: function() { return /* binding */ signInAction; },
/* harmony export */   signOutAction: function() { return /* binding */ signOutAction; },
/* harmony export */   updateBooking: function() { return /* binding */ updateBooking; },
/* harmony export */   updateGuest: function() { return /* binding */ updateGuest; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"1858859c1b71b8d029e5c5d878da3e3835b7cf8e":"signInAction","289a7cdeaf10b81e333cb3bf7858091da685c04b":"signOutAction","8edde1b7562632516baa33b83e089f179c324dcc":"createBooking","9c8766d46c2eeb73b13062d818a66fd9ba023e17":"deleteBooking","bb8cadf164ded144763f2c08f2df351c597e8df6":"updateBooking","bd5ba510dcaff9e3d873ba2a6eec10afe42aaee3":"updateGuest"} */ var signOutAction = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("289a7cdeaf10b81e333cb3bf7858091da685c04b");

var updateGuest = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("bd5ba510dcaff9e3d873ba2a6eec10afe42aaee3");
var createBooking = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("8edde1b7562632516baa33b83e089f179c324dcc");
var deleteBooking = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("9c8766d46c2eeb73b13062d818a66fd9ba023e17");
var updateBooking = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("bb8cadf164ded144763f2c08f2df351c597e8df6");
var signInAction = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("1858859c1b71b8d029e5c5d878da3e3835b7cf8e");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});