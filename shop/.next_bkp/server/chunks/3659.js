exports.id = 3659;
exports.ids = [3659];
exports.modules = {

/***/ 5868:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "spinner_loading__wfn2M",
	"spin": "spinner_spin__TF5E6",
	"simple_loading": "spinner_simple_loading__itI6e",
	"pulse": "spinner_pulse__JBFcs"
};


/***/ }),

/***/ 3659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5868);
/* harmony import */ var _spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_spinner_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



const Spinner = (props)=>{
    const { className , showText =true , text ='Loading' , simple  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: simple ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, (_spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().simple_loading))
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('w-full flex flex-col items-center justify-center h-screen', className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().loading)
                }),
                showText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-lg font-semibold text-body italic",
                    children: text
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);


/***/ })

};
;