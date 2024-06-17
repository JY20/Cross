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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/starknet-provider */ \"./src/components/starknet-provider.tsx\");\n/* harmony import */ var _components_WalletBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/WalletBar */ \"./src/components/WalletBar.tsx\");\n/* harmony import */ var _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/dropdown */ \"./src/components/ui/dropdown.tsx\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/select */ \"./src/components/select.tsx\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @starknet-react/core */ \"./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var _data_contactAddr_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/contactAddr.json */ \"./src/data/contactAddr.json\");\n\n\n\n\n\n\n\n\n\nconst chainStyle = {\n    backgroundColor: \"#7C7484\",\n    color: \"white\",\n    borderRadius: \"10px\",\n    textAlign: \"center\"\n};\nconst tokenStyle = {\n    color: \"white\",\n    borderRadius: \"25px\",\n    display: \"flex\",\n    justifyContent: \"space-evenly\"\n};\nconst tokenTypes = [\n    \"ETH\",\n    \"USDC\",\n    \"USDT\"\n];\nconst Stake = ()=>{\n    var _s = $RefreshSig$();\n    const options = [\n        {\n            label: \"Starknet\",\n            value: \"Starknet\"\n        },\n        {\n            label: \"zkSync\",\n            value: \"zkSync\"\n        }\n    ];\n    const handleSelect = (option)=>{\n        console.log(\"Selected:\", option);\n    };\n    const tokenType = \"eth\";\n    const useBalanceData = (param)=>{\n        let { tokenType } = param;\n        _s();\n        const { address } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_6__.useAccount)();\n        const token = _data_contactAddr_json__WEBPACK_IMPORTED_MODULE_7__[tokenType][\"address\"];\n        const { data, isLoading, error, refetch } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_6__.useBalance)({\n            token,\n            address\n        });\n        const [balanceData, setBalanceData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            if (!isLoading && !error && data) {\n                setBalanceData(data === null || data === void 0 ? void 0 : data.formatted);\n            }\n        }, [\n            data,\n            isLoading,\n            error\n        ]);\n        const refetchBalance = async ()=>{\n            await refetch();\n        };\n        return {\n            balanceData,\n            isLoading,\n            error,\n            refetchBalance\n        };\n    };\n    _s(useBalanceData, \"fb/x7Ldik57ceSIRH0oQ9RhVK50=\", false, function() {\n        return [\n            _starknet_react_core__WEBPACK_IMPORTED_MODULE_6__.useAccount,\n            _starknet_react_core__WEBPACK_IMPORTED_MODULE_6__.useBalance\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-900 text-white min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__.StarknetProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WalletBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto py-8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: chainStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            options: options,\n                            onSelect: handleSelect\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, undefined),\n                        tokenTypes.map((token, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: tokenStyle,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            buttonText: token,\n                                            inputPlaceholder: 0.017,\n                                            onButtonClick: null\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Stake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stake);\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3Rha2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3dDO0FBQ25CO0FBQ0M7QUFDTjtBQUdvQjtBQUNsQjtBQUNPO0FBRW5ELE1BQU1VLGFBQWE7SUFDakJDLGlCQUFpQjtJQUNqQkMsT0FBTztJQUNQQyxjQUFjO0lBQ2RDLFdBQVc7QUFDYjtBQUVBLE1BQU1DLGFBQWE7SUFDakJILE9BQU87SUFDUEMsY0FBYztJQUNkRyxTQUFTO0lBQ1RDLGdCQUFnQjtBQUNsQjtBQUVBLE1BQU1DLGFBQWE7SUFBQztJQUFPO0lBQVE7Q0FBTztBQUUxQyxNQUFNQyxRQUFROztJQUVaLE1BQU1DLFVBQVU7UUFDZDtZQUFFQyxPQUFPO1lBQVlDLE9BQU87UUFBVztRQUN2QztZQUFFRCxPQUFPO1lBQVVDLE9BQU87UUFBUztLQUNwQztJQUVELE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQyxhQUFhRjtJQUMzQjtJQUVBLE1BQU1HLFlBQVk7SUFNbEIsTUFBTUMsaUJBQWlCO1lBQUMsRUFBRUQsU0FBUyxFQUF1Qjs7UUFDeEQsTUFBTSxFQUFFRSxPQUFPLEVBQUUsR0FBR3hCLGdFQUFVQTtRQUM5QixNQUFNeUIsUUFBUXJCLG1EQUFXLENBQUNrQixVQUFzQyxDQUFDLFVBQVU7UUFFM0UsTUFBTSxFQUFFSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FBRzVCLGdFQUFVQSxDQUFDO1lBQ3JEd0I7WUFDQUQ7UUFDRjtRQUVBLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHNUIsK0NBQVFBLENBQXFCNkI7UUFFbkU5QixnREFBU0EsQ0FBQztZQUNSLElBQUksQ0FBQ3lCLGFBQWEsQ0FBQ0MsU0FBU0YsTUFBTTtnQkFDaENLLGVBQWVMLGlCQUFBQSwyQkFBQUEsS0FBTU8sU0FBUztZQUNoQztRQUNGLEdBQUc7WUFBQ1A7WUFBTUM7WUFBV0M7U0FBTTtRQUUzQixNQUFNTSxpQkFBaUI7WUFDckIsTUFBTUw7UUFDUjtRQUVBLE9BQU87WUFBRUM7WUFBYUg7WUFBV0M7WUFBT007UUFBZTtJQUN6RDtPQXRCTVg7O1lBQ2dCdkIsNERBQVVBO1lBR2NDLDREQUFVQTs7O0lBb0J4RCxxQkFDRSw4REFBQ2tDO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUN4QywyRUFBZ0JBOzs4QkFDZiw4REFBQ0MsNkRBQVNBOzs7Ozs4QkFDViw4REFBQ3dDO29CQUFJRCxXQUFVOzs7Ozs7OEJBRWpCLDhEQUFDQztvQkFBSUMsT0FBT2pDOztzQ0FDViw4REFBQ2tDOzs7OztzQ0FDRCw4REFBQ3hDLDBEQUFNQTs0QkFBQ2dCLFNBQVNBOzRCQUFTeUIsVUFBVXRCOzs7Ozs7c0NBQ3BDLDhEQUFDcUI7Ozs7O3NDQUNELDhEQUFDQTs7Ozs7d0JBQ0ExQixXQUFXNEIsR0FBRyxDQUFDLENBQUNoQixPQUFPaUIsc0JBQ3RCLDhEQUFDTDs7a0RBQ0MsOERBQUNBO3dDQUFnQkMsT0FBTzVCO2tEQUN0Qiw0RUFBQ1osK0RBQVFBOzRDQUFDNkMsWUFBWWxCOzRDQUFPbUIsa0JBQWtCOzRDQUFPQyxlQUFlOzs7Ozs7dUNBRDdESDs7Ozs7a0RBR1YsOERBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2I7S0FoRU16QjtBQWtFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3Rha2UudHN4PzNiNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3RhcmtuZXRQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvc3RhcmtuZXQtcHJvdmlkZXJcIjtcclxuaW1wb3J0IFdhbGxldEJhciBmcm9tICdAL2NvbXBvbmVudHMvV2FsbGV0QmFyJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy91aS9kcm9wZG93bic7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9zZWxlY3QnO1xyXG5pbXBvcnQgQmFsYW5jZSBmcm9tICdAL2NvbXBvbmVudHMvYmFsYW5jZSc7XHJcbmltcG9ydCB1c2VCYWxhbmNlRGF0YSBmcm9tICdAL2NvbXBvbmVudHMvYmFsYW5jZSc7XHJcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUJhbGFuY2UgfSBmcm9tIFwiQHN0YXJrbmV0LXJlYWN0L2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29udGFjdEFkcnIgZnJvbSAnLi4vZGF0YS9jb250YWN0QWRkci5qc29uJztcclxuXHJcbmNvbnN0IGNoYWluU3R5bGUgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiM3Qzc0ODRcIixcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJyBhcyBjb25zdCxcclxufVxyXG5cclxuY29uc3QgdG9rZW5TdHlsZSA9IHtcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIyNXB4XCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCJcclxufVxyXG5cclxuY29uc3QgdG9rZW5UeXBlcyA9IFtcIkVUSFwiLCBcIlVTRENcIiwgXCJVU0RUXCJdXHJcblxyXG5jb25zdCBTdGFrZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbGFiZWw6ICdTdGFya25ldCcsIHZhbHVlOiAnU3RhcmtuZXQnIH0sXHJcbiAgICB7IGxhYmVsOiAnemtTeW5jJywgdmFsdWU6ICd6a1N5bmMnIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKG9wdGlvbjogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZDonLCBvcHRpb24pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRva2VuVHlwZSA9IFwiZXRoXCI7XHJcbiAgLy8gY29uc3QgeyBiYWxhbmNlRGF0YSwgaXNMb2FkaW5nLCBlcnJvciwgcmVmZXRjaEJhbGFuY2UgfSA9IHVzZUJhbGFuY2VEYXRhKHsgdG9rZW5UeXBlIH0pO1xyXG4gIGludGVyZmFjZSBVc2VCYWxhbmNlRGF0YVByb3BzIHtcclxuICAgIHRva2VuVHlwZTogc3RyaW5nO1xyXG4gIH1cclxuICBcclxuICBjb25zdCB1c2VCYWxhbmNlRGF0YSA9ICh7IHRva2VuVHlwZSB9OiBVc2VCYWxhbmNlRGF0YVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcclxuICAgIGNvbnN0IHRva2VuID0gY29udGFjdEFkcnJbdG9rZW5UeXBlIGFzIGtleW9mIHR5cGVvZiBjb250YWN0QWRycl1bXCJhZGRyZXNzXCJdO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgZXJyb3IsIHJlZmV0Y2ggfSA9IHVzZUJhbGFuY2Uoe1xyXG4gICAgICB0b2tlbiwgXHJcbiAgICAgIGFkZHJlc3NcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29uc3QgW2JhbGFuY2VEYXRhLCBzZXRCYWxhbmNlRGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzTG9hZGluZyAmJiAhZXJyb3IgJiYgZGF0YSkge1xyXG4gICAgICAgIHNldEJhbGFuY2VEYXRhKGRhdGE/LmZvcm1hdHRlZCk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtkYXRhLCBpc0xvYWRpbmcsIGVycm9yXSk7XHJcbiAgXHJcbiAgICBjb25zdCByZWZldGNoQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgcmVmZXRjaCgpO1xyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiB7IGJhbGFuY2VEYXRhLCBpc0xvYWRpbmcsIGVycm9yLCByZWZldGNoQmFsYW5jZSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHRleHQtd2hpdGUgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgIDxTdGFya25ldFByb3ZpZGVyPlxyXG4gICAgICAgIDxXYWxsZXRCYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LThcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17Y2hhaW5TdHlsZX0+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e29wdGlvbnN9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHt0b2tlblR5cGVzLm1hcCgodG9rZW4sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt0b2tlblN0eWxlfT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gYnV0dG9uVGV4dD17dG9rZW59IGlucHV0UGxhY2Vob2xkZXI9ezAuMDE3fSBvbkJ1dHRvbkNsaWNrPXtudWxsfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9TdGFya25ldFByb3ZpZGVyPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFrZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3RhcmtuZXRQcm92aWRlciIsIldhbGxldEJhciIsIkRyb3Bkb3duIiwiU2VsZWN0IiwidXNlQWNjb3VudCIsInVzZUJhbGFuY2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbnRhY3RBZHJyIiwiY2hhaW5TdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwidG9rZW5TdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInRva2VuVHlwZXMiLCJTdGFrZSIsIm9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiaGFuZGxlU2VsZWN0Iiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsInRva2VuVHlwZSIsInVzZUJhbGFuY2VEYXRhIiwiYWRkcmVzcyIsInRva2VuIiwiZGF0YSIsImlzTG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsImJhbGFuY2VEYXRhIiwic2V0QmFsYW5jZURhdGEiLCJ1bmRlZmluZWQiLCJmb3JtYXR0ZWQiLCJyZWZldGNoQmFsYW5jZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImJyIiwib25TZWxlY3QiLCJtYXAiLCJpbmRleCIsImJ1dHRvblRleHQiLCJpbnB1dFBsYWNlaG9sZGVyIiwib25CdXR0b25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/stake.tsx\n"));

/***/ }),

/***/ "./src/data/contactAddr.json":
/*!***********************************!*\
  !*** ./src/data/contactAddr.json ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('{"eth":{"address":"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7","name":"Ethereum","symbol":"ETH"},"usdc":{"address":"0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8","name":"USD Coin","symbol":"USDC"},"usdt":{"address":"0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8","name":"Tether","symbol":"USDT"},"strk":{"address":"0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d","name":"Starknet","symbol":"STRK"},"dai":{"address":"0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3","name":"Dai","symbol":"DAI"}}');

/***/ })

});