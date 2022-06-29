"use strict";
exports.id = 9258;
exports.ids = [9258];
exports.modules = {

/***/ 9258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const classes = {
    root: 'inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700',
    normal: 'bg-accent text-light border border-transparent hover:bg-accent-hover',
    custom: 'border border-transparent',
    outline: 'border border-border-400 bg-transparent text-body hover:text-light hover:bg-accent hover:border-accent',
    loading: 'h-4 w-4 ltr:ml-2 rtl:mr-2 rounded-full border-2 border-transparent border-t-2 animate-spin',
    disabled: 'border border-border-base bg-gray-300 hover:bg-gray-300 border-border-400 text-body cursor-not-allowed',
    disabledOutline: 'border border-border-base text-muted cursor-not-allowed',
    small: 'px-3 py-0 h-9 text-sm h-10',
    medium: 'px-5 py-0 h-12',
    big: 'px-10 py-0 h-14'
};
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref)=>{
    const { className , variant ='normal' , size ='medium' , children , active , loading =false , disabled =false , ...rest } = props;
    const classesName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, {
        [classes.normal]: !disabled && variant === 'normal',
        [classes.disabled]: disabled && variant === 'normal',
        [classes.outline]: !disabled && variant === 'outline',
        [classes.disabledOutline]: disabled && variant === 'outline',
        [classes.small]: size === 'small',
        [classes.medium]: size === 'medium',
        [classes.big]: size === 'big'
    }, className);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        "aria-pressed": active,
        "data-variant": variant,
        ref: ref,
        className: classesName,
        disabled: disabled,
        ...rest,
        children: [
            children,
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: classes.loading,
                style: {
                    borderTopColor: variant === 'outline' ? 'currentColor' : '#ffffff'
                }
            })
        ]
    }));
});
Button.displayName = 'Button';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;