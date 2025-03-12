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

/***/ "(app-pages-browser)/./app/_components/ReservationList.js":
/*!********************************************!*\
  !*** ./app/_components/ReservationList.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ReservationCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReservationCard */ \"(app-pages-browser)/./app/_components/ReservationCard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/actions */ \"(app-pages-browser)/./app/_lib/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ReservationList(bookings) {\n    _s();\n    const [optimisticBookings, optimisticDelete] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useOptimistic)(bookings, (curBooking, bookingId)=>{});\n    async function handleDelete(bookingId) {\n        optimisticDelete(bookingId);\n        await (0,_lib_actions__WEBPACK_IMPORTED_MODULE_3__.deleteBooking)(bookingId);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"space-y-6\",\n        children: optimisticBookings.map((booking)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReservationCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                booking: booking,\n                onDelete: handleDelete\n            }, booking.id, false, {\n                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationList.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationList.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ReservationList, \"+HeD6gbyhj38MNJPRFvIVGtLRVk=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_2__.useOptimistic\n    ];\n});\n_c = ReservationList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReservationList);\nvar _c;\n$RefreshReg$(_c, \"ReservationList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9SZXNlcnZhdGlvbkxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFZ0Q7QUFDVjtBQUNVO0FBRWhELFNBQVNHLGdCQUFnQkMsUUFBUTs7SUFDL0IsTUFBTSxDQUFDQyxvQkFBb0JDLGlCQUFpQixHQUFHTCxvREFBYUEsQ0FDMURHLFVBQ0EsQ0FBQ0csWUFBWUMsYUFBZTtJQUU5QixlQUFlQyxhQUFhRCxTQUFTO1FBQ25DRixpQkFBaUJFO1FBQ2pCLE1BQU1OLDJEQUFhQSxDQUFDTTtJQUN0QjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFHQyxXQUFVO2tCQUNYTixtQkFBbUJPLEdBQUcsQ0FBQyxDQUFDQyx3QkFDdkIsOERBQUNiLHdEQUFlQTtnQkFDZGEsU0FBU0E7Z0JBRVRDLFVBQVVMO2VBRExJLFFBQVFFLEVBQUU7Ozs7Ozs7Ozs7QUFNekI7R0FwQlNaOztRQUN3Q0YsZ0RBQWFBOzs7S0FEckRFO0FBc0JULCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fY29tcG9uZW50cy9SZXNlcnZhdGlvbkxpc3QuanM/NGMxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlc2VydmF0aW9uQ2FyZCBmcm9tIFwiLi9SZXNlcnZhdGlvbkNhcmRcIjtcbmltcG9ydCB7IHVzZU9wdGltaXN0aWMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRlbGV0ZUJvb2tpbmcgfSBmcm9tIFwiLi4vX2xpYi9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIFJlc2VydmF0aW9uTGlzdChib29raW5ncykge1xuICBjb25zdCBbb3B0aW1pc3RpY0Jvb2tpbmdzLCBvcHRpbWlzdGljRGVsZXRlXSA9IHVzZU9wdGltaXN0aWMoXG4gICAgYm9va2luZ3MsXG4gICAgKGN1ckJvb2tpbmcsIGJvb2tpbmdJZCkgPT4ge31cbiAgKTtcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKGJvb2tpbmdJZCkge1xuICAgIG9wdGltaXN0aWNEZWxldGUoYm9va2luZ0lkKTtcbiAgICBhd2FpdCBkZWxldGVCb29raW5nKGJvb2tpbmdJZCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICB7b3B0aW1pc3RpY0Jvb2tpbmdzLm1hcCgoYm9va2luZykgPT4gKFxuICAgICAgICA8UmVzZXJ2YXRpb25DYXJkXG4gICAgICAgICAgYm9va2luZz17Ym9va2luZ31cbiAgICAgICAgICBrZXk9e2Jvb2tpbmcuaWR9XG4gICAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uTGlzdDtcbiJdLCJuYW1lcyI6WyJSZXNlcnZhdGlvbkNhcmQiLCJ1c2VPcHRpbWlzdGljIiwiZGVsZXRlQm9va2luZyIsIlJlc2VydmF0aW9uTGlzdCIsImJvb2tpbmdzIiwib3B0aW1pc3RpY0Jvb2tpbmdzIiwib3B0aW1pc3RpY0RlbGV0ZSIsImN1ckJvb2tpbmciLCJib29raW5nSWQiLCJoYW5kbGVEZWxldGUiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsImJvb2tpbmciLCJvbkRlbGV0ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/ReservationList.js\n"));

/***/ })

});