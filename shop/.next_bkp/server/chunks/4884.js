"use strict";
exports.id = 4884;
exports.ids = [4884];
exports.modules = {

/***/ 4884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7046);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(495);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2478);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3445);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1185);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3659);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_8__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const AutoSuggestion = ({ className , suggestions , visible , notFound , showLoaders , seeMore , seeMoreLink ,  })=>{
    console.log("inside auto suggestion");
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleClick = (path)=>{
        router.push(path);
    };
    console.log("inside more inside auto suggestion");
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition, {
        show: visible,
        enter: "transition-opacity duration-75",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "transition-opacity duration-150",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('w-full absolute top-11 lg:top-16 mt-2 lg:mt-1 left-0', className),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full py-2 shadow-downfall-lg bg-white rounded-lg",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "w-full h-full",
                        children: [
                            notFound && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "w-full h-full py-10 flex items-center justify-center font-semibold text-gray-400",
                                children: t('text-no-products')
                            }),
                            showLoaders && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-full py-14 flex items-center justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    simple: true,
                                    className: "w-9 h-9"
                                })
                            }),
                            !notFound && !showLoaders && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "max-h-52",
                                children: suggestions?.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        onClick: ()=>handleClick(`${_lib_routes__WEBPACK_IMPORTED_MODULE_7__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${item?.slug}`)
                                        ,
                                        className: "flex items-center w-full px-5 py-2 border-b border-border-100 last:border-b-0 cursor-pointer transition-colors hover:bg-gray-100",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-8 h-8 relative rounded overflow-hidden",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_5__/* .Image */ .E, {
                                                    className: "w-full h-full",
                                                    src: item?.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
                                                    alt: item?.name ?? '',
                                                    layout: "responsive",
                                                    width: 100,
                                                    height: 100
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm font-semibold text-heading ltr:ml-3 rtl:mr-3",
                                                children: item?.name
                                            })
                                        ]
                                    }, item?.slug)
                                )
                            })
                        ]
                    }),
                    seeMore && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center w-full py-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: seeMoreLink,
                            className: "text-sm font-semibold text-accent transition-colors hover:text-accent-hover",
                            children: t('text-see-more')
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoSuggestion);

});

/***/ }),

/***/ 7046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(153);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__);




const Scrollbar = ({ options , className , style , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__.OverlayScrollbarsComponent, {
        options: {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('os-theme-thin-dark', className),
            scrollbars: {
                autoHide: 'scroll'
            },
            ...options ? options : {}
        },
        style: style,
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);


/***/ })

};
;