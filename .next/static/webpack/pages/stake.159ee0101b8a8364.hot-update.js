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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @starknet-react/core */ \"./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var _data_contactAddr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/contactAddr.json */ \"./src/data/contactAddr.json\");\n\nvar _s = $RefreshSig$();\n\n\nconst Balance = (param)=>{\n    let { tokenType } = param;\n    _s();\n    const { address } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    const token = _data_contactAddr_json__WEBPACK_IMPORTED_MODULE_2__[tokenType][\"address\"];\n    console.log(token);\n    const { data, isLoading, error, refetch } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useBalance)({\n        token,\n        address\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n        lineNumber: 16,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\n            \"Error: \",\n            JSON.stringify(error)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n        lineNumber: 17,\n        columnNumber: 21\n    }, undefined);\n    const handleClick = async (event)=>{\n        event.preventDefault();\n        await refetch();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Balance:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data === null || data === void 0 ? void 0 : data.formatted\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    children: \"Refresh Balance\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Balance, \"QvDg4fzZCAy5jLga/KyXWPfVreY=\", false, function() {\n    return [\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useBalance\n    ];\n});\n_c = Balance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balance);\nvar _c;\n$RefreshReg$(_c, \"Balance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9iYWxhbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0U7QUFFNUI7QUFJbkQsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLFNBQVMsRUFBc0I7O0lBQy9DLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdMLGdFQUFVQTtJQUM5QixNQUFNTSxRQUFRSixtREFBVyxDQUFDRSxVQUFzQyxDQUFDLFVBQVU7SUFDM0VHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLEVBQUVHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFHWCxnRUFBVUEsQ0FBQztRQUNyREs7UUFDQUQ7SUFDRjtJQUVBLElBQUlLLFdBQVcscUJBQU8sOERBQUNHO2tCQUFLOzs7Ozs7SUFDNUIsSUFBSUYsT0FBTyxxQkFBTyw4REFBQ0U7O1lBQUs7WUFBUUMsS0FBS0MsU0FBUyxDQUFDSjs7Ozs7OztJQUUvQyxNQUFNSyxjQUFvRCxPQUFPQztRQUMvREEsTUFBTUMsY0FBYztRQUNwQixNQUFNTjtJQUNSO0lBRUEscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0E7MEJBQUdYLGlCQUFBQSwyQkFBQUEsS0FBTVksU0FBUzs7Ozs7OzBCQUNuQiw4REFBQ0Q7MEJBQUUsNEVBQUNFO29CQUFPQyxTQUFTUDs4QkFBYTs7Ozs7Ozs7Ozs7MEJBQ2pDLDhEQUFDUTs7Ozs7Ozs7Ozs7QUFHUDtHQXpCTXJCOztRQUNnQkgsNERBQVVBO1FBR2NDLDREQUFVQTs7O0tBSmxERTtBQTJCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9iYWxhbmNlLnRzeD80OGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFjY291bnQsIHVzZUJhbGFuY2UsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJAc3RhcmtuZXQtcmVhY3QvY29yZVwiO1xyXG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29udGFjdEFkcnIgZnJvbSAnLi4vZGF0YS9jb250YWN0QWRkci5qc29uJztcclxuaW1wb3J0IHsganNvbiB9IGZyb20gXCJzdGFya25ldFwiO1xyXG5cclxuXHJcbmNvbnN0IEJhbGFuY2UgPSAoe3Rva2VuVHlwZX06IHt0b2tlblR5cGU6IHN0cmluZ30pID0+IHtcclxuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcclxuICBjb25zdCB0b2tlbiA9IGNvbnRhY3RBZHJyW3Rva2VuVHlwZSBhcyBrZXlvZiB0eXBlb2YgY29udGFjdEFkcnJdW1wiYWRkcmVzc1wiXTtcclxuICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yLCByZWZldGNoIH0gPSB1c2VCYWxhbmNlKHtcclxuICAgIHRva2VuLCBcclxuICAgIGFkZHJlc3NcclxuICB9KTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxzcGFuPkVycm9yOiB7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfTwvc3Bhbj47XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrOiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD4gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCByZWZldGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPkJhbGFuY2U6PC9wPlxyXG4gICAgICA8cD57ZGF0YT8uZm9ybWF0dGVkfTwvcD5cclxuICAgICAgPHA+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+UmVmcmVzaCBCYWxhbmNlPC9idXR0b24+PC9wPlxyXG4gICAgICA8aHIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZTtcclxuIl0sIm5hbWVzIjpbInVzZUFjY291bnQiLCJ1c2VCYWxhbmNlIiwiY29udGFjdEFkcnIiLCJCYWxhbmNlIiwidG9rZW5UeXBlIiwiYWRkcmVzcyIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpc0xvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJzcGFuIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsInAiLCJmb3JtYXR0ZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/balance.tsx\n"));

/***/ }),

/***/ "./src/components/ui/dropdown.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/dropdown.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _balance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../balance */ \"./src/components/balance.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst buttonStyle = {\n};\nconst Dropdown = (param)=>{\n    let { inputPlaceholder, buttonText, onButtonClick } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDropdown = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_balance__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                tokenType: buttonText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\ui\\\\dropdown.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: buttonStyle,\n                onClick: toggleDropdown,\n                children: buttonText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\ui\\\\dropdown.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: buttonStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: inputPlaceholder\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\ui\\\\dropdown.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onButtonClick,\n                        children: \"Stake\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\ui\\\\dropdown.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\ui\\\\dropdown.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\ui\\\\dropdown.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dropdown, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9kcm9wZG93bi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUNBO0FBRWpDLE1BQU1FLGNBQWM7QUFFcEI7QUFFQSxNQUFNQyxXQUFXO1FBQUMsRUFBQ0MsZ0JBQWdCLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUErRDs7SUFDM0gsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1TLGlCQUFpQjtRQUNyQkQsVUFBVSxDQUFDRDtJQUNiO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ1QsZ0RBQU9BO2dCQUFDVSxXQUFXTjs7Ozs7OzBCQUNwQiw4REFBQ087Z0JBQU9DLE9BQU9YO2dCQUFhWSxTQUFTTDswQkFBaUJKOzs7Ozs7WUFDckRFLHdCQUNDLDhEQUFDRztnQkFBSUcsT0FBT1g7O2tDQUNWLDhEQUFDYTt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBYWI7Ozs7OztrQ0FDaEMsOERBQUNRO3dCQUFPRSxTQUFTUjtrQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFDO0dBbkJNSDtLQUFBQTtBQXFCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS9kcm9wZG93bi50c3g/NmVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYWxhbmNlIGZyb20gJy4uL2JhbGFuY2UnO1xuXG5jb25zdCBidXR0b25TdHlsZSA9IHtcbiAgLy8gd2lkdGg6IFwiMTAwJVwiXG59XG5cbmNvbnN0IERyb3Bkb3duID0gKHtpbnB1dFBsYWNlaG9sZGVyLCBidXR0b25UZXh0LCBvbkJ1dHRvbkNsaWNrfToge2lucHV0UGxhY2Vob2xkZXI6IGFueSwgYnV0dG9uVGV4dDogYW55LCBvbkJ1dHRvbkNsaWNrOiBhbnl9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCYWxhbmNlIHRva2VuVHlwZT17YnV0dG9uVGV4dH0vPlxuICAgICAgPGJ1dHRvbiBzdHlsZT17YnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufT57YnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXtidXR0b25TdHlsZX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e2lucHV0UGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfT5TdGFrZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJhbGFuY2UiLCJidXR0b25TdHlsZSIsIkRyb3Bkb3duIiwiaW5wdXRQbGFjZWhvbGRlciIsImJ1dHRvblRleHQiLCJvbkJ1dHRvbkNsaWNrIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJkaXYiLCJ0b2tlblR5cGUiLCJidXR0b24iLCJzdHlsZSIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ui/dropdown.tsx\n"));

/***/ }),

/***/ "./src/data/contactAddr.json":
/*!***********************************!*\
  !*** ./src/data/contactAddr.json ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('{"eth":{"address":"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7","name":"Ethereum","symbol":"ETH"},"usdc":{"address":"0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8","name":"USD Coin","symbol":"USDC"},"usdt":{"address":"0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8","name":"Tether","symbol":"USDT"},"strk":{"address":"0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d","name":"Starknet","symbol":"STRK"},"dai":{"address":"0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3","name":"Dai","symbol":"DAI"}}');

/***/ })

});