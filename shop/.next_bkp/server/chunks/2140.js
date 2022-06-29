"use strict";
exports.id = 2140;
exports.ids = [2140];
exports.modules = {

/***/ 2140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(495);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2478);
/* harmony import */ var _components_ui_search_search_with_suggestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2851);





const BannerWithoutSlider = ({ banners , layout  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('hidden lg:block relative', {
            '!block': layout === 'minimal'
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative w-full h-screen', {
                'max-h-140': layout === 'standard',
                'max-h-[320px] md:max-h-[680px]': layout === 'minimal'
            }),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                    className: "w-full h-full min-h-140",
                    src: banners[0]?.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_3__/* .productPlaceholder */ .Hb,
                    alt: banners[0]?.title ?? '',
                    layout: "fill",
                    objectFit: "cover"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('p-5 md:px-20 absolute inset-0 w-full flex flex-col items-center justify-center text-center lg:space-y-10', {
                        'space-y-5 md:!space-y-8': layout === 'minimal'
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-heading font-bold', {
                                '!text-accent': layout === 'minimal'
                            }),
                            children: banners[0]?.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm md:text-base xl:text-lg text-body",
                            children: banners[0]?.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "max-w-3xl w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_search_search_with_suggestion__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                label: "search",
                                className: "hidden lg:block",
                                variant: "with-shadow"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWithoutSlider);


/***/ })

};
;