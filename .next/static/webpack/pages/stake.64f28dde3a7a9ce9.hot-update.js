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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @starknet-react/core */ \"./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var _data_contactAddr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/contactAddr.json */ \"./src/data/contactAddr.json\");\n\nvar _s = $RefreshSig$();\n\n\nconst Balance = (param)=>{\n    let { tokenType } = param;\n    _s();\n    const { address } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    const token = _data_contactAddr_json__WEBPACK_IMPORTED_MODULE_2__[tokenType][\"address\"];\n    console.log(token);\n    const { data, isLoading, error, refetch } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useBalance)({\n        // token, \n        address\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n        lineNumber: 16,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\n            \"Error: \",\n            JSON.stringify(error)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n        lineNumber: 17,\n        columnNumber: 21\n    }, undefined);\n    const handleClick = async (event)=>{\n        event.preventDefault();\n        await refetch();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Balance:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data === null || data === void 0 ? void 0 : data.formatted\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    children: \"Refresh Balance\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jimmy\\\\Downloads\\\\starknet\\\\cross\\\\src\\\\components\\\\balance.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Balance, \"QvDg4fzZCAy5jLga/KyXWPfVreY=\", false, function() {\n    return [\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useBalance\n    ];\n});\n_c = Balance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balance);\nvar _c;\n$RefreshReg$(_c, \"Balance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9iYWxhbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0U7QUFFNUI7QUFJbkQsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLFNBQVMsRUFBc0I7O0lBQy9DLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdMLGdFQUFVQTtJQUM5QixNQUFNTSxRQUFRSixtREFBVyxDQUFDRSxVQUFzQyxDQUFDLFVBQVU7SUFDM0VHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLEVBQUVHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFHWCxnRUFBVUEsQ0FBQztRQUNyRCxVQUFVO1FBQ1ZJO0lBQ0Y7SUFFQSxJQUFJSyxXQUFXLHFCQUFPLDhEQUFDRztrQkFBSzs7Ozs7O0lBQzVCLElBQUlGLE9BQU8scUJBQU8sOERBQUNFOztZQUFLO1lBQVFDLEtBQUtDLFNBQVMsQ0FBQ0o7Ozs7Ozs7SUFFL0MsTUFBTUssY0FBb0QsT0FBT0M7UUFDL0RBLE1BQU1DLGNBQWM7UUFDcEIsTUFBTU47SUFDUjtJQUVBLHFCQUNFLDhEQUFDTzs7MEJBQ0MsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNBOzBCQUFHWCxpQkFBQUEsMkJBQUFBLEtBQU1ZLFNBQVM7Ozs7OzswQkFDbkIsOERBQUNEOzBCQUFFLDRFQUFDRTtvQkFBT0MsU0FBU1A7OEJBQWE7Ozs7Ozs7Ozs7OzBCQUNqQyw4REFBQ1E7Ozs7Ozs7Ozs7O0FBR1A7R0F6Qk1yQjs7UUFDZ0JILDREQUFVQTtRQUdjQyw0REFBVUE7OztLQUpsREU7QUEyQk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmFsYW5jZS50c3g/NDhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VCYWxhbmNlLCB1c2VDb250cmFjdFJlYWQgfSBmcm9tIFwiQHN0YXJrbmV0LXJlYWN0L2NvcmVcIjtcclxuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvbnRhY3RBZHJyIGZyb20gJy4uL2RhdGEvY29udGFjdEFkZHIuanNvbic7XHJcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwic3RhcmtuZXRcIjtcclxuXHJcblxyXG5jb25zdCBCYWxhbmNlID0gKHt0b2tlblR5cGV9OiB7dG9rZW5UeXBlOiBzdHJpbmd9KSA9PiB7XHJcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb250YWN0QWRyclt0b2tlblR5cGUgYXMga2V5b2YgdHlwZW9mIGNvbnRhY3RBZHJyXVtcImFkZHJlc3NcIl07XHJcbiAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBlcnJvciwgcmVmZXRjaCB9ID0gdXNlQmFsYW5jZSh7XHJcbiAgICAvLyB0b2tlbiwgXHJcbiAgICBhZGRyZXNzXHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8c3Bhbj5FcnJvcjoge0pTT04uc3RyaW5naWZ5KGVycm9yKX08L3NwYW4+O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljazogTW91c2VFdmVudEhhbmRsZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXdhaXQgcmVmZXRjaCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5CYWxhbmNlOjwvcD5cclxuICAgICAgPHA+e2RhdGE/LmZvcm1hdHRlZH08L3A+XHJcbiAgICAgIDxwPjxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlJlZnJlc2ggQmFsYW5jZTwvYnV0dG9uPjwvcD5cclxuICAgICAgPGhyLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VBY2NvdW50IiwidXNlQmFsYW5jZSIsImNvbnRhY3RBZHJyIiwiQmFsYW5jZSIsInRva2VuVHlwZSIsImFkZHJlc3MiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJyZWZldGNoIiwic3BhbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJwIiwiZm9ybWF0dGVkIiwiYnV0dG9uIiwib25DbGljayIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/balance.tsx\n"));

/***/ })

});