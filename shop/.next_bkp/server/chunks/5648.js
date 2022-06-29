"use strict";
exports.id = 5648;
exports.ids = [5648];
exports.modules = {

/***/ 6859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ MinusIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MinusIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M20 12H4"
        })
    })
;


/***/ }),

/***/ 393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PlusIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
        })
    })
;


/***/ }),

/***/ 5648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(393);
/* harmony import */ var _components_icons_minus_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6859);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);





const variantClasses = {
    helium: 'w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-accent flex-col-reverse sm:flex-row absolute sm:static bottom-3 ltr:right-3 rtl:left-3 sm:bottom-0 ltr:sm:right-0 ltr:sm:left-0 text-light rounded',
    neon: 'w-full h-7 md:h-9 bg-accent text-light rounded',
    argon: 'w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-accent flex-col-reverse sm:flex-row text-light rounded',
    oganesson: 'w-20 h-8 md:w-24 md:h-10 bg-accent text-light rounded-full shadow-500',
    single: 'order-5 sm:order-4 w-9 sm:w-24 h-24 sm:h-10 bg-accent text-light rounded-full flex-col-reverse sm:flex-row absolute sm:relative bottom-0 sm:bottom-auto ltr:right-0 rtl:left-0 ltr:sm:right-auto ltr:sm:left-auto',
    details: 'order-5 sm:order-4 w-full sm:w-24 h-10 bg-accent text-light rounded-full',
    pillVertical: 'flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full',
    big: 'w-full h-14 rounded text-light bg-accent inline-flex justify-between',
    bordered: 'h-14 rounded text-heading bg-transparent inline-flex justify-between shrink-0'
};
const Counter = ({ value , variant ='helium' , onDecrement , onIncrement , className , disabled ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex overflow-hidden', variantClasses[variant], className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: onDecrement,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-none', {
                    'px-3 py-3 sm:px-2': variant === 'single',
                    'px-5': variant === 'big',
                    'border border-gray-300 px-5 hover:border-accent hover:!bg-transparent ltr:rounded-l rtl:rounded-r': variant === 'bordered',
                    'hover:!bg-gray-100': variant === 'pillVertical'
                }),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-minus')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_minus_icon__WEBPACK_IMPORTED_MODULE_3__/* .MinusIcon */ .V, {
                        className: "h-3 w-3 stroke-2.5"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex flex-1 items-center justify-center px-3 text-sm font-semibold', variant === 'pillVertical' && '!px-0 text-heading', variant === 'bordered' && 'border-t border-b border-gray-300 !px-8 text-heading'),
                children: value
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: onIncrement,
                disabled: disabled,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-none', {
                    'px-3 py-3 sm:px-2': variant === 'single',
                    'px-5': variant === 'big',
                    'border border-gray-300 px-5 hover:border-accent hover:!bg-transparent hover:!text-accent ltr:rounded-r rtl:rounded-l': variant === 'bordered',
                    'hover:!bg-gray-100': variant === 'pillVertical'
                }),
                title: disabled ? t('text-out-stock') : '',
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-plus')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_2__/* .PlusIcon */ .p, {
                        className: "md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);


/***/ })

};
;