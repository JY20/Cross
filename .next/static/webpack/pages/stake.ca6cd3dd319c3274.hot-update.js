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

/***/ "./src/components/balance.tsx":
/*!************************************!*\
  !*** ./src/components/balance.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @starknet-react/core */ \"./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var _data_contactAddr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/contactAddr.json */ \"./src/data/contactAddr.json\");\n\nvar _s = $RefreshSig$();\n\n\nconst Balance = (param)=>{\n    let { tokenType } = param;\n    _s();\n    const { address } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    const token = _data_contactAddr_json__WEBPACK_IMPORTED_MODULE_2__[tokenType][\"address\"];\n    console.log(token);\n    const { data, isLoading, error, refetch } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useBalance)({\n        token,\n        address\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n        lineNumber: 15,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\n            \"Error: \",\n            JSON.stringify(error)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, undefined);\n    const handleClick = async (event)=>{\n        event.preventDefault();\n        await refetch();\n    };\n    return {\n        data\n    };\n};\n_s(Balance, \"QvDg4fzZCAy5jLga/KyXWPfVreY=\", false, function() {\n    return [\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useBalance\n    ];\n});\n_c = Balance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balance);\nvar _c;\n$RefreshReg$(_c, \"Balance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9iYWxhbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0U7QUFFNUI7QUFHbkQsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLFNBQVMsRUFBc0I7O0lBQy9DLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdMLGdFQUFVQTtJQUM5QixNQUFNTSxRQUFRSixtREFBVyxDQUFDRSxVQUFzQyxDQUFDLFVBQVU7SUFDM0VHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLEVBQUVHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFHWCxnRUFBVUEsQ0FBQztRQUNyREs7UUFDQUQ7SUFDRjtJQUVBLElBQUlLLFdBQVcscUJBQU8sOERBQUNHO2tCQUFLOzs7Ozs7SUFDNUIsSUFBSUYsT0FBTyxxQkFBTyw4REFBQ0U7O1lBQUs7WUFBUUMsS0FBS0MsU0FBUyxDQUFDSjs7Ozs7OztJQUUvQyxNQUFNSyxjQUFvRCxPQUFPQztRQUMvREEsTUFBTUMsY0FBYztRQUNwQixNQUFNTjtJQUNSO0lBRUEsT0FBTztRQUFDSDtJQUFJO0FBQ2Q7R0FsQk1OOztRQUNnQkgsNERBQVVBO1FBR2NDLDREQUFVQTs7O0tBSmxERTtBQW9CTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9iYWxhbmNlLnRzeD80OGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFjY291bnQsIHVzZUJhbGFuY2UsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJAc3RhcmtuZXQtcmVhY3QvY29yZVwiO1xyXG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29udGFjdEFkcnIgZnJvbSAnLi4vZGF0YS9jb250YWN0QWRkci5qc29uJztcclxuXHJcblxyXG5jb25zdCBCYWxhbmNlID0gKHt0b2tlblR5cGV9OiB7dG9rZW5UeXBlOiBzdHJpbmd9KSA9PiB7XHJcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb250YWN0QWRyclt0b2tlblR5cGUgYXMga2V5b2YgdHlwZW9mIGNvbnRhY3RBZHJyXVtcImFkZHJlc3NcIl07XHJcbiAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBlcnJvciwgcmVmZXRjaCB9ID0gdXNlQmFsYW5jZSh7XHJcbiAgICB0b2tlbiwgXHJcbiAgICBhZGRyZXNzXHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8c3Bhbj5FcnJvcjoge0pTT04uc3RyaW5naWZ5KGVycm9yKX08L3NwYW4+O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljazogTW91c2VFdmVudEhhbmRsZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXdhaXQgcmVmZXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7ZGF0YX07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VBY2NvdW50IiwidXNlQmFsYW5jZSIsImNvbnRhY3RBZHJyIiwiQmFsYW5jZSIsInRva2VuVHlwZSIsImFkZHJlc3MiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJyZWZldGNoIiwic3BhbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/balance.tsx\n"));

/***/ }),

/***/ "./src/pages/stake.tsx":
/*!*****************************!*\
  !*** ./src/pages/stake.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/starknet-provider */ \"./src/components/starknet-provider.tsx\");\n/* harmony import */ var _components_WalletBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/WalletBar */ \"./src/components/WalletBar.tsx\");\n/* harmony import */ var _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/dropdown */ \"./src/components/ui/dropdown.tsx\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/select */ \"./src/components/select.tsx\");\n/* harmony import */ var _components_balance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/balance */ \"./src/components/balance.tsx\");\n\n\n\n\n\n\n\nconst chainStyle = {\n    backgroundColor: \"#7C7484\",\n    color: \"white\",\n    borderRadius: \"10px\",\n    textAlign: \"center\"\n};\nconst tokenStyle = {\n    color: \"white\",\n    borderRadius: \"25px\",\n    display: \"flex\",\n    justifyContent: \"space-evenly\"\n};\nconst tokenTypes = [\n    \"ETH\",\n    \"USDC\",\n    \"USDT\"\n];\nconst Stake = ()=>{\n    const options = [\n        {\n            label: \"Starknet\",\n            value: \"Starknet\"\n        },\n        {\n            label: \"zkSync\",\n            value: \"zkSync\"\n        }\n    ];\n    const handleSelect = (option)=>{\n        console.log(\"Selected:\", option);\n    };\n    const tokenType = \"eth\";\n    const balance = (0,_components_balance__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(tokenType);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-900 text-white min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starknet_provider__WEBPACK_IMPORTED_MODULE_2__.StarknetProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WalletBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto py-8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: chainStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            options: options,\n                            onSelect: handleSelect\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, undefined),\n                        tokenTypes.map((token, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: tokenStyle,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            buttonText: token,\n                                            inputPlaceholder: 0.017,\n                                            onButtonClick: null\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\pages\\\\stake.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Stake;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stake);\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3Rha2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0M7QUFDbkI7QUFDQztBQUNOO0FBQ0M7QUFFM0MsTUFBTU0sYUFBYTtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxPQUFPO0lBQ1BDLGNBQWM7SUFDZEMsV0FBVztBQUNiO0FBRUEsTUFBTUMsYUFBYTtJQUNqQkgsT0FBTztJQUNQQyxjQUFjO0lBQ2RHLFNBQVM7SUFDVEMsZ0JBQWdCO0FBQ2xCO0FBRUEsTUFBTUMsYUFBYTtJQUFDO0lBQU87SUFBUTtDQUFPO0FBRTFDLE1BQU1DLFFBQVE7SUFFWixNQUFNQyxVQUFVO1FBQ2Q7WUFBRUMsT0FBTztZQUFZQyxPQUFPO1FBQVc7UUFDdkM7WUFBRUQsT0FBTztZQUFVQyxPQUFPO1FBQVM7S0FDcEM7SUFFRCxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUMsYUFBYUY7SUFDM0I7SUFFQSxNQUFNRyxZQUFZO0lBQ2xCLE1BQU1DLFVBQVVuQiwrREFBT0EsQ0FBQ2tCO0lBRXhCLHFCQUNFLDhEQUFDRTtRQUFLQyxXQUFVO2tCQUNkLDRFQUFDekIsMkVBQWdCQTs7OEJBQ2YsOERBQUNDLDZEQUFTQTs7Ozs7OEJBQ1YsOERBQUN5QjtvQkFBSUQsV0FBVTs7Ozs7OzhCQUVqQiw4REFBQ0M7b0JBQUlDLE9BQU90Qjs7c0NBQ1YsOERBQUN1Qjs7Ozs7c0NBQ0MsOERBQUN6QiwwREFBTUE7NEJBQUNZLFNBQVNBOzRCQUFTYyxVQUFVWDs7Ozs7O3NDQUN0Qyw4REFBQ1U7Ozs7O3NDQUNELDhEQUFDQTs7Ozs7d0JBQ0FmLFdBQVdpQixHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3RCLDhEQUFDTjs7a0RBQ0MsOERBQUNBO3dDQUFnQkMsT0FBT2pCO2tEQUN0Qiw0RUFBQ1IsK0RBQVFBOzRDQUFDK0IsWUFBWUY7NENBQU9HLGtCQUFrQjs0Q0FBT0MsZUFBZTs7Ozs7O3VDQUQ3REg7Ozs7O2tEQUdWLDhEQUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9iO0tBckNNZDtBQXVDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3Rha2UudHN4PzNiNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3RhcmtuZXRQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvc3RhcmtuZXQtcHJvdmlkZXJcIjtcclxuaW1wb3J0IFdhbGxldEJhciBmcm9tICdAL2NvbXBvbmVudHMvV2FsbGV0QmFyJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy91aS9kcm9wZG93bic7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9zZWxlY3QnO1xyXG5pbXBvcnQgQmFsYW5jZSBmcm9tICdAL2NvbXBvbmVudHMvYmFsYW5jZSc7XHJcblxyXG5jb25zdCBjaGFpblN0eWxlID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjN0M3NDg0XCIsXHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxuICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gIHRleHRBbGlnbjogJ2NlbnRlcicgYXMgY29uc3QsXHJcbn1cclxuXHJcbmNvbnN0IHRva2VuU3R5bGUgPSB7XHJcbiAgY29sb3I6IFwid2hpdGVcIixcclxuICBib3JkZXJSYWRpdXM6IFwiMjVweFwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiXHJcbn1cclxuXHJcbmNvbnN0IHRva2VuVHlwZXMgPSBbXCJFVEhcIiwgXCJVU0RDXCIsIFwiVVNEVFwiXVxyXG5cclxuY29uc3QgU3Rha2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IGxhYmVsOiAnU3RhcmtuZXQnLCB2YWx1ZTogJ1N0YXJrbmV0JyB9LFxyXG4gICAgeyBsYWJlbDogJ3prU3luYycsIHZhbHVlOiAnemtTeW5jJyB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChvcHRpb246IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQ6Jywgb3B0aW9uKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2tlblR5cGUgPSBcImV0aFwiO1xyXG4gIGNvbnN0IGJhbGFuY2UgPSBCYWxhbmNlKHRva2VuVHlwZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICA8U3RhcmtuZXRQcm92aWRlcj5cclxuICAgICAgICA8V2FsbGV0QmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS04XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2NoYWluU3R5bGV9PlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e29wdGlvbnN9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IC8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHt0b2tlblR5cGVzLm1hcCgodG9rZW4sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt0b2tlblN0eWxlfT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gYnV0dG9uVGV4dD17dG9rZW59IGlucHV0UGxhY2Vob2xkZXI9ezAuMDE3fSBvbkJ1dHRvbkNsaWNrPXtudWxsfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9TdGFya25ldFByb3ZpZGVyPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFrZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3RhcmtuZXRQcm92aWRlciIsIldhbGxldEJhciIsIkRyb3Bkb3duIiwiU2VsZWN0IiwiQmFsYW5jZSIsImNoYWluU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsInRva2VuU3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ0b2tlblR5cGVzIiwiU3Rha2UiLCJvcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImhhbmRsZVNlbGVjdCIsIm9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlblR5cGUiLCJiYWxhbmNlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwiYnIiLCJvblNlbGVjdCIsIm1hcCIsInRva2VuIiwiaW5kZXgiLCJidXR0b25UZXh0IiwiaW5wdXRQbGFjZWhvbGRlciIsIm9uQnV0dG9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/stake.tsx\n"));

/***/ }),

/***/ "./src/data/contactAddr.json":
/*!***********************************!*\
  !*** ./src/data/contactAddr.json ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('{"eth":{"address":"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7","name":"Ethereum","symbol":"ETH"},"usdc":{"address":"0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8","name":"USD Coin","symbol":"USDC"},"usdt":{"address":"0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8","name":"Tether","symbol":"USDT"},"strk":{"address":"0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d","name":"Starknet","symbol":"STRK"},"dai":{"address":"0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3","name":"Dai","symbol":"DAI"}}');

/***/ })

});