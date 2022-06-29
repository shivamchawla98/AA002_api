"use strict";
exports.id = 6551;
exports.ids = [6551];
exports.modules = {

/***/ 4066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SearchIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 17.048 18",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z",
            transform: "translate(-367.297 -371.285)",
            fill: "currentColor"
        })
    })
;


/***/ }),

/***/ 8522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons_search_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4066);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9581);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);





const classes = {
    normal: 'bg-light ltr:pl-6 rtl:pr-6 ltr:pr-14 rtl:pl-14 ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none  border ltr:border-r-0 rtl:border-l-0 border-transparent focus:border-accent',
    minimal: 'search-minimal bg-gray-100 ltr:pl-10 rtl:pr-10 ltr:pr-4 rtl:pl-4 ltr:md:pl-14 rtl:md:pr-14 border border-transparent focus:border-accent focus:bg-light',
    'with-shadow': 'search-with-shadow bg-light ltr:pl-10 rtl:pr-10 ltr:pr-12 rtl:pl-12 ltr:md:pl-14 rtl:md:pr-14 focus:bg-light border-0'
};
const SearchBox = ({ className , label , onSubmit , onClearSearch , variant ='normal' , value , ...rest })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    console.log("search-box");
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: onSubmit,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('w-full', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative flex rounded md:rounded-lg', {
                'h-14 shadow-900': variant === 'normal',
                'h-11 md:h-12': variant === 'minimal',
                'h-16 shadow-downfall': variant === 'with-shadow'
            }),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: label,
                    className: "sr-only",
                    children: label
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: label,
                    type: "text",
                    value: value,
                    autoComplete: "off",
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('search item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-none focus:ring-0', classes[variant]),
                    ...rest
                }),
                value && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    type: "button",
                    onClick: onClearSearch,
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('absolute flex h-full w-10 cursor-pointer items-center justify-center text-body transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-none md:w-14', {
                        'ltr:right-36 rtl:left-36': variant === 'normal',
                        'ltr:right-0 rtl:left-0': variant !== 'normal'
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-close')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_3__/* .CloseIcon */ .T, {
                            className: "h-3.5 w-3.5 md:h-3 md:w-3"
                        })
                    ]
                }),
                variant === 'normal' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: "flex h-full min-w-[143px] items-center justify-center rounded-lg bg-accent px-8 font-semibold text-light transition-colors duration-200 hover:bg-accent-hover focus:bg-accent-hover focus:outline-none ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_2__/* .SearchIcon */ .W, {
                            className: "h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
                        }),
                        t('common:text-search')
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: "absolute flex items-center justify-center w-10 h-full transition-colors duration-200 text-body hover:text-accent-hover focus:text-accent-hover focus:outline-none ltr:left-0 rtl:right-0 md:w-14",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-search')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_2__/* .SearchIcon */ .W, {
                            className: "w-4 h-4"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);


/***/ }),

/***/ 6078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useIsRTL)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const localeRTLList = [
    'ar',
    'he'
];
function useIsRTL() {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    if (locale && localeRTLList.includes(locale)) {
        return {
            isRTL: true,
            alignLeft: 'right',
            alignRight: 'left'
        };
    }
    return {
        isRTL: false,
        alignLeft: 'left',
        alignRight: 'right'
    };
}


/***/ })

};
;