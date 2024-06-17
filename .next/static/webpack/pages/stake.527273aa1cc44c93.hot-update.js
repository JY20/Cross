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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/starknet-provider */ \"./src/components/starknet-provider.tsx\");\n/* harmony import */ var _components_WalletBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/WalletBar */ \"./src/components/WalletBar.tsx\");\n/* harmony import */ var _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/dropdown */ \"./src/components/ui/dropdown.tsx\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/select */ \"./src/components/select.tsx\");\n\n\n\n\n\n\nconst chainStyle = {\n    backgroundColor: \"#7C7484\",\n    color: \"white\",\n    borderRadius: \"10px\",\n    textAlign: \"center\"\n};\nconst tokenStyle = {\n    color: \"white\",\n    borderRadius: \"25px\",\n    display: \"flex\",\n    justifyContent: \"space-evenly\"\n};\nconst tokenTypes = [\n    \"ETH\",\n    \"USDC\",\n    \"USDT\"\n];\nconst Stake = ()=>{\n    const options = [\n        {\n            label: \"Starknet\",\n            value: \"Starknet\"\n        },\n        {\n            label: \"zkSync\",\n            value: \"zkSync\"\n        }\n    ];\n    const handleSelect = (option)=>{\n        console.log(\"Selected:\", option);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-900 text-white min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__.StarknetProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WalletBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto py-8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: chainStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            options: options,\n                            onSelect: handleSelect\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, undefined),\n                        tokenTypes.map((token, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: tokenStyle,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            buttonText: token,\n                                            inputPlaceholder: 0.017,\n                                            onButtonClick: null\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Stake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stake);\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3Rha2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUN3QztBQUNuQjtBQUNDO0FBQ047QUFFMUMsTUFBTUssYUFBYTtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxPQUFPO0lBQ1BDLGNBQWM7SUFDZEMsV0FBVztBQUNiO0FBRUEsTUFBTUMsYUFBYTtJQUNqQkgsT0FBTztJQUNQQyxjQUFjO0lBQ2RHLFNBQVM7SUFDVEMsZ0JBQWdCO0FBQ2xCO0FBRUEsTUFBTUMsYUFBYTtJQUFDO0lBQU87SUFBUTtDQUFPO0FBRTFDLE1BQU1DLFFBQVE7SUFFWixNQUFNQyxVQUFVO1FBQ2Q7WUFBRUMsT0FBTztZQUFZQyxPQUFPO1FBQVc7UUFDdkM7WUFBRUQsT0FBTztZQUFVQyxPQUFPO1FBQVM7S0FDcEM7SUFFRCxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUMsYUFBYUY7SUFDM0I7SUFFQSxxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ3RCLDJFQUFnQkE7OzhCQUNmLDhEQUFDQyw2REFBU0E7Ozs7OzhCQUNWLDhEQUFDc0I7b0JBQUlELFdBQVU7Ozs7Ozs4QkFFakIsOERBQUNDO29CQUFJQyxPQUFPcEI7O3NDQUNWLDhEQUFDcUI7Ozs7O3NDQUNELDhEQUFDdEIsMERBQU1BOzRCQUFDVyxTQUFTQTs0QkFBU1ksVUFBVVQ7Ozs7OztzQ0FDcEMsOERBQUNROzs7OztzQ0FDRCw4REFBQ0E7Ozs7O3dCQUNBYixXQUFXZSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3RCLDhEQUFDTjs7a0RBQ0MsOERBQUNBO3dDQUFnQkMsT0FBT2Y7a0RBQ3RCLDRFQUFDUCwrREFBUUE7NENBQUM0QixZQUFZRjs0Q0FBT0csa0JBQWtCOzRDQUFPQyxlQUFlOzs7Ozs7dUNBRDdESDs7Ozs7a0RBR1YsOERBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2I7S0FsQ01aO0FBb0NOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdGFrZS50c3g/M2I3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdGFya25ldFByb3ZpZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9zdGFya25ldC1wcm92aWRlclwiO1xyXG5pbXBvcnQgV2FsbGV0QmFyIGZyb20gJ0AvY29tcG9uZW50cy9XYWxsZXRCYXInO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9jb21wb25lbnRzL3NlbGVjdCc7XHJcblxyXG5jb25zdCBjaGFpblN0eWxlID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjN0M3NDg0XCIsXHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxuICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gIHRleHRBbGlnbjogJ2NlbnRlcicgYXMgY29uc3QsXHJcbn1cclxuXHJcbmNvbnN0IHRva2VuU3R5bGUgPSB7XHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxuICBib3JkZXJSYWRpdXM6IFwiMjVweFwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiXHJcbn1cclxuXHJcbmNvbnN0IHRva2VuVHlwZXMgPSBbXCJFVEhcIiwgXCJVU0RDXCIsIFwiVVNEVFwiXVxyXG5cclxuY29uc3QgU3Rha2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IGxhYmVsOiAnU3RhcmtuZXQnLCB2YWx1ZTogJ1N0YXJrbmV0JyB9LFxyXG4gICAgeyBsYWJlbDogJ3prU3luYycsIHZhbHVlOiAnemtTeW5jJyB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChvcHRpb246IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQ6Jywgb3B0aW9uKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPFN0YXJrbmV0UHJvdmlkZXI+XHJcbiAgICAgICAgPFdhbGxldEJhciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktOFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXtjaGFpblN0eWxlfT5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxTZWxlY3Qgb3B0aW9ucz17b3B0aW9uc30gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAge3Rva2VuVHlwZXMubWFwKCh0b2tlbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3Rva2VuU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biBidXR0b25UZXh0PXt0b2tlbn0gaW5wdXRQbGFjZWhvbGRlcj17MC4wMTd9IG9uQnV0dG9uQ2xpY2s9e251bGx9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N0YXJrbmV0UHJvdmlkZXI+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YWtlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdGFya25ldFByb3ZpZGVyIiwiV2FsbGV0QmFyIiwiRHJvcGRvd24iLCJTZWxlY3QiLCJjaGFpblN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJ0b2tlblN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwidG9rZW5UeXBlcyIsIlN0YWtlIiwib3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJoYW5kbGVTZWxlY3QiLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwiYnIiLCJvblNlbGVjdCIsIm1hcCIsInRva2VuIiwiaW5kZXgiLCJidXR0b25UZXh0IiwiaW5wdXRQbGFjZWhvbGRlciIsIm9uQnV0dG9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/stake.tsx\n"));

/***/ })

});