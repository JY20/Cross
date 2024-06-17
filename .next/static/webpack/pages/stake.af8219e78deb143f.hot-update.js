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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/starknet-provider */ \"./src/components/starknet-provider.tsx\");\n/* harmony import */ var _components_WalletBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/WalletBar */ \"./src/components/WalletBar.tsx\");\n/* harmony import */ var _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/dropdown */ \"./src/components/ui/dropdown.tsx\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/select */ \"./src/components/select.tsx\");\n/* harmony import */ var _components_balance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/balance */ \"./src/components/balance.tsx\");\n\n\n\n\n\n\n\nconst chainStyle = {\n    backgroundColor: \"#7C7484\",\n    color: \"white\",\n    borderRadius: \"10px\",\n    textAlign: \"center\"\n};\nconst tokenStyle = {\n    color: \"white\",\n    borderRadius: \"25px\",\n    display: \"flex\",\n    justifyContent: \"space-evenly\"\n};\nconst tokenTypes = [\n    \"ETH\",\n    \"USDC\",\n    \"USDT\"\n];\nconst Stake = ()=>{\n    const options = [\n        {\n            label: \"Starknet\",\n            value: \"Starknet\"\n        },\n        {\n            label: \"zkSync\",\n            value: \"zkSync\"\n        }\n    ];\n    const handleSelect = (option)=>{\n        console.log(\"Selected:\", option);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-900 text-white min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__.StarknetProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WalletBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto py-8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: chainStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            options: options,\n                            onSelect: handleSelect\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, undefined),\n                        tokenTypes.map((token, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: tokenStyle,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            buttonText: token,\n                                            inputPlaceholder: 0.017,\n                                            onButtonClick: null,\n                                            balance: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_balance__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                tokenType: token\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 99\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Stake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stake);\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3Rha2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0M7QUFDbkI7QUFDQztBQUNOO0FBQ0M7QUFFM0MsTUFBTU0sYUFBYTtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxPQUFPO0lBQ1BDLGNBQWM7SUFDZEMsV0FBVztBQUNiO0FBRUEsTUFBTUMsYUFBYTtJQUNqQkgsT0FBTztJQUNQQyxjQUFjO0lBQ2RHLFNBQVM7SUFDVEMsZ0JBQWdCO0FBQ2xCO0FBRUEsTUFBTUMsYUFBYTtJQUFDO0lBQU87SUFBUTtDQUFPO0FBRTFDLE1BQU1DLFFBQVE7SUFFWixNQUFNQyxVQUFVO1FBQ2Q7WUFBRUMsT0FBTztZQUFZQyxPQUFPO1FBQVc7UUFDdkM7WUFBRUQsT0FBTztZQUFVQyxPQUFPO1FBQVM7S0FDcEM7SUFFRCxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUMsYUFBYUY7SUFDM0I7SUFFQSxxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ3ZCLDJFQUFnQkE7OzhCQUNmLDhEQUFDQyw2REFBU0E7Ozs7OzhCQUNWLDhEQUFDdUI7b0JBQUlELFdBQVU7Ozs7Ozs4QkFFakIsOERBQUNDO29CQUFJQyxPQUFPcEI7O3NDQUNWLDhEQUFDcUI7Ozs7O3NDQUNELDhEQUFDdkIsMERBQU1BOzRCQUFDWSxTQUFTQTs0QkFBU1ksVUFBVVQ7Ozs7OztzQ0FDcEMsOERBQUNROzs7OztzQ0FDRCw4REFBQ0E7Ozs7O3dCQUNBYixXQUFXZSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3RCLDhEQUFDTjs7a0RBQ0MsOERBQUNBO3dDQUFnQkMsT0FBT2Y7a0RBQ3RCLDRFQUFDUiwrREFBUUE7NENBQUM2QixZQUFZRjs0Q0FBT0csa0JBQWtCOzRDQUFPQyxlQUFlOzRDQUFNQyx1QkFBUyw4REFBQzlCLDJEQUFPQTtnREFBQytCLFdBQVdOOzs7Ozs7Ozs7Ozt1Q0FEaEdDOzs7OztrREFHViw4REFBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPYjtLQWxDTVo7QUFvQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0YWtlLnRzeD8zYjc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0YXJrbmV0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3N0YXJrbmV0LXByb3ZpZGVyXCI7XHJcbmltcG9ydCBXYWxsZXRCYXIgZnJvbSAnQC9jb21wb25lbnRzL1dhbGxldEJhcic7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24nO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2VsZWN0JztcclxuaW1wb3J0IEJhbGFuY2UgZnJvbSAnQC9jb21wb25lbnRzL2JhbGFuY2UnO1xyXG5cclxuY29uc3QgY2hhaW5TdHlsZSA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzdDNzQ4NFwiLFxyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LFxyXG59XHJcblxyXG5jb25zdCB0b2tlblN0eWxlID0ge1xyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIlxyXG59XHJcblxyXG5jb25zdCB0b2tlblR5cGVzID0gW1wiRVRIXCIsIFwiVVNEQ1wiLCBcIlVTRFRcIl1cclxuXHJcbmNvbnN0IFN0YWtlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBsYWJlbDogJ1N0YXJrbmV0JywgdmFsdWU6ICdTdGFya25ldCcgfSxcclxuICAgIHsgbGFiZWw6ICd6a1N5bmMnLCB2YWx1ZTogJ3prU3luYycgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAob3B0aW9uOiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkOicsIG9wdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHRleHQtd2hpdGUgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgIDxTdGFya25ldFByb3ZpZGVyPlxyXG4gICAgICAgIDxXYWxsZXRCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LThcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17Y2hhaW5TdHlsZX0+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e29wdGlvbnN9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHt0b2tlblR5cGVzLm1hcCgodG9rZW4sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt0b2tlblN0eWxlfT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gYnV0dG9uVGV4dD17dG9rZW59IGlucHV0UGxhY2Vob2xkZXI9ezAuMDE3fSBvbkJ1dHRvbkNsaWNrPXtudWxsfSBiYWxhbmNlPXs8QmFsYW5jZSB0b2tlblR5cGU9e3Rva2VufS8+fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N0YXJrbmV0UHJvdmlkZXI+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YWtlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdGFya25ldFByb3ZpZGVyIiwiV2FsbGV0QmFyIiwiRHJvcGRvd24iLCJTZWxlY3QiLCJCYWxhbmNlIiwiY2hhaW5TdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwidG9rZW5TdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInRva2VuVHlwZXMiLCJTdGFrZSIsIm9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiaGFuZGxlU2VsZWN0Iiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImJyIiwib25TZWxlY3QiLCJtYXAiLCJ0b2tlbiIsImluZGV4IiwiYnV0dG9uVGV4dCIsImlucHV0UGxhY2Vob2xkZXIiLCJvbkJ1dHRvbkNsaWNrIiwiYmFsYW5jZSIsInRva2VuVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/stake.tsx\n"));

/***/ })

});