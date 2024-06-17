"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stake",{

/***/ "./src/pages/stake.tsx":
/*!*****************************!*\
  !*** ./src/pages/stake.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/starknet-provider */ \"./src/components/starknet-provider.tsx\");\n/* harmony import */ var _components_WalletBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/WalletBar */ \"./src/components/WalletBar.tsx\");\n/* harmony import */ var _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/dropdown */ \"./src/components/ui/dropdown.tsx\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/select */ \"./src/components/select.tsx\");\n\n\n\n\n\n\nconst chainStyle = {\n    backgroundColor: \"#7C7484\",\n    color: \"white\",\n    borderRadius: \"10px\",\n    textAlign: \"center\"\n};\nconst tokenStyle = {\n    color: \"white\",\n    borderRadius: \"25px\",\n    display: \"flex\",\n    justifyContent: \"space-evenly\"\n};\nconst tokenTypes = [\n    \"ETH\",\n    \"USDC\",\n    \"USDT\"\n];\nconst Stake = ()=>{\n    const options = [\n        {\n            label: \"Starknet\",\n            value: \"Starknet\"\n        },\n        {\n            label: \"zkSync\",\n            value: \"zkSync\"\n        }\n    ];\n    const handleSelect = (option)=>{\n        console.log(\"Selected:\", option);\n    };\n    const tokenType = \"eth\";\n    // const { balanceData, isLoading, error, refetchBalance } = useBalanceData({ tokenType });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-900 text-white min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__.StarknetProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WalletBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto py-8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: chainStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            options: options,\n                            onSelect: handleSelect\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, undefined),\n                        tokenTypes.map((token, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: tokenStyle,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            buttonText: token,\n                                            inputPlaceholder: 0.017,\n                                            onButtonClick: null\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Stake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stake);\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3Rha2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUN3QztBQUNuQjtBQUNDO0FBQ047QUFJMUMsTUFBTUssYUFBYTtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxPQUFPO0lBQ1BDLGNBQWM7SUFDZEMsV0FBVztBQUNiO0FBRUEsTUFBTUMsYUFBYTtJQUNqQkgsT0FBTztJQUNQQyxjQUFjO0lBQ2RHLFNBQVM7SUFDVEMsZ0JBQWdCO0FBQ2xCO0FBRUEsTUFBTUMsYUFBYTtJQUFDO0lBQU87SUFBUTtDQUFPO0FBRTFDLE1BQU1DLFFBQVE7SUFFWixNQUFNQyxVQUFVO1FBQ2Q7WUFBRUMsT0FBTztZQUFZQyxPQUFPO1FBQVc7UUFDdkM7WUFBRUQsT0FBTztZQUFVQyxPQUFPO1FBQVM7S0FDcEM7SUFFRCxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUMsYUFBYUY7SUFDM0I7SUFFQSxNQUFNRyxZQUFZO0lBQ2xCLDJGQUEyRjtJQUUzRixxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ3ZCLDJFQUFnQkE7OzhCQUNmLDhEQUFDQyw2REFBU0E7Ozs7OzhCQUNWLDhEQUFDdUI7b0JBQUlELFdBQVU7Ozs7Ozs4QkFFakIsOERBQUNDO29CQUFJQyxPQUFPckI7O3NDQUNWLDhEQUFDc0I7Ozs7O3NDQUNELDhEQUFDdkIsMERBQU1BOzRCQUFDVyxTQUFTQTs0QkFBU2EsVUFBVVY7Ozs7OztzQ0FDcEMsOERBQUNTOzs7OztzQ0FDRCw4REFBQ0E7Ozs7O3dCQUNBZCxXQUFXZ0IsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUN0Qiw4REFBQ047O2tEQUNDLDhEQUFDQTt3Q0FBZ0JDLE9BQU9oQjtrREFDdEIsNEVBQUNQLCtEQUFRQTs0Q0FBQzZCLFlBQVlGOzRDQUFPRyxrQkFBa0I7NENBQU9DLGVBQWU7Ozs7Ozt1Q0FEN0RIOzs7OztrREFHViw4REFBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPYjtLQXJDTWI7QUF1Q04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0YWtlLnRzeD8zYjc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0YXJrbmV0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3N0YXJrbmV0LXByb3ZpZGVyXCI7XHJcbmltcG9ydCBXYWxsZXRCYXIgZnJvbSAnQC9jb21wb25lbnRzL1dhbGxldEJhcic7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24nO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2VsZWN0JztcclxuaW1wb3J0IEJhbGFuY2UgZnJvbSAnQC9jb21wb25lbnRzL2JhbGFuY2UnO1xyXG5pbXBvcnQgdXNlQmFsYW5jZURhdGEgZnJvbSAnQC9jb21wb25lbnRzL2JhbGFuY2UnO1xyXG5cclxuY29uc3QgY2hhaW5TdHlsZSA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzdDNzQ4NFwiLFxyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LFxyXG59XHJcblxyXG5jb25zdCB0b2tlblN0eWxlID0ge1xyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIlxyXG59XHJcblxyXG5jb25zdCB0b2tlblR5cGVzID0gW1wiRVRIXCIsIFwiVVNEQ1wiLCBcIlVTRFRcIl1cclxuXHJcbmNvbnN0IFN0YWtlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBsYWJlbDogJ1N0YXJrbmV0JywgdmFsdWU6ICdTdGFya25ldCcgfSxcclxuICAgIHsgbGFiZWw6ICd6a1N5bmMnLCB2YWx1ZTogJ3prU3luYycgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAob3B0aW9uOiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkOicsIG9wdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9rZW5UeXBlID0gXCJldGhcIjtcclxuICAvLyBjb25zdCB7IGJhbGFuY2VEYXRhLCBpc0xvYWRpbmcsIGVycm9yLCByZWZldGNoQmFsYW5jZSB9ID0gdXNlQmFsYW5jZURhdGEoeyB0b2tlblR5cGUgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICA8U3RhcmtuZXRQcm92aWRlcj5cclxuICAgICAgICA8V2FsbGV0QmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS04XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2NoYWluU3R5bGV9PlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPFNlbGVjdCBvcHRpb25zPXtvcHRpb25zfSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fSAvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICB7dG9rZW5UeXBlcy5tYXAoKHRva2VuLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17dG9rZW5TdHlsZX0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIGJ1dHRvblRleHQ9e3Rva2VufSBpbnB1dFBsYWNlaG9sZGVyPXswLjAxN30gb25CdXR0b25DbGljaz17bnVsbH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3RhcmtuZXRQcm92aWRlcj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rha2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0YXJrbmV0UHJvdmlkZXIiLCJXYWxsZXRCYXIiLCJEcm9wZG93biIsIlNlbGVjdCIsImNoYWluU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsInRva2VuU3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ0b2tlblR5cGVzIiwiU3Rha2UiLCJvcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImhhbmRsZVNlbGVjdCIsIm9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlblR5cGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJiciIsIm9uU2VsZWN0IiwibWFwIiwidG9rZW4iLCJpbmRleCIsImJ1dHRvblRleHQiLCJpbnB1dFBsYWNlaG9sZGVyIiwib25CdXR0b25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/stake.tsx\n"));

/***/ })

});