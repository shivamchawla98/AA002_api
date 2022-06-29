"use strict";
exports.id = 6646;
exports.ids = [6646];
exports.modules = {

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

/***/ 5506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassicLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_banners_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1437);
/* harmony import */ var _components_promotions_promotions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8156);
/* harmony import */ var _components_promotions_promotions1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7671);
/* harmony import */ var _components_promotions_promotions2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5679);
/* harmony import */ var _components_categories_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9900);
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7463);
/* harmony import */ var _components_products_popular_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4679);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promotions_promotions2__WEBPACK_IMPORTED_MODULE_4__, _components_promotions_promotions1__WEBPACK_IMPORTED_MODULE_3__, _filter_bar__WEBPACK_IMPORTED_MODULE_6__, _components_promotions_promotions__WEBPACK_IMPORTED_MODULE_2__]);
([_components_promotions_promotions2__WEBPACK_IMPORTED_MODULE_4__, _components_promotions_promotions1__WEBPACK_IMPORTED_MODULE_3__, _filter_bar__WEBPACK_IMPORTED_MODULE_6__, _components_promotions_promotions__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function ClassicLayout({ variables  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: "mt-6 block w-full xl:overflow-hidden",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_banners_banner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    layout: "compact",
                    variables: variables.types
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promotions_promotions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    variables: variables.types
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_filter_bar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    variables: variables.categories
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_categories_categories__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    layout: "compact",
                    variables: variables.categories
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promotions_promotions1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    variables: variables.types
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_categories_categories__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    layout: "compact1",
                    variables: variables.categories
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promotions_promotions2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    variables: variables.types
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_categories_categories__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    layout: "compact2",
                    variables: variables.categories
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_popular_products__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    variables: variables.popularProducts
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 1333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromotionSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7195);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7927);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(495);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const offerSliderBreakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 0
    },
    580: {
        slidesPerView: 2,
        spaceBetween: 16
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 16
    },
    1920: {
        slidesPerView: 4,
        spaceBetween: 24
    }
};
function PromotionSlider({ sliders  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "px-6 py-5 border-t md:p-8 border-border-200 bg-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                    id: "offer",
                    //TODO: need discussion
                    loop: true,
                    breakpoints: offerSliderBreakpoints,
                    modules: [
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .W_
                    ],
                    navigation: {
                        nextEl: '.next',
                        prevEl: '.prev'
                    },
                    children: sliders?.map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                                className: "w-full h-auto",
                                src: d.original,
                                alt: d.id,
                                layout: "responsive",
                                width: "580",
                                height: "270"
                            })
                        }, d.id)
                    )
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer prev top-2/4 ltr:-left-4 rtl:-right-4 ltr:md:-left-5 rtl:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent",
                    role: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-previous')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .ArrowPrev */ .zF, {
                            width: 18,
                            height: 18
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer next top-2/4 ltr:-right-4 rtl:-left-4 ltr:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent",
                    role: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-next')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .ArrowNext */ .Tg, {
                            width: 18,
                            height: 18
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromotionSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7195);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7927);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(495);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const offerSliderBreakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 0
    },
    580: {
        slidesPerView: 2,
        spaceBetween: 16
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 16
    },
    1920: {
        slidesPerView: 4,
        spaceBetween: 24
    }
};
function PromotionSlider({ sliders  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "px-6 py-5 border-t md:p-8 border-border-200 bg-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                    id: "offer",
                    //TODO: need discussion
                    // loop={true}
                    breakpoints: offerSliderBreakpoints,
                    modules: [
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .W_
                    ],
                    navigation: {
                        nextEl: '.next',
                        prevEl: '.prev'
                    },
                    children: sliders?.map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                                className: "w-full h-auto",
                                src: "http://38.242.199.115:3000/img/image.png",
                                alt: d.id,
                                layout: "responsive",
                                width: "580",
                                height: "270"
                            })
                        }, d.id)
                    )
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer prev top-2/4 ltr:-left-4 rtl:-right-4 ltr:md:-left-5 rtl:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent",
                    role: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-previous')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .ArrowPrev */ .zF, {
                            width: 18,
                            height: 18
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer next top-2/4 ltr:-right-4 rtl:-left-4 ltr:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent",
                    role: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-next')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .ArrowNext */ .Tg, {
                            width: 18,
                            height: 18
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 8080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromotionSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7195);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7927);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(495);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const offerSliderBreakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 0
    },
    580: {
        slidesPerView: 2,
        spaceBetween: 16
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 16
    },
    1920: {
        slidesPerView: 4,
        spaceBetween: 24
    }
};
function PromotionSlider({ sliders  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "px-6 py-5 border-t md:p-8 border-border-200 bg-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                    id: "offer",
                    //TODO: need discussion
                    // loop={true}
                    breakpoints: offerSliderBreakpoints,
                    modules: [
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .W_
                    ],
                    navigation: {
                        nextEl: '.next',
                        prevEl: '.prev'
                    },
                    children: sliders?.map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                                className: "w-full h-auto",
                                src: "http://38.242.199.115:3000/img/slider1.jpg",
                                alt: d.id,
                                layout: "responsive",
                                width: "580",
                                height: "270"
                            })
                        }, d.id)
                    )
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer prev top-2/4 ltr:-left-4 rtl:-right-4 ltr:md:-left-5 rtl:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent",
                    role: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-previous')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .ArrowPrev */ .zF, {
                            width: 18,
                            height: 18
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer next top-2/4 ltr:-right-4 rtl:-left-4 ltr:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent",
                    role: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-next')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .ArrowNext */ .Tg, {
                            width: 18,
                            height: 18
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 8156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromotionSliders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1333);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);
/* harmony import */ var _framework_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_1__]);
_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function PromotionSliders({ variables  }) {
    const { type , error  } = (0,_framework_type__WEBPACK_IMPORTED_MODULE_3__/* .useType */ .o)(variables.type);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_2__["default"], {
        message: error.message
    }));
    if (!type?.promotional_sliders) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        sliders: type?.promotional_sliders
    }));
};

});

/***/ }),

/***/ 7671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromotionSliders1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_promotions_promotion_slider1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(818);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);
/* harmony import */ var _framework_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promotions_promotion_slider1__WEBPACK_IMPORTED_MODULE_1__]);
_components_promotions_promotion_slider1__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function PromotionSliders1({ variables  }) {
    const { type , error  } = (0,_framework_type__WEBPACK_IMPORTED_MODULE_3__/* .useType */ .o)(variables.type);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_2__["default"], {
        message: error.message
    }));
    if (!type?.promotional_sliders) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promotions_promotion_slider1__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        sliders: type?.promotional_sliders
    }));
};

});

/***/ }),

/***/ 5679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromotionSliders2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_promotions_promotion_slider2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8080);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);
/* harmony import */ var _framework_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promotions_promotion_slider2__WEBPACK_IMPORTED_MODULE_1__]);
_components_promotions_promotion_slider2__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function PromotionSliders2({ variables  }) {
    const { type , error  } = (0,_framework_type__WEBPACK_IMPORTED_MODULE_3__/* .useType */ .o)(variables.type);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_2__["default"], {
        message: error.message
    }));
    if (!type?.promotional_sliders) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promotions_promotion_slider2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        sliders: type?.promotional_sliders
    }));
};

});

/***/ }),

/***/ 1379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const getIcon = ({ iconList , iconName , ...rest })=>{
    const TagName = iconList[iconName];
    return !!TagName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TagName, {
        ...rest
    }) : null;
};


/***/ })

};
;