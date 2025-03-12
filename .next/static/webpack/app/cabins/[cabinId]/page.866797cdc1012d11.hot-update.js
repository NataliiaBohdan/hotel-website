"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cabins/[cabinId]/page",{

/***/ "(app-pages-browser)/./app/_components/ReservationForm.js":
/*!********************************************!*\
  !*** ./app/_components/ReservationForm.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ReservationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReservationContext */ \"(app-pages-browser)/./app/_components/ReservationContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction ReservationForm(param) {\n    let { cabin, user } = param;\n    _s();\n    const { range } = (0,_ReservationContext__WEBPACK_IMPORTED_MODULE_1__.useReservation)();\n    const { maxCapacity, regularPrice, discount } = cabin;\n    const startDate = range.from;\n    const enddate = range.to;\n    const numNights = differenceInDays(range.to, range.from);\n    const cabinPrice = numNights * (regularPrice - discount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"scale-[1.01]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Logged in as\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                referrerPolicy: \"no-referrer\",\n                                className: \"h-8 rounded-full\",\n                                src: user.image,\n                                alt: user.name\n                            }, void 0, false, {\n                                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"numGuests\",\n                                children: \"How many guests?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"numGuests\",\n                                id: \"numGuests\",\n                                className: \"px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm\",\n                                required: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select number of guests...\"\n                                    }, \"\", false, {\n                                        fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this),\n                                    Array.from({\n                                        length: maxCapacity\n                                    }, (_, i)=>i + 1).map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: x,\n                                            children: [\n                                                x,\n                                                \" \",\n                                                x === 1 ? \"guest\" : \"guests\"\n                                            ]\n                                        }, x, true, {\n                                            fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"observations\",\n                                children: \"Anything we should know about your stay?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"observations\",\n                                id: \"observations\",\n                                className: \"px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm\",\n                                placeholder: \"Any pets, allergies, special requirements, etc.?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end items-center gap-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-primary-300 text-base\",\n                                children: \"Start by selecting dates\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300\",\n                                children: \"Reserve now\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nataliia/Desktop/the-wild-oasis-website/app/_components/ReservationForm.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(ReservationForm, \"/iLdXpJKl5cp0LdAOigEC0DKiPg=\", false, function() {\n    return [\n        _ReservationContext__WEBPACK_IMPORTED_MODULE_1__.useReservation\n    ];\n});\n_c = ReservationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReservationForm);\nvar _c;\n$RefreshReg$(_c, \"ReservationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9SZXNlcnZhdGlvbkZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFc0Q7QUFFdEQsU0FBU0MsZ0JBQWdCLEtBQWU7UUFBZixFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFmOztJQUN2QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHSixtRUFBY0E7SUFDaEMsTUFBTSxFQUFFSyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsUUFBUSxFQUFFLEdBQUdMO0lBQ2hELE1BQU1NLFlBQVlKLE1BQU1LLElBQUk7SUFDNUIsTUFBTUMsVUFBVU4sTUFBTU8sRUFBRTtJQUN4QixNQUFNQyxZQUFZQyxpQkFBaUJULE1BQU1PLEVBQUUsRUFBRVAsTUFBTUssSUFBSTtJQUN2RCxNQUFNSyxhQUFhRixZQUFhTixDQUFBQSxlQUFlQyxRQUFPO0lBRXRELHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FBRTs7Ozs7O2tDQUVILDhEQUFDRjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUNDQyxnQkFBZTtnQ0FDZkgsV0FBVTtnQ0FDVkksS0FBS2pCLEtBQUtrQixLQUFLO2dDQUNmQyxLQUFLbkIsS0FBS29CLElBQUk7Ozs7OzswQ0FFaEIsOERBQUNOOzBDQUFHZCxLQUFLb0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlqQiw4REFBQ0M7Z0JBQUtSLFdBQVU7O2tDQUNkLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUFNQyxTQUFROzBDQUFZOzs7Ozs7MENBQzNCLDhEQUFDQztnQ0FDQ0osTUFBSztnQ0FDTEssSUFBRztnQ0FDSFosV0FBVTtnQ0FDVmEsUUFBUTs7a0RBRVIsOERBQUNDO3dDQUFPQyxPQUFNO2tEQUFVO3VDQUFIOzs7OztvQ0FHcEJDLE1BQU12QixJQUFJLENBQUM7d0NBQUV3QixRQUFRNUI7b0NBQVksR0FBRyxDQUFDNkIsR0FBR0MsSUFBTUEsSUFBSSxHQUFHQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ3pELDhEQUFDUDs0Q0FBT0MsT0FBT007O2dEQUNaQTtnREFBRTtnREFBRUEsTUFBTSxJQUFJLFVBQVU7OzJDQURKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTzdCLDhEQUFDdEI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUztnQ0FBTUMsU0FBUTswQ0FBZTs7Ozs7OzBDQUc5Qiw4REFBQ1k7Z0NBQ0NmLE1BQUs7Z0NBQ0xLLElBQUc7Z0NBQ0haLFdBQVU7Z0NBQ1Z1QixhQUFZOzs7Ozs7Ozs7Ozs7a0NBSWhCLDhEQUFDeEI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBRUQsV0FBVTswQ0FBNkI7Ozs7OzswQ0FFMUMsOERBQUN3QjtnQ0FBT3hCLFdBQVU7MENBQW9LOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaE07R0FsRVNmOztRQUNXRCwrREFBY0E7OztLQUR6QkM7QUFvRVQsK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19jb21wb25lbnRzL1Jlc2VydmF0aW9uRm9ybS5qcz9iMGIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VSZXNlcnZhdGlvbiB9IGZyb20gXCIuL1Jlc2VydmF0aW9uQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBSZXNlcnZhdGlvbkZvcm0oeyBjYWJpbiwgdXNlciB9KSB7XG4gIGNvbnN0IHsgcmFuZ2UgfSA9IHVzZVJlc2VydmF0aW9uKCk7XG4gIGNvbnN0IHsgbWF4Q2FwYWNpdHksIHJlZ3VsYXJQcmljZSwgZGlzY291bnQgfSA9IGNhYmluO1xuICBjb25zdCBzdGFydERhdGUgPSByYW5nZS5mcm9tO1xuICBjb25zdCBlbmRkYXRlID0gcmFuZ2UudG87XG4gIGNvbnN0IG51bU5pZ2h0cyA9IGRpZmZlcmVuY2VJbkRheXMocmFuZ2UudG8sIHJhbmdlLmZyb20pO1xuICBjb25zdCBjYWJpblByaWNlID0gbnVtTmlnaHRzICogKHJlZ3VsYXJQcmljZSAtIGRpc2NvdW50KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2NhbGUtWzEuMDFdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnktODAwIHRleHQtcHJpbWFyeS0zMDAgcHgtMTYgcHktMiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHA+TG9nZ2VkIGluIGFzPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgc3JjPXt1c2VyLmltYWdlfVxuICAgICAgICAgICAgYWx0PXt1c2VyLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cD57dXNlci5uYW1lfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYmctcHJpbWFyeS05MDAgcHktMTAgcHgtMTYgdGV4dC1sZyBmbGV4IGdhcC01IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJudW1HdWVzdHNcIj5Ib3cgbWFueSBndWVzdHM/PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwibnVtR3Vlc3RzXCJcbiAgICAgICAgICAgIGlkPVwibnVtR3Vlc3RzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMyBiZy1wcmltYXJ5LTIwMCB0ZXh0LXByaW1hcnktODAwIHctZnVsbCBzaGFkb3ctc20gcm91bmRlZC1zbVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBrZXk9XCJcIj5cbiAgICAgICAgICAgICAgU2VsZWN0IG51bWJlciBvZiBndWVzdHMuLi5cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IG1heENhcGFjaXR5IH0sIChfLCBpKSA9PiBpICsgMSkubWFwKCh4KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3h9IGtleT17eH0+XG4gICAgICAgICAgICAgICAge3h9IHt4ID09PSAxID8gXCJndWVzdFwiIDogXCJndWVzdHNcIn1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9ic2VydmF0aW9uc1wiPlxuICAgICAgICAgICAgQW55dGhpbmcgd2Ugc2hvdWxkIGtub3cgYWJvdXQgeW91ciBzdGF5P1xuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBuYW1lPVwib2JzZXJ2YXRpb25zXCJcbiAgICAgICAgICAgIGlkPVwib2JzZXJ2YXRpb25zXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMyBiZy1wcmltYXJ5LTIwMCB0ZXh0LXByaW1hcnktODAwIHctZnVsbCBzaGFkb3ctc20gcm91bmRlZC1zbVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFueSBwZXRzLCBhbGxlcmdpZXMsIHNwZWNpYWwgcmVxdWlyZW1lbnRzLCBldGMuP1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBnYXAtNlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS0zMDAgdGV4dC1iYXNlXCI+U3RhcnQgYnkgc2VsZWN0aW5nIGRhdGVzPC9wPlxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1hY2NlbnQtNTAwIHB4LTggcHktNCB0ZXh0LXByaW1hcnktODAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctYWNjZW50LTYwMCB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6YmctZ3JheS01MDAgZGlzYWJsZWQ6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgUmVzZXJ2ZSBub3dcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VSZXNlcnZhdGlvbiIsIlJlc2VydmF0aW9uRm9ybSIsImNhYmluIiwidXNlciIsInJhbmdlIiwibWF4Q2FwYWNpdHkiLCJyZWd1bGFyUHJpY2UiLCJkaXNjb3VudCIsInN0YXJ0RGF0ZSIsImZyb20iLCJlbmRkYXRlIiwidG8iLCJudW1OaWdodHMiLCJkaWZmZXJlbmNlSW5EYXlzIiwiY2FiaW5QcmljZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJpbWciLCJyZWZlcnJlclBvbGljeSIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsInJlcXVpcmVkIiwib3B0aW9uIiwidmFsdWUiLCJBcnJheSIsImxlbmd0aCIsIl8iLCJpIiwibWFwIiwieCIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/ReservationForm.js\n"));

/***/ })

});