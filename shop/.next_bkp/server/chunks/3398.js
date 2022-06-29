"use strict";
exports.id = 3398;
exports.ids = [3398];
exports.modules = {

/***/ 3398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const variantClasses = {
    normal: 'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
    solid: 'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
    outline: 'border border-border-base focus:border-accent'
};
const TextArea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    const { className , label , name , error , variant ='normal' , shadow =false , inputClassName , ...rest } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name,
                className: "block text-body-dark font-semibold text-sm leading-none mb-3",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: name,
                name: name,
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0', shadow && 'focus:shadow', variantClasses[variant], inputClassName),
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false",
                rows: 4,
                ref: ref,
                ...rest
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "my-2 text-xs text-red-500",
                children: error
            })
        ]
    }));
});
TextArea.displayName = 'TextArea';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ })

};
;