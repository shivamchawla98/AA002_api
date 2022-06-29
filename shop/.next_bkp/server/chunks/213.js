"use strict";
exports.id = 213;
exports.ids = [213];
exports.modules = {

/***/ 213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7927);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(495);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2478);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6078);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7195);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const BannerShort = ({ banners  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_4__/* .useIsRTL */ .S)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "overflow-hidden -z-1",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Swiper */ .tq, {
                        id: "banner",
                        loop: true,
                        modules: [
                            _components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .W_
                        ],
                        resizeObserver: true,
                        allowTouchMove: false,
                        slidesPerView: 1,
                        navigation: {
                            nextEl: '.next',
                            prevEl: '.prev'
                        },
                        children: banners?.map((banner, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .SwiperSlide */ .o5, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative w-full h-full max-h-[240px] md:max-h-[450px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                                        className: "w-full h-full",
                                        src: banner.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_3__/* .productPlaceholder */ .Hb,
                                        alt: banner.title ?? '',
                                        layout: "responsive",
                                        width: 1503,
                                        height: 450
                                    })
                                })
                            }, idx)
                        )
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "prev cursor-pointer absolute top-2/4 ltr:left-4 rtl:right-4 ltr:md:left-5 rtl:md:right-5 z-10 -mt-4 md:-mt-5 w-8 h-8 rounded-full bg-light shadow-200 border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200",
                        role: "button",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: t('text-previous')
                            }),
                            isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__/* .ArrowNext */ .Tg, {
                                width: 18,
                                height: 18
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__/* .ArrowPrev */ .zF, {
                                width: 18,
                                height: 18
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "next cursor-pointer absolute top-2/4 ltr:right-4 rtl:left-4 ltr:md:right-5 rtl:md:left-5 z-10 -mt-4 md:-mt-5 w-8 h-8 rounded-full bg-light shadow-200 border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200",
                        role: "button",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: t('text-next')
                            }),
                            isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__/* .ArrowPrev */ .zF, {
                                width: 18,
                                height: 18
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__/* .ArrowNext */ .Tg, {
                                width: 18,
                                height: 18
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerShort);

});

/***/ }),

/***/ 7195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Tg": () => (/* reexport */ arrow_next/* ArrowNextIcon */.z),
  "zF": () => (/* reexport */ arrow_prev/* ArrowPrevIcon */.W)
});

// UNUSED EXPORTS: Check

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/icons/check-icon.tsx

const CheckIcon = ({ width =24 , height =24 , ...props })=>{
    return(/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M20 6L9 17L4 12",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }));
};
/* harmony default export */ const check_icon = ((/* unused pure expression or super */ null && (CheckIcon)));

// EXTERNAL MODULE: ./src/components/icons/arrow-next.tsx
var arrow_next = __webpack_require__(9195);
// EXTERNAL MODULE: ./src/components/icons/arrow-prev.tsx
var arrow_prev = __webpack_require__(9198);
;// CONCATENATED MODULE: ./src/components/icons/index.ts





/***/ }),

/***/ 7927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation),
/* harmony export */   "o3": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs),
/* harmony export */   "tl": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination),
/* harmony export */   "pt": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay),
/* harmony export */   "tq": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper),
/* harmony export */   "o5": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_0__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







});

/***/ })

};
;