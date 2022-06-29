"use strict";
exports.id = 5902;
exports.ids = [5902];
exports.modules = {

/***/ 5902:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6078);
/* harmony import */ var _components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9198);
/* harmony import */ var _components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9195);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7927);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2478);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(495);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const CategoryItem = ({ item  })=>{
    // console.log("222222222222222");
    // // console.log(item.name);
    // console.log(item);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        href: `${item?.slug}/search/?category=${item.slug}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative overflow-hidden text-center cursor-pointer group",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_8__/* .Image */ .E, {
                    src: item?.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_7__/* .productPlaceholder */ .Hb,
                    alt: item?.name,
                    width: 200,
                    height: 240,
                    layout: "responsive",
                    className: "rounded-md"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "block mt-2 text-base font-semibold transition-colors text-heading group-hover:text-orange-500 ltr:text-left rtl:text-right",
                    children: item.name
                })
            ]
        })
    }));
};
function SolidCardCategory({ items  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_3__/* .useIsRTL */ .S)();
    const { 0: prevEl , 1: setPrevEl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: nextEl , 1: setNextEl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const breakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        540: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        820: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 7,
            spaceBetween: 24
        },
        1800: {
            slidesPerView: 8,
            spaceBetween: 30
        },
        2600: {
            slidesPerView: 9,
            spaceBetween: 40
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Swiper */ .tq, {
                id: "category-card-menu",
                modules: [
                    _components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W_
                ],
                navigation: {
                    prevEl,
                    nextEl,
                    disabledClass: 'swiper-button-disabled',
                    hiddenClass: 'swiper-button-hidden'
                },
                breakpoints: breakpoints,
                slidesPerView: 7,
                children: items?.map((category, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryItem, {
                            item: category
                        })
                    }, idx)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: (node)=>setPrevEl(node)
                ,
                className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-prev text-heading bg-light shadow-300 top-1/2 ltr:-left-4 rtl:-right-4 focus:outline-none transition-colors hover:text-orange-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-previous')
                    }),
                    isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_5__/* .ArrowNextIcon */ .z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_4__/* .ArrowPrevIcon */ .W, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: (node)=>setNextEl(node)
                ,
                className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-next text-heading bg-light shadow-300 top-1/2 ltr:-right-4 rtl:-left-4 focus:outline-none transition-colors hover:text-orange-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-next')
                    }),
                    isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_4__/* .ArrowPrevIcon */ .W, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_5__/* .ArrowNextIcon */ .z, {})
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SolidCardCategory);

});

/***/ })

};
;